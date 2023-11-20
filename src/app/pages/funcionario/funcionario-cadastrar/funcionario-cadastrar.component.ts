import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Funcionario } from "src/app/models/funcionarios";

@Component({
  selector: "app-funcionario-cadastrar",
  templateUrl: "./funcionario-cadastrar.component.html",
  styleUrls: ["./funcionario-cadastrar.component.css"],
})
export class FuncionarioCadastrarComponent {
  nome: string = "";
  cpf: number = 0;

  constructor(
    private client: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  cadastrar(): void {
    let funcionario: Funcionario = {
      nome: this.nome,
      cpf: this.cpf,
    };

    this.client
      .post<Funcionario>(
        "https://localhost:7047/api/folha/cadastrar",
        funcionario
      )
      .subscribe({
        //A requição funcionou
        next: (funcionario) => {
          this.snackBar.open(
            "Produto cadastrado com sucesso!!",
            "E-commerce",
            {
              duration: 1500,
              horizontalPosition: "right",
              verticalPosition: "top",
            }
          );
          this.router.navigate(["pages/funcionario/listar"]);
        },
        //A requição não funcionou
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}
