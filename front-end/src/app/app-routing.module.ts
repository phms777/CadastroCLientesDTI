import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarClientesComponent } from './criar-clientes/criar-clientes.component';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';

const routes: Routes = [
  { path: '', redirectTo: 'cliente', pathMatch: 'full' },
  { path: 'clientes', component: ListaClientesComponent },
  { path: 'adicionar', component: CriarClientesComponent },
  { path: 'modificar/:guid', component: EditarClientesComponent },
  { path: 'detalhe/:guid', component: DetalheClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
