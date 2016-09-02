import { Component }            from '@angular/core';
import { OnInit }               from '@angular/core';

import { MainViewModel }        from './main.vmodel';
import { HeadQuarterService }   from './headquarter.service';
import { TroopList }            from './troop-list.model';
import { DefenseList }          from './defense-list.model'
import { MESSAGE }              from './message.mock';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [ HeadQuarterService ]
})

export class AppComponent implements OnInit { 
  title = 'TBR - Headquarters';
  vm: MainViewModel;

  constructor( private headquarterService : HeadQuarterService ) { }

  ngOnInit(): void {
    this.vm = {
      message: MESSAGE,
      member: 'fc',
      troopList: [],
      defenseList: []
    };
  }

  onSubmit() : void {
    this.getTroopList();
    
    this.getDefenseList();
  }

  getTroopList(): void {
    this.vm.troopList = this.headquarterService
      .getTroopList(this.vm.message, this.vm.member);
  }

  getDefenseList(): void {
    this.vm.defenseList = this.headquarterService
      .getDefenseList(this.vm.message, this.vm.member);
  }
}