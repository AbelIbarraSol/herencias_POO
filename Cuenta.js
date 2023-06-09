export class Cuenta {
	#cliente;
	#saldo;
	// Los  atributos publicos pueden declararse en el constructor
	constructor(cliente, numero, agencia, saldo) {
		this.numero = numero;
		this.agencia = agencia;
		this.#cliente = cliente;
		this.#saldo = saldo;
	}

	depositoEnCuenta(valor) {
		if (valor > 0) this.#saldo += valor;
		return this.#saldo;
	}

	retirarDeCuenta(valor) {
		if (valor <= this.#saldo && valor > 0)
        this.#saldo -= valor;
		return this.#saldo;
	}

	verSaldo() {
		return this.#saldo;
	}

	transferirParaCuenta(valor, cuentaDestino) {
		this.retirarDeCuenta(valor);
		cuentaDestino.depositoEnCuenta(valor);
		valor = 200;
		valor = valor * 1000;
	}
}
