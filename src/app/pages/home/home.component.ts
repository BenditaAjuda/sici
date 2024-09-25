import { Component, computed, OnInit, signal, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {

  collapsed: boolean = false; // Sidenav state (collapsed or not)

  // Toggle sidenav between full width and mini width
  toggleSidenav() {
    this.collapsed = !this.collapsed;
  }

}
