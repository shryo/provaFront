import { Funcionario } from 'src/app/models/funcionarios';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FuncionarioListarComponent } from './pages/funcionario/funcionario-listar/funcionario-listar.component';
import { FuncionarioCadastrarComponent } from './pages/funcionario/funcionario-cadastrar/funcionario-cadastrar.component';


const routes: Routes = [
  {
    path: "pages/funcionario/cadastrar",
    component: FuncionarioCadastrarComponent,
  },
  {
    path: "pages/funcionario/listar",
    component: FuncionarioListarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
