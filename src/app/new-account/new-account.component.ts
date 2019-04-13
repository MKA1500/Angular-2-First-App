import { Component } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {
  }

  onCreateAccount(accountName: string, accountStatus: string, accountDesc: string) {
    this.accountsService.addAccount(accountName, accountStatus, accountDesc);
    this.loggingService.logStatusChange(accountStatus);
    console.log('new account name: ' + accountName);
  }
}
