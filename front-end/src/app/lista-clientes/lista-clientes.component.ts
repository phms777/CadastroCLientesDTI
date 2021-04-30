import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import Cliente from 'src/Models/Cliente';
import { ClienteService } from 'src/Services/ClienteService.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService, private router: Router) {
    this.clientes = [{
      guid: '',
      Nome: '',
      Endereco: '',
      Celular: '',
      Email: '',
      CPF: ''
    }];

  }

  ngOnInit() {
    this.carregarListaDeClientes();
  }

  carregarListaDeClientes() {
    this.clienteService.obterListaDeClientes()
      .then(Data => this.clientes=Data);
  }

  apagarCliente(guid: string) {
    this.clienteService.deletarCliente(guid)
      .then(Data => this.clientes=Data);
  }

  detalhesDoCliente(guid: string){
    this.router.navigate(['detalhe', guid]);
  }
}


