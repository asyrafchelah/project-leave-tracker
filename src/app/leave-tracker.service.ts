import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient} from '@angular/common/http';

interface LeaveRequestFormValues {
  type: string
  remarks: string
  totalDay: number
  startDate: string
  endDate: string
}

interface FormValues {
  leaverequest?: LeaveRequestFormValues
 
}

@Injectable({
  providedIn: 'root'
})
export class LeaveTrackerService {
  formValues = new BehaviorSubject<FormValues>({})

  constructor(private http: HttpClient) {}

  setFormValues(specificFormValues, formName){
    let currentFormValues = this.formValues.getValue()
    currentFormValues[formName] = specificFormValues

    this.formValues.next(currentFormValues)
  }
  
}
