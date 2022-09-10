import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'tutor-home-svg',
  templateUrl: './home.component.svg',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSvgComponent {
  @Input() color: string = '#94A3B8';
}
