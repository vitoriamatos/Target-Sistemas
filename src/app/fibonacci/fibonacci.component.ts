import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss'],
  standalone: true, // Configurar como standalone
  imports: [FormsModule] // Importar FormsModule explicitamente
})
export class FibonacciComponent {
  number: number = 0;
  resultMessage: string = '';

  // Função para verificar se o número pertence à sequência de Fibonacci
  checkFibonacci(): void {
    if (this.isFibonacci(this.number)) {
      this.resultMessage = `O número ${this.number} pertence à sequência de Fibonacci.`;
    } else {
      this.resultMessage = `O número ${this.number} NÃO pertence à sequência de Fibonacci.`;
    }
  }

  // Função para calcular se o número pertence à sequência
  isFibonacci(num: number): boolean {
    let a = 0;
    let b = 1;

    // Se o número for 0 ou 1, pertence à sequência
    if (num === 0 || num === 1) return true;

    // Gera a sequência até o número informado
    while (b < num) {
      let temp = b;
      b = a + b;
      a = temp;
    }

    // Verifica se o número informado foi encontrado
    return b === num;
  }
}
