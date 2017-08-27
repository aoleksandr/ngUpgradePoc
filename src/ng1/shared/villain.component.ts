import template from './villain.tpl.html';

class VillainComponent implements ng.IComponentOptions {
  public template = template;
  public controller = VillainController;
  public bindings = {
    placement: '<',
    btnHandler: '<',
  }
};

class VillainController implements ng.IComponentController {
  placement:string;
  btnHandler:any; // todo: find a good way of doing this

  constructor() {
  }

  onBtnClick() {
    this.btnHandler(`button clicked from ${this.placement}`);
  }
}

export default new VillainComponent();
