import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraSuperiorComponent } from './layout/barra-superior/barra-superior.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { BotaoComponent } from './layout/botoes/botao/botao.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BarraSuperiorComponent,
    SidenavComponent,
    BotaoComponent
  ],
  exports: [
    BarraSuperiorComponent,
    SidenavComponent,
    BotaoComponent
  ]
})
export class ComponentsModule { }
