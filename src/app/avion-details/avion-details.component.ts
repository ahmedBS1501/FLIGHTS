import { Component } from '@angular/core';
import { AvionService } from '../avion.service';
import { Vol } from '../Model/Vol';
import { ActivatedRoute} from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-avion-details',
  standalone: true,
  imports: [NgFor],
  templateUrl: './avion-details.component.html',
  styleUrl: './avion-details.component.css'
})
export class AvionDetailsComponent {
  

  listVols : any[] = [] ;
  numAvion: any;
  constructor(private avionService : AvionService , private ActivatedRoute: ActivatedRoute ){
    
    this.numAvion = this.ActivatedRoute.snapshot.params['numAvion'];
    console.log(this.numAvion);
  
  }


  ngOnInit() {    
   
    this.avionService.getVolsByAvion(this.numAvion).subscribe(response => {
      this.listVols = response ;
      console.log('list vols by avion num :', this.listVols);
    
    })



  

 
}

}
