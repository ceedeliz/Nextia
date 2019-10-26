import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  nodes : any;
  cards : any[] =[];
  listo : boolean = false;
  existe : boolean = false;
  constructor(private _dataApi : DataApiService) {
    this._dataApi.getNodes().subscribe(resp => {
      this.nodes = resp;
      this.listo =true;
      console.log(this.nodes.data.length);
    });
   }

  ngOnInit() {
  }
  buscando(keyword){
    let atributo = "";
    let resultados : any[] = [];
    keyword = keyword.toLowerCase();
    for(let node of this.nodes.data){
      let nodeT = node.title.toLowerCase();
      let nodeC = node.code.toLowerCase();
      if(nodeT.indexOf(keyword)>=0 || nodeC.indexOf(keyword)>=0){
        resultados.push(node);
        this.existe =true;
      }
    }
    this.cards = resultados;
    console.log(this.cards); 
  } 
}
