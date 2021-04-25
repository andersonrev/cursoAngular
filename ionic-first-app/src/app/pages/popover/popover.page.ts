import {Component, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {PopoverInfoComponent} from '../../components/popover-info/popover-info.component';

@Component({
    selector: 'app-popover',
    templateUrl: './popover.page.html',
    styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

    constructor(private popoverControler: PopoverController) {
    }

    ngOnInit() {
    }

    async presentPopover(ev?: any) {
        const popover = await this.popoverControler.create(
            {
                component: PopoverInfoComponent,
                event: ev,
                translucent: true,
                backdropDismiss: false
            }
        );
        await popover.present();

    }
}
