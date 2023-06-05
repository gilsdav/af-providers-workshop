import { Inject, Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Config, MODULE_CONFIG } from "../types/config.type";

@Injectable()
export class DefaultGuard implements CanActivate {

	constructor(@Inject(MODULE_CONFIG) private config: Config,
		private router: Router) {
	}

	canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		console.log('Default Guard');

		return this.config?.enableGuard ? this.router.navigate(['error']) : true;
	}


}
