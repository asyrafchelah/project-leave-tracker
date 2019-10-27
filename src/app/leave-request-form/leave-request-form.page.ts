import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';
import { LeaveTrackerService } from '../leave-tracker.service';



@Component({
  selector: 'app-leave-request-form',
  templateUrl: './leave-request-form.page.html',
  styleUrls: ['./leave-request-form.page.scss'],
})
export class LeaveRequestFormPage implements OnInit {

  leaveRequestForm = new FormGroup({
    type: new FormControl()
   
  })

  typeOptions = ["Annual/Emergency Leave", "Medical Leave", "Hospitalisation leave", "No Pay leave", "Patenity leave","Maternity leave","Training leave"]
  


  

  constructor(private leavetrackerservice: LeaveTrackerService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  onSelectType(type){
    this.leaveRequestForm.controls.type.setValue(type)
  }

  onClickNext(){
    this.leavetrackerservice.setFormValues(this.leaveRequestForm.value, "type")
    this.navCtrl.navigateForward("/leave-details-form")
  }

}
