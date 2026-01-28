import { Component } from '@angular/core';
import {
  NgbNav,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLinkButton,
  NgbNavLinkBase,
} from '@ng-bootstrap/ng-bootstrap/nav';

@Component({
  selector: 'nav-basic',
  imports: [NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLinkButton, NgbNavLinkBase],
  styleUrl: './nav-basic.scss',
  templateUrl: './nav-basic.html',
})
export class NavBasic {
  activeId = 1;
}