import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AlternativeGuard implements CanActivate {

	constructor(private router: Router) {
	}

	canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		console.log('Alternative Guard');

		return this.router.navigate(['error']);
	}


}
