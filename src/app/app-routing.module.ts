import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';
import { StringConversorComponent } from './string-conversor/string-conversor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'faturamento', component: FaturamentoComponent },
  { path: 'string-conversor', component: StringConversorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
