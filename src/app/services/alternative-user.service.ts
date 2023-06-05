import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '../modules/custom-module/models/user.model';

@Injectable()
export class AlternativeUserService {

	public getUser(): Observable<UserModel> {
		return of(new UserModel({
			firstName: 'John',
			lastName: 'Lenine'
		}));
	}

}
