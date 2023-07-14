import { Component } from '@angular/core';
import { IconProp, library, findIconDefinition, IconName, icon } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-icon-button',
    templateUrl: './icon-button.component.html',
    styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent {
    randomIcon: IconProp | null = null;
    allIcons: IconName[];

    constructor() {
        library.add(fas);
        this.allIcons = Object.keys(fas).filter(icon => fas[icon].prefix === 'fas') as IconName[];
    }

    showRandomIcon(): void {
        this.randomIcon = null;
        const randomIndex = Math.floor(Math.random() * this.allIcons.length);
        const iconName = this.allIcons[randomIndex];
        const iconDefinition = icon(fas[iconName]);

        if (iconDefinition) {
            this.randomIcon = iconDefinition;
        }
        setTimeout(() => {
            this.randomIcon = null;
        }, 3000);
    }
}