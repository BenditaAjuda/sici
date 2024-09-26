import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { AcaoControleListarComponent } from './acao-controle-listar/acao-controle-listar.component';
import { HomeComponent } from './home/home.component';
import { CadastrarAcaoControleComponent } from './cadastrar-acao-controle/cadastrar-acao-controle.component';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentesModule,

  ],
  declarations: [
    AcaoControleListarComponent,
    HomeComponent,
    CadastrarAcaoControleComponent
  ]
})
export class PagesModule { }
