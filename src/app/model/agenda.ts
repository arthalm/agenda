import { Contato } from "./contato";
export class Agenda {
    private contatos: Contato[];

    constructor() {
        this.contatos = [];
    };

    existirContato(c: Contato): boolean {
        if (this.contatos.find(cont => cont.email === c.email && cont.telefone === c.telefone)) {
            return true;
        }
        return false;
    };


    adicionarContato(c: Contato): boolean {
        if(!this.existirContato(c)) {
            this.contatos.push(c);
            return true;
        }
        return false;
    };
}