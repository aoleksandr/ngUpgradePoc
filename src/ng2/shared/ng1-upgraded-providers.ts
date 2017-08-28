import { MainService } from '../../ng1/main/main.service';

export function mainServiceFactory(injector: any) {
  // 'mainService' - name of ng1 service
  return injector.get('mainService');
}

export const mainServiceProvider = {
  provide: MainService,
  useFactory: mainServiceFactory,
  deps: ['$injector']
};