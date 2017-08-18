import { Component, Input } from "@angular/core";

@Component({
  selector: 'vp-modal',
  template: `<div class="vp-modal" [hidden]="!active">
      <div class="modal-content" [style.width]="width" [style.height]="height">
        <div class="modal-head">
          <ng-content selector="[modal-head]"></ng-content>
          <span class="modal-close" >
            <a href="#" class="modal-close-button" (click)="close()">&times;</a>
          </span>
        </div>
        <div class="modal-body">
          <ng-content selector="[modal-body]"></ng-content>
        </div>
      </div>
    <div class="modal-background" (click)="close()"></div>
  </div>`,
  styles: [
    `.modal-background { position: fixed; top: 0; bottom: 0; right:0; left: 0; z-index: 1000; background-color: #000;
        opacity: 0.75; cursor:pointer;}
     .modal-content { position: absolute; top: 10%; left: 50%; transform: translate(-50%, -10%); background-color: #fff; opacity:1; z-index: 1001;}
     .modal-body { padding: 15px; }
     .modal-head { padding: 0 15px; }
     .modal-close { position: absolute; top:10px; right: 10px; padding: 10px; z-index: 1002;}
     .modal-close-button { padding: 15px; }
     .vp-modal { position: fixed; top:0; bottom:0; left: 0; right:0;}
    `
  ]
})
export class VpModal {
  @Input() active: boolean = false;
  @Input() title:string;

  @Input() private width:string = "640px";
  @Input() private height:string;

  open() {
    this.active = true;
  }

  close() {
    this.active = false;
  }
}
