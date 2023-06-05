import { ErrorComponent } from "./error/error.component";
import { MainComponent } from "./main/main.component";

export const customModuleContainers = [
	MainComponent,
	ErrorComponent
];

export * from "./main/main.component";
export * from "./error/error.component";
