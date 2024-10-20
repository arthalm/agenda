import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionarContatoComponent } from './adicionar-contato/adicionar-contato.component';
import { ExibirContatosComponent } from './exibir-contatos/exibir-contatos.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionarContatoComponent,
    ExibirContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
