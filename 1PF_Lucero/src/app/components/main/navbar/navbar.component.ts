import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  // @Output() toogleSidebar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
