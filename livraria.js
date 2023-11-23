var read = require("readline-sync");
//var userName = read.question("May I have your name? ");

//console.log(userName);

/*var vetor = ["Nanana", "Moranguete", "Cerejaj"];
console.log(vetor.length); // conta a quantidade de itens*/

//function adicao()*/

// Função criar objeto

/*function criar_obj(id, nome, ano) {
  console.log("Id: " + id, "/nNome: " + nome, "/nAno: " + ano);
}*/

//Objetos = "super variáveis" que armazenam uma "coleção de valores"
//referenciados por nome

//Como criar um objeto (notacao literal)

/*function add(id, name, year) {
  var book = {
    id: id,
    nome: name,
    ano: year,
  };
  vetor.push(book);
}*/

// Funções tradicionais

/* function find(id) {
  for (var i = 0; i < vetor.length; i++) {
    if (vetor[i].id == id) {
      console.log(vetor[i]);
    }
  }
}*/

/*function remove(id) {
  for (var i = 0; i < vetor.length; i++) {
    if (vetor[i].id == id) {
      vetor.splice(i, 2);
    }
  }
}
*/

/*function show() {
  for (var i = 0; i < vetor.length; i++) {
    console.log(vetor[i]);
  }
}*/

// Criando vetor global
var vetor = [];

//Arrow function
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
//console.log(vetor);

const find = (id) => {
  for (var i = 0; i < vetor.length; i++) {
    if (vetor[i].id == id) {
      console.log(vetor[i]);
    }
  }
};

//find(300);

const remove = (id) => {
  for (var i = 0; i < vetor.length; i++) {
    if (vetor[i].id == id) {
      vetor.splice(i, 2);
    }
  }
};
//remove(1);

const show = () => {
  for (var i = 0; i < vetor.length; i++) {
    console.log(vetor[i]);
  }
};

//show();
//console.log(vetor);

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
