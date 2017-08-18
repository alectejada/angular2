import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'ev-file-drop',
  template: `
    <div (click)="file.click()">
      <input #file type="file" hidden file-model (fileModelChange)="handleLoadFile($event)"/>
      <div>
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class EvFileDrop {

  @Input() files: FileList;
  @Output() filesChange = new EventEmitter<any>();

  @Input() fileOver:boolean;
  @Output() fileOverChange = new EventEmitter<boolean>();

  private el: HTMLElement;

  constructor(ref: ElementRef) {
    this.el = ref.nativeElement;
  }

  handleLoadFile(files:FileList) {
    this.filesChange.emit(files);
    this.readFiles(files);
  }

  @HostListener('drop', ["$event"])
  onDrop($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    let transfer = $event.dataTransfer;
    this.fileOverChange.emit(false);

    if (!transfer || !transfer.files) {
      return;
    }

    this.filesChange.emit(transfer.files);
    this.readFiles(transfer.files);
  }

  readFiles(files: FileList) {
    let promises = [];
    let file: File;

    for (let ii =0; ii < files.length; ii++) {
        file = files[ii];
        promises.push(this.readFile(file));
    }

    Promise.all(promises).then((files) => {
        this.filesChange.emit(files);
    });
  }

  readFile(file:any) {
    return new Promise((resolve, reject) => {
        let reader:FileReader = new FileReader();
        file.isLoaded = false;

        reader.onloadend = (evt:ProgressEvent) => {
          file.base64 = reader.result;
          file.isLoaded = true;
          resolve(file);
        };

        reader.onerror = (evt: ErrorEvent) => {
          file.hasReadError = true;
          resolve(file);
        };

        reader.readAsDataURL(file);
    });
  }

  @HostListener('dragover', ["$event"])
  onDragover($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    let transfer = $event.dataTransfer;
    if (!transfer.types || transfer.types.indexOf('Files') === -1) {
      return;
    }
    this.fileOverChange.emit(true);
  }

  @HostListener('dragleave', ["$event"])
  onDragLeave($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    this.fileOverChange.emit(false);
  }
}
