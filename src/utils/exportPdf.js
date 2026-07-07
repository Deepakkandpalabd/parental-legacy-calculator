import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportPDF = (result) => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Parental Legacy & Life Factors Report", 14, 20);

  const rows = result.factors.map((item) => [
    item.factor,
    item.mother.toFixed(2),
    item.father.toFixed(2),
    item.total.toFixed(2),
  ]);

  autoTable(doc, {
    startY: 30,
    head: [["Factor", "Mother", "Father", "Total"]],
    body: rows,
  });

  const finalY = doc.lastAutoTable.finalY + 10;

  doc.setFontSize(12);
  doc.text(`Mother Total : ${result.motherTotal.toFixed(2)}`, 14, finalY);
  doc.text(`Father Total : ${result.fatherTotal.toFixed(2)}`, 14, finalY + 8);
  doc.text(`Grand Total : ${result.grandTotal.toFixed(2)}`, 14, finalY + 16);
  doc.text(`Higher Legacy : ${result.higherParent}`, 14, finalY + 24);

  doc.save("Parental_Legacy_Report.pdf");
};