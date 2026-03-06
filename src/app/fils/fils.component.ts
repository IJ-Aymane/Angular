import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fils',
  imports: [FormsModule],
  templateUrl: './fils.component.html',
  styleUrl: './fils.component.scss'
})
export class FilsComponent {
  valfils:string = ''
  @Input() valeurDParent:string =''
  @Output() valeurFilsEvent= new EventEmitter<String>()

  EmitterUneValeur(){
     this.valeurFilsEvent.emit(this.valfils)
  }
}
