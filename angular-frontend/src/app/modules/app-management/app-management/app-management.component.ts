import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './app-management.component.html',
  styleUrls: ['./app-management.component.scss']
})
export class AppManagementComponent implements OnInit {

  showFiller: boolean = true;
  opened: boolean= true;

  constructor() { }

  ngOnInit() {
  }

}
