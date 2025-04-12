import { Component, Input } from '@angular/core';
import { sharedImports } from '../../shared-imports';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  standalone: true,
  imports: [...sharedImports],
})
export class AlertComponent {
  @Input() message = '';
  @Input() type = 'succes';

  closeAlert() {
    const ele = document.getElementById('closealertcontainer');
    if (ele) ele.style.display = 'none';
  }

  openAlert() {
    let ele = document.getElementById('closealertcontainer');
    if (ele) ele.style.display = 'flex';
    ele = document.getElementById('closealert');
    if (ele)
      ele.style.cssText =
        'position: fixed; top: 0px; width: 100%; z-index: 2; display: flex;';
  }
}
