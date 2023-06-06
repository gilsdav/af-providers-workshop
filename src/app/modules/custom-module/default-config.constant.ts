import { DefaultGuard } from "./guards/default-guard.guard";
import { UserService } from "./services/user.service";
import { Config } from "./types/config.type";

export const defaultConfig: Config = {
	mode: 'light',
	enableGuard: false,
	altGuard: DefaultGuard,
	userService: UserService
}
