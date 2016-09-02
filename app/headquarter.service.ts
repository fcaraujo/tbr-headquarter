import{ Injectable }    from '@angular/core';
import * as _           from 'lodash';

import { TroopList }    from './troop-list.model';
import { DefenseList }  from './defense-list.model';

@Injectable()
export class HeadQuarterService {
    getTroopList(message: string, member: string) : TroopList[] 
    {
        // prevent null input
        if( !_.isString(message) || _.isEmpty(message) || 
            !_.isString(member) || _.isEmpty(member)
        )
        {
            return;
        }

        console.log('lodash version: ', _.VERSION);

        return [];
    };

    getDefenseList(message: string, member: string) : DefenseList[] 
    {
        return [];
    }
}