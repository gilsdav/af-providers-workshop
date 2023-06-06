import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserServiceAbstract } from './user.service.abstract';

@Injectable()
export class UserService extends UserServiceAbstract {

	public getUser(): Observable<UserModel> {
		return of(new UserModel({
			firstName: 'Silvester',
			lastName: 'Stalline'
		}));
	}

}
