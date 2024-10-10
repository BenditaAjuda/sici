import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acao-controle-cadastrar',
  templateUrl: './acao-controle-cadastrar.component.html',
  styleUrls: ['./acao-controle-cadastrar.component.css']
})
export class AcaoControleCadastrarComponent implements OnInit {

  acaoControleForm: FormGroup = new FormGroup({});

  naturezaAcao = [
    { label: 'Conformidade', value: 'conformidade' },
    { label: 'Desempenho', value: 'desempenho' },
    { label: 'Riscos', value: 'riscos' }
  ];

  classificacaoAcao = [
    { label: 'programada', value: 'conformidade' },
    { label: 'reservada', value: 'reservada' },
    { label: 'nao programada', value: 'naoProgramada' }
  ];


  constructor(private router: Router,
              private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.acaoControleForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      unidadesAuditadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      areaExecutora: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      ano: ['', [Validators.required]],
      tipoAcao: ['', [Validators.required]],
      naturezaAcao: [[], [Validators.required]],
      objetivoPpa: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      programaDeGoverno: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      objetivoDoPrograma: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      quantidadeDeMembros: ['', [Validators.required]],
      diasUteis: ['', [Validators.required]],
      esforcoTotal: [''],
      classificacaoAcao: [[], [Validators.required]],
      descricao: ['', [Validators.maxLength(15)]],
    });
  }

  voltarListarAcaoControle(event: Event) {
    this.router.navigate(['pages/home']);
  }

  salvarAcaoDeControle(event: Event) {
    console.log("Voltei", this.acaoControleForm.value);
   }

}
