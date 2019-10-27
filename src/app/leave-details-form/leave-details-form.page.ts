import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LeaveTrackerService } from '../leave-tracker.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-leave-details-form',
  templateUrl: './leave-details-form.page.html',
  styleUrls: ['./leave-details-form.page.scss'],
})
export class LeaveDetailsFormPage implements OnInit {

  leaveDetailsForm = new FormGroup({
    remarks: new FormControl(),
    totalDay: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
  })

  constructor(private leavetrackerservice: LeaveTrackerService, private navCtrl: NavController) { }

  ngOnInit() {
    this.leavetrackerservice.formValues.subscribe(values => {
      console.log(values)
    })
  }

  onSelect(optionValue, fieldName){
    this.leaveDetailsForm.controls[fieldName].setValue(optionValue)
  }

  onClickNext(){
    this.leavetrackerservice.setFormValues(this.leaveDetailsForm.value, "details")
    // this.navCtrl.navigateForward("/tabs/tabs/tab1")
  }

}
