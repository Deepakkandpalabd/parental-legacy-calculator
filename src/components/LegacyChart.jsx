import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

function LegacyChart({ data }) {
  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <h4 className="mb-4 text-center">
          Mother vs Father Legacy Comparison
        </h4>

        <div style={{ width: "100%", height: 420 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: 0,
                bottom: 70,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="factor"
                angle={-20}
                textAnchor="end"
                interval={0}
                height={90}
              />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="mother"
                name="Mother"
                fill="#ff69b4"
              />

              <Bar
                dataKey="father"
                name="Father"
                fill="#4e73df"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default LegacyChart;