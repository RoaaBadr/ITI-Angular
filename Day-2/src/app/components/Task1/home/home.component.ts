import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  department: string = 'All'
  // The Main Array
  itiTracks: { id: number, name: string, department: string }[];
  // New Array to Store the filtered data
  filteredData: { id: number, name: string, department: string }[];

  constructor() {
    // initial data for the main array
    this.itiTracks = [
    { id: 1, name: 'UI/UX Fundamentals', department: 'Design' },
    { id: 2, name: 'Advanced Java', department: 'Java' },
    { id: 3, name: 'Operating Systems Basics', department: 'OS' },
    { id: 4, name: 'System Design Essentials', department: 'SD' },
    { id: 5, name: 'Web Design Tools', department: 'Design' },
    { id: 6, name: 'Multithreading in Java', department: 'Java' },
    { id: 7, name: 'Linux Administration', department: 'OS' },
    { id: 8, name: 'Design Patterns', department: 'SD' },
  ]
    // initial data for the filtered array
    this.filteredData = this.itiTracks;
  }
  filterTrack() {
    console.log(this.department) // display selected dept.

    // handle 'All' filter to diplay all tracks, else filter() data
    this.filteredData = (this.department == 'All')? this.itiTracks : this.itiTracks.filter(
      (track) => track.department == this.department
    )
  }
}
