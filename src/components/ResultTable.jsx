function ResultTable({ factors }) {
  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <h4 className="mb-3">Life Factor Values</h4>

        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>Life Factor</th>
                <th>Mother Value</th>
                <th>Father Value</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {factors.map((item, index) => (
                <tr key={index}>
                  <td className="text-start fw-semibold">
                    {item.factor}
                  </td>

                  <td>{item.mother.toFixed(2)}</td>

                  <td>{item.father.toFixed(2)}</td>

                  <td className="fw-bold">
                    {item.total.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ResultTable;