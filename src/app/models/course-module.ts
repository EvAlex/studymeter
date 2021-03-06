import { CourseModuleTask } from './course-module-task';

export class CourseModule {
    name: string;
    description: string;
    tasks: CourseModuleTask[] = [];

    constructor(name?: string) {
        this.name = name;
    }

    get totalValue(): number {
        return this.tasks
            .map(t => Number(t.value))
            .filter(v => !isNaN(v))
            .reduce((p, c) => p + c, 0);
    }
}
