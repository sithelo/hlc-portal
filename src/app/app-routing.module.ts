import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
// import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LayoutLoginComponent } from './layouts/Login/login.component';
import { AppPreloader } from './app-routing-loader';
import { LayoutsModule } from './layouts/layouts.module';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterComponent } from './register/register.component';
// import { AppPreloader } from 'src/app/app-routing-loader'


const COMPONENTS = [LoginComponent, ForgotComponent, RegisterComponent];

const routes: Routes = [
  {
    path: '',
    component: LayoutLoginComponent,
    children: [
      { path: 'login', component: LoginComponent, data: { title: 'Login' } },
      { path: 'forgot', component: ForgotComponent, data: { title: 'Restore Password' } },
      { path: 'register', component: RegisterComponent, data: { title: 'Register new user' } },
    ],
  },

]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      preloadingStrategy: AppPreloader,
    }),
    LayoutsModule,
  ],
  providers: [AppPreloader],
  declarations: [...COMPONENTS],
  exports: [RouterModule],
})
export class AppRoutingModule { }
