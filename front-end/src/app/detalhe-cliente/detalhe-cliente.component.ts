import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Cliente from 'src/Models/Cliente';
import { ClienteService } from 'src/Services/ClienteService.service';

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.css']
})

export class DetalheClienteComponent implements OnInit {

  guid: string;
  cliente: Cliente;

  constructor(private route: ActivatedRoute,private router: Router, private clienteService: ClienteService) {
    this.guid='';
    this.cliente = {
      guid: '',
      Nome: '',
      Endereco: '',
      Celular: '',
      Email: '',
      CPF: ''
    };
   }

  ngOnInit() {
    this.guid = this.route.snapshot.params['guid'];

    this.clienteService.obterClientePorGuid(this.guid)
    .then(pData => this.cliente = pData)
  }

  irParaListaDeClientes() {
    this.router.navigate(['/clientes']);
  }
}