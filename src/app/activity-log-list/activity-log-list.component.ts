import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityLogComponent } from '../activity-log/activity-log.component';

@Component({
  selector: 'app-activity-log-list',
  standalone: true,
  imports: [CommonModule, ActivityLogComponent],
  templateUrl: './activity-log-list.component.html',
  styleUrl: './activity-log-list.component.scss'
})
export class ActivityLogListComponent{
  @Input()
  activityLogs: any
  constructor() { }

}
