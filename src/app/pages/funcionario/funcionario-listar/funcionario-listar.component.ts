import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import {
  MatTable,
  MatTableDataSource,
} from "@angular/material/table";
import { Funcionario } from "src/app/models/funcionarios";

@Component({
  selector: "app-funcionario-listar",
  templateUrl: "./funcionario-listar.component.html",
  styleUrls: ["./funcionario-listar.component.css"],
})
export class FuncionarioListarComponent {
  colunasTabela: string[] = [
    "id",
    "nome",
    "cpf",
    "criadoEm",
    "deletar",
    "alterar",
  ];
  funcionarios: Funcionario[] = [];

  constructor(
    private client: HttpClient,
    private snackBar: MatSnackBar
  ) {
    //Um problema de CORS ao fazer uma requisição para a
    //nossa API
  }

  ngOnInit(): void {
    this.client
      .get<Funcionario[]>("https://localhost:7047/api/folha/listar")
      .subscribe({
        //Requisição com sucesso
        next: (funcionarios) => {
          console.table(funcionarios);
          this.funcionarios = funcionarios;
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        },
      });
  }

  deletar(funcionarioId: number) {
    this.client
      .delete<Funcionario[]>(
        `https://localhost:7195/api/produto/deletar/${funcionarioId}`
      )
      .subscribe({
        //Requisição com sucesso
        next: (funcionarios) => {
          this.funcionarios = funcionarios;
          this.snackBar.open(
            "Produto deletado com sucesso!!",
            "E-commerce",
            {
              duration: 1500,
              horizontalPosition: "right",
              verticalPosition: "top",
            }
          );
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}
