import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf

from feature_utils import extract_features

# 1️⃣ adjust this path if you move your model
MODEL_PATH = os.path.join(os.path.dirname(__file__), "model", "emotion_model.h5")

# Load the Keras model once at startup
model = tf.keras.models.load_model(MODEL_PATH)

# Emotion labels must match the order you trained on
EMOTIONS = ['angry', 'happy', 'neutral', 'sad', 'calm', 'fearful', 'disgust', 'surprised']

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No audio file uploaded"}), 400

    f = request.files["file"]
    tmp_path = os.path.join(os.getcwd(), "temp.wav")
    f.save(tmp_path)

    # extract features & clean up
    features = extract_features(tmp_path)
    os.remove(tmp_path)

    # predict
    probs = model.predict(features)       # shape (1, num_classes)
    idx = int(tf.math.argmax(probs, axis=1)[0])
    emotion = EMOTIONS[idx]

    return jsonify({"emotion": emotion})

if __name__ == "__main__":
    # debug=True for live-reload; remove in prod
    app.run(host="0.0.0.0", port=5000, debug=True)
