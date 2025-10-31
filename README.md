# Plysdoc

A full-stack application with React TypeScript frontend (Vite) and Python FastAPI backend.

## Project Structure

```
plysdoc/
├── backend/          # FastAPI backend
│   ├── main.py       # Main FastAPI application
│   ├── requirements.txt
│   └── README.md
├── frontend/         # React TypeScript frontend with Vite
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
└── README.md
```

## Prerequisites

- Python 3.8+
- Node.js 18+
- npm or yarn

## Setup

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the backend server:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`
- API docs: `http://localhost:8000/docs`
- Alternative docs: `http://localhost:8000/redoc`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Development

### Running Both Services

1. Start the backend (in one terminal):
```bash
cd backend
source venv/bin/activate
uvicorn main:app --reload
```

2. Start the frontend (in another terminal):
```bash
cd frontend
npm run dev
```

### Frontend Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Lint code
- `npm run preview` - Preview production build

### Backend Endpoints

- `GET /` - Root endpoint
- `GET /health` - Health check
- `GET /api/hello` - Example API endpoint

## Technologies

### Frontend
- React 19
- TypeScript
- Vite
- ESLint

### Backend
- FastAPI
- Uvicorn
- Pydantic
- Python 3.12+

