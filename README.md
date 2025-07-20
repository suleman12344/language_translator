# Language Translator

A full-stack application for translating text between multiple languages using a state-of-the-art machine translation model. The backend is powered by Flask and HuggingFace Transformers, while the frontend is built with Next.js, React, and Tailwind CSS.

---

## Features

- Translate text between 15+ major world languages
- Modern, responsive UI with animated interactions
- Powered by Facebook's M2M100 multilingual model
- Easy to run locally with minimal setup

---

## Supported Languages

- English (`en`)
- Spanish (`es`)
- French (`fr`)
- German (`de`)
- Arabic (`ar`)
- Chinese (`zh`)
- Hindi (`hi`)
- Russian (`ru`)
- Japanese (`ja`)
- Korean (`ko`)
- Italian (`it`)
- Portuguese (`pt`)
- Urdu (`ur`)
- Bengali (`bn`)
- Vietnamese (`vi`)

---
---

## Getting Started

### 1. Backend (Flask API)

#### Prerequisites

- Python 3.8+
- [pip](https://pip.pypa.io/en/stable/)

#### Setup

```bash
cd flask-server
python -m venv venv
venv\Scripts\activate  # On Windows
# Or: source venv/bin/activate  # On Mac/Linux

pip install flask flask-cors torch transformers
```

#### Run the Server

```bash
python server.py
```

The API will be available at [http://127.0.0.1:8080](http://127.0.0.1:8080).

---

### 2. Frontend (Next.js)

#### Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io/) (or npm/yarn)

#### Setup

```bash
cd front-end
pnpm install
# or: npm install
# or: yarn install
```

#### Run the Development Server

```bash
pnpm dev
# or: npm run dev
# or: yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

1. Select your source and target languages from the dropdowns.
2. Enter the text you want to translate.
3. Click "Submit" to see the translation.

The frontend communicates with the Flask backend at `/api/translate` via a POST request.

---

## Tech Stack

- **Backend:** Python, Flask, Flask-CORS, HuggingFace Transformers, Torch
- **Frontend:** Next.js, React, Tailwind CSS, Radix UI, Lucide Icons, shadcn/ui

---

## Customization

- Add or remove supported languages in `flask-server/server.py` (`SUPPORTED_LANGUAGES`).
- UI components are customizable in `front-end/src/components/ui/`.

---

## License

This project is for educational/demo purposes. For production use, review the licenses of all dependencies.

