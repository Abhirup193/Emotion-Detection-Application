# Emotion-Detection-Application
## About

Emotion Detection from Speech is a full-stack application that classifies eight basic emotions—angry, happy, neutral, sad, calm, fearful, disgust, surprised—directly from `.wav` or `.mp3` audio.  

- 🔍 **Core:** A TensorFlow model trained on 1,400+ RAVDESS samples with MFCC feature extraction, achieving 95%+ accuracy.  
- ⚙️ **Backend:** Flask API serving a saved `.h5` model for real-time emotion prediction.  
- 🖥️ **Frontend:** Simple React UI with drag-and-drop or file-upload support for instant feedback.  
- 🚀 **Performance:** Inference in under 1 second, ready for local or cloud deployment.  


## Emotion-Detection Backend 
### Setup 
cd backend 

python -m venv venv

## Windows 
source venv/Scripts/activate 
## macOS/Linux 
source venv/bin/activate 

pip install -r requirements.txt 

python app.py

# Emotion-Detection Frontend

## Setup

cd frontend

npm install

# Run the code
npm run dev
