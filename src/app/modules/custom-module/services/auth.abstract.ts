import { Injectable } from "@angular/core";

@Injectable()
export abstract class AuthAbstractService {
	abstract getUserAuth(): boolean;
}