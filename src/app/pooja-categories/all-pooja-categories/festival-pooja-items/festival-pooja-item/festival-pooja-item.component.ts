import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-festival-pooja-item',
  templateUrl: './festival-pooja-item.component.html',
  styleUrls: ['./festival-pooja-item.component.css']
})
export class FestivalPoojaItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() item;
}
