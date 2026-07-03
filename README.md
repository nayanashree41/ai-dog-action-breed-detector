## introduction
 The AI-powered web application that detects a dog's breed, action, and emotion from uploaded images using Deep Learning, Computer Vision, YOLOv5, and ResNet50.
 The application also includes dog comparison, progress tracking, snapshot history, daily routine planning, and voice feedback through an interactive Streamlit interface.
 ## features
 Dog Breed Detection
- Dog Action Detection
- Emotion Prediction
- Dog Comparison
- Progress Tracker
- Snapshot History
- Voice Feedback
- Daily Routine Planner
- ## Demo
- ### compare Two dogs
- ![compare Two Dogs](https://github.com/nayanashree41/ai-dog-action-breed-detector/blob/main/screenshot2.jpeg?raw=true)
- ### Breed Detection
- ![Breed Detection](https://github.com/nayanashree41/ai-dog-action-breed-detector/blob/main/screenshots1.jpeg?raw=true)
- ### Action Detection
- ![Action Detection](https://github.com/nayanashree41/ai-dog-action-breed-detector/blob/main/screenshopts3.jpeg?raw=true)
- ### training progress
- ![Training progress](https://github.com/nayanashree41/ai-dog-action-breed-detector/blob/main/screensjhots4.jpeg?raw=true)
- ## installation
- Follow these steps to run the project:

1. Download or Clone the repository.
 
```bash
git clone 
https://github.com/nayanashree41/ai-dog-action-breed-detector.git
```


2. Go to the project directory.

```bash 
cd ai-dog-action-breed-detector
```

3. Install the required dependencies.
```bash
pip install -r requirements.txt
```


4. Run the application.

```bash
streamlit run app.py
```
the app will open in your web browser, allowing you to upload dog images for classification.

## Technologies used
- Python
- Streamlit
- YOLOv5
- ResNet50
- PyTorch
- OpenCV
- NumPy
- Pillow
- Matplotlib
- ## Model Details
- *object Detection Model:* YOLOv5
- *Breed Classification Model:* ResNet50
- *Emotion Prediction:* Based on detected dog action and posture.
- *Framework:* PyTorch
- *Web Interface:* Streamlit
