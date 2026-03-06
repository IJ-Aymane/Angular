import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FilsComponent } from './fils/fils.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,FilsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test11';
  valparent:string = ''
  valf:String = ''

  valeurDfils(event:any){
     this.valf=event
  }
}
