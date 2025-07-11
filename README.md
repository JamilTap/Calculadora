📘 Pruebas Unitarias para una Calculadora Avanzada
📑 Índice
Introducción

Características Principales

Configuración Inicial

Estructura de Pruebas

Ejemplo de Prueba

Resultados de Pruebas

Solución a Fallos Comunes

Cobertura de Pruebas

Buenas Prácticas

Conclusión

Referencias

1. 📌 Introducción
Este documento describe la implementación de pruebas unitarias para una calculadora avanzada utilizando Jest, uno de los frameworks de testing más populares para JavaScript.

2. 🔹 Características Principales
✅ Developer Ready: Configuración mínima para proyectos JavaScript.

🏃 Instant Feedback: Modo watch para ejecución rápida de pruebas.

📸 Snapshot Testing: Comparación de objetos complejos.

📊 Cobertura de Código: Análisis de qué partes del código están siendo probadas.

3. 🚀 Configuración Inicial
3.1 Instalación
bash
Copiar
Editar
npm install --save-dev jest
# o
yarn add --dev jest
3.2 Script en package.json
json
Copiar
Editar
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll",
    "coverage": "jest --coverage"
  }
}
4. 🧪 Estructura de Pruebas
4.1 Arquitectura del Proyecto
bash
Copiar
Editar
src/
├── calculator.js        # Lógica de la calculadora
test/
├── calculator.test.js   # Pruebas unitarias
5. 📝 Ejemplo de Prueba
js
Copiar
Editar
// src/calculator.js
module.exports = {
  sum: (a, b) => a + b,
  subtract: (a, b) => a - b,
  // ... más operaciones
};

// test/calculator.test.js
const { sum, subtract } = require('../src/calculator');

