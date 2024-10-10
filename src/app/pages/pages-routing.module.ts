import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcaoControleListarComponent } from './acao-controle/acao-controle-listar/acao-controle-listar.component';
import { HomeComponent } from './home/home.component';
import { AcaoControleCadastrarComponent } from './acao-controle/acao-controle-cadastrar/acao-controle-cadastrar.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: AcaoControleListarComponent},
      { path: 'cadastrar-acao-controle', component: AcaoControleCadastrarComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
