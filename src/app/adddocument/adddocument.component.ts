import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adddocument',
  templateUrl: './adddocument.component.html',
  styleUrls: ['./adddocument.component.css']
})
export class AdddocumentComponent {
  document: string = ''; 
  constructor(private apiService : ApiService){}
onSubmit() {
  const  data = { text : this.document }; 
  this.apiService.addDoc(data).subscribe((response)=>{
    window.location.reload();    })
}
}