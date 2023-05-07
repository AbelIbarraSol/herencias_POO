/*Importación de clases*/
import { Cliente } from './Cliente.js';
import { CuentaCorriente } from './CuentaCorriente.js';
import { CuentaAhorro } from './CuentaAhorro.js';
import { Cuenta } from './Cuenta.js';

const cliente = new Cliente('Abel', '13804050', '123224');
const cliente2 = new Cliente('Nieves', '16979808', '8989');

const cuentaCorrienteAbel = new Cuenta(
	cliente,
	'1222-1125-7843-5412',
	'001',
	0
);
const cuentaCorrienteNieves = new Cuenta(
	cliente2,
	'1222-1125-1974-7445',
	'002',
	0
);

const cuentaAhorroAbel = new Cuenta(cliente, '1222-1145-1445-8556', '001', 0);
const cuentaAhorroNieves = new Cuenta(
	cliente2,
	'1222-1145-5458-4525',
	'002',
	0
);

console.log(cuentaCorrienteAbel);
cuentaCorrienteAbel.depositoEnCuenta(150);
console.log(cuentaCorrienteAbel.verSaldo());
cuentaCorrienteAbel.retirarDeCuenta(70);
console.log(cuentaCorrienteAbel.verSaldo());


console.log(cuentaAhorroAbel);
cuentaAhorroAbel.depositoEnCuenta(200);
console.log(cuentaAhorroAbel.verSaldo());
cuentaAhorroAbel.retirarDeCuenta(40);
console.log(cuentaAhorroAbel.verSaldo());