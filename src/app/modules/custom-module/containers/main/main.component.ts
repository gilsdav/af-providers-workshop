/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Inject, OnInit } from '@angular/core';
import { Config, DarkLightMode, MODULE_CONFIG, USER_SERVICE } from '../../types/config.type';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

	public mode!: DarkLightMode;
	public user$!: Observable<UserModel>;

	constructor(
		@Inject(MODULE_CONFIG) private config: Config,
		@Inject(USER_SERVICE) private userService: UserService) {
		this.mode = this.config.mode!;
	}

	ngOnInit(): void {
		this.user$ = this.userService.getUser();
	}

}
