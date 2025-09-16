// src/utils/theme.js

export function getInitialTheme() {
    if (typeof window !== "undefined") {
        return localStorage.getItem("theme") || "dark";
    }
    return "dark";
}

export function applyTheme(theme) {
    const root = document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
}

