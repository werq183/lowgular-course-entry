import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import {EmployeeModel} from "../../model/employee.model";
import {Observable} from "rxjs";


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) {}
  data$: Observable<EmployeeModel[] | null> = this._employeeService.getAll();

  remove(id:string){
    this._employeeService.delete(id).subscribe();
  }
}
