import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core'; 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ReactiveFormsModule, TranslateModule], 
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  pageTitleKey = 'NAV.CONTACT'; 
  contactForm!: FormGroup;
  showToast = false;
  toastType: 'success' | 'error' = 'success';
  toastMessageKey = ''; 

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) return;

    const apiUrl = '/mail.php'; 

    this.http.post(apiUrl, this.contactForm.value).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          this.displayToast('success', 'CONTACT.TOAST_SUCCESS_MSG'); 
          this.contactForm.reset();
        } else {
          this.displayToast('error', 'CONTACT.TOAST_ERROR_MSG'); 
        }
      },
      error: (err) => {
        console.error('Network Hatası:', err);
        this.displayToast('error', 'CONTACT.TOAST_CONN_ERROR'); 
      }
    });
  }

  displayToast(type: 'success' | 'error', messageKey: string) {
    this.toastType = type;
    this.toastMessageKey = messageKey;
    this.showToast = true;
    setTimeout(() => { this.showToast = false; }, 4000);
  }
}