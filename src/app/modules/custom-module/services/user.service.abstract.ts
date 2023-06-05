import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { UserModel } from '../models/user.model';

/**
 * Abstract class that describe how should look the service used to manage the USERS ENTITIES
 */
@Injectable()
export abstract class UserServiceAbstract {

	public abstract getUser(): Observable<UserModel>;

}
