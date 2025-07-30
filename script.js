let certificados = [];

fetch("data.json")
  .then(res => res.json())
  .then(data => certificados = data)
  .catch(err => {
    console.error("No se pudo cargar data.json:", err);
  });

function buscarCertificado() {
  const dni = document.getElementById("dni").value.trim();
  const resultado = certificados.filter(item => item.dni === dni);
  const resultBox = document.getElementById("result-box");
  const tabla = document.getElementById("tabla-certificados");
  const titulo = document.getElementById("nombre-titulo");

  tabla.innerHTML = "";

  if (resultado.length > 0) {
    resultBox.style.display = "block";
    titulo.textContent = `LISTADO DE CERTIFICADOS: ${resultado[0].nombre}`;
    resultado.forEach(cert => {
      tabla.innerHTML += `
        <tr>
          <td>${cert.tipo}</td>
          <td>-</td>
          <td><a href="${cert.link}" target="_blank">📄 Ver</a></td>
        </tr>`;
    });
  } else {
    resultBox.style.display = "block";
    titulo.textContent = "No se encontraron certificados para este DNI.";
  }
}
