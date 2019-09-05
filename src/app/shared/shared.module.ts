import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

const MODULES = [CommonModule, RouterModule, ReactiveFormsModule, NgZorroAntdModule];
@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  declarations: [],
})
export class SharedModule { }
