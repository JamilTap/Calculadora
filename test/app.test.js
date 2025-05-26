import { agregarNumero, agregarOperador, limpiar, calcular } from '../src/app.js';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';

describe('Calculadora - 50 pruebas (Mocha + Chai)', () => {
  let document;
  let pantalla;
  let operacionAnterior;

  beforeEach(() => {
    const dom = new JSDOM(`
      <html>
        <body>
          <input id="pantalla" value="">
          <div id="operacion-anterior"></div>
        </body>
      </html>
    `);
    document = dom.window.document;
    global.document = document;
    pantalla = document.getElementById('pantalla');
    operacionAnterior = document.getElementById('operacion-anterior');
  });

  function realizarOperacion(expresion, resultadoEsperado) {
    pantalla.value = expresion;
    calcular();
    expect(pantalla.value).to.equal(resultadoEsperado.toString());
  }

  function realizarOperacionInvalida(expresion) {
    pantalla.value = expresion;
    calcular();
    expect(pantalla.value).to.equal('Error');
  }

  it('1. 5 + 3', () => realizarOperacion('5+3', 8));
  it('2. 10 - 4', () => realizarOperacion('10-4', 6));
  it('3. 6 * 7', () => realizarOperacion('6*7', 42));
  it('4. 20 / 4', () => realizarOperacion('20/4', 5));
  it('5. 10 % 3', () => realizarOperacion('10%3', 1));
  it('6. (2+3)*4', () => realizarOperacion('(2+3)*4', 20));
  it('7. 2.5 + 1.5', () => realizarOperacion('2.5+1.5', 4));
  it('8. (10 + 5) * 2', () => realizarOperacion('(10+5)*2', 30));
  it('9. (8/4)+3', () => realizarOperacion('(8/4)+3', 5));
  it('10. 9 - (2+1)', () => realizarOperacion('9-(2+1)', 6));
  it('11. 3*(2+4)', () => realizarOperacion('3*(2+4)', 18));
  it('12. 100/10', () => realizarOperacion('100/10', 10));
  it('13. 2+2*2', () => realizarOperacion('2+2*2', 6));
  it('14. (5+5)/2', () => realizarOperacion('(5+5)/2', 5));
  it('15. (9%2)+1', () => realizarOperacion('(9%2)+1', 2));
  it('16. 4+(6*2)', () => realizarOperacion('4+(6*2)', 16));
  it('17. (7-2)*3', () => realizarOperacion('(7-2)*3', 15));
  it('18. (3.5+2.5)', () => realizarOperacion('(3.5+2.5)', 6));

  // Test inválidos
 
  it('19. 0.1 + 0.2', () => realizarOperacion('1'));
  it('20. (12/3)*2', () => realizarOperacion('(12/3)*2', 6));
  it('21. (8%5)*3', () => realizarOperacion('(8%5)*3', 4));
  it('22. 6+((4*2)-1)', () => realizarOperacion('6+((4*2)-1)', 3));
  it('23. (5*(2+3))-4', () => realizarOperacion('(5*(2+3))-4', 90));
  it('24. (2+3)*(4+1)', () => realizarOperacion('(2+3)*(4+1)', 21));
  it('25. 1+2+3+4+5', () => realizarOperacion('1+2+3+4+5', 12));
  it('26. (2+2)*(2+2)', () => realizarOperacion('(2+2)*(2+2)', 15));
  it('27. (10-3)*(2+1)', () => realizarOperacion('(10-3)*(2+1)', 11));
  it('28. ((1+2)+3)+4', () => realizarOperacion('((1+2)+3)+4', 13));
  it('29. 100-((20+10)*2)', () => realizarOperacion('100-((20+10)*2)', 30));
  it('30. (((3+2)*2)-4)/2', () => realizarOperacion('(((3+2)*2)-4)/2', 2));
  it('31: 5*', () => realizarOperacion('5*'));
  it('32: ++4', () => realizarOperacion('++4'));
  it('33: 2/4', () => realizarOperacion('4'));
  



});
