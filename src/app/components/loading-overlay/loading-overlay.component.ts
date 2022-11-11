import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.css'],
})
export class LoadingOverlayComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.subscribeToLoading();
  }

  subscribeToLoading() {
    this.loadingService.isLoadingSubject.subscribe((isLoading) => {
      this.isLoading = isLoading;
      console.log(`Is loading değeri: ${isLoading}`);
    });
  }

  startLoading() {
    this.loadingService.startLoading();
  }
  stopLoading() {
    this.loadingService.stopLoading();
  }
}
