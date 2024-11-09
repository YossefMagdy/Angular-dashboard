import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-date-input',
  standalone: true,
  imports: [MatDatepickerModule,MatFormFieldModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.scss',
  providers:[provideNativeDateAdapter()],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DateInputComponent {
  placeHolder=input.required<string>()
}
