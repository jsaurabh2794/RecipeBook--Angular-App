import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') toggleOpen = false;

  constructor() { }

  @HostListener('click') toggleButton() {
    this.toggleOpen = !this.toggleOpen;
  }

}
/*HostBinding bind property when attribute is set to true.*/
