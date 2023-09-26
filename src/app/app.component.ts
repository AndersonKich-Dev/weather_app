import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="container" style="background-image: url(assets/images/nature.png)">
            <app-toast></app-toast>
            <app-header></app-header>
            <main class="content">
                <router-outlet></router-outlet>
            </main>
        </div>
    `,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'weather-app';
}
