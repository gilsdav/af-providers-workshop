import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { customModuleContainers } from './containers';
import { CustomModuleRoutingModule } from './custom-module-routing.module';
import { Config, MODULE_CONFIG } from './models/types/config.type';
import { defaultConfig } from './default-config.constant';



@NgModule({
    declarations: [
        ...customModuleContainers
    ],
    imports: [
        CommonModule,
        CustomModuleRoutingModule
    ]
})
export class CustomModuleModule {
    public static forRoot(config?: Config): ModuleWithProviders<CustomModuleModule> {

        const computedConfig: Config = config ? { ...defaultConfig, ...config } : defaultConfig;

        const module: ModuleWithProviders<CustomModuleModule> = {
            ngModule: CustomModuleModule,
            providers: [
                { provide: MODULE_CONFIG, useValue: computedConfig }
            ]
        }

        return module;
    }
}
