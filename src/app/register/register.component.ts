import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {BottomSheetOverviewExampleSheetComponent} from "./bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }

  constructor(private _formBuilder: FormBuilder, private _bottomSheet: MatBottomSheet) {
  }


    ngOnInit()
    {
      this.firstFormGroup = this._formBuilder.group({
        firstName: ['', Validators.required]

      });
      this.secondFormGroup = this._formBuilder.group({
        secondName: ['', Validators.required]
      });
    }

  }

