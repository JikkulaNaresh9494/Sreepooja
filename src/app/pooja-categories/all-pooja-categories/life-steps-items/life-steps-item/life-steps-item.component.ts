import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-life-steps-item',
  templateUrl: './life-steps-item.component.html',
  styleUrls: ['./life-steps-item.component.css']
})
export class LifeStepsItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() item;
}
