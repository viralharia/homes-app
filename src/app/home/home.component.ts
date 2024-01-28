import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <input #filterBox type="text" placeholder="Filter by city">
      <button class="primary" type="buttton" (click)="filterResults(filterBox.value)">Search</button> 
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation 
      of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList!: HousingLocation[];
  filteredLocationList!: HousingLocation[];

  constructor(private housingService:HousingService){
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults1(searchTerm: string) {
    console.log("ha ha ha ha");
  }

  filterResults(searchTerm: string) {
    if (!searchTerm) {
      console.log(`inside if: ${searchTerm}`);
      this.filteredLocationList = this.housingLocationList;
    }

    

    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }



  
}
