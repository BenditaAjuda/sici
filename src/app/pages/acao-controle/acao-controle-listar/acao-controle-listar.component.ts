import { Component, OnInit, ViewChild } from '@angular/core';
import { AcaoControle } from '../../../../core/models/acao-controle.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AcaoControleService } from '../../../../core/services/acao-controle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acao-controle-listar',
  templateUrl: './acao-controle-listar.component.html',
  styleUrls: ['./acao-controle-listar.component.css']
})
export class AcaoControleListarComponent implements OnInit {

  displayedColumns: string[] = ['gerarOs', 'codigo', 'descricao', 'ano', 'areaExecutora', 'tipo', 'natureza', 'unidadeAuditada', 'classificacao', 'acoes'];
  dataSource!: MatTableDataSource<AcaoControle>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  acoesDeControle: AcaoControle[] = [];

  constructor(private service: AcaoControleService,
              private localizacao: MatPaginatorIntl,
              private router: Router) {

                localizacao.itemsPerPageLabel = 'Itens por página';
                localizacao.firstPageLabel = 'Primeira página';
                localizacao.lastPageLabel = 'Última página';
                localizacao.nextPageLabel = 'Prôxima página';
                localizacao.previousPageLabel = 'Página anterior';
  }

  ngOnInit(): void {

    this.service.getAcaoControle().subscribe({
      next: (response: AcaoControle[]) => {
        this.acoesDeControle = response;
        this.dataSource = new MatTableDataSource(this.acoesDeControle);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error: any) => {
        console.error('Error:', error.error);
      },
      complete: () => {
        console.log('complete.');
      }
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  navegarParaAcaoControle(event: Event): void {
    this.router.navigate(['pages/home/cadastrar-acao-controle']);
  }

}
