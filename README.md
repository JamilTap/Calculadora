Pruebas Unitarias para una Calculadora Avanzada

📌 Introducción
Este documento describe la implementación de pruebas unitarias para una calculadora avanzada utilizando Jest, el framework de testing más popular para JavaScript.

🔹 Características Principales
✅ Developer Ready: Configuración mínima para proyectos JavaScript.
🏃 Instant Feedback: Modo watch para ejecución rápida de pruebas.
📸 Snapshot Testing: Comparación de objetos complejos.
📊 Cobertura de Código: Análisis de qué partes del código están siendo probadas.

🚀 Configuración Inicial
1. Instalación
bash
npm install --save-dev jest
# o
yarn add --dev jest
2. Script en package.json
json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll",
    "coverage": "jest --coverage"
  }
}
🧪 Estructura de Pruebas
📂 Arquitectura del Proyecto
text
src/
├── calculator.js    # Lógica de la calculadora
test/
├── calculator.test.js  # Pruebas unitarias
📝 Ejemplo de Prueba
javascript
// calculator.js
module.exports = {
  sum: (a, b) => a + b,
  subtract: (a, b) => a - b,
  // ... más operaciones
};

// calculator.test.js
const { sum, subtract } = require('../src/calculator');

describe('Operaciones básicas', () => {
  test('Suma 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('Resta 5 - 3 = 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
📊 Resultados de Pruebas
✅ Pruebas Exitosas (19/34)
Las siguientes operaciones funcionaron correctamente:

5 + 3 = 8

10 - 4 = 6

(2+3)*4 = 20

2.5 + 1.5 = 4 (decimales correctos)

❌ Fallos Detectados (15/34)
Expresión	Resultado	Esperado	Tipo de Error	Causa Probable
5 + 3	8	9	Error en test (expectativa incorrecta)	Prueba mal diseñada
5*	"Error"	"7"	Validación de sintaxis	Expresión incompleta
0.1 + 0.2	0.300...	0.12121	Precisión decimal (JS)	Floating-point + error en test
(12/3)*2	8	6	Error en test	Expectativa matemáticamente incorrecta
(8%5)*3	9	4	Error en test	Cálculo correcto, test mal diseñado
🔧 Solución a Fallos Comunes
1. Errores en Tests (60%)
🔹 Problema: Tests con expectativas incorrectas.
🔹 Solución:

javascript
// ❌ Incorrecto (test mal diseñado)
test('(12/3)*2 should be 6', () => {
  expect(calculate('(12/3)*2')).toBe(6); // Error: debería ser 8
});

// ✅ Corregido
test('(12/3)*2 should be 8', () => {
  expect(calculate('(12/3)*2')).toBe(8);
});
2. Precisión Decimal (20%)
🔹 Problema: 0.1 + 0.2 ≠ 0.3 en JavaScript.
🔹 Solución: Usar math.js o redondeo.

javascript
const math = require('mathjs');
test('0.1 + 0.2 ≈ 0.3', () => {
  expect(math.evaluate('0.1 + 0.2')).toBeCloseTo(0.3);
});
3. Validación de Sintaxis (20%)
🔹 Problema: Expresiones incompletas (5*).
🔹 Solución: Mejorar el manejo de errores.

javascript
function calculate(expr) {
  if (!expr.includes('+') && !expr.includes('-') && !expr.includes('*') && !expr.includes('/')) {
    throw new Error('Expresión incompleta');
  }
  return eval(expr); // ⚠️ Usar math.js en producción
}
📈 Cobertura de Pruebas
Ejecuta:

bash
npm run coverage
Salida esperada:

text
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines  
----------------|---------|----------|---------|---------|-------------------
src/calculator  | 100%    | 80%      | 100%    | 100%    | 15-18 (validación)
🚨 Buenas Prácticas
✔ No usar eval(): Reemplazar con math.js o un parser seguro.
✔ Pruebas parametrizadas:

javascript
test.each([
  [1, 2, 3],
  [5, -3, 2],
])('Suma %i + %i = %i', (a, b, expected) => {
  expect(sum(a, b)).toBe(expected);
});
✔ Snapshot Testing: Para objetos complejos.

javascript
test('Configuración de calculadora', () => {
  expect(calculatorConfig).toMatchSnapshot();
});
📌 Conclusión
19/34 pruebas pasaron (operaciones básicas válidas).

15 fallos: Principalmente por errores en tests (60%), precisión decimal (20%) y validación (20%).

Recomendaciones:

Corregir expectativas en pruebas.

Implementar math.js para cálculos seguros.

Mejorar manejo de errores.

🔗 Más información: Jest Documentation
📌 Ejemplo completo: GitHub Repo (enlace al repositorio)
