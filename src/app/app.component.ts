import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  accounts : {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) {} //AccountsService it's sharing the same instance as app.module.ts.

  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }

}
