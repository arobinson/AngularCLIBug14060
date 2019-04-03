import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const genAppRoutes: Routes = [
  // Begin gen-apps
  // { path: 'a', loadChildren: '../app-a/app-a.module#AppAModule' }
  // { path: 'b', loadChildren: '../app-b/app-b.module#AppBModule' }
  // End gen-apps
];

export const genAppRouting: ModuleWithProviders = RouterModule.forChild(genAppRoutes);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    genAppRouting
  ]
})
export class GenAppsLazyModule { }
