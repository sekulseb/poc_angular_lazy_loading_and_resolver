import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { FeatureC } from './feature-c';

const routes: Routes = [
  {
    path: '',
    component: FeatureC
  }
];

@NgModule({
  imports: [
    // The route list is only responsible for providing additional routes and is intended for feature modules.
    // ForChild() could be in multiple modules.
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FeatureCRoutingModule {
}
