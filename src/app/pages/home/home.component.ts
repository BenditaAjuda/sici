import { AfterViewInit, Component, computed, OnInit, signal, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AcaoControleService } from '../../../core/services/acao-controle.service';
import { AcaoControle } from '../../../core/models/acao-controle.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {

  displayedColumns: string[] = ['codigo', 'descricao', 'ano', 'areaExecutora', 'tipo', 'natureza', 'unidadeAuditada', 'classificacao', 'acoes'];
  dataSource!: MatTableDataSource<AcaoControle>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  acoesDeControle: AcaoControle[] = [];

  constructor(private service: AcaoControleService,
              private localizacao: MatPaginatorIntl) {

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

    const hamBurger = document.querySelector<HTMLButtonElement>(".toggle-btn");
    const sidebar = document.querySelector<HTMLElement>("#sidebar");

    if (hamBurger && sidebar) {
      hamBurger.addEventListener("click", () => {
        sidebar.classList.toggle("expand");
      });
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
