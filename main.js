class Produto {
  // Construtor da classe Produto para inicializar os atributos
  constructor() {
    this.nome = "";
    this.preco = "";
    this.quantidade = "";
  }

  // Método para cadastrar um produto com base nos dados fornecidos
  setProduto(data) {
    this.nome = data.nome || "";
    this.preco = data.preco || "";
    this.quantidade = data.quantidade || "";
  }

  // Método para obter uma representação legível do produto
  getProduto() {
    return `Produto: ${this.nome}, Preço: R$${this.preco.toFixed(
      2
    )}, Quantidade: ${this.quantidade}`;
  }
}

class Venda extends Produto {
  // Construtor da classe Venda que chama o construtor da classe Produto
  constructor() {
    super();
    this.quantidadeVendida = 0;
    this.desconto = "";
  }

  // Método para registrar uma venda
  setVenda(data) {
    let produtoCadastrado = false;

    // Verifica se o produto está cadastrado
    if (this.nome === data.nome) {
      produtoCadastrado = true;

      // Verifica se há estoque suficiente para realizar a venda
      if (this.quantidade >= data.quantidade) {
        // Realiza a venda, atualiza a quantidade vendida, aplica desconto e atualiza o estoque
        this.quantidadeVendida = data.quantidade;
        this.desconto = data.desconto || "";
        this.quantidade -= this.quantidadeVendida;
      } else {
        console.log("Estoque insuficiente para realizar a venda.");
      }
    } else {
      console.log("Produto não cadastrado.");
    }

    return produtoCadastrado;
  }

  // Método para obter uma representação legível da venda
  getVenda() {
    return `Venda realizada - Produto: ${this.nome}, Quantidade Vendida: ${
      this.quantidadeVendida
    }, Desconto: R$${this.desconto.toFixed(2)}, Estoque Atual: ${
      this.quantidade
    }`;
  }
}

// Exemplo de uso:
const produto = new Produto();
produto.setProduto({ nome: "Arroz", preco: 5.0, quantidade: 50 });
produto.setProduto({ nome: "FeiJão", preco: 5.0, quantidade: 50 });
console.log(produto.getProduto());

const venda = new Venda();
if (venda.setVenda({ nome: "Arroz", quantidade: 10, desconto: 1.0 })) {
  console.log(venda.getVenda());
  console.log(produto.getProduto());
}
