/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Inject, OnInit } from '@angular/core';
import { Config, DarkLightMode, MODULE_CONFIG } from '../../types/config.type';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

	public mode!: DarkLightMode;

	constructor(@Inject(MODULE_CONFIG) private config: Config) {
		this.mode = this.config.mode!;
	}

	ngOnInit(): void { }

}
