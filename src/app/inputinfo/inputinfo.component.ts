import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
   
  selector : 'InputinfoComponent',
  templateUrl: './inputinfo.component.html',
  styleUrls: ['./inputinfo.component.css']
})

export class InputinfoComponent implements OnInit {
  text: any;

  disabled: boolean = false;

  string_name :string;

  string_phone :string;

  string_address :string;



  constructor() { }

  ngOnInit(): void {
  }



  getVal(item){

    this.string_name= item.target.value;
     
    console.log(this.string_name);
  }

  save_value(){
    console.log("value saved");
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
}
}