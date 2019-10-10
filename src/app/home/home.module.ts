import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { MatToolbarModule, MatMenuModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        SharedModule,
        MatMenuModule,
        MatToolbarModule,
        FormsModule

    ],
    declarations: [
        HomeComponent,

    ]

})
export class HomeModule {}