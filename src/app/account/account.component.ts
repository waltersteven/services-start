import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  //A SERVICE its a good way to apply DRY (Don't repeat yourself).
  constructor(private loggingService: LoggingService, private accountsService: AccountsService){} //LoggingService: instance received from provider. AccountsService it's sharing the same instance as app.module.ts.

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    //this.loggingService.logStatusChange(status);
  }
}
