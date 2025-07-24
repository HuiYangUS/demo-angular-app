import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReusableComponent } from '../reusable/reusable.component';

/**
 * Reactive Form is dynamic and can be easily manipulated
 * FormControl <=> Form Field
 * FormGroup <=> Collection of FormControl
 * FormArray <=> Collection of FormGroup
 */
@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, ReusableComponent],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  @Input()
  testMessageReactiveForm: string = "Testing Reactive Form";

  reactiveUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // FormGroup accepts an object as a parameter
    this.reactiveUserForm = formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$'), Validators.minLength(6), Validators.maxLength(16)]],
        location: formBuilder.group(
          {
            streetAddress: '',
            city: '',
            state: '',
            zipCode: ['', [Validators.pattern('^[0-9]{5,5}$')]]
          }
        ),
        // FormArray VS FormControl
        skills: formBuilder.array([]),
        isChecked: ['', [Validators.required]]
      }
    );
    // this.reactiveUserForm.controls['password'].disable();
  }


  public get skills(): FormArray {
    return this.reactiveUserForm.get('skills') as FormArray;
  }

  /**
   * Creates a new FormGroup with a default value
   * @returns 
   */
  newSkill(): FormGroup {
    return this.formBuilder.group(
      { skill: '' }
    );
  }

  addSkill() {
    // Add a FormGroup to the target FormArray
    this.skills.push(this.newSkill());
  }

  removeSkill(targetIndex: number) {
    this.skills.removeAt(targetIndex);
  }

  /**
   * Non-functional
   */
  resetSkills() {
    this.skills.clear();
  }

  onSubmit() {
    console.log(this.reactiveUserForm.value);
  }

  setTestValues() {
    let testDataObj: any = {
      firstName: 'Hui',
      lastName: 'Yang',
      email: 'tester@test.com',
      password: 123456,
      location: {
        streetAddress: '6669 Hell Rd',
        city: 'Hell City',
        state: 'Virginia',
        zipCode: [33366]
      },
      isChecked: true,
      skills: []
    };
    this.reactiveUserForm.setValue(testDataObj);
  }

  patchTestValues() {
    let testDataObj: any = {
      // firstName: 'Angular',
      // lastName: 'Developer',
      password: 999666,
      location: {
        streetAddress: '5553 Heaven Rd',
        city: 'Grace City',
        state: 'California',
        zipCode: 88866
      }
    };
    this.reactiveUserForm.patchValue(testDataObj);
    // this.reactiveUserForm.get('location.state')?.patchValue('Texas');
    // this.reactiveUserForm.controls['lastName'].patchValue('Developer');
  }

  resetUserFormZ() {
    this.reactiveUserForm.reset();
    this.resetSkills();
    // this.reactiveUserForm.get('location.state')?.reset();
    // this.reactiveUserForm.controls['lastName'].reset();
  }

}
