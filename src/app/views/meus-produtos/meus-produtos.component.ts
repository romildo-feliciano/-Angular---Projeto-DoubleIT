import { ElementDialogDeleteComponent } from './../../shared/element-dialog-delete/element-dialog-delete.component';
import { ElementDialogComponent } from './../../shared/element-dialog/element-dialog.component';
import { Produto } from './../../shared/produto/produto';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-meus-produtos',
  templateUrl: './meus-produtos.component.html',
  styleUrls: ['./meus-produtos.component.scss']
})
export class MeusProdutosComponent implements OnInit {

  produtos: Produto[] = [
    { codigo: 1, nome: "MacBook Pro 2021 16", descricao: "MacBook Pro com a melhor tecnologia do mercado, trazendo muita inovação e velocidade.", valor: 17499 ,
      dataRemessa: 'none', categorias: 'Apple, MacBook', listCategorias: [], imagem: 'assets/not1.png', menu: false },
    { codigo: 2, nome: "MacBook Air 256GB 2020", descricao: "MacBook Pro com a melhor tecnologia do mercado, trazendo muita inovação e velocidade.", valor: 10499 ,
      dataRemessa: 'none', categorias: 'Apple, MacBook', listCategorias: [], imagem: 'assets/not2.png', menu: false },
    { codigo: 3, nome: "MacBook Air 512 GB 2021", descricao: "MacBook Pro com a melhor tecnologia do mercado, trazendo muita inovação e velocidade.", valor: 13499 ,
      dataRemessa: 'none', categorias: 'Apple, MacBook', listCategorias: [], imagem: 'assets/not3.png', menu: false },
    { codigo: 4, nome: "MacBook Pro 2019 16", descricao: "MacBook Pro com a melhor tecnologia do mercado, trazendo muita inovação e velocidade.", valor: 12499 ,
      dataRemessa: 'none', categorias: 'Apple, MacBook', listCategorias: [], imagem: 'assets/not4.png', menu: false },
  ]

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.produtos.forEach(prod => {
      let text = prod.categorias;
      prod.listCategorias.push(text.split(","));
    })
  }

  oculto(nome: any){
    this.produtos.forEach(element => {
      if(element.nome == nome)
      {
        element.menu = element.menu == false ? true : false;
      }
      else{
        element.menu = false;
      }
    })
  }

  editElement(element: Produto): void{
    this.openDialog(element);
  }

  deleteElement(element: Produto, index: any): void{
    this.openDialogDelete(element, index)
  }

  openDialog(element: Produto | null): void{
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '600px',
      height: '510px',
      data: element === null ? {
        codigo: null,
        nome : '',
        descricao : '',
        valor : null,
        dataRemessa : '',
        categorias : '',
        listCategorias: [],
        imagem : '',
        menu : false,
      } : {
        codigo: element.codigo,
        nome : element.nome,
        descricao : element.descricao,
        valor : element.valor,
        dataRemessa : element.dataRemessa,
        categorias : element.categorias,
        listCategorias: element.listCategorias,
        imagem : element.imagem,
        menu : false,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined)
      {
        if(this.produtos.map(p => p.codigo).includes(result.codigo)){
          this.produtos.forEach(element => {
            if(element.codigo == result.codigo)
            {
              element.nome = result.nome
              element.descricao = result.descricao
              element.valor = result.valor
              element.dataRemessa = result.dataRemessa
              element.categorias = result.categorias
              element.listCategorias = []
              element.listCategorias.push(result.categorias.split(","));
              element.imagem = result.imagem
              element.menu = false
            }
          })
        }else{
          let prod: Produto = this.produtos[this.produtos.length - 1];
          result.codigo = prod.codigo + 1
          debugger
          let text = result.categorias;
          result.listCategorias.push(text.split(","));
          this.produtos.push(result);
        }
      }
    });
  }
  openDialogDelete(element: Produto, index: any): void {
    const dialogRef = this.dialog.open(ElementDialogDeleteComponent, {
      width: '400px',
      height: '180px',
      data: element === null ? {
        codigo: null,
        nome : '',
        descricao : '',
        valor : null,
        dataRemessa : '',
        categorias : '',
        listCategorias: [],
        imagem : '',
        menu : false,
      } : {
        codigo: element.codigo,
        nome : element.nome,
        descricao : element.descricao,
        valor : element.valor,
        dataRemessa : element.dataRemessa,
        categorias : element.categorias,
        listCategorias: element.listCategorias,
        imagem : element.imagem,
        menu : false,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined)
      {
        this.produtos.splice(index, 1);
      }
    });
  }
}
