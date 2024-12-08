var read = require("readline-sync");

var vetor = [];

const add = (id, name, year) => {
  var book = {
    id: id,
    nome: name,
    ano: year,
  };
  vetor.push(book);
};

add(1, "Reu", 1999);
add(300, "Novo", 2023);
add(2);
add(3, "Iu", 2004);
add(5, "Fobo", 1312);
add(6, "G1", 2024);

const find = (id) => {
  for (var i = 0; i < vetor.length; i++) {
    if (vetor[i].id == id) {
      console.log(vetor[i]);
    }
  }
};

const remove = (id) => {
  for (var i = 0; i < vetor.length; i++) {
    if (vetor[i].id == id) {
      vetor.splice(i, 2);
    }
  }
};

const show = () => {
  for (var i = 0; i < vetor.length; i++) {
    console.log(vetor[i]);
  }
};

function menu(opt) {
  var opt = -1;
  while (opt != 0) {
    if (opt == 1) {
      var id = read.question("\nId: ");
      var name = read.question("\nNome: ");
      var year = read.question("\nAno: ");
      add(id, name, year);
    } else if (opt == 2) {
      var id = read.question("\nId: ");
      find(id);
    } else if (opt == 3) {
      var id = read.question("\nId: ");
      remove(id);
    } else show();

    opt = read.question(
      "Boas vindas a LivrariaTiFobo" +
        "\n 1 - Criar" +
        "\n 2 - Buscar" +
        "\n 3 - Remover" +
        "\n 4 - Mostrar" +
        "\n 0 - Sair " +
        "\nEscolha a opcao que deseja executar: "
    );
  }
}

menu();
