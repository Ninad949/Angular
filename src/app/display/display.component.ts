import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database/databaseservice';

import { IDatabase } from '../database/database';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  database :IDatabase [];


  constructor (private dbservice: DatabaseService) { }

  ngOnInit() {
    this.dbservice.getCarsSmall().then(databse => this.database = databse);
}
  

}
