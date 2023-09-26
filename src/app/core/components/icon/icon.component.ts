import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnChanges {
    @Input() iconId!: string;
    @Input() iconSize = 46;
    public iconUrl = '';

    ngOnChanges(changes: SimpleChanges): void {
        const icon = changes['iconId'].currentValue;
        this.iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;
    }
}
