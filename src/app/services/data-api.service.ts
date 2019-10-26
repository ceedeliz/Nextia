import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,delay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private url = "https://43933063.ngrok.io";

  constructor(private http : HttpClient) { 
  }
  getNodes(){
    return this.http.get(`${this.url}/p_nodes`)
  }
  getNode(id:string){
    let data2 = `${this.url}/p_nodes/${id}`;
    return this.http.get(`${this.url}/p_nodes/${id}`);
  }
  getNodeData(idNode:string){
    let data3 = `${this.url}/p_node_pmls?pNodeId=${idNode}`;
    console.log(data3);
    return this.http.get(`${this.url}/p_node_pmls?pNodeId=${idNode}`);
  }
}
