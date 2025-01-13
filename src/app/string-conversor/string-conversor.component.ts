import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations'; // Importar animações

@Component({
  selector: 'app-string-conversor',
  imports: [FormsModule, CommonModule],
  templateUrl: './string-conversor.component.html',
  styleUrls: ['./string-conversor.component.scss'],
  standalone: true,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [ // Quando o elemento aparece
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [ // Quando o elemento desaparece
        animate('0.5s ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class StringConversorComponent {
  inputString: string = '';  // Variável para armazenar a string de input
  stringInvertida: string = '';  // Variável para armazenar a string invertida

  // Método para inverter a string sem usar funções prontas
  inverterString() {
    let resultado = '';
    for (let i = this.inputString.length - 1; i >= 0; i--) {
      resultado += this.inputString[i];
    }
    this.stringInvertida = resultado;
  }
}
