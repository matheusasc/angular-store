// item.model.ts

export class Item {
  id: number;
  titulo: string;
  descricao: string;
  valor: number;

  constructor(id: number, titulo: string, descricao: string, valor: number) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.valor = valor;
  }
}

