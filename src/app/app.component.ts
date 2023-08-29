import { Component,OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from './services/user.service';
import { User } from './models/user.models';
import { Icnpj } from './models/cnps.models';
import { CNPJ } from './models/cnpj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first-project';

  pageTitle:string = 'Requisição HTTP';

  meuDado = new Object();
  teste = new CNPJ()
  
  constructor(private userService: UserService){
  }

  ngOnInit(): void {
   this.userService.getData().subscribe((data) =>{
   
    console.log("Tipo de dado: ",typeof data);

    this.teste = data
   
    
   })
  }
}
