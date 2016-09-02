import { TroopList }    from './troop-list.model';
import { DefenseList }  from './defense-list.model';

export class MainViewModel {
    message: string;
    member: string;
    troopList: TroopList[];
    defenseList: DefenseList[];
}