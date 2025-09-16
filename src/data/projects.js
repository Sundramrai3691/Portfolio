// src/data/projects.js
const projects = [
  {
    title: "Hireable — Job Portal",
    date: "April 2025",
    description: "Responsive job portal with modular React + TypeScript architecture, search & filter, posting forms with validation (react-hook-form + Zod), deployed on Vercel.",
    points: [
      "Built responsive job portal with modular React + TypeScript architecture",
      "Implemented search & filter functionality with optimized performance",
      "Created posting forms with validation using react-hook-form + Zod",
      "Deployed on Vercel with CI/CD pipeline"
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Vercel"],
    link: "https://hireable-web-app.vercel.app/"
  },
  {
    title: "DiagnoseAI — AI Medical Chatbot",
    date: "June 2025",
    description: "AI chatbot for disease prediction using NLP + fuzzy matching. Symptom classification (PyTorch + scikit-learn) and PDF report generation via Flask backend.",
    points: [
      "Developed AI chatbot for disease prediction using NLP and fuzzy matching",
      "Implemented symptom classification using PyTorch and scikit-learn",
      "Built Flask backend with PDF report generation capabilities",
      "Integrated natural language processing for symptom analysis"
    ],
    tech: ["Python", "Flask", "PyTorch", "scikit-learn", "NLTK"],
    link: "https://github.com/Sundramrai3691/DiagnoseAI"
  },
  {
    title: "Smart-Scan — Real-time Object Detection + OCR",
    date: "Oct 2024",
    description: "Flask object-detection system (YOLO) for fruits/packaged goods with EasyOCR for text extraction; collected and annotated 3k+ images, trained on Roboflow/Colab.",
    points: [
      "Built Flask object-detection system using YOLO for fruits and packaged goods",
      "Integrated EasyOCR for text extraction from detected objects",
      "Collected and annotated 3000+ images for training dataset",
      "Trained models on Roboflow and Google Colab for optimal performance"
    ],
    tech: ["Python", "Flask", "YOLO", "EasyOCR", "Roboflow"],
    link: "https://github.com/Sundramrai3691/Smart_Scan"
  },
  {
    title: "Farm-Guru — AI Agricultural Assistant (Frontend)",
    date: "July 2025",
    description: "Responsive frontend integrating weather, crop health and market APIs; multilingual UI, voice input, dynamic dashboards, deployed on Vercel.",
    points: [
      "Developed responsive frontend integrating weather, crop health and market APIs",
      "Implemented multilingual UI with voice input capabilities",
      "Created dynamic dashboards for agricultural data visualization",
      "Deployed on Vercel with optimized performance"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://farm-guru-gilt.vercel.app/"
  }
];

export default projects;