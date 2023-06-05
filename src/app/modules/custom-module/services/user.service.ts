import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserService {

	public getUser(): Observable<UserModel> {
		return of(new UserModel({
			firstName: 'Silvester',
			lastName: 'Stalline'
		}));
	}

}
