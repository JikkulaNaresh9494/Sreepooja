import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-steps-items',
  templateUrl: './life-steps-items.component.html',
  styleUrls: ['./life-steps-items.component.css']
})
export class LifeStepsItemsComponent implements OnInit {
  constructor() { }
  data = [];

  ngOnInit() {
    let desc="According to the Hindu Culture,Engagement According to the Hindu Culture,Engagement";
    for (var i = 6; i <= 7; i++) {
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
