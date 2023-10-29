import { Component } from '@angular/core';
import { ApiService } from '../api.service';

interface Document {
  id: number;
  text: string;
}

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.css']
})

export class AnnotationComponent {
  documents!: any ;
  selectedLabel: any  | undefined;
  start: number | undefined;
  end: number | undefined;
  text: string | undefined
  labels: any ; 
  selectedDocument: any;

  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    this.labels = await this.apiService.getlabels().toPromise();
    console.log(this.labels);

    this.apiService.getDocumentText().subscribe((response: any) => {
      this.documents = response;
      console.log(this.documents);
    });
  }

  annotate() {
    console.log(this.selectedLabel);
    
    if (this.selectedDocument) {
      const annotationData = {
        document: this.selectedDocument.id,
        label: this.selectedLabel,
        start: this.start,
        end: this.end,
        text: this.text 
      };

      this.apiService.createAnnotation(annotationData).subscribe((data: any) => {
        console.log('Annotation created:', data);
      });
    }
  }
}
