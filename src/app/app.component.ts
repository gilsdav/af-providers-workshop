import { Component, inject, OnInit } from '@angular/core';
import { LoggerService } from './modules/logger-module/logger.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'providers-demo';
	logger = inject(LoggerService);
	ngOnInit(): void {
		this.logger.log('hello you !');
	}
}
