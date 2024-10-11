import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UnidadeAuditoriaInternaService } from '../../../../core/services/unidade-auditoria-interna.service';
import { AreaExecutora, ObjetivoPpa, ProgramaGoverno, UnidadeAuditoriaInterna, UnidadesAuditada } from '../../../../core/models/acao-controle.model';
import { AreaExecutoraService } from '../../../../core/services/area-executora.service';
import { UnidadesAuditadasService } from '../../../../core/services/unidades-auditadas.service';
import { ProgramaGovernoService } from '../../../../core/services/programa-governo.service';
import { ObjetivoPpaService } from '../../../../core/services/objetivo-ppa.service';
import { AcaoControleService } from '../../../../core/services/acao-controle.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-acao-controle-cadastrar',
  templateUrl: './acao-controle-cadastrar.component.html',
  styleUrls: ['./acao-controle-cadastrar.component.css']
})
export class AcaoControleCadastrarComponent implements OnInit {

  acaoControleForm: FormGroup = new FormGroup({});
  unidadeAuditoria: UnidadeAuditoriaInterna[] = [];
  areaExecutora: AreaExecutora[] = [];
  unidadesAuditadas: UnidadesAuditada[] = [];
  programaGoverno: ProgramaGoverno[] = [];
  objeticoPPA: ObjetivoPpa[] = [];

  tipoAcao = [
    { label: 'Consultoria', value: 'CONSULTORIA' }
  ];

  naturezaAcao = [
    { label: 'Gestão de riscos', value: 3 }
  ];

  situacao = [
    { label: 'Não Iniciada', value: 0 }
  ];

  classificacaoAcao = [
    { label: 'Programada', value: 'PROGRAMADA' },
    { label: 'Reservada', value: 'RESERVA' },
    { label: 'Não programada', value: 'NAO_PROGRAMADA' }
  ];

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private unidadeAuditoriaService: UnidadeAuditoriaInternaService,
              private areaExecutoraService: AreaExecutoraService,
              private unidadeAuditadaService: UnidadesAuditadasService,
              private programaGovernoService: ProgramaGovernoService,
              private objetivoPpaService: ObjetivoPpaService,
              private acaoControleService: AcaoControleService,
              private spinner: NgxSpinnerService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.inicializarFormulario();
    this.getUnidadeAuditoria();
    this.getAreaExecutora();
    this.getUnidadesAuditadas();
    this.getProgramaGoverno();
    this.getObjeticoPPA();
  }

  inicializarFormulario() {
    this.acaoControleForm = this.formBuilder.group({
      unidadeAuditoriaInternaId: ['', [Validators.required]],
      anoProgramacao: ['', [Validators.required]],
      areaExecutoraId: ['', [Validators.required]],
      descricaoAcao: ['', [Validators.maxLength(15)]],
      tipoAcao: ['', [Validators.required]],
      naturezasAcao: [[], [Validators.required]],
      situacao: [[], [Validators.required]],
      unidadesAuditadasIds: [[], [Validators.required]],
      programaGovernoCodigo: ['', [Validators.required]],
      objetivoPPAId: ['', [Validators.required]],
      classificacaoAcao: ['', [Validators.required]],
      quantidadeMembros: ['', [Validators.required]],
      diasUteisRealizacao: ['', [Validators.required]],
      esforcoTotal: [''],
    });
  }

  getUnidadeAuditoria() {
    this.unidadeAuditoriaService.getUnidadeAuditoria().subscribe({
      next: (response: UnidadeAuditoriaInterna[]) => {
        this.unidadeAuditoria = response;
      },
      error: (error: any) => {
        console.error('Error:', error.error);
      },
      complete: () => {
      }
    });
  }

  getAreaExecutora() {
    this.areaExecutoraService.getAreaExecutora().subscribe({
      next: (response: AreaExecutora[]) => {
        this.areaExecutora = response;
      },
      error: (error: any) => {
        console.error('Error:', error.error);
      },
      complete: () => {
      }
    });
  }

  getUnidadesAuditadas() {
    this.unidadeAuditadaService.getUnidadeAuditoria().subscribe({
      next: (response: UnidadesAuditada[]) => {
        this.unidadesAuditadas = response;
      },
      error: (error: any) => {
        console.error('Error:', error.error);
      },
      complete: () => {
      }
    });
  }

  getProgramaGoverno() {
    this.programaGovernoService.getProgramaGoverno().subscribe({
      next: (response: ProgramaGoverno[]) => {
        this.programaGoverno = response;
      },
      error: (error: any) => {
        console.error('Error:', error.error);
      },
      complete: () => {
      }
    });
  }

  getObjeticoPPA() {
    this.spinner.show();
    this.objetivoPpaService.getObjeticoPPA().subscribe({
      next: (response: ObjetivoPpa[]) => {
        this.objeticoPPA = response;
      },
      error: (error: any) => {
        console.error('Error:', error.error);
        this.spinner.hide();
      },
      complete: () => {
        this.spinner.hide();
      }
    });
  }

  voltarListarAcaoControle(event: Event) {
    this.router.navigate(['pages/home']);
  }

  salvarAcaoDeControle(event: Event) {
    this.spinner.show();
    this.acaoControleService.createAcaoControle(this.acaoControleForm.value).subscribe({
      next: (response: any) => {
        this.showSuccess();
        this.router.navigate(['pages/home']);
      },
      error: (error: any) => {
        console.error('Error:', error.error);
        this.spinner.hide();
        this.showError();
      },
      complete: () => {
        this.spinner.hide();
      }
    })
   }

   showSuccess() {
    this.snackBar.open('Cadastrado com sucesso', 'Close', {
      duration: 4000,
      panelClass: ['custom-snackbar'],
    });
  }

  showError() {
    this.snackBar.open('Algo errado ao cadastrar.', 'Close', {
      duration: 4000,
      panelClass: ['custom-snackbar-error'],
    });
  }

}
