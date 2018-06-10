import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-pooja-items',
  templateUrl: './special-pooja-items.component.html',
  styleUrls: ['./special-pooja-items.component.css']
})
export class SpecialPoojaItemsComponent implements OnInit {
  constructor() { }
  data = [];

  ngOnInit() {
    let desc="According to the Hindu Culture,Engagement According to the Hindu Culture,Engagement";
    for (var i = 2; i <= 4; i++) {
      var item = {
        heading: "Engagement" + i,
        imagepath: "../assets/images/" + i + '.jpg',
        imagepath1: "../assets/images/" + i + 'A- Copy.jpg',
        bigdescription:desc,
        smalldesc: desc.substr(0, 30)
      };
      this.data.push(item);
    }
  }
  
}
