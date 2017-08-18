import { Pipe } from "@angular/core";
import {DomSanitizer, SafeUrl, SafeHtml, SafeScript, SafeStyle, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
	name: 'unsafe'
})
export class UnSafePipe {

	constructor(private _sanitizer: DomSanitizer)  {}

	public transform(value: string, type: string = 'html'): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
		switch (type) {
			case 'html': return this._sanitizer.bypassSecurityTrustHtml(value);
			case 'style': return this._sanitizer.bypassSecurityTrustStyle(value);
			case 'script': return this._sanitizer.bypassSecurityTrustScript(value);
			case 'url': return this._sanitizer.bypassSecurityTrustUrl(value);
			case 'resourceUrl': return this._sanitizer.bypassSecurityTrustResourceUrl(value);
			default: throw new Error(`Invalid safe type specified: ${type}`);
		}
	}

}
