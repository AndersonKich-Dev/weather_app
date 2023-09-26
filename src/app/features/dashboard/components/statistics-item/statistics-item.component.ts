import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-statistics-item',
    templateUrl: './statistics-item.component.html',
    styleUrls: ['./statistics-item.component.scss'],
})
export class StatisticsItemComponent {
    @Input() info!: string;
    @Input() data!: string;
    @Input() temp!: number;
}
