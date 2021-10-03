import {Component, OnInit} from '@angular/core';
import {Course, sortCoursesBySeqNo} from '../model/course';
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
import {catchError, delay, delayWhen, filter, finalize, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
import {CoursesService} from '../services/courses.service';
import {LoadingService} from '../loading/loading.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;


  constructor(private courseService: CoursesService,
              private loadService: LoadingService
  ) {

  }

  ngOnInit() {
    this.reloadCourses();

    /*    this.http.get('/api/courses')
          .subscribe(
            res => {

              const courses: Course[] = res['payload'].sort(sortCoursesBySeqNo);

              this.beginnerCourses = courses.filter(course => course.category == 'BEGINNER');

              this.advancedCourses = courses.filter(course => course.category == 'ADVANCED');

            });*/

  }

  reloadCourses() {
    const courses$ = this.courseService.loadAllCourses()
      .pipe(
        map(courses => courses.sort(sortCoursesBySeqNo)),
      );
    const loadCourses$ = this.loadService.showLoaderUntilCompleted(courses$);
    this.beginnerCourses$ = loadCourses$
      .pipe(
        map(courses => courses.filter(course => course.category === 'BEGINNER'))
      );

    this.advancedCourses$ = loadCourses$
      .pipe(
        map(courses => courses.filter(course => course.category === 'ADVANCED'),
        )
      );

  }


}