describe('Operaciones básicas', () => {
  test('Suma 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('Resta 5 - 3 = 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
6. 📊 Resultados de Pruebas
✅ Pruebas Exitosas (19/34)
Algunas operaciones exitosas:

5 + 3 = 8

10 - 4 = 6

(2+3)*4 = 20

2.5 + 1.5 = 4

❌ Fallos Detectados (15/34)
Expresión	Resultado	Esperado	Tipo de Error	Causa Probable
5 + 3	8	9	Error en test	Expectativa incorrecta
5*	"Error"	"7"	Validación de sintaxis	Expresión incompleta
0				








Dijiste:
es para github hazlo para copiar


ChatGPT dijo:
Perfecto, aquí tienes el documento completamente ordenado y formateado en Markdown, listo para copiar y pegar directamente en tu README.md de GitHub:

markdown
Copiar
Editar
# 📘 Pruebas Unitarias para una Calculadora Avanzada

## 📑 Índice

1. [Introducción](#1-📌-introducción)  
2. [Características Principales](#2-🔹-características-principales)  
3. [Configuración Inicial](#3-🚀-configuración-inicial)  
4. [Estructura de Pruebas](#4-🧪-estructura-de-pruebas)  
5. [Ejemplo de Prueba](#5-📝-ejemplo-de-prueba)  
6. [Resultados de Pruebas](#6-📊-resultados-de-pruebas)  
7. [Solución a Fallos Comunes](#7-🔧-solución-a-fallos-comunes)  
8. [Cobertura de Pruebas](#8-📈-cobertura-de-pruebas)  
9. [Buenas Prácticas](#9-🚨-buenas-prácticas)  
10. [Conclusión](#10-📌-conclusión)  
11. [Referencias](#11-🔗-referencias)

---

## 1. 📌 Introducción

Este documento describe la implementación de pruebas unitarias para una calculadora avanzada utilizando **Jest**, uno de los frameworks de testing más populares para JavaScript.

---

## 2. 🔹 Características Principales

- ✅ **Developer Ready:** Configuración mínima para proyectos JavaScript.  
- 🏃 **Instant Feedback:** Modo *watch* para ejecución rápida de pruebas.  
- 📸 **Snapshot Testing:** Comparación de objetos complejos.  
- 📊 **Cobertura de Código:** Análisis de qué partes del código están siendo probadas.

---

## 3. 🚀 Configuración Inicial

### 3.1 Instalación

```bash
npm install --save-dev jest
# o
yarn add --dev jest
3.2 Script en package.json
json
Copiar
Editar
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll",
    "coverage": "jest --coverage"
  }
}
4. 🧪 Estructura de Pruebas
4.1 Arquitectura del Proyecto
bash
Copiar
Editar
src/
├── calculator.js        # Lógica de la calculadora
test/
├── calculator.test.js   # Pruebas unitarias
5. 📝 Ejemplo de Prueba
js
Copiar
Editar
// src/calculator.js
module.exports = {
  sum: (a, b) => a + b,
  subtract: (a, b) => a - b,
  // ... más operaciones
};

// test/calculator.test.js
const { sum, subtract } = require('../src/calculator');

describe('Operaciones básicas', () => {
  test('Suma 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('Resta 5 - 3 = 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
6. 📊 Resultados de Pruebas
✅ Pruebas Exitosas (19/34)
Las siguientes operaciones funcionaron correctamente:

5 + 3 = 8

10 - 4 = 6

(2+3)*4 = 20

2.5 + 1.5 = 4

❌ Fallos Detectados (15/34)
Expresión	Resultado	Esperado	Tipo de Error	Causa Probable
5 + 3	8	9	Error en test	Expectativa incorrecta
5*	"Error"	"7"	Validación de sintaxis	Expresión incompleta
0.1 + 0.2	0.300...	0.12121	Precisión decimal	Floating-point + error en test
(12/3)*2	8	6	Error en test	Expectativa incorrecta
(8%5)*3	9	4	Error en test	Cálculo correcto, test mal diseñado

7. 🔧 Solución a Fallos Comunes
7.1 Errores en Tests (60%)
Problema: Tests con expectativas incorrectas.
Solución:

js
Copiar
Editar
// ❌ Incorrecto
test('(12/3)*2 should be 6', () => {
  expect(calculate('(12/3)*2')).toBe(6); // Error
});

// ✅ Corregido
test('(12/3)*2 should be 8', () => {
  expect(calculate('(12/3)*2')).toBe(8);
});
7.2 Precisión Decimal (20%)
Problema: 0.1 + 0.2 no es exactamente 0.3 en JavaScript.
Solución: Usar librerías como math.js.

js
Copiar
Editar
const math = require('mathjs');

test('0.1 + 0.2 ≈ 0.3', () => {
  expect(math.evaluate('0.1 + 0.2')).toBeCloseTo(0.3);
});
7.3 Validación de Sintaxis (20%)
Problema: Expresiones incompletas como 5* causan errores.
Solución: Validar la expresión antes de evaluarla.

js
Copiar
Editar
function calculate(expr) {
  if (!expr.includes('+') && !expr.includes('-') && !expr.includes('*') && !expr.includes('/')) {
    throw new Error('Expresión incompleta');
  }
  return eval(expr); // ⚠️ Reemplazar con math.js en producción
}
8. 📈 Cobertura de Pruebas
Ejecuta:

bash
Copiar
Editar
npm run coverage
Ejemplo de salida:

diff
Copiar
Editar
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines  
----------------|---------|----------|---------|---------|-------------------
src/calculator  | 100%    | 80%      | 100%    | 100%    | 15-18 (validación)
9. 🚨 Buenas Prácticas
✔ Evitar eval(): Usar math.js o un parser seguro.

✔ Usar pruebas parametrizadas:

js
Copiar
Editar
test.each([
  [1, 2, 3],
  [5, -3, 2],
])('Suma %i + %i = %i', (a, b, expected) => {
  expect(sum(a, b)).toBe(expected);
});
✔ Snapshot Testing para objetos complejos:

js
Copiar
Editar
test('Configuración de calculadora', () => {
  expect(calculatorConfig).toMatchSnapshot();
});
10. 📌 Conclusión
Se realizaron 34 pruebas unitarias, de las cuales 19 pasaron correctamente.

15 fallos fueron identificados y analizados, atribuidos principalmente a:

❌ Expectativas incorrectas en los tests (60%)

❌ Problemas de precisión decimal (20%)

❌ Expresiones incompletas o mal validadas (20%)

Recomendaciones finales:

Corregir los tests mal diseñados.

Usar math.js para mejorar precisión.

Validar sintaxis antes de ejecutar cálculos.

11. 🔗 Referencias
Jest - Documentación oficial

Math.js - Precisión matemática en JavaScript

Repositorio GitHub - Calculadora Avanzada
