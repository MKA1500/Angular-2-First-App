import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()

export class ArticlesService {
  articles = [
    {
      name: 'Cras feugiat mattis egestas',
      status: 'active',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat at magna in consectetur. Cras feugiat mattis egestas. Curabitur et commodo tortor. Phasellus maximus lectus id sem sodales, et condimentum felis maximus.',
      img: 'https://epoznan.pl/gallery2/41076/w493dyz6scgd3pwnvt6fw6nstnkcwqc3_gallery.jpg'
    },
    {
      name: 'Curabitur et commodo',
      status: 'inactive',
      content: 'Consectetur adipiscing elit. Cras feugiat mattis egestas. Curabitur et commodo tortor. Phasellus maximus lectus id sem sodales, et condimentum felis maximus. Cras feugiat mattis egestas. Curabitur et commodo tortor. Phasellus maximus lectus id sem sodales, et condimentum felis maximus.',
      img: 'http://bi.gazeta.pl/im/31/ff/10/z17825585V,Gdansk-z-lotu-ptaka.jpg'
    },
    {
      name: 'Phasellus maximus lectus',
      status: 'unknown',
      content: 'Pellentesque volutpat at magna in consectetur. Cras feugiat mattis egestas. Curabitur et commodo tortor. Phasellus maximus lectus id sem sodales, et condimentum felis maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'https://www.wprost.pl/_thumb/92/e1/d7b5e8701f4ef305725ecb86e2b8.jpeg'
    },
    {
      name: 'Mattis egestas curabitur',
      status: 'inactive',
      content: 'Consectetur adipiscing elit. Cras feugiat mattis egestas. Curabitur et commodo tortor. Phasellus maximus lectus id sem sodales, et condimentum felis maximus.',
      img: 'https://epoznan.pl/gallery2/41076/w493dyz6scgd3pwnvt6fw6nstnkcwqc3_gallery.jpg'
    },
    {
      name: 'Volutpat at magna in consectetur',
      status: 'unknown',
      content: 'Pellentesque volutpat at magna in consectetur. Cras feugiat mattis egestas. Curabitur et commodo tortor. Phasellus maximus lectus id sem sodales, et condimentum felis maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'https://expokrakow.com/public/files/Krakow/rynak_zima.jpg'
    },
    {
      name: 'Mattis egestas Curabitur',
      status: 'inactive',
      content: 'Consectetur adipiscing elit. Cras feugiat mattis egestas. Curabitur et commodo tortor. Phasellus maximus lectus id sem sodales, et condimentum felis maximus. Cras feugiat mattis egestas. Curabitur et commodo tortor. Phasellus maximus lectus id sem sodales, et condimentum felis maximus.',
      img: 'http://bi.gazeta.pl/im/31/ff/10/z17825585V,Gdansk-z-lotu-ptaka.jpg'
    }
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addArticle(name: string, status: string, content: string, img: string) {
      this.articles.unshift({name: name, status: status, content: content, img: img});
      this.loggingService.logStatusChange(status);
  }
  updateStatus(id: number, status: string) {
      this.articles[id].status = status;
      this.loggingService.logStatusChange(status);
  }
}
