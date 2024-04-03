import { Component } from '@angular/core';
import { Pilote } from '../Model/Pilote';
import { Router } from '@angular/router';
import { PiloteService } from '../pilote.service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-list-pilotes',
  standalone: true,
  imports: [NgFor , NgClass],
  templateUrl: './list-pilotes.component.html',
  styleUrl: './list-pilotes.component.css'
})
export class ListPilotesComponent {
  listPilotes : Pilote[] = [] ;
  isRowHovered: boolean = false;


  constructor(private piloteService : PiloteService , private router : Router ){}

  ngOnInit() {
    this.piloteService.getPilotes().subscribe(response => {
      this.listPilotes = response;
      console.log('list Pilotes   :', this.listPilotes);
    });

  }

  getPilotenDetails(NumPilote : number){
    this.router.navigate(['Pilote_details',NumPilote]);
  }

  onMouseOver(): void {
    this.isRowHovered = true;
  }

  onMouseLeave(): void {
    this.isRowHovered = false;
  }
}
