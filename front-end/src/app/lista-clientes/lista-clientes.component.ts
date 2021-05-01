import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Cliente from 'src/Models/Cliente';
import { ClienteService } from 'src/Services/ClienteService.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit{

  clientes: Cliente[];

  constructor(private clienteService: ClienteService, private router: Router) {
    this.clientes = [{
      guid: '',
      nome: '',
      endereco: '',
      celular: '',
      email: '',
      cpf: ''
    }];

  }

  ngOnInit() {
    this.solicitarListaDeClientes();
  }

  solicitarListaDeClientes() {
    this.clienteService.obterListaDeClientes()
      .then(Data => this.carregarListaDeClientes(Data));
  }

  carregarListaDeClientes(pData: Cliente[]) {
    this.clientes = pData as Cliente [];
  }



  apagarCliente(guid: string) {
    this.clienteService.deletarCliente(guid)
      .then(Data => this.clientes=Data);
  }

  detalhesDoCliente(guid: string){
    this.router.navigate(['detalhe', guid]);
  }
}


