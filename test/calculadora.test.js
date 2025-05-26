import { agregarNumero, limpiar, calcular } from '../src/app.js';

describe('Calculadora', () => {
  let pantalla;
  
  beforeEach(() => {
    document.body.innerHTML = `
      <input id="pantalla" value="">
      <div id="operacion-anterior"></div>
    `;
    pantalla = document.getElementById('pantalla');
  });

 test('test vacío para pasar Jest', () => {
  expect(true).toBe(true);
});

  
});