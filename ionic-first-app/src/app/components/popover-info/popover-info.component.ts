import {Component, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
    selector: 'app-popover-info',
    templateUrl: './popover-info.component.html',
    styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {
    items = Array(40);

    constructor(private popOverCtrl: PopoverController) {
    }

    ngOnInit() {
    }

    onClick(valor: number) {
        this.popOverCtrl.dismiss({
            item: valor
        });
    }
}
