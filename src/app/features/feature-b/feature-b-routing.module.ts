import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { FeatureB } from './feature-b';
import { FeatureBResolverService } from './feature-b.resolver.service';

const routes: Routes = [
  {
    path: '',
    component: FeatureB,
    resolve: {
      dataFromFeatureBResolver: FeatureBResolverService
    }
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
export class FeatureBRoutingModule {
}
