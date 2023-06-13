import { Injectable } from "@angular/core";
import { AuthAbstractService } from "../modules/custom-module/services/auth.abstract";
@Injectable()
export class AltAuthService extends AuthAbstractService {

	override getUserAuth(): boolean {
		return false;
	}

}
