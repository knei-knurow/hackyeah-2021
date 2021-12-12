from PyQt5.QtGui import QIcon
from PyQt5.QtCore import QCoreApplication, QTimer, QDir
from PySide2 import QtWidgets, QtGui
from pyjoycon import JoyCon, get_R_id, get_L_id, joycon
from pyjoycon.device import get_ids_of_type
import requests
from analyzer import Analyzer
import numpy as np
import sys
import tkinter as tk
from tkinter import simpledialog
import json



# Configuration
ALGORITHM_EXECUTION_DELAY = 2 # Seconds
MEASUREMENT_DELAY = 100 # Milliseconds

class App(QtWidgets.QSystemTrayIcon):
    # Joycon
    joycon_id = None
    joycon = None

    # Ui elements
    action_connection_status = None
    action_connect_joycon_l = None
    action_connect_joycon_r = None
    actions_connect_parent_code = None

    # Timer
    timer = QTimer()
    timer.setInterval(MEASUREMENT_DELAY)

    # Variables
    arr_accel = np.array([[0, 0, 0]])   
    isTrackingEnabled = False
    deviceId = None
    userUid = None

    #Tk
    ROOT = tk.Tk()
    ROOT.withdraw()

    analyzer = Analyzer("clf.obj")

    # App init function
    def __init__(self, icon, parent=None):
        # Basic system tray config
        QtWidgets.QSystemTrayIcon.__init__(self, icon, parent)
        self.setToolTip(f'Your child rage tracker')
        menu = QtWidgets.QMenu(parent)

        # Creating GUI
        menu.addSection('Tracking')
        self.action_tracking_status = menu.addAction('Status: paused')
        self.action_connect_parent_device = menu.addAction('Connect to parent device')

        menu.addSection('Input devices')
        self.action_connection_status = menu.addAction('Disconnect')
        self.action_connect_joycon_r = menu.addAction('Connect to JoyCon (R)')
        self.action_connect_joycon_l = menu.addAction('Connect to JoyCon (L)')
        menu.addSeparator()
        action_quit = menu.addAction("Quit")

        self.action_tracking_status.setVisible(False)
        self.action_connection_status.setVisible(False)
        self.action_tracking_status.setEnabled(False)

        # Connecting trigers to functions
        self.action_tracking_status.triggered.connect(self.change_tracking_state)
        self.action_connection_status.triggered.connect(self.disconnect_devices)
        self.action_connect_joycon_r.triggered.connect(self.connect_joycon_r)
        self.action_connect_joycon_l.triggered.connect(self.connect_joycon_l)
        action_quit.triggered.connect(QCoreApplication.instance().quit)
        self.action_connect_parent_device.triggered.connect(self.parent_connection_dialog)

        # Set menu of system tray icon
        self.setContextMenu(menu)



    # Joycons
    def connect_joycon(self, joy):
        if joy == 'right':
            self.joycon_id = get_R_id()
        else:
            self.joycon_id = get_L_id()
        if not self.joycon_id == None:
            self.joycon = JoyCon(*self.joycon_id)
            self.action_connection_status.setVisible(True)
            self.action_connect_joycon_l.setVisible(False)
            self.action_connect_joycon_r.setVisible(False)
            self.action_tracking_status.setEnabled(True)
            self.timer.timeout.connect(self.main)
            self.timer.start()

    def connect_joycon_r(self):
        self.connect_joycon('right')

    def connect_joycon_l(self):
        self.connect_joycon('left')

    def disconnect_devices(self):
        self.joycon_id = None
        self.joycon = None
        self.action_connection_status.setVisible(False)
        self.action_connect_joycon_r.setVisible(True)
        self.action_connect_joycon_l.setVisible(True)
        self.action_tracking_status.setEnabled(False)
        self.action_tracking_status.setText("Status: paused")
        self.timer.stop()
        self.isTrackingEnabled = False



    # Updating GUI
    def change_tracking_state(self):
        self.isTrackingEnabled = not self.isTrackingEnabled
        self.action_tracking_status.setText(f'Status: {"active" if self.isTrackingEnabled else "paused"}')

    def parent_connection_dialog(self):
        USER_INP = simpledialog.askstring(title="Enter user id", prompt="")
        self.userUid = USER_INP.split('-')[0]
        self.deviceId= USER_INP.split('-')[1]
        print(self.userUid)
        print(self.deviceId)
        if not (USER_INP == None or len(USER_INP)==0):
            self.action_connect_parent_device.setVisible(False)
            self.action_tracking_status.setVisible(True)


    # Main loop (executing doodeks algorithm and sending request to server)
    def main(self):
        if self.isTrackingEnabled:
            raw_accel = self.joycon.get_status()['accel']
            self.arr_accel = np.append(self.arr_accel, [[raw_accel['x'], raw_accel['y'], raw_accel['z']]], axis=0)
            if len(self.arr_accel) >= ALGORITHM_EXECUTION_DELAY/(MEASUREMENT_DELAY/1000):
                
                percentage, detailed = self.analyzer.analyze(self.arr_accel[1:])
                if percentage >= 0.1:
                    r = requests.post(
                        'https://us-central1-hackyeah-2021.cloudfunctions.net/webhook', 
                        data={
                            'userUid': self.userUid,
                            'deviceId': self.deviceId
                        }
                    )
                    print(r.text)

                self.arr_accel = np.array([[0,0,0]])


# Create and start app
app = QtWidgets.QApplication(sys.argv)
w = QtWidgets.QWidget()
tray_icon = App(QtGui.QIcon('icon.png'), w)
tray_icon.show()
sys.exit(app.exec_())
