import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { AcaoControleListarComponent } from './acao-controle-listar/acao-controle-listar.component';
import { HomeComponent } from './home/home.component';
import { CadastrarAcaoControleComponent } from './cadastrar-acao-controle/cadastrar-acao-controle.component';
import { ComponentesModule } from '../componentes/componentes.module';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    ComponentesModule,
    MatMenuModule,
    MatListModule
  ],
  declarations: [
    AcaoControleListarComponent,
    HomeComponent,
    CadastrarAcaoControleComponent
  ]
})
export class PagesModule { }
