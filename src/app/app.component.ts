import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { SendEmailService } from './services/send-email.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MustMatch } from '../helpers/must-match.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public http: HttpClient) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        c_name: ['', [Validators.required, Validators.minLength(6)]],
        country: ['', Validators.required],
        website: ['', Validators.required],
        urls: ['', Validators.required]
    });
}
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;
// console.log("=>email", this.registerForm.controls.email.value)
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    var data = {
      "To": this.registerForm.controls.email.value,
      "Subject": "contact us",
      "Body": "test email"
    }
  this.http.post('https://test.secureprivacy.ai/api/email', data).subscribe(data=>{
   
  })
   
}
}
