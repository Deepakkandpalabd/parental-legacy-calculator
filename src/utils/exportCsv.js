export const exportCSV = (result) => {
  const headers = [
    "Factor",
    "Mother",
    "Father",
    "Total",
  ];

  const rows = result.factors.map((item) => [
    item.factor,
    item.mother,
    item.father,
    item.total,
  ]);

  const summary = [
    [],
    ["Mother Total", result.motherTotal],
    ["Father Total", result.fatherTotal],
    ["Grand Total", result.grandTotal],
    ["Higher Legacy", result.higherParent],
  ];

  const csv = [
    headers,
    ...rows,
    ...summary,
  ]
    .map((row) => row.join(","))
    .join("\n");

  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;",
  });

  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "Parental_Legacy_Report.csv";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};