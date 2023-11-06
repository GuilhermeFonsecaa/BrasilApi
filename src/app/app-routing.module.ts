import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { TelaListagemComponent } from './components/tela-listagem/tela-listagem.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';



const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'lista', component: TelaListagemComponent },
  { path: 'cadastro', component: TelaCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
