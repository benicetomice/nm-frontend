import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Gig} from '../gig.model';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';

@Component({
  selector: 'app-gig-form',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput
  ],
  templateUrl: './gig-form.html',
  styleUrl: './gig-form.css',
})
export class GigForm implements OnInit {

  @Input() gig?: Gig;
  @Output() save = new EventEmitter<Gig>();
  @Output() cancel = new EventEmitter<void>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({

      date: [this.gig?.date || '', Validators.required],
      city: [this.gig?.city || '', Validators.required],
      venue: [this.gig?.venue || '', Validators.required],
      doors: [this.gig?.doors || ''],
      start: [this.gig?.start || ''],
      price: [this.gig?.price || null],
      acts: this.fb.array([]),
      imageUrl: [this.gig?.imageUrl || '']
    });
    this.initActs();
  }

  get acts(): FormArray {
    return this.form.get('acts') as FormArray;
  }

  initActs() {
    if (this.gig?.acts?.length) {
      this.gig.acts.forEach(act => this.addAct(act));
    } else {
      this.addAct();
    }
  }

  addAct(value: string = '') {
    this.acts.push(this.fb.control(value));
  }

  removeAct(index: number) {
    this.acts.removeAt(index);
  }

  submit() {
    if (this.form.invalid) return;

    const result: Gig = {
      ...this.gig,
      ...this.form.value
    };
    this.save.emit(result);
  }
}
