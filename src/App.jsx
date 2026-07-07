import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import DOBForm from "./components/DOBForm";
import ResultTable from "./components/ResultTable";
import SummaryCard from "./components/SummaryCard";
import LegacyChart from "./components/LegacyChart";
import ThemeToggle from "./components/ThemeToggle";

import { calculateLegacy } from "./utils/calculateLegacy";
import { exportPDF } from "./utils/exportPdf";
import { exportCSV } from "./utils/exportCsv";

function App() {
  const [result, setResult] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("legacyResult");

    if (saved) {
      setResult(JSON.parse(saved));
    }

    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleCalculate = (dob) => {
    const data = calculateLegacy(dob);

    setResult(data);

    localStorage.setItem("legacyResult", JSON.stringify(data));
  };

  const clearData = () => {
    localStorage.removeItem("legacyResult");
    setResult(null);
  };

  return (
    <div className="container py-4">

      <Navbar />

      <div className="d-flex justify-content-end mb-3">
        <ThemeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>

      <DOBForm onCalculate={handleCalculate} />

      {result && (
        <>
          <SummaryCard result={result} />

          <ResultTable factors={result.factors} />

          <LegacyChart data={result.factors} />

          <div className="text-center mt-4">

            <button
              className="btn btn-success me-2"
              onClick={() => exportPDF(result)}
            >
              Export PDF
            </button>

            <button
              className="btn btn-primary me-2"
              onClick={() => exportCSV(result)}
            >
              Export CSV
            </button>

            <button
              className="btn btn-danger"
              onClick={clearData}
            >
              Clear
            </button>

          </div>
        </>
      )}
    </div>
  );
}

export default App;