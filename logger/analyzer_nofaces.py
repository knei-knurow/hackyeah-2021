import numpy as np
import pickle
import pandas as pd

### USAGE :
### analyzer = Analyzer(path_to_obj)
### percentage_summary, detailed_output = analyzer.assess()


class Analyzer:
    def __init__(self, state_path, faces=False):
        ##define constants
        self.init_offset = 1  # avoid extreme start values
        self.input_range = 25000  # Input value range
        self.every_nth_sample = 1  # int[1-10]
        self.state_path = state_path
        self.clf = self.load_state()
        self.faces = faces


    """ Divide input values to [0;1]"""

    def prepare_waveform(self, X):
        return X[self.init_offset :: self.every_nth_sample] / self.input_range

    """ Corrected RMS calculation """

    def corrected_rms_3dim(self, X):
        rms = np.sqrt((X[:, 0] ** 2 + X[:, 1] ** 2 + X[:, 2] ** 2) / 3)
        rms = rms - np.min(rms)  # to remove the G-acceleration
        return rms

    """ Read SGD """

    def load_state(self):
        filehandler = open(self.state_path, "rb")
        return pickle.load(filehandler)

    def save_classifier(self):
        filehandler = open(self.state_path, "wb")
        pickle.dump(self.clf, filehandler)

    """ Single-Class SVC SGD assessment """

    def analyze(self, X):
        X = np.array(self.prepare_waveform(X))
        y = self.clf.predict(X)
        percentage = np.sum(y) / len(y)
        return percentage, y

    """ Facial emotions analysis using DeepFace neural network """
