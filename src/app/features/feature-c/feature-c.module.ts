import { NgModule } from '@angular/core';
import { FeatureC } from './feature-c';
import { FeatureCRoutingModule } from './feature-c-routing.module';

@NgModule({
  declarations: [
    FeatureC,
  ],
  imports: [
    FeatureCRoutingModule
  ],
  providers: []
})
export class FeatureCModule { }
