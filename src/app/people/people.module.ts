import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PeopleComponent} from './people.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        PeopleComponent
    ],
    declarations: [PeopleComponent]
})
export class PeopleModule {
}
