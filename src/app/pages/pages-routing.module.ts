import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcaoControleListarComponent } from './acao-controle/acao-controle-listar/acao-controle-listar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: AcaoControleListarComponent } // Default route for 'home'
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
