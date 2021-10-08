import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
import {filter, tap} from 'rxjs/operators';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss']
})
export class CoursesCardListComponent implements OnInit {

  @Input()
  courses: Course[];

  @Output()
  private coursesChanged = new EventEmitter();

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  editCourse(course: Course) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    dialogConfig.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
    dialogRef.afterClosed()
      .pipe(
        filter(val => {
          console.log('pero vea', val);
          return val ? true : false;
        }),
        tap((valor) => {
          // acciones secundarias que se pueden realizar. eg: Guardar LocalStorage, emtiri evento, etc.
          // console.log('tab', valor); // imprime lo mismo del valor del filter cuadno es true.
          this.coursesChanged.emit();
        })
      )
      .subscribe();

  }

}
