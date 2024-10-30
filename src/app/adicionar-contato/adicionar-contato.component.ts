import { Component, OnInit } from '@angular/core';
import { Relação } from '../model/tipocontato';
import { Contato } from '../model/contato';
//import { AgendaService } from '../model/agenda.service';

@Component({
  selector: 'app-adicionar-contato',
  templateUrl: './adicionar-contato.component.html',
  styleUrl: './adicionar-contato.component.css'
})

export class AdicionarContatoComponent implements OnInit {
  relacoes: Relação[] = [];
  contatos: Contato[] = [];

  /*constructor(private agenda: AgendaService) {
    this.relacoes = Object.values(Relação);
  };*/

  pegarRelacoes() {
    this.relacoes = Object.values(Relação);
  }

  ngOnInit() {
    this.pegarRelacoes();
  }

  adicionar(nome: string, telefone: string, email: string, aniversario: string, relacao: string, favorito: boolean) {
    let dataAniversario = new Date (aniversario);
    let pessoa = new Contato(nome, telefone, email, dataAniversario, relacao as Relação, favorito);
    this.contatos.push(pessoa);
  };

  /*getRelacao(str: string): Relação {
    let rl: Relação = Relação.IND;

    if (str === Relação.AMG) {
      rl = Relação.AMG;
    } 
    
    else if (str === Relação.FAM) {
      rl = Relação.FAM;
    }

    else if (str === Relação.TRA) {
      rl = Relação.TRA;
    }

    else if (str === Relação.OTR) {
      rl = Relação.OTR;
    }

    else {
      rl = Relação.IND;
    }

    this.relacoes = Object.values(rl);
  };*/

  getRelacao(): Relação[] {
    return this.relacoes;
  }
};