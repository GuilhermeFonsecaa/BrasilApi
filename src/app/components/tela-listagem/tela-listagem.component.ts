import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BancoService } from 'src/app/services/banco.service';

export interface Bank {
  ispb: string;
  name: string;
  code: number;
  fullName: string;
}

@Component({
  selector: 'app-tela-listagem',
  templateUrl: './tela-listagem.component.html',
  styleUrls: ['./tela-listagem.component.css']
})

export class TelaListagemComponent implements OnInit {
  constructor(private bancoService: BancoService, private router: Router) { }
  bankCode: string = '';
  banks: Bank[] = [];
  selectedBank: Bank | null = null;
  showError: boolean = false;

  ngOnInit(): void {
    this.getBank();
    this.getBankCode();
  }


  getBank(): void {
    this.bancoService.getBank().subscribe((data: Bank[]) => {
      this.banks = data;
      this.selectedBank = null;
      console.log(data);
    })
  }

  getBankCode(): void {
    this.bancoService.getBankCode(this.bankCode).subscribe((data: Bank) => {
      this.selectedBank = data;
      console.log(data)
    })
  }

  registrationRoute(bankCode: number) {
    this.router.navigate([`cadastro/${bankCode}`])
  }

}

