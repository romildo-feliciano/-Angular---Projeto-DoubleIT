import { AuthService } from './../../service/auth.service';
import { User } from './../../shared/user/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  imgBack = '/assets/Group 28.svg'
  imgLogoD = '/assets/Path 31.svg'
  imgEntre = '/assets/Entre..svg'
  imgLine = '/assets/Line 1.svg'
  imgInput = '/assets/input.svg'
  imgButton = '/assets/button.svg'

  inputType = 'password'
  nome = '';
  senha = '';
  nomeTrue = false;
  senhaTrue = false;

  user: User = new User();

  constructor( private router: Router, private authService: AuthService ) { }

  ngOnInit(): void {
    this.user.nome = "João Carlos"
    this.user.senha = "teste123"
    console.log(this.user)
  }

  tipo(){
      this.inputType = this.inputType == 'password' ? 'text' : 'password'
  }

  submit(){
    if(this.nome != '' && this.senha != '')
    {
      this.nomeTrue = this.nome == this.user.nome ? true : false
      this.senhaTrue = this.senha == this.user.senha ? true : false

      if(this.nomeTrue == false){
        alert("Usuário incorreto. Tente novamente")
        console.log("if1 nome : " + this.nomeTrue + " senha : " + this.senhaTrue)
        this.nomeTrue = false;
      }
      else if(this.senhaTrue == false){
        alert("Senha incorreto. Tente novamente")
        console.log("if2 nome : " + this.nomeTrue + " senha : " + this.senhaTrue)
        this.senhaTrue = false;
      }
      else{
        console.log(this.user)
        localStorage.setItem('name', this.user.nome)
        localStorage.setItem('token', this.user.token)
        this.authService.loginResponse.token = this.user.token
        this.router.navigate(['/home/inicio']);
      }
    }
    else{
      alert("preencher campos")
      console.log("preencher campos")
    }

  }

}
