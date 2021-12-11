from PyQt5.QtCore import QCoreApplication, QTimer
from PySide2 import QtWidgets, QtGui
import sys
from pyjoycon import JoyCon, get_R_id, get_L_id, joycon

class GUI(QtWidgets.QSystemTrayIcon):
    # Joycon
    joycon_id = None
    joycon = None

    # Ui elements
    action_connection_status = None
    action_connect_joycon_l = None
    action_connect_joycon_r = None

    # Timer
    timer = QTimer()
    timer.setInterval(100)

    # Variables
    isTrackingEnabled = False

    def __init__(self, icon, parent=None):
        QtWidgets.QSystemTrayIcon.__init__(self, icon, parent)
        self.setToolTip(f'Your child rage tracker')
        menu = QtWidgets.QMenu(parent)


        menu.addSection("Tracking")
        self.action_tracking_status = menu.addAction('Status: paused')
        self.action_connect_parent_device = menu.addAction('Connect to parent device')
        menu.addSection("Input devices")
        self.action_connection_status = menu.addAction("Disconnect")
        self.action_connection_status.setEnabled(False)
        self.action_connect_joycon_r = menu.addAction("Connect to JoyCon (R)")
        self.action_connect_joycon_l = menu.addAction("Connect to JoyCon (L)")
        menu.addSeparator()
        action_quit = menu.addAction("Quit")


        self.action_tracking_status.triggered.connect(self.change_tracking_state)
        self.action_connection_status.triggered.connect(self.disconnect_devices)
        self.action_connect_joycon_r.triggered.connect(self.connect_joycon_r)
        self.action_connect_joycon_l.triggered.connect(self.connect_joycon_l)
        action_quit.triggered.connect(QCoreApplication.instance().quit)
        self.setContextMenu(menu)


    def connect_joycon_r(self):
        self.joycon_id = get_R_id()
        if not self.joycon_id == None:
            self.joycon = JoyCon(*self.joycon_id)
            self.action_connection_status.setEnabled(True)
            self.action_connect_joycon_r.setEnabled(False)
            self.action_connect_joycon_l.setEnabled(False)
            self.timer.timeout.connect(self.main)
            self.timer.start()

    def connect_joycon_l(self):
        self.joycon_id = get_L_id()
        if not self.joycon_id == None:
            self.joycon = JoyCon(*self.joycon_id)
            self.action_connection_status.setEnabled(True)
            self.action_connect_joycon_r.setEnabled(False)
            self.action_connect_joycon_l.setEnabled(False)
            self.timer.timeout.connect(self.main)
            self.timer.start()

    def disconnect_devices(self):
        self.joycon_id = None            
        self.joycon = None
        self.action_connection_status.setEnabled(False)
        self.action_connect_joycon_r.setEnabled(True)
        self.action_connect_joycon_l.setEnabled(True)
        self.timer.stop()


    def change_tracking_state(self):
        self.isTrackingEnabled = not self.isTrackingEnabled
        self.action_tracking_status.setText(f'Status: {"active" if self.isTrackingEnabled else "paused"}')


    def main(self):
        if self.isTrackingEnabled:
            print(self.joycon.get_status()['accel'])