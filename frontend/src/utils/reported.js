export async function FileReported(day, hour) {
  const res = await fetch(`http://localhost:4000/file-report/pdf/download`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("no se pudo generar el reporte");
  }

  const blob = await res.blob();

  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `reporte_${day}_${hour}.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
}
