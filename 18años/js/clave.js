document.getElementById("verificar").addEventListener("click", function() {
    const clave = document.getElementById("clave").value.trim();
    const error = document.getElementById("error");

    if (clave === "") {
        error.textContent = "Ingresa la clave.";
        return;
    }

    // Simulación: la clave correcta es 'PRIMO18'
    if (clave === "PRIMO18") {
        window.location.href = "sorpresa.html";
    } else {
        error.textContent = "Clave incorrecta. Intenta de nuevo.";
    }
});
