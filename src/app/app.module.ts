import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import { ProfileComponent } from './profile/profile.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleSheetComponent } from './register/bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';
import {MatListModule} from "@angular/material/list";
import { DateComponent } from './date/date.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BottomSheetOverviewExampleSheetComponent,
    DateComponent
  ],
  entryComponents:[
    BottomSheetOverviewExampleSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,MatCardModule,
    MatExpansionModule,
    MatBottomSheetModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports:[MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
