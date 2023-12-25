// Criando a classe para registar e exibir produtos
class Produto {
  constructor() {
    this.nome = [];
    this.preco = [];
    this.quantidade = [];
  }

  // Criando método para registrar o produto
  setProduto(data) {
    const [nome, preco, quantidade] = data;
    this.nome.push(nome);
    this.preco.push(preco);
    this.quantidade.push(quantidade);
  }

  // Método para exibir os produtos registrados
  getProduto() {
    return console.log(
      `Produto: ${this.nome} \n Preço: ${this.preco} \n Quantidade: ${this.quantidade}`
    );
  }
}

class Venda extends Produto {
  constructor(nome) {
    super(nome);
    this.quantidade = 0;
    this.desconto = "";
  }

  // Método para registrar uma venda
  setVenda(nome, quantidade, desconto = 0) {
    console.log(this.nome);
    // console.log(nome, quantidade);
  }
}

// Criando e exibindo os produtos
const produto = new Produto();

produto.setProduto(["Feijão", "10.00", "2"]);
produto.setProduto(["Arroz", "15.35", "6"]);
produto.setProduto(["Macarrão", "7.50", "26"]);

produto.getProduto();

//
const venda = new Venda("Arroz");
// venda.setVenda("Arroz", 10);
