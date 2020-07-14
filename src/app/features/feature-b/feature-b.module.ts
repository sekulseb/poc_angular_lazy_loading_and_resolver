import { NgModule } from '@angular/core';
import { FeatureB } from './feature-b';
import { FeatureBRoutingModule } from './feature-b-routing.module';
import { FeatureBResolverService } from './feature-b.resolver.service';

@NgModule({
  declarations: [
    FeatureB,
  ],
  imports: [
    FeatureBRoutingModule
  ],
  providers: [
    FeatureBResolverService
  ]
})
export class FeatureBModule { }
