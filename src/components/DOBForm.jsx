import { useState } from "react";

function DOBForm({ onCalculate }) {
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!dob) {
      setError("Please select your Date of Birth.");
      return;
    }

    const selectedDate = new Date(dob);
    const today = new Date();

    // Remove time for accurate comparison
    today.setHours(0, 0, 0, 0);

    if (selectedDate > today) {
      setError("Date of Birth cannot be in the future.");
      return;
    }

    setError("");
    onCalculate(dob);
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h4 className="mb-3">Parental Legacy Calculator</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              Select Date of Birth
            </label>

            <input
              type="date"
              className="form-control"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          {error && (
            <div className="alert alert-danger py-2">
              {error}
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            Calculate
          </button>
        </form>
      </div>
    </div>
  );
}

export default DOBForm;