import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})

export class AgendaService {
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
    if (!this.existirContato(c)) {
      this.contatos.push(c);
      return true;
    }
    return false;
  };

  obterTodosContatos(): Contato[] {
    return [...this.contatos];
  };

  obterContatoPorNome(nome: string): Contato | undefined {
    for (let pos = 0; pos < this.contatos.length; pos++) {
      let contato = this.contatos[pos]
      if (contato.nome.trim().toLowerCase() === nome.trim().toLowerCase()) {
        return contato;
      };
    };
    return undefined;
  };

  obterContatosFavoritos(): boolean {
    if (c.favorito === true) {
      return true
    } else {
    return false
    };
  };
};
