import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

import { Course } from '../../models/course';
import { CourseModule } from '../../models/course-module';
import { CourseModuleTask } from '../../models/course-module-task';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
    model: Course;
    selectedModule: CourseModule;
    selectedTask: CourseModuleTask;
    submitted: boolean;
    error: string;

    constructor(private router: Router, private af: AngularFire) {
        this.model = new Course();
        this.selectedModule = null;
        this.submitted = false;
        this.error = null;
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

    addTask(selectedModule: CourseModule): void {
        let task = new CourseModuleTask();
        task.name = `Task #${selectedModule.tasks.length + 1}`;
        selectedModule.tasks.push(task);
        if (this.selectedTask == null) {
            this.selectTask(task);
        }
    }

    selectTask(task: CourseModuleTask): void {
        this.selectedTask = task;
        this.updateMaterializeUi();
    }

    onSubmit(): void {
        this.submitted = true;
        this.af.database.list('Courses').push(this.model)
            .then(res => {
                this.router.navigate(['/courses', res.key]);
            }, err => {
                this.error = `Failed to save course. ${err}`;
            });
    }

    private updateMaterializeUi(): void {
        window.setTimeout(() => {
            window['$']('ul.tabs').tabs();
            window['Materialize'].updateTextFields();
        }); //  I was too lazy to wrap those into components
    }
}
