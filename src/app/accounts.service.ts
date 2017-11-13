import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service'; //service injected in service

@Injectable() //We have to place metadata as @component, in this case, Injectable where we want to put a Service (where we expect to receive sth injected).
export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>(); //this is triggered here and listened in another component.

    constructor(private loggingService: LoggingService){}

    addAccount(name: string, status: string){
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id:number, status: string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}