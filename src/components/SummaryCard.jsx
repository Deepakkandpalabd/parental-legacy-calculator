function SummaryCard({ result }) {
  const {
    motherTotal,
    fatherTotal,
    grandTotal,
    higherParent,
  } = result;

  return (
    <div className="row mb-4">

      <div className="col-md-3 mb-3">
        <div className="card shadow text-center h-100 border-primary">
          <div className="card-body">
            <h6 className="text-muted">Mother Total</h6>
            <h3 className="text-primary">
              {motherTotal.toFixed(2)}
            </h3>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div className="card shadow text-center h-100 border-success">
          <div className="card-body">
            <h6 className="text-muted">Father Total</h6>
            <h3 className="text-success">
              {fatherTotal.toFixed(2)}
            </h3>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-3">
  <div className="card shadow text-center h-100 border-dark">
    <div className="card-body">
      <h6 className="text-muted">Grand Total</h6>
      <h3>{grandTotal.toFixed(2)}</h3>
      <small className="text-muted">
        Sum of all factor values
      </small>
    </div>
  </div>
</div>

      <div className="col-md-3 mb-3">
        <div className="card shadow text-center h-100 border-warning">
          <div className="card-body">
            <h6 className="text-muted">Higher Legacy</h6>

            <h3 className="text-warning">
              {higherParent}
            </h3>

            <p className="mb-0">
              has the higher legacy value.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default SummaryCard;