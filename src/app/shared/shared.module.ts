import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MapModalComponent } from "./map-modal/map-modal.component";
import { LocationPickerComponent } from "./pickers/location-picker/location-picker.component";
import { AccountModalComponent } from "./account-modal/account-modal.component";

@NgModule({
    declarations: [LocationPickerComponent, MapModalComponent, AccountModalComponent],
    imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
    exports: [LocationPickerComponent, MapModalComponent],
    entryComponents: [MapModalComponent]
})
export class SharedModule {}