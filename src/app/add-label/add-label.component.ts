import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-label',
  templateUrl: './add-label.component.html',
  styleUrls: ['./add-label.component.css']
})
export class AddLabelComponent {
  label: string = ''; 
    constructor(private apiService : ApiService){}
  onSubmit() {
    const  data = { text : this.label }; 
    this.apiService.postlabel(data).subscribe((response)=>{
      window.location.reload();    })
}
}