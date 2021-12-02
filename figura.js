console.log('Hola desde JS');

console.group('cuadrado')

const ladoCuadrado = 5;

console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`)


const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es ${perimetroCuadrado}cm`)

const areaCuadrado = ladoCuadrado * ladoCuadrado; 
console.log(`El area del cuadrado es: ${areaCuadrado}cm^2`)

console.groupEnd();
console.group('Triangulos')
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 12;
const alturaTriangulo = 5.5;

console.log(`Los lados del triangulo miden ${ladoTriangulo1} cm, 
y ${ladoTriangulo2} respectivamente y la base ${baseTriangulo}`)

console.log(`La altura del tringulo es de ${alturaTriangulo}`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del triangulo es ${perimetroTriangulo}`);

const areaTringulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El area del tringulo es ${areaTringulo}`);
console.groupEnd();


console.group('circulo');

console.groupEnd();
