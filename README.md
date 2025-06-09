# 🌬️ Vayu-Mitra

**Vayu-Mitra** is an AI-powered system that processes satellite images to detect and analyze air pollution levels. It uses advanced image processing and machine learning to extract nitrogen dioxide (NO₂) and sulfur dioxide (SO₂) concentrations, providing visual insights through heatmaps. The platform enables environmental monitoring and pollution comparison across cities.

---

## 🚀 Tech Stack

- **Frontend**: Vite + React  
- **Backend**: Node.js + Express  
- **ML & Image Processing**: Python (NumPy, OpenCV, scikit-learn, matplotlib)

---

## 🔍 Features

- 📸 Scan and analyze satellite images  
- 🌫️ Detect NO₂ and SO₂ concentration levels  
- 🌡️ Generate dynamic heatmaps  
- 🏙️ Compare air quality between two cities  
- 📊 Track changes over time  
- 🌐 User-friendly dashboard for visual insights

---

## 📂 Project Structure

### vayu-mitra/
- ├── client/ # Vite + React frontend
- ├── server/ # Express backend
- └── ml-model/ # Python scripts for ML & image processing

---

## 📌 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/vayu-mitra.git
   cd vayu-mitra
   cd client && npm install
   cd ../server && npm install

## 📈 Future Improvements
- Add support for more air pollutants (e.g., PM2.5, CO)
- Integrate live satellite data sources (e.g., Sentinel-5P)
- Enable global city comparisons
- Add user authentication and personal dashboards
- Export reports and analytics as PDF
