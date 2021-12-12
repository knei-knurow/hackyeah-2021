## Artificial dataset reading
import os
import numpy as np
from analyzer import Analyzer
from deepface import DeepFace
import deepface.commons.realtime as rt
import cv2 as cv


# Artificial dataset init for accelerometer
calm = []
for file in os.listdir("dataset/calm"):
    if file.endswith(".npy"):
        recording = np.load("dataset/calm/" + file, allow_pickle=True)
        calm.append(recording)

rage = []
for file in os.listdir("dataset/rage"):
    if file.endswith(".npy"):
        recording = np.load("dataset/rage/" + file, allow_pickle=True)
        rage.append(recording)


dataset = np.concatenate((calm, rage))
analyzer = Analyzer("clf.obj", faces=True)


while True:
    face_score = analyzer.analyze_face_average(times=3)
    acc_percentage_summary, details = analyzer.analyze(dataset[12])

    if face_score is not None:
        print("Gamepad score: ", acc_percentage_summary, " Face score: ", face_score)
    else:
        print("Gamepad score: ", acc_percentage_summary)

