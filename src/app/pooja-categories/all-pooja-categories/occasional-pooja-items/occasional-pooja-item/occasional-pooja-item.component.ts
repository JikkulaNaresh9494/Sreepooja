import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-occasional-pooja-item',
  templateUrl: './occasional-pooja-item.component.html',
  styleUrls: ['./occasional-pooja-item.component.css']
})
export class OccasionalPoojaItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() item;
}
