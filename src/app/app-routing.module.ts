import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
// import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LayoutLoginComponent } from './layouts/Login/login.component';
import { AppPreloader } from './app-routing-loader';
import { LayoutsModule } from './layouts/layouts.module';
// import { AppPreloader } from 'src/app/app-routing-loader'


const COMPONENTS = [LoginComponent];

const routes: Routes = [
  {
    path: '',
    component: LayoutLoginComponent,
    children: [
      { path: 'login', component: LoginComponent, data: { title: 'Login' } },
    //  { path: 'forgot', component: ForgotComponent, data: { title: 'Restore Password' } },
    ],
  },

]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: AppPreloader,
    }),
    LayoutsModule,
  ],
  providers: [AppPreloader],
  declarations: [...COMPONENTS],
  exports: [RouterModule],
})
export class AppRoutingModule {}
