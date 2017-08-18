import { Directive, SimpleChanges, Input, forwardRef } from "@angular/core";
import { AbstractControl, Validator, NG_VALIDATORS } from "@angular/forms";

const FILE_VALIDATOR_ACCESSOR:any = {
  provide: NG_VALIDATORS,
  multi: true,
  useExisting: forwardRef( () => FileValidator )
};

@Directive({
  selector: 'input[type=file][ngModel][file-validator]',
  providers:[
    FILE_VALIDATOR_ACCESSOR
  ]
})
export class FileValidator implements Validator {
  @Input('fileValidator') validFormats: string = "jpg|jpeg|svg";

  validate(control:AbstractControl):{ [key:string]: any} {

    if (!(control.value instanceof File)) {
        return { file: "Not a file"};
    }

    let regx = new RegExp(`.*\\.(${this.validFormats})`);
    if (!regx.test(control.value.name)) {
      return { format : "Invalid format" };
    }

    return null;
  }
}
