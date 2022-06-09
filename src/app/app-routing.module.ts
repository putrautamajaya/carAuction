import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'log-in', component: LoginComponent },
  // { path: 'home', canActivate: [AuthGuardService], component: DashboardComponent },
  // { path: 'project-history', canActivate: [AuthGuardService], component: ProjectHistoryComponent },
  // { path: 'project-brief', canActivate: [AuthGuardService], component: ProjectBriefComponent },
  // { path: 'project-brief/:id/:type', canActivate: [AuthGuardService], component: ProjectBriefComponent },
  // { path: 'manage-video/:projectId/:fileId/:videoName', canActivate: [AuthGuardService], component: VideoEditorComponent },
  // { path: 'create-project', canActivate: [AuthGuardService], component: CreateProjectComponent },
  // { path: 'create-project/:id', canActivate: [AuthGuardService], component: CreateProjectComponent },
  // { path: 'help', canActivate: [AuthGuardService], component: HelpComponent },
  // { path: 'settings', canActivate: [AuthGuardService], component: SettingsComponent },
  { path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
