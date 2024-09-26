import { Component, computed, OnInit, signal, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {

  ngOnInit(): void {
    const hamBurger = document.querySelector<HTMLButtonElement>(".toggle-btn");
    const sidebar = document.querySelector<HTMLElement>("#sidebar");

    if (hamBurger && sidebar) {
      hamBurger.addEventListener("click", () => {
        sidebar.classList.toggle("expand");
      });
    }

  }


}
