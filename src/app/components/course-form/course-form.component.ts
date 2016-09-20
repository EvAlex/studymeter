import { Component, OnInit } from '@angular/core';

import { Course } from '../../models/course';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
    model: Course;

    constructor() {
        this.model = new Course();
    }

    ngOnInit() {
    }

}
