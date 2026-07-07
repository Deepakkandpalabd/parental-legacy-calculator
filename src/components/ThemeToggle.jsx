function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className={`btn ${
        darkMode ? "btn-light" : "btn-dark"
      }`}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggle;