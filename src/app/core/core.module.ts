import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { IconComponent } from './components/icon/icon.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
    declarations: [HeaderComponent, IconComponent, ToastComponent],
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
    exports: [HeaderComponent, IconComponent, ToastComponent],
})
export class CoreModule {}
