class Produto {
  constructor() {
    this.nome = "";
    this.preco = 0;
    this.quantidade = 0;
  }

  setProduto(data) {
    this.nome = data[0];
    this.preco = data[1];
    this.quantidade = data[2];
  }

  getProduto() {
    return `Produto: ${this.nome}, Preço: ${this.preco}, Quantidade: ${this.quantidade}`;
  }
}

class Venda extends Produto {
  constructor() {
    super();
    this.quantidadeVendida = 0;
    this.desconto = 0;
  }

  setVenda(quantidade, desconto) {
    if (this.nome && this.quantidade >= quantidade) {
      this.quantidade -= quantidade;
      this.quantidadeVendida = quantidade;
      this.desconto = desconto;
    } else {
      console.log("Produto não cadastrado ou estoque insuficiente.");
    }
  }

  getVenda() {
    return `Produto: ${this.nome}, Quantidade Vendida: ${this.quantidadeVendida}, Desconto: ${this.desconto}, Estoque Atual: ${this.quantidade}`;
  }
}

// Cria uma nova instância da classe Venda
let venda = new Venda();

// Cadastra um novo produto
venda.setProduto(["Maçã", 0.5, 100]);

// Exibe o produto cadastrado
console.log(venda.getProduto()); // Produto: Maçã, Preço: 0.5, Quantidade: 100

// Registra uma venda
venda.setVenda(5, 0);

// Exibe a última venda registrada e o estoque atual do produto
console.log(venda.getVenda()); // Produto: Maçã, Quantidade Vendida: 5, Desconto: 0, Estoque Atual: 95
