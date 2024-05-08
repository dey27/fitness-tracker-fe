import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityLogComponent } from '../activity-log/activity-log.component';
import { ActivityLogService } from '../activity-log.service';

@Component({
  selector: 'app-activity-log-list',
  standalone: true,
  imports: [CommonModule, ActivityLogComponent],
  templateUrl: './activity-log-list.component.html',
  styleUrl: './activity-log-list.component.scss'
})
export class ActivityLogListComponent {
  response:any
  constructor(private service: ActivityLogService) {}
  ngOnInit() {
    this.service.getActivityLogs().subscribe((response) => {
      this.response = response
    })
  }
}