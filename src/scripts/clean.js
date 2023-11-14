const clean = () => {
    if (confirm("Isso irá deletar todas as imagens. Tem certeza?")) {
        const catDiv = document.getElementById("gatinhos");
        const carDiv = document.getElementById("carros");

        catDiv.innerHTML = "";
        carDiv.innerHTML = "";
    }
}

const btnLimpar = document.querySelector('#limpar')
btnLimpar.addEventListener("click", clean)