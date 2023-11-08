import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { TelaListagemComponent } from './components/tela-listagem/tela-listagem.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    TelaListagemComponent,
    TelaCadastroComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
