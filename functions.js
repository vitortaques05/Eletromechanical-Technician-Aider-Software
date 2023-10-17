$(document).ready(function () {
    // Event handler para o botão "Calculate RPM"
    $('#rpm-calculator-form').submit(function (e) {
      e.preventDefault();
  
      const cuttingSpeed = parseFloat($('#cutting-speed').val());
      const workpieceDiameter = parseFloat($('#workpiece-diameter').val());
  
      if (!isNaN(cuttingSpeed) && !isNaN(workpieceDiameter)) {
        const rpm = (1000 * cuttingSpeed) / (3.14 * workpieceDiameter);
  
        $('#result').html('RPM: ' + rpm.toFixed(2));
      } else {
        $('#result').html('Por favor, insira valores válidos.');
      }
    });
  
// Adicione aqui um código JavaScript para lidar com os botões do menu.
const menuPrincipalButton = document.getElementById('menu-principal');
const sobreNosButton = document.getElementById('sobre-nos');

menuPrincipalButton.addEventListener('click', function() {
  // Redirecione para o menu principal (index.html)
  window.location.href = 'index.html';
});

sobreNosButton.addEventListener('click', function() {
  // Redirecione para o menu principal (index.html)
  window.location.href = 'sobrenos.html';
});

});
  

////////////////////////////////////////////


// script.js

function resistorColors(resistance, tolerance, power) {
  // Define objetos que mapeiam valores para cores
  const colorCodes = {
      0: 'black',
      1: 'brown',
      2: 'red',
      3: 'orange',
      4: 'yellow',
      5: 'green',
      6: 'blue',
      7: 'violet',
      8: 'gray',
      9: 'white',
  };

  // Função auxiliar para calcular o número de zeros no valor de resistência
  function countZeros(value) {
      if (value === 0) return 0;
      let count = 0;
      while (value % 10 === 0) {
          value /= 10;
          count++;
      }
      return count;
  }

  // Calcula o valor principal e a potência de 10
  const zeros = countZeros(resistance);
  const mainValue = resistance / Math.pow(10, zeros);

  // Mapeia os valores principais e as potências para as cores
  const mainColor = colorCodes[Math.floor(mainValue)];
  const zerosColor = colorCodes[zeros];
  const toleranceColor = tolerance === 20 ? 'red' : 'gold'; // Tolerância de 5% (gold) ou 2% (red)
  const powerColor = colorCodes[power];

  return {
      mainColor,
      zerosColor,
      toleranceColor,
      powerColor,
  };
}

document.getElementById("calculate").addEventListener("click", function() {
  const resistanceValue = parseFloat(document.getElementById("resistance").value);
  const toleranceValue = parseFloat(document.getElementById("tolerance").value);
  const powerValue = parseFloat(document.getElementById("power").value);

  const resistorColorsResult = resistorColors(resistanceValue, toleranceValue, powerValue);

  document.getElementById("main-color").textContent = resistorColorsResult.mainColor;
  document.getElementById("main-color-box").style.backgroundColor = resistorColorsResult.mainColor;
  document.getElementById("zeros-color").textContent = resistorColorsResult.zerosColor;
  document.getElementById("zeros-color-box").style.backgroundColor = resistorColorsResult.zerosColor;
  document.getElementById("tolerance-color").textContent = resistorColorsResult.toleranceColor;
  document.getElementById("tolerance-color-box").style.backgroundColor = resistorColorsResult.toleranceColor;
  document.getElementById("power-color").textContent = resistorColorsResult.powerColor;
  document.getElementById("power-color-box").style.backgroundColor = resistorColorsResult.powerColor;
});

////////////////////////////////////////

