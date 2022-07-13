import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  currentOption = '';

  constructor() { }

  ngOnInit(): void {
  }

  setOption(option: string) {
    this.currentOption = option;
  }

}
