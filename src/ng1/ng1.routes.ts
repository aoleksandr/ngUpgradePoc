import layout from './layout.tpl.html';

export default ($stateProvider) => {
  $stateProvider.state({
    name: 'app',
    redirectTo: 'main',
    template: layout,
  });

  $stateProvider.state({
    parent: 'app',
    name: 'main',
    url: '/',
    component: 'mainPage'
  });
}