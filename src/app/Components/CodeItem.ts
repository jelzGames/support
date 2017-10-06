import { Type } from '@angular/core';

export class CodeItem {
  constructor(public component: Type<any>, public data: any) {}
}