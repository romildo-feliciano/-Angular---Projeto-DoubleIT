export class Produto {
  codigo !: number;
  nome !: string;
  descricao !: string;
  valor !: number;
  dataRemessa !: string;
  categorias !: string;
  listCategorias = new Array();
  imagem !: string;
  menu !: boolean;
}
