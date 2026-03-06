import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-fils',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './fils.component.html',
  styleUrl: './fils.component.scss'
})
export class FilsComponent {

  data: string[] = [];
  valfils: string = '';

  @Input() valeurDParent: string = '';
  @Output() valeurFilsEvent = new EventEmitter<string>();

  constructor(public service: ServiceService) {}

  EmitterUneValeur() {
    this.valeurFilsEvent.emit(this.valfils);

    this.service.addData(this.valfils);

    this.valfils = '';
  }

  afficherdata() {
    this.data = this.service.getData();
    console.log(this.data);
  }
}