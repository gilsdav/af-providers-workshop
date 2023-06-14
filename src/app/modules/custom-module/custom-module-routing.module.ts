import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent, MainComponent } from './containers';

const routes: Routes = [
	{
		path: '',
		component: MainComponent
	},
	{
		path: 'error',
		component: ErrorComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CustomModuleRoutingModule {

}
