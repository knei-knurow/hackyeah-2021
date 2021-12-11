from PyQt5.QtGui import QIcon
from PySide2 import QtWidgets, QtGui
from pyjoycon import JoyCon, get_R_id
from time import sleep
import numpy as np
from gui import GUI
import sys

# Configuration
RAGE_DETECTION_DELAY = 30 # Seconds
ACCEL_SAMPLE_DELAY = 0.01 # Seconds



# Connect to JoyCon
joycon_id = None
joycon = None

# Create arrays for data
arr_accel = np.array([[0,0,0]])



# Connect to joycon
def joycon_connect(self):
    joycon_id = get_R_id()
    if joycon_id[0] == None:
        joycon = JoyCon(*joycon_id)
        print(joycon.get_status())
        self.tray_btn_1.setEnabled(False)
    else:
        print("Cant connect to JoyCon (R)")



# Create system tray icon
app = QtWidgets.QApplication(sys.argv)
w = QtWidgets.QWidget()
tray_icon = GUI(QtGui.QIcon('icon.png'), w)
tray_icon.show()
sys.exit(app.exec_())