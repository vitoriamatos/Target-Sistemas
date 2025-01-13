import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Faturamento {
  dia: number;
  valor: number;
}

@Component({
  selector: 'app-faturamento',
  standalone: true,
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.scss'],
  imports: [
    HttpClientModule, // Importa o módulo para uso do HttpClient
  ],
})
export class FaturamentoComponent {
  menorValor!: number;
  maiorValor!: number;
  diasAcimaDaMedia!: number;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    fetch('assets/dados.json')
      .then(response => response.json())
      .then((dados: Faturamento[]) => {
        const resultados = this.processarFaturamento(dados);
        this.menorValor = resultados.menorValor;
        this.maiorValor = resultados.maiorValor;
        this.diasAcimaDaMedia = resultados.diasAcimaDaMedia;
      })
      .catch(error => console.error('Erro ao carregar dados:', error));
  }
  

  processarFaturamento(dados: Faturamento[]) {
    const diasComFaturamento = dados.filter((dado) => dado.valor > 0);
    const menorValor = Math.min(...diasComFaturamento.map((dado) => dado.valor));
    const maiorValor = Math.max(...diasComFaturamento.map((dado) => dado.valor));
    const somaFaturamento = diasComFaturamento.reduce((acc, dado) => acc + dado.valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter((dado) => dado.valor > mediaMensal).length;

    return { menorValor, maiorValor, diasAcimaDaMedia };

   
  }
 
} 