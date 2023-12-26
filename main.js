// Classe Produto
class Produto {
  // Construtor da classe Produto
  constructor() {
    this.nome = ""; // Nome do produto
    this.preco = 0; // Preço do produto
    this.quantidade = 0; // Quantidade do produto em estoque
  }

  // Método para definir um produto
  setProduto(data) {
    this.nome = data[0]; // Define o nome do produto
    this.preco = data[1]; // Define o preço do produto
    this.quantidade = data[2]; // Define a quantidade do produto
  }

  // Método para obter informações do produto
  getProduto() {
    // Retorna uma string com as informações do produto
    return `Produto: ${this.nome}, Preço: ${this.preco}, Quantidade: ${this.quantidade}`;
  }
}

// Classe Venda que herda da classe Produto
class Venda extends Produto {
  // Construtor da classe Venda
  constructor() {
    super(); // Chama o construtor da classe pai (Produto)
    this.quantidadeVendida = 0; // Quantidade vendida do produto
    this.desconto = 0; // Desconto aplicado na venda
  }

  // Método para registrar uma venda
  setVenda(quantidade, desconto) {
    // Verifica se o produto está cadastrado e se há quantidade suficiente em estoque
    if (this.nome && this.quantidade >= quantidade) {
      this.quantidade -= quantidade; // Atualiza a quantidade em estoque
      this.quantidadeVendida = quantidade; // Define a quantidade vendida
      this.desconto = desconto; // Define o desconto aplicado
    } else {
      // Mensagem de erro quando o produto não está cadastrado ou o estoque é insuficiente
      console.log("Produto não cadastrado ou estoque insuficiente.");
    }
  }

  // Método para obter informações da venda
  getVenda() {
    // Retorna uma string com as informações da venda e o estoque atual do produto
    return `Produto: ${this.nome}, Quantidade Vendida: ${this.quantidadeVendida}, Desconto: ${this.desconto}, Estoque Atual: ${this.quantidade}`;
  }
}

// Cria uma nova instância da classe Venda
let venda = new Venda();

// Cadastra um novo produto
venda.setProduto(["Maçã", 0.5, 100]); // Produto: Maçã, Preço: 0.5, Quantidade: 100
venda.setProduto(["Feijão", 10, 100]); // Produto: Maçã, Preço: 0.5, Quantidade: 100

// Exibe o produto cadastrado
console.log(venda.getProduto()); // Saída: Produto: Maçã, Preço: 0.5, Quantidade: 100

// Registra uma venda
venda.setVenda(5, 0); // Venda de 5 unidades do produto Maçã com 0 de desconto

// Exibe a última venda registrada e o estoque atual do produto
console.log(venda.getVenda()); // Saída: Produto: Maçã, Quantidade Vendida: 5, Desconto: 0, Estoque Atual: 95
