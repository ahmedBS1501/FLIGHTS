import { Component } from '@angular/core';
import { AvionService } from '../avion.service';
import { Avion } from '../Model/Avion';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-avions',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-avions.component.html',
  styleUrl: './list-avions.component.css'
})
export class ListAvionsComponent {

  listAvions : Avion[] = [] ;
  

  constructor(private avionService : AvionService , private router : Router){}


  ngOnInit() {
    
    this.avionService.getAvions().subscribe(response => {
      this.listAvions = response;
      console.log('list avions   :', this.listAvions);
    });

    
  }


  
  getAvionDetails(numAvion : number){    
    this.router.navigate(['avion_details',numAvion]);
  }

}
