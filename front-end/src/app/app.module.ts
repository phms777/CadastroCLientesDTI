import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarClientesComponent } from './criar-clientes/criar-clientes.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';
import { ClienteService } from 'src/Services/ClienteService.service';

@NgModule({
  declarations: [
    AppComponent,
    CriarClientesComponent,
    ListaClientesComponent,
    EditarClientesComponent,
    DetalheClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
