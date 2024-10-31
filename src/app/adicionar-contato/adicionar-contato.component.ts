import { Component } from '@angular/core';
import { Relação } from '../model/tipocontato';
import { Contato } from '../model/contato';
import { AgendaService } from '../model/agenda.service';

@Component({
  selector: 'app-adicionar-contato',
  templateUrl: './adicionar-contato.component.html',
  styleUrl: './adicionar-contato.component.css'
})

export class AdicionarContatoComponent {

  relacoes: Relação[];

  constructor(private agenda: AgendaService) {
    this.relacoes = Object.values(Relação);
  };

  adicionar(nome: string, telefone: string, email: string, aniversario: string, relacao: string, favorito: boolean) {
    console.log(favorito);
    let dataAniversario = new Date (aniversario);
    let pessoa = new Contato(nome, telefone, email, dataAniversario, relacao as Relação, favorito);
    this.agenda.adicionarContato(pessoa);
  };

  getRelacao(str: string): Relação {
    if (str === Relação.AMG) {
      return Relação.AMG;
    } 
    
    else if (str === Relação.FAM) {
      return Relação.FAM;
    }

    else if (str === Relação.TRA) {
      return Relação.TRA;
    }

    else if (str === Relação.OTR) {
      return Relação.OTR;
    }

    else {
      return Relação.IND;
    };
  };
};