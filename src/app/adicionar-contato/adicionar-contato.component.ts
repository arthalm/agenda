import { Component } from '@angular/core';
import { Relação } from '../model/tipocontato';
import { Contato } from '../model/contato';
import { AgendaService } from '../model/agenda.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar-contato',
  templateUrl: './adicionar-contato.component.html',
  styleUrl: './adicionar-contato.component.css'
})

export class AdicionarContatoComponent {

  relacoes: Relação[];
  formCadastro: FormGroup;

  constructor(private agenda: AgendaService, private fb: FormBuilder) {
    this.relacoes = Object.values(Relação);

    this.formCadastro = this.fb.group({
      nome: ['', Validators.required, Validators.minLength(2)],
      tel: ['', Validators.required],
      email: ['', Validators.required],
      ani: [new Date(), Validators.required],
      rel: [Relação.IND, Validators.required],
      fav: [false]
    })
  };

  adicionar() {
    let cont = this.formCadastro.value

    let pessoa = new Contato(cont.nome, cont.tel, cont.email, new Date(cont.ani), this.getRelacao(cont.rel), cont.fav);
    this.agenda.adicionarContato(pessoa);
  };

  limparForm() {
    this.formCadastro.setValue({
      nome: '',
      tel: '',
      email: '',
      ani: new Date(),
      rel: Relação.IND,
      fav: false
    })
  }

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