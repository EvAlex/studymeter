import { Component, OnInit } from '@angular/core';

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

    private updateMaterializeUi(): void {
        window.setTimeout(() => {
            window['$']('ul.tabs').tabs();
            window['Materialize'].updateTextFields();
        }); //  I was too lazy to wrap those into components
    }
}
