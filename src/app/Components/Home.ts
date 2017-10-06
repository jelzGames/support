import { Component } from '@angular/core';
import { WebService } from '../Services/WebService';


@Component({
  selector: 'home',
  templateUrl: '../Templates/Home.html',
  styleUrls: []
})
export class HomeComponent  {

  constructor(private webService: WebService) {}

  ngOnInit() {
      var arreglo = [];
      arreglo.push('I');
      arreglo.push('1');
      var model = { parameters: arreglo };
      this.webService.postMessage('api/Impuesto/BySearch', model).then(data => {
        console.log(data[0].name)
      }).catch(error => error);
  }
}