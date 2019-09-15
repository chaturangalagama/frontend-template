import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent, SimpleLayoutWithHeightComponent } from './core/components/containers';
import { AuthGuardService as AuthGuard } from './core/services/util-services/auth-guard.service';
import { PermissionsGuardService as PermissionsGuard } from './core/services/util-services/permissions-guard.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'pages',
    component: FullLayoutComponent,
    canActivate: [AuthGuard, PermissionsGuard],
    children: [
      {
        path: 'views',
        loadChildren: './domain/views/views.module#ViewsModule'
      }
    ]
  },
  {
    path: '',
    component: SimpleLayoutWithHeightComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './core/components/basic-pages/basic-pages.module#BasicPagesModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/pages'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', useHash: true, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


