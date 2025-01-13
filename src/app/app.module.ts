import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Importando o módulo de rotas
import { HomeComponent } from './home/home.component'; // Certifique-se de que o HomeComponent esteja importado
import { FibonacciComponent } from './fibonacci/fibonacci.component'; // Importando os componentes
import { FaturamentoComponent } from './faturamento/faturamento.component';
import { StringConversorComponent } from './string-conversor/string-conversor.component';
import { FormsModule } from '@angular/forms';  // Adicione esta importação
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FibonacciComponent,
    FaturamentoComponent,
    StringConversorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,// Certifique-se de que o AppRoutingModule esteja no array de imports
    FormsModule,
    CommonModule,
    HttpClientModule // Adicione aqui  // Adicione FormsModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
