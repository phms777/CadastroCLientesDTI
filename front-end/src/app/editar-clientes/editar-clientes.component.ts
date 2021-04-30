import { Component, OnInit } from '@angular/core';
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

  editarCliente() {
    this.clienteService.modificarCliente(this.cliente)
      .then(pData => this.irParaListaDeClientes())
  }

  aoSalvar() {
    this.enviado = true;
    this.salvar();
  }

  salvar() {
    this.editarCliente();
  }

  irParaListaDeClientes() {
    this.router.navigate(['/clientes']);
  }
}
