import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes
} from '@angular/router';
import { FeatureA } from './features/feature-a';
import { FeatureBModule } from './features/feature-b';
import { FeatureCModule } from './features/feature-c';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: FeatureA
  },
  {
    path: 'feature-b',
    loadChildren: () => import('./features/feature-b').then((module: {
      FeatureBModule: FeatureBModule
    }) => module.FeatureBModule)
  },
  {
    path: 'feature-c',
    loadChildren: () => import('./features/feature-c').then((module: {
      FeatureCModule: FeatureCModule
    }) => module.FeatureCModule)
  }
];

@NgModule({
  imports: [
    // forRoot - use only ones in app
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules // uncomment this to preload all modules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
