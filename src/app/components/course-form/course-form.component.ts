import { Component, OnInit } from '@angular/core';

import { Course } from '../../models/course';
import { CourseModule } from '../../models/course-module';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
    model: Course;
    selectedModule: CourseModule;

    constructor() {
        this.model = new Course();
        this.selectedModule = null;
    }

    ngOnInit() {
        this.updateMaterializeUi();
    }

    addModule(): void {
        this.model.modules.push(new CourseModule(`Module #${this.model.modules.length + 1}`));
        if (this.selectedModule === null) {
            this.selectedModule = this.model.modules[0];
        }
        this.updateMaterializeUi();
    }

    private updateMaterializeUi(): void {
        window.setTimeout(() => {
            window['$']('ul.tabs').tabs();
            window['Materialize'].updateTextFields();
        });
    }
}
