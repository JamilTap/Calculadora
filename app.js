// ✅ FUNCIONES EXPORTADAS
export function agregarNumero(numero) {
  const pantalla = document.getElementById('pantalla');
  if (pantalla) pantalla.value += numero;
}

export function agregarOperador(operador) {
  const pantalla = document.getElementById('pantalla');
  if (!pantalla) return;

  const ultimoCaracter = pantalla.value.slice(-1);

  // Permitir operador si:
  // - No es operador (excepto ')')
  // - O es un paréntesis de cierre ')'
  const operadores = ['+', '-', '*', '/', '%'];

  if (
    (pantalla.value !== '' && !operadores.includes(ultimoCaracter)) // Último no operador
    || ultimoCaracter === ')' // O último es paréntesis cierre
  ) {
    pantalla.value += operador;
  }
}

export function limpiar() {
  const pantalla = document.getElementById('pantalla');
  const operacionAnterior = document.getElementById('operacion-anterior');
  if (pantalla) pantalla.value = '';
  if (operacionAnterior) operacionAnterior.textContent = '';
}

export function calcular() {
  const pantalla = document.getElementById('pantalla');
  const operacionAnterior = document.getElementById('operacion-anterior');
  const historial = document.getElementById('historial');

  const expresion = pantalla.value;

  // ❗ Validación personalizada básica
  const operadorRegex = /^[+\/*%]/; // operador al inicio
  const dobleOperador = /[+\-*/%]{2,}/; // dos operadores seguidos

  if (
    operadorRegex.test(expresion) ||
    dobleOperador.test(expresion) ||
    expresion === ''
  ) {
    pantalla.value = 'Error';
    return;
  }

  try {
    const resultado = eval(expresion);
    if (resultado === undefined || resultado === null || isNaN(resultado)) {
      pantalla.value = 'Error';
      return;
    }

    pantalla.value = resultado;
    operacionAnterior.textContent = expresion;

    if (historial) {
      const item = document.createElement('li');
      item.textContent = `${expresion} = ${resultado}`;
      historial.prepend(item);
    }

  } catch (error) {
    pantalla.value = 'Error';
  }
}

// ✅ SOLO SI ESTAMOS EN EL NAVEGADOR
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    // Números
    document.querySelectorAll('[data-numero]').forEach(boton => {
      boton.addEventListener('click', () => agregarNumero(boton.dataset.numero));
    });

    // Operadores
    document.querySelectorAll('[data-operador]').forEach(boton => {
      boton.addEventListener('click', () => agregarOperador(boton.dataset.operador));
    });

    // Paréntesis
    const btnAbrir = document.getElementById('btn-parentesis-abrir');
    const btnCerrar = document.getElementById('btn-parentesis-cerrar');
    btnAbrir?.addEventListener('click', () => agregarNumero('('));
    btnCerrar?.addEventListener('click', () => agregarNumero(')'));

    // Limpiar y calcular
    document.getElementById('btn-limpiar')?.addEventListener('click', limpiar);
    document.getElementById('btn-igual')?.addEventListener('click', calcular);
  });
}
