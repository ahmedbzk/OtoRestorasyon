import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-referances-overview',
  standalone: true,
  imports: [LucideAngularModule,CommonModule],
  templateUrl: './referances-overview.component.html',
  styleUrl: './referances-overview.component.scss'
})
export class ReferancesOverviewComponent {
  logos: string[] = [
      'aspock.jpg', 'blacktech.jpg', 'blue.png', 'bosch.jpg', 
      'corteco.jpg', 'daf.png', 'delphi.jpg', 'elring.jpg', 
      'haidex.jpg', 'knorr.jpg', 'kongsberg.jpg', 'man.jpg', 
      'maysan.jpg', 'mctclli.png', 'mercedes.jpg', 'meritor.jpg', 
      'neoplann.png', 'retro.png', 'scania.png', 'vdl.jpg', 
      'voith.jpg', 'volvo.jpg', 'warco.jpg'
    ];
}
