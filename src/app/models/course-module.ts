import { CourseModuleTask } from './course-module-task';

export class CourseModule {
    name: string;
    tasks: CourseModuleTask[] = [];

    constructor(name?: string) {
        this.name = name;
    }
}
