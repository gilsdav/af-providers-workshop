import { Injectable } from "@angular/core";
import { AuthAbstractService } from "./auth.abstract";

@Injectable()
export class AuthService extends AuthAbstractService {
	override getUserAuth(): boolean {
		return true;
	}

}
