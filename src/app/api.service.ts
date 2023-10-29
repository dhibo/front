import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlannotation = 'http://127.0.0.1:8000/annotations/';
  urldoc = 'http://127.0.0.1:8000/documents/';
  urllabel = 'http://127.0.0.1:8000/labels/';
  urlexport = 'http://127.0.0.1:8000/export/';
  

  constructor(private http: HttpClient) {}

    getlabels(){
      return this.http.get(this.urllabel);
    }
    addDoc(data :any){
      return this.http.post(this.urldoc,data)
    }
    getDocumentText(){
      return this.http.get(this.urldoc)
    }
    getanotations(){
      return this.http.get(this.urlannotation)
    }
    postlabel(data:any){
      return this.http.post(this.urllabel,data)
    }
    createAnnotation(data:any){
      return this.http.post(this.urlannotation,data)
    }
    export(id:any){
      const url = `${this.urlexport}${id}`;
      return this.http.get(url)
    }

}
