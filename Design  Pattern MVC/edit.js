import {AlunosService} from '../Design  Pattern MVC/js/Services/Alunos.service.js'
import {EditAlunoView} from '../Design  Pattern MVC/js/Views/EditAluno.view.js'
import {MateriasService} from '../Design  Pattern MVC/js/Services/Materia.Service.js'
import {EditAlunoController} from '../Design  Pattern MVC/js/Controllers/EditAluno.controller.js'


const alunosService = new AlunosService();

const paramsString = window.location.search;
const URLparams = new URLSearchParams(paramsString);
const id = parseInt(URLparams.get("id"));
const aluno = alunosService.searchById(id);

document.getElementById("first_name").value = aluno.nome;

const editAlunoView = new EditAlunoView(
  document.querySelector("[data-edit-aluno-form]"),
  new MateriasService().materias
);
const editAlunoController = new EditAlunoController(
  aluno,
  editAlunoView,
  alunosService
);

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.querySelector("#first_name").value;
  editAlunoController.edit(aluno, nome);
  window.location.assign("index.html");
});
