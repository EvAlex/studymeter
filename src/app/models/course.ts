import { CourseModule } from './course-module';

export class Course {
    name: string;
    modules: CourseModule[] = [];

    get totalValue(): number {
        return this.modules
            .map(t => Number(t.totalValue))
            .filter(v => !isNaN(v))
            .reduce((p, c) => p + c, 0);
    }
}
