import { agregarNumero, agregarOperador, limpiar, calcular } from '../src/app.js';

describe('Calculadora - 50 pruebas', () => {
  let pantalla;
  let operacionAnterior;

  beforeEach(() => {
    document.body.innerHTML = `
      <input id="pantalla" value="">
      <div id="operacion-anterior"></div>
    `;
    pantalla = document.getElementById('pantalla');
    operacionAnterior = document.getElementById('operacion-anterior');
  });

  function realizarOperacion(expresion, resultadoEsperado) {
    pantalla.value = expresion;
    calcular();
    expect(pantalla.value).toBe(resultadoEsperado.toString());
  }

  function realizarOperacionInvalida(expresion) {
    pantalla.value = expresion;
    calcular();
    expect(pantalla.value).toBe('Error');
  }

  // ✅ Operaciones válidas (30 tests)
  test('1. 5 + 3', () => realizarOperacion('5+3', 8));
  test('2. 10 - 4', () => realizarOperacion('10-4', 6));
  test('3. 6 * 7', () => realizarOperacion('6*7', 42));
  test('4. 20 / 4', () => realizarOperacion('20/4', 5));
  test('5. 10 % 3', () => realizarOperacion('10%3', 1));
  test('6. (2+3)*4', () => realizarOperacion('(2+3)*4', 20));
  test('7. 2.5 + 1.5', () => realizarOperacion('2.5+1.5', 4));
  test('8. (10 + 5) * 2', () => realizarOperacion('(10+5)*2', 30));
  test('9. (8/4)+3', () => realizarOperacion('(8/4)+3', 5));
  test('10. 9 - (2+1)', () => realizarOperacion('9-(2+1)', 6));
  test('11. 3*(2+4)', () => realizarOperacion('3*(2+4)', 18));
  test('12. 100/10', () => realizarOperacion('100/10', 10));
  test('13. 2+2*2', () => realizarOperacion('2+2*2', 6));
  test('14. (5+5)/2', () => realizarOperacion('(5+5)/2', 5));
  test('15. (9%2)+1', () => realizarOperacion('(9%2)+1', 2));
  test('16. 4+(6*2)', () => realizarOperacion('4+(6*2)', 16));
  test('17. (7-2)*3', () => realizarOperacion('(7-2)*3', 15));
  test('18. (3.5+2.5)', () => realizarOperacion('(3.5+2.5)', 6));
  //fallos test
  test('19. 0.1 + 0.2', () => realizarOperacion('0.1+0.2', 0.12121)); // JS floating point
  test('20. (12/3)*2', () => realizarOperacion('(12/3)*2', 6));
  test('21. (8%5)*3', () => realizarOperacion('(8%5)*3', 4));
  test('22. 6+((4*2)-1)', () => realizarOperacion('6+((4*2)-1)', 3));
  test('23. (5*(2+3))-4', () => realizarOperacion('(5*(2+3))-4', 90));
  test('24. (2+3)*(4+1)', () => realizarOperacion('(2+3)*(4+1)', 21));
  test('25. 1+2+3+4+5', () => realizarOperacion('1+2+3+4+5', 12));
  test('26. (2+2)*(2+2)', () => realizarOperacion('(2+2)*(2+2)', 15));
  test('27. (10-3)*(2+1)', () => realizarOperacion('(10-3)*(2+1)', 11));
  test('28. ((1+2)+3)+4', () => realizarOperacion('((1+2)+3)+4', 13));
  test('29. 100-((20+10)*2)', () => realizarOperacion('100-((20+10)*2)', 30));
  test('30. (((3+2)*2)-4)/2', () => realizarOperacion('(((3+2)*2)-4)/2', 2));
  test('31. 5 + 3', () => realizarOperacion('5+3', 9));
  test('32. 5*', () => realizarOperacion('5*1', '7'));
   test('33. 5*10', () => realizarOperacion('5*10', '20'));
});
