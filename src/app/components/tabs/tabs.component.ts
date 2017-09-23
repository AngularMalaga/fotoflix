import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() tabs:Array<any> = [];
  @Output('onTabsSelectedChange') onTabSelectedChange: EventEmitter<number> = new EventEmitter<number>();

  public activeTab:number = 0;
  

  constructor() { }

  ngOnInit() {
  }

  changeActiveTab(index){
    this.activeTab = index;
    this.onTabSelectedChange.emit(index);
  }

}
