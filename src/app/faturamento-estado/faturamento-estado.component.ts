import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface FaturamentoEstado {
  estado: string;
  valor: number;
}

@Component({
  selector: 'app-faturamento',
  standalone: true,
  templateUrl: './faturamento-estado.component.html',
  styleUrls: ['./faturamento-estado.component.scss'],
  imports: [
    HttpClientModule, // Importa o módulo para uso do HttpClient
    CommonModule // Importa o módulo para os pipes padrão como "number"
  ],
})
export class FaturamentoEstadoComponent {
  faturamentos: FaturamentoEstado[] = [];
  totalFaturamento!: number;
  percentuais: { estado: string, percentual: number }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.faturamentos = [
      { estado: 'SP', valor: 67836.43 },
      { estado: 'RJ', valor: 36678.66 },
      { estado: 'MG', valor: 29229.88 },
      { estado: 'ES', valor: 27165.48 },
      { estado: 'Outros', valor: 19849.53 }
    ];

    this.calcularPercentuais();
  }

  calcularPercentuais() {
    const totalFaturamento = this.faturamentos.reduce((acc, dado) => acc + dado.valor, 0);
    this.percentuais = this.faturamentos.map(faturamento => ({
      estado: faturamento.estado,
      percentual: (faturamento.valor / totalFaturamento) * 100
    }));
  }

  getPercentualPorEstado(estado: string): number {
    const percentual = this.percentuais.find(p => p.estado === estado);
    return percentual ? percentual.percentual : 0;
  }

}
