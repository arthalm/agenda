import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdicionarContatoComponent } from './adicionar-contato/adicionar-contato.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agenda';
}
