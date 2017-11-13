import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService] //Usually a singleton object (one instance), received from import
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  //A SERVICE its a good way to apply DRY (Don't repeat yourself).
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { 
    this.accountsService.statusUpdated.subscribe( //receiving the emitter
      (status:string) => alert('New status: ' + status) //receive the status
    );
  } //LoggingService: instance received from provider. AccountsService it's sharing the same instance as app.module.ts.

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
  }
}

