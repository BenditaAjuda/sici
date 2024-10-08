import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesteComponent } from './teste/teste.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TesteComponent
  ],
  exports: [
    TesteComponent
  ]
})
export class ComponentsModule { }
