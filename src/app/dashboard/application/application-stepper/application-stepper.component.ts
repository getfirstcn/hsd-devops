import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-application-stepper',
  templateUrl: './application-stepper.component.html',
  styleUrls: ['./application-stepper.component.scss']
})
export class ApplicationStepperComponent implements OnInit {
  isLinear = true;
  appForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.appForm = this.fb.group({
      name: ['', Validators.required],
      namespace: ['', Validators.required],
      labels: this.fb.group({
        labelKey: ['', Validators.required],
        labelValue: ['', Validators.required]
      }),
      replicas: ['', Validators.required],
      matchLabels: this.fb.group({
        selectKey: ['', Validators.required],
        selectValue: ['', Validators.required]
      }),
      template: this.fb.group({
        labels: this.fb.group({
          labelKey: ['', Validators.required],
          labelValue: ['', Validators.required]
        }),
        containers: this.fb.group({
          name: ['', Validators.required],
          image: ['', Validators.required],
          command: this.fb.array([]),
          ports: this.fb.array([]),
          port: this.fb.group({
            hostPort: '',
            containerPort: '',
            protocol: '',
          })
        })
      }),
    });
  }}
