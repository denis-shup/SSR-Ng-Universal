import { Component, Input} from '@angular/core';
import { ITask } from '../../interface/task-interface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task: ITask;
}
