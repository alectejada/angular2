import {
  Component,
  Directive,
  Input,
  DoCheck,
  ViewContainerRef,
  TemplateRef
} from "@angular/core";

@Component({
  selector: 'ev-messages',
  template: `<div class="ev-messages-wrapper">
    <ng-content selector="[ev-message],[evMessage]"></ng-content>
  </div>`
})
export class EvMessages  {
  @Input()
  private errors:any;

  hideError(key:string):boolean {
    return !this.errors  ||  !this.errors[key];
  }

}

@Directive({
    selector: "[ev-message],[evMessage]"
})
export class EvMessage implements DoCheck {
  @Input('evMessage')
  public err: string;
  public isInView: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private messages:EvMessages
  ) {}

  ngDoCheck() {
    if (this.messages.hideError(this.err)) {
      this.isInView = false;
      this.viewContainerRef.clear();
    } else if (!this.isInView) {
      this.isInView = true;
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
