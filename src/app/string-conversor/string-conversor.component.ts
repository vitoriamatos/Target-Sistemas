import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-string-conversor',
  imports: [FormsModule], // Importar FormsModule explicitamente
  templateUrl: './string-conversor.component.html',
  styleUrl: './string-conversor.component.scss'
})
export class StringConversorComponent {
  inputString: string = '';  // Variável para armazenar a string de input
  stringInvertida: string = '';  // Variável para armazenar a string invertida

  // Método para inverter a string sem usar funções prontas
  inverterString() {
    let resultado = '';
    for (let i = this.inputString.length - 1; i >= 0; i--) {
      resultado += this.inputString[i];  // Adiciona os caracteres da string em ordem inversa
    }
    this.stringInvertida = resultado;  // Atribui a string invertida
  }
}
