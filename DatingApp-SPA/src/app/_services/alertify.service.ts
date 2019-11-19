import { Injectable } from '@angular/core';
import * as alerify from 'alertifyjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

confirm(message: string, okCallback: () => any) {
  alerify.confirm(message, (e: any) => {
    if (e) {
      okCallback();
    } else {}
  });
}

success(message: string) {
  alerify.success(message);
}

error(message: string) {
  alerify.error(message);
}

warning(message: string) {
  alerify.warning(message);
}

message(message: string) {
  alerify.message(message);
}

}
