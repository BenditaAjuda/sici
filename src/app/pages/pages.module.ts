import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { AcaoControleListarComponent } from './acao-controle/acao-controle-listar/acao-controle-listar.component';
import { HomeComponent } from './home/home.component';
import { CadastrarAcaoControleComponent } from './acao-controle/cadastrar-acao-controle/cadastrar-acao-controle.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [
    AcaoControleListarComponent,
    HomeComponent,
    CadastrarAcaoControleComponent,

  ]
})
export class PagesModule { }
