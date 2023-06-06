import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '../modules/custom-module/models/user.model';
import { UserServiceAbstract } from '../modules/custom-module/services/user.service.abstract';

@Injectable()
export class AlternativeUserService extends UserServiceAbstract {

	public getUser(): Observable<UserModel> {
		return of(new UserModel({
			firstName: 'John',
			lastName: 'Lenine'
		}));
	}

}
