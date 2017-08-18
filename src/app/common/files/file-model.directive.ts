import { Directive, Input, Output, EventEmitter, HostListener, ElementRef, forwardRef } from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor, Validators, NgModel } from "@angular/forms";

const FILE_MODEL_VALUE_ACCESSOR:any = {
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => FileModel)
};

const noop = (): void => {};

@Directive({
  selector: 'input[file-model][type=file],input[fileModel][type=file]',
  providers: [
    FILE_MODEL_VALUE_ACCESSOR
  ]
})
export class FileModel {
  @Input()  private fileModel :FileList;
  @Output() private fileModelChange = new EventEmitter<FileList>();

  private el: HTMLInputElement;
  private onChange:any = noop;

  @HostListener('blur')
  private onBlur:any = noop;

  constructor(ref: ElementRef) {
    this.el = ref.nativeElement;
  }

  @HostListener('change', ['$event.target.files'])
  handleReadFile(file:FileList) {
    if (!file) return;
    this.onChange(file);
    this.fileModelChange.emit(file);
  }

  writeValue(value: FileList) {
    // TODO check for type (wrap in try-catch block)
    this.handleReadFile(value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onBlur = fn;
  }
}
