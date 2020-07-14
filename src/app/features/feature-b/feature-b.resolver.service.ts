import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

export class FeatureBResolverData {
  resolvedData: string;
}

export class FeatureBResolverService implements Resolve<FeatureBResolverData> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FeatureBResolverData> {
    // logic goes here
    return new Observable<FeatureBResolverData>(subscriber => {
      subscriber.next({
        resolvedData: 'OK'
      } as FeatureBResolverData);
      subscriber.complete();
    });
  }
}
