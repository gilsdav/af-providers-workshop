import { Injectable } from '@angular/core';
import { AuthAbstractService } from './auth.abstract';
import { AuthService } from './auth.service';

@Injectable()
export class AuthenticationLoggerService {

	constructor(private authService: AuthService) {
	}

	public logAuthentication(): void {
		this.authService.getUserAuth() ? console.log('Authentication ok') : console.error('Need to be authenticated')
	}

}
