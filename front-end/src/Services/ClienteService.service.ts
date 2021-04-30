import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Cliente from 'src/Models/Cliente';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class ClienteService {

  private url = 'https://localhost:44331/api/';

  constructor(private http: HttpClient) {
  }

  obterListaDeClientes() : Promise<Cliente[]> {
      return this.http.get<Cliente[]>(this.url + 'listaClientes').toPromise();
  }

  obterClientePorGuid(guid: string) : Promise<Cliente> {
    return this.http.get<Cliente>(this.url + 'cliente/'+guid).toPromise();
  }

  adicionarCliente (cliente : Cliente) : Promise<Cliente[]> {
      return this.http.post<Cliente[]>(this.url + 'salvarCliente', cliente, httpOptions).toPromise();
  }

  modificarCliente (cliente : Cliente) : Promise<Cliente[]> {
    return this.http.post<Cliente[]>(this.url + 'modificarCliente', cliente, httpOptions).toPromise();
  }

  deletarCliente(guid: string) : Promise<Cliente[]> {
      return this.http.delete<Cliente[]>(this.url + 'deletarCliente'+guid).toPromise();
  }
}
