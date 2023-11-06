import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { TelaListagemComponent } from './components/tela-listagem/tela-listagem.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    TelaListagemComponent,
    TelaCadastroComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
