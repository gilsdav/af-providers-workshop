import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './containers';
import { DefaultGuard } from './guards/default-guard.guard';

const routes: Routes = [
	{
		path: '',
		component: MainComponent,
		canActivate: [DefaultGuard]
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CustomModuleRoutingModule {

}
