import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';
import { FaturamentoEstadoComponent } from './faturamento-estado/faturamento-estado.component';
import { StringConversorComponent } from './string-conversor/string-conversor.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Página inicial
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'faturamento', component: FaturamentoComponent },
  { path: 'faturamentoEstado', component: FaturamentoEstadoComponent },
  { path: 'string-conversor', component: StringConversorComponent }
];
