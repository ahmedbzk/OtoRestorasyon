import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
isVisible = true;
  @Output() destroyed = new EventEmitter<void>();
  
 ngOnInit() {
    setTimeout(() => {
      this.isVisible = false;
      this.destroyed.emit(); // Ana sayfaya haber ver
    }, 3000); //
  }
}