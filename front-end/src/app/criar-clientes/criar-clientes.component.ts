import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Cliente from 'src/Models/Cliente';
import { ClienteService } from 'src/Services/ClienteService.service';
import { Guid } from "guid-typescript";
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-criar-clientes',
  templateUrl: './criar-clientes.component.html',
  styleUrls: ['./criar-clientes.component.css']
})

export class CriarClientesComponent implements OnInit {

  cliente: Cliente;
  enviado = false;

  constructor(private clienteService: ClienteService, private router: Router) {
    this.cliente = {
      guid: '',
      nome: '',
      endereco: '',
      celular: '',
      email: '',
      cpf: ''
    };
   }

  ngOnInit() {
  }

  salvar() {
    this.cliente.guid = obterNovaGuid();
    this.clienteService.adicionarCliente(this.cliente)
      .then(data=>this.irParaListaDeClientes());
  }

  aoSalvar() {
    this.enviado = true;
    this.salvar();
  }

  irParaListaDeClientes() {
    this.router.navigate(['/clientes']);
  }

  formatarCPF(cpf: any) {
    const elementoAlvo = cpf
    const cpfAtual = cpf.value

    let cpfAtualizado;

    cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, function( argumento1: any, argumento2: any, argumento3: any, argumento4: any ) {
            return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
    })
    elementoAlvo.value = cpfAtualizado;
    }
}

function obterNovaGuid(): string {
  return Guid.create().toString();
}





