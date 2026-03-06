import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FilsComponent } from './fils/fils.component';
import { ServiceService } from './service/service.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, FilsComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  data: string[] = [];
  title = 'test11';

  valparent: string = '';
  valf: string = '';

  valeurDfils(event: string) {
    this.valf = event;
  }




    constructor(public service: ServiceService) {}
  
    add(){
      this.service.addData(this.valparent);
      this.valparent = '';
    }

    
  
    afficherdata() {
      this.data = this.service.getData();
      console.log(this.data);
    }

}