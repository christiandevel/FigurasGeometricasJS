const ladoCuadrado = (lado) => lado;
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

const calcularCuadrado = () => {
  const lado = document.getElementById("lado").value;

  const area = document.getElementById("area");
  const lados = document.getElementById("lados");
  const perimetro = document.getElementById("perimetro");

  lados.innerHTML = `${ladoCuadrado(lado)} cm`;
  area.innerHTML = `${areaCuadrado(lado)} cm`;
  perimetro.innerHTML = `${perimetroCuadrado(lado)} cm`;
};

// Calculos Triangulos
const cAlturaTriangulo = (ladoLeft, ladoRight, ladoBase) => {
  let altura;
  let base = ladoBase / 2;
  if (ladoLeft === ladoRight) {
    altura = ladoLeft * ladoLeft - base * base;
  } else {
    if (ladoLeft > ladoRight) {
      altura = ladoLeft * ladoLeft - (ladoBase * ladoBase) / 2;
    } else {
      altura = ladoRight * ladoRight - (ladoBase * ladoBase) / 2;
    }
  }
  return Math.sqrt(altura);
};

const cPerimetroTriangulo = (lado1, lado2, base) => {
  let perimetro = parseInt(lado1) + parseInt(lado2) + parseInt(base);
  return perimetro;
};

const areaTringulo = (base, altura) => (base * altura) / 2;
const calcularTriangulo = () => {

  const ladoLeft = document.getElementById("ladoLeft").value;
  const ladoRight = document.getElementById("ladoRight").value;
  const ladoBase = document.getElementById("ladoBase").value;

  const ladosTriangulo = document.getElementById("ladosTriangulo");
  const alturaTriangulo = document.getElementById("alturaTriangulo");
  const perimetroTriangulo = document.getElementById("perimetroTriangulo");
  const areaTriangulo = document.getElementById("areaTriangulo");

  ladosTriangulo.innerHTML = `${ladoLeft} ${ladoRight} ${ladoBase}`;
  alturaTriangulo.innerHTML = `${cAlturaTriangulo(
    ladoLeft,
    ladoRight,
    ladoBase
  )} cm`;
  perimetroTriangulo.innerHTML = `${cPerimetroTriangulo(
    ladoLeft,
    ladoRight,
    ladoBase
  )} cm`;
  areaTriangulo.innerHTML = `${areaTringulo(
    ladoBase,
    cAlturaTriangulo(ladoLeft, ladoRight, ladoBase)
  )} cm`;
};

console.groupEnd();

console.group("circulo");
const PI = Math.PI;
console.log(`PI es igual a ${PI} `);

const radioCirculo = (radio) => radio;
console.log(`El radio del circulo es ${radioCirculo(2)}`);

const diametroCirculo = (radio) => radio * 2;
console.log(`El diametro del circulo es ${diametroCirculo(2)}`);

const perimetroCirculo = (diametro) => diametro * PI;
console.log(`El perimetro del circulo es ${perimetroCirculo(2)}`);

const areaCirculo = (radio) => radio * radio * PI;
console.log(`El area del circulo es ${areaCirculo(2)}`);
console.groupEnd();
