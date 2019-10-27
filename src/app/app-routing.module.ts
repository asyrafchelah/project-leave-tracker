import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'leave-request-form', loadChildren: './leave-request-form/leave-request-form.module#LeaveRequestFormPageModule' },
  { path: 'leave-details-form', loadChildren: './leave-details-form/leave-details-form.module#LeaveDetailsFormPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
