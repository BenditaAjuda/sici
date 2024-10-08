/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CadastrarAcaoControleComponent } from './cadastrar-acao-controle.component';

describe('CadastrarAcaoControleComponent', () => {
  let component: CadastrarAcaoControleComponent;
  let fixture: ComponentFixture<CadastrarAcaoControleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarAcaoControleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAcaoControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
