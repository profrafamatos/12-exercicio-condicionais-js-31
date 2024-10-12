//Não faça nada neste arquivo
const numeroPar = require('./index');

test('verifica se 4 é par', () => {
  expect(numeroPar(4)).toBeThruthy();
});

test('verifica se 7 não retorna nada', () => {
  expect(numeroPar(7)).toBeUndefined();
});

test('verifica se 0 é par', () => {
  expect(numeroPar(0)).toBeThruthy();
});

test('verifica se -3 não retorna nada', () => {
  expect(numeroPar(-3)).toBeUndefined();
});

test('verifica se -8 é par', () => {
  expect(numeroPar(-8)).toBeThruthy();
});