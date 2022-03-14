import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  name = localStorage.getItem('name');
  qtdLogin = 0;

  constructor() { }

  ngOnInit(): void {
    if(!localStorage.getItem('numbLogin'))
    {
      localStorage.setItem("numbLogin", "1");
    }

    if(localStorage.getItem('numbLogin') == "1")
    {
      setTimeout(()=>{
        alert(`Bem vindo! ${ this.name }`)
      }, 200);
      localStorage.setItem("numbLogin", "2");
    }

  }

}
