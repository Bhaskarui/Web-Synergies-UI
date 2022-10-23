import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AlertService } from '../alert.service';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-add-customer-details',
  templateUrl: './add-customer-details.component.html',
  styleUrls: ['./add-customer-details.component.css']
})
export class AddCustomerDetailsComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private cs: CommonServiceService,
    private alService: AlertService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      age: ['', Validators.required],
      address:['', Validators.required]

    })
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.cs.register(this.registerForm.value)
      .pipe(first())
      .subscribe((data: any) => {
        this.alService.success('Registration successful', true);
        this.router.navigate(['/login']);
      },
        (error: any) => {
          this.alService.error(error);
          this.loading = false;
        });
  }

}
