function calcularCilindrada() {
    let curso = parseFloat(document.getElementById('cursoPistao').value);
    let diametro = parseFloat(document.getElementById('diametroPistao').value);
    let cilindro = parseFloat(document.getElementById('qtdCilindros').value);
    const pi = 3.14;

    let cilindrada = ((((diametro ** 2) * pi) / 4000) * curso).toFixed(2);
    let cilindradasTotais = (cilindrada * cilindro).toFixed(2);

    document.getElementById('resultadoCilindradasTotais').innerHTML = `Cilindradas totais: ${cilindradasTotais} cc`;
}
