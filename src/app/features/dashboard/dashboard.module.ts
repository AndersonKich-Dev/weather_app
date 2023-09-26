import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { SideInformationComponent } from './components/side-information/side-information.component';
import { StatisticsCardComponent } from './components/statistics-card/statistics-card.component';
import { SharedModule } from '../../shared/shared.module';
import { StatisticsItemComponent } from './components/statistics-item/statistics-item.component';
import { ForecastItemComponent } from './components/forecast-item/forecast-item.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
    declarations: [
        DashboardComponent,
        MainScreenComponent,
        SideInformationComponent,
        StatisticsCardComponent,
        StatisticsItemComponent,
        ForecastItemComponent,
    ],
    imports: [CommonModule, DashboardRoutingModule, SharedModule, CoreModule],
})
export class DashboardModule {}
