import { Component } from '@angular/core';
import { AgendaService } from '../model/agenda.service';

@Component({
  selector: 'app-exibir-favoritos',
  templateUrl: './exibir-favoritos.component.html',
  styleUrl: './exibir-favoritos.component.css'
})

export class ExibirFavoritosComponent {
  constructor(public agenda: AgendaService) {

  };
};
