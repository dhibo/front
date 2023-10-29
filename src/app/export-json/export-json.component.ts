import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-export-json',
  templateUrl: './export-json.component.html',
  styleUrls: ['./export-json.component.css']
})
export class ExportJsonComponent {
  documents : any ;
  selectedDocument : any ; 
  exportedData : any ; 
  constructor(private apiService: ApiService) { }
  async ngOnInit(){
    this.apiService.getDocumentText().subscribe((response: any) => {
      this.documents = response;
      console.log(this.documents);
    });

  }
  export(document:any){
    this.apiService.export(document.id).subscribe((response)=>{
      this.exportedData = response ; 
    })
  }
}
