import librosa
import numpy as np

def extract_features(file_path, n_mfcc=40):
    """
    Load an audio file and extract the mean MFCC vector.
    Returns shape (1, n_mfcc).
    """
    y, sr = librosa.load(file_path, sr=None)
    mfccs = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=n_mfcc)
    return np.mean(mfccs.T, axis=0).reshape(1, -1)
