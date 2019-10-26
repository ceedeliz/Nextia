import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';


@Component({
  selector: 'app-nodo',
  templateUrl: './nodo.component.html',
  styleUrls: ['./nodo.component.css']
})
export class NodoComponent implements OnInit {
  listo : boolean = false;
  data : any;
  modulo : string;
  nodeId : string;
  tableData : any[];

  minValue : any;
  maxValue : any;
  promValue : any;

  constructor(private _dataApi : DataApiService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    let nombre:string;
     this.route.queryParams.subscribe(params => {
      this.modulo = params['nombre'];
      this.nodeId = params['nodoId'];
      console.log(this.nodeId);
    });
    console.log(id);
      this._dataApi.getNode(id)
      .subscribe((resp : any) => {
        this.data = resp;
        this.listo=true;
        console.log(this.data);
      })
      this._dataApi.getNodeData(this.nodeId).subscribe(nodoData => {
        this.tableData = nodoData["data"];
        this.minValue =  this.tableData[0]["minValue"]
        this.maxValue =  this.tableData[0]["maxValue"]
        this.promValue =  this.tableData[0]["promValue"]
        console.log(this.tableData);
      }); 
  }
  public lineChart: GoogleChartInterface = {
    chartType: 'LineChart',
    dataTable: [],
    //opt_firstRowIsData: true,
    options: {'title': 'Tasks',
                'height': 600},
  };

}

