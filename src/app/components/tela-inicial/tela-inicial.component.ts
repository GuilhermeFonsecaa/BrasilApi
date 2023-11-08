import { Component } from '@angular/core';

export interface contaBancaria{
agencia: string;
bankCode: number;
conta:string
}

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})

export class TelaInicialComponent {
  contasBancarias: contaBancaria[] = [];

  constructor() {
    const contasBancarias = JSON.parse(localStorage.getItem('contasBancarias') || '{}');
    this.contasBancarias = Object.values(contasBancarias);    
  }
}
