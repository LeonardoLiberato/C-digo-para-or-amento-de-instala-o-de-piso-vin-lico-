document.addEventListener('DOMContentLoaded', function () {
    const calcForm = document.getElementById('calcForm');
    const resultadoDiv = document.getElementById('resultado');
    const fotoSliderDiv = document.getElementById('fotoSlider');
    let fotoIndex = 1;

    // Altera a foto do slider a cada segundo
    setInterval(alterarFotoSlider, 1000);

    calcForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const largura = parseFloat(document.getElementById('largura').value.replace(',', '.'));
        const comprimento = parseFloat(document.getElementById('comprimento').value.replace(',', '.'));
        const rodape = parseFloat(document.getElementById('rodape').value.replace(',', '.'));

        const area = largura * comprimento;
        const maoDeObra = calcularMaoDeObra(area);
        const valorRodape = rodape * largura * comprimento;
        const total = maoDeObra + valorRodape;

        const resultadoHTML = `
            <h2>Resultados:</h2>
            <p>Área total: ${area.toFixed(2)} m²</p>
            <p>Valor da mão de obra: R$${maoDeObra.toFixed(2)}</p>
            <p>Valor do rodapé: R$${valorRodape.toFixed(2)}</p>
            <p>Valor total: R$${total.toFixed(2)}</p>
        `;

        resultadoDiv.innerHTML = resultadoHTML;
    });

    function calcularMaoDeObra(area) {
        if (area <= 80) {
            return area * 35;
        } else if (area <= 160) {
            return area * 30;
        } else {
            return area * 25;
        }
    }

    // Função para alterar a foto do slider
    function alterarFotoSlider() {
        const foto = `fotos_instalacao/foto${fotoIndex}.jpg`;
        fotoSliderDiv.style.backgroundImage = `url('${foto}')`;
        fotoIndex = (fotoIndex % 16) + 1; // Retorna ao 1 após a foto17
    }
});