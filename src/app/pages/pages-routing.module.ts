import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcaoControleListarComponent } from './acao-controle-listar/acao-controle-listar.component';
import { HomeComponent } from './home/home.component';
import { CadastrarAcaoControleComponent } from './cadastrar-acao-controle/cadastrar-acao-controle.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: AcaoControleListarComponent } // Default route for 'home'
    ]
  },
  { path: 'cadastrar-acao-controle', component: CadastrarAcaoControleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
