import { DefaultGuard } from "./guards/default-guard.guard";
import { Config } from "./types/config.type";

export const defaultConfig: Config = {
	mode: 'light',
	enableGuard: false,
	altGuard: DefaultGuard
}
