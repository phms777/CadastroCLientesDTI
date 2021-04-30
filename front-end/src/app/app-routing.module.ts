import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarClientesComponent } from './criar-clientes/criar-clientes.component';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { AppComponent} from './app.component';

@NgModule({
  imports: [
      RouterModule.forRoot([
          {
              path: '', component: AppComponent,
              children: [
                { path: 'clientes', component: ListaClientesComponent },
                  { path: 'adicionar', component: CriarClientesComponent },
                  { path: 'modificar/:guid', component: EditarClientesComponent },
                  { path: 'detalhe/:guid', component: DetalheClienteComponent },
              ]
          },
      ], { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
