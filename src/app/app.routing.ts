import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/courses',
        pathMatch: 'full'
    },
    {
        path: 'courses',
        component: CoursesListComponent
    },
    {
        path: 'courses/create',
        component: CourseFormComponent
    },
    {
        path: 'courses/:id',
        component: CourseDetailsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
