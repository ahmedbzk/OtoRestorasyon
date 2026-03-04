import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-motto-overview',
  standalone: true,
  imports: [LucideAngularModule,CommonModule],
  templateUrl: './motto-overview.component.html',
  styleUrl: './motto-overview.component.scss'
})
export class MottoOverviewComponent {

}
