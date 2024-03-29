import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Cliente from 'src/Models/Cliente';
import { ClienteService } from 'src/Services/ClienteService.service';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})

export class EditarClientesComponent implements OnInit {

  guid: string;
  cliente: Cliente;
  enviado = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private clienteService: ClienteService) {
      this.guid='';
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
    this.guid = this.route.snapshot.params['guid'];

    this.clienteService.obterClientePorGuid(this.guid)
      .then(pData => this.cliente = pData)
  }

  editarCliente() {
    this.clienteService.modificarCliente(this.cliente)
    .then(pData => this.irParaListaDeClientes());
  }

  aoSalvar() {
    this.enviado = true;
    this.editarCliente();
  }

  irParaListaDeClientes() {
    this.router.navigate(['/clientes']);
  }


}
