import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const hamBurger = document.querySelector<HTMLButtonElement>(".toggle-btn");
    const sidebar = document.querySelector<HTMLElement>("#sidebar");

    if (hamBurger && sidebar) {
      hamBurger.addEventListener("click", () => {
        sidebar.classList.toggle("expand");
      });
    }
  }

}
