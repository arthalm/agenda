import { Component } from '@angular/core';
import { AgendaService } from '../model/agenda.service';

@Component({
  selector: 'app-exibir-contatos',
  templateUrl: './exibir-contatos.component.html',
  styleUrl: './exibir-contatos.component.css'
})

export class ExibirContatosComponent {
  constructor(public agenda: AgendaService) {

  };
};
