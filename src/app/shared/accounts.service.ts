import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()

export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat at magna in consectetur. Cras feugiat mattis egestas. Curabitur et commodo tortor. Phasellus maximus lectus id sem sodales, et condimentum felis maximus.'
    },
    {
      name: 'Testaccount',
      status: 'inactive',
      desc: 'Consectetur adipiscing elit. Pellentesque volutpat at magna in consectetur. Cras feugiat mattis egestas. Curabitur et commodo tortor. Phasellus maximus lectus id sem sodales, et condimentum felis maximus.'
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
      desc: 'Pellentesque volutpat at magna in consectetur. Cras feugiat mattis egestas. Curabitur et commodo tortor. Phasellus maximus lectus id sem sodales, et condimentum felis maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string, desc: string) {
      this.accounts.unshift({name: name, status: status, desc: desc});
      this.loggingService.logStatusChange(status);
  }
  updateStatus(id: number, status: string) {
      this.accounts[id].status = status;
      this.loggingService.logStatusChange(status);
  }
}
