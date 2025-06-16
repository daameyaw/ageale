# Aerius: AI-Powered Drone Recommendation System

Aerius is an intelligent drone recommendation system that leverages artificial intelligence to help users find their perfect drone match. In today's market, where the variety of drones for industrial, recreational, and commercial use continues to grow, making an informed decision can be overwhelming due to complex technical specifications and varying user needs.

## 🎯 Key Features

- **AI-Powered Recommendations**: Utilizes deep learning to analyze and rank drones based on user preferences
- **Smart Scoring System**: Weights different drone features according to user relevance and priorities
- **Comprehensive Analysis**: Evaluates both performance metrics and affordability factors
- **User-Centric Design**: Simplifies complex technical specifications into actionable insights

## 🎯 Project Objectives

- Design and train a machine learning model to rank drones using performance and affordability metrics
- Implement a scoring mechanism that weights different drone features according to user relevance
- Ensure model reliability through appropriate training and testing strategies
- Build a scalable and extensible system that can evolve to include more features and adaptive logic over time

## 🚀 Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:**
  - Tailwind CSS
  - Material-UI (MUI)
  - Emotion
- **State Management & Data Fetching:**
  - React Query (TanStack Query)
  - React Hook Form
- **Backend Integration:**
  - Supabase
- **UI/UX:**
  - Framer Motion
  - React Icons
  - Lucide React
  - React Spinners

## 📦 Installation

1. Clone the repository:

```bash
git clone [https://github.com/daameyaw/ageale.git]
cd ageagle
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Environment Setup

Create a `.env` file in the root directory with the following variables:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🐍 Python Backend Setup

1. Create and activate a virtual environment:

```bash
python -m venv tf_env
# On Windows
tf_env\Scripts\activate
# On Unix or MacOS
source tf_env/bin/activate
```

2. Install required Python packages:

```bash
pip install tensorflow fastapi uvicorn python-dotenv
```

3. Start the FastAPI backend server:

```bash
python main.py
```

The backend server will start on `http://localhost:8000` by default.

## 📁 Project Structure

```
ageagle/
├── src/           # Source files
├── public/        # Static assets
├── backend/       # Backend services
├── styles/        # Global styles
└── tf_env/        # TensorFlow environment
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- David Asante Ameyaw - Initial work

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
