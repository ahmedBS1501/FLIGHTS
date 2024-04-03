import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PiloteService } from '../pilote.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pilote-details',
  standalone: true,
  imports: [NgFor ],
  templateUrl: './pilote-details.component.html',
  styleUrl: './pilote-details.component.css'
})
export class PiloteDetailsComponent {

  numPilote : any ;
  listVols : any[] = [] ;

constructor (private piloteService : PiloteService , private ActivatedRoute: ActivatedRoute){

  this.numPilote = this.ActivatedRoute.snapshot.params['NumPilote'];
  console.log(this.numPilote);

}

ngOnInit() {    
   
  this.piloteService.getVolsByPilote(this.numPilote).subscribe(response => {
    this.listVols = response ;
    console.log('list vols by pilote :', this.listVols);
  
  })


}
}
