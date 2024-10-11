import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AcaoControleListarComponent } from './acao-controle/acao-controle-listar/acao-controle-listar.component';
import { HomeComponent } from './home/home.component';

import { ComponentsModule } from '../components/components.module';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AcaoControleCadastrarComponent } from './acao-controle/acao-controle-cadastrar/acao-controle-cadastrar.component';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    NgxMaskDirective,
    NgxMaskPipe,
    NgSelectModule,
    MatSnackBarModule
  ],
  declarations: [
    AcaoControleListarComponent,
    AcaoControleCadastrarComponent,
    HomeComponent,
  ],
  providers: [
    provideEnvironmentNgxMask()
  ],
})
export class PagesModule { }
