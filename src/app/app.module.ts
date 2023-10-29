import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLabelComponent } from './add-label/add-label.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AnnotationComponent } from './annotation/annotation.component';
import { ExportJsonComponent } from './export-json/export-json.component';
import { AdddocumentComponent } from './adddocument/adddocument.component';
@NgModule({
  declarations: [
    AppComponent,
    AddLabelComponent,
    AnnotationComponent,
    ExportJsonComponent,
    AdddocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule ,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
