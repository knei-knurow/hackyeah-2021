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

        if self.faces:  
            from deepface import DeepFace
            from deepface.detectors import FaceDetector
            from deepface.commons import functions
            import cv2 as cv

            self.functions = functions 
            self.FaceDetector = FaceDetector

            self.model_name = "DeepFace"
            self.detector_backend = "opencv"
            self.video = cv.VideoCapture(0)
            self.face_detector = FaceDetector.build_model(self.detector_backend)
            model = DeepFace.build_model(self.model_name)
            self.input_shape = functions.find_input_shape(model)
            self.input_shape_x = self.input_shape[0]
            self.input_shape_y = self.input_shape[1]
            self.emotion_model = DeepFace.build_model("Emotion")

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

    def analyze_face(self):
        if self.faces:
            _, img = self.video.read()

            if img is None:
                return None, None
            try:
                faces = self.FaceDetector.detect_faces(
                    self.face_detector, self.detector_backend, img, align=False
                )
            except:
                return None, None

            for face, (x, y, w, h) in faces:
                if w < 130:
                    continue
                custom_face = img[y : y + h, x : x + w]
                gray_img = self.functions.preprocess_face(
                    img=custom_face,
                    target_size=(48, 48),
                    grayscale=True,
                    enforce_detection=False,
                    detector_backend=self.detector_backend,
                )

                emotion_labels = [
                    "Angry",
                    "Disgust",
                    "Fear",
                    "Happy",
                    "Sad",
                    "Surprise",
                    "Neutral",
                ]
                emotion_predictions = self.emotion_model.predict(gray_img)[0, :]
                if emotion_predictions is None:
                    return None, None

                sum_of_predictions = emotion_predictions.sum()

                mood_items = []
                for i in range(0, len(emotion_labels)):
                    mood_item = []
                    emotion_label = emotion_labels[i]
                    emotion_prediction = emotion_predictions[i] / sum_of_predictions
                    mood_item.append(emotion_label)
                    mood_item.append(emotion_prediction)
                    mood_items.append(mood_item)

                emotion_df = pd.DataFrame(mood_items, columns=["emotion", "score"])

                #  angry, disgust, fear, sad
                bad_emotion_score = mood_items[0][1] + mood_items[2][1]

                return bad_emotion_score, emotion_df
                # Do only first.
            return None, None
        else:
            return None, None

    def analyze_face_average(self, times=5):
        total_score = 0
        for i in range(times):
            score, _ = self.analyze_face()
            if score is None:
                return None
            total_score += score

        return total_score / times
