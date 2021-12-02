console.group("cuadrado");
const ladoCuadrado = (lado) => lado;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado(2)}cm`);

const perimetroCuadrado = (lado) => lado * 4;
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado(5)}cm`);

const areaCuadrado = (lado) => lado * lado;
console.log(`El area del cuadrado es: ${areaCuadrado(10)} cm^2`);
console.groupEnd();

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
