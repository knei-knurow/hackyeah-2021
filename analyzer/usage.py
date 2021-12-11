## Artificial dataset reading
import os
import numpy as np
from analyzer import Analyzer

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

analyzer = Analyzer("clf.obj")
percentage_summary, details = analyzer.analyze(dataset[12])

print(percentage_summary)

