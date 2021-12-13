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

const calcularTriangulo = () => {
	console.log('Clic en el tringulo');
	
	const ladoLeft = document.getElementById('');
	const ladoRight = document.getElementById('');
	const ladoTop = document.getElementById('');
}

console.group("Triangulos");
const ladoBaseTringulo = (lado1, lado2, base) => {
  return console.log(
    `Los lados del triangulo son ${lado1} y ${lado2} cm. la base es de ${base} cm`
  );
};
ladoBaseTringulo(2, 2, 5);

const alturaTriangulo = (altura) => altura;
console.log(`La altura del tringulo es de ${alturaTriangulo(2)} cm`);

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
console.log(`El perimetro del triangulo es ${perimetroTriangulo(3, 5, 10)}`);

const areaTringulo = (base, altura) => (base * altura) / 2;
console.log(`El area del triangulo es ${areaTringulo(10, 5)}`);
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
