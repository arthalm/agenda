import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionarContatoComponent } from './adicionar-contato/adicionar-contato.component';
import { ExibirContatosComponent } from './exibir-contatos/exibir-contatos.component';
import { ExibirFavoritosComponent } from './exibir-favoritos/exibir-favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionarContatoComponent,
    ExibirContatosComponent,
    ExibirFavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
