import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BancoService } from 'src/app/services/banco.service';
import { Bank } from '../tela-listagem/tela-listagem.component'
import { contaBancaria } from '../tela-inicial/tela-inicial.component'

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})

export class TelaCadastroComponent implements OnInit {

  constructor(private bancoService: BancoService, private route: ActivatedRoute, private router: Router) { }

  erroCadastro: boolean = false;
  selectedBank: Bank | null = null;
  agencia: string = '';
  conta: string = '';

  ngOnInit(): void {
    this.getBankCode();
  }

  getBankCode(): void {
    const is = this.route.snapshot.params['bankCode'];
    this.bancoService.getBankCode(is).subscribe((data: Bank) => {
      this.selectedBank = data;
      console.log(data)
    })
  }

  cadastroConta(): void {
    if (this.agencia && this.conta) {
      let contasBancarias: contaBancaria[] = JSON.parse(localStorage.getItem('contasBancarias') || '[]');

      contasBancarias.push({
        bankCode: this.selectedBank ? this.selectedBank.code : 0,
        agencia: this.agencia,
        conta: this.conta
      });
      localStorage.setItem('contasBancarias', JSON.stringify(contasBancarias));
      this.router.navigate(['/']);
      this.erroCadastro = false;
    }

    else {
      this.erroCadastro = true;
    }
  }
}


