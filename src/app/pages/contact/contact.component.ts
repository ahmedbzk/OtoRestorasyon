import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  pageTitle = 'İLETİŞİM';
  contactForm!: FormGroup;
  showToast = false;
  toastType: 'success' | 'error' = 'success';
  toastMessage = '';

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

    // mail.php sunucuda nerede duruyorsa o URL'i yaz
    const apiUrl = '/mail.php'; 

    this.http.post(apiUrl, this.contactForm.value).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          this.displayToast('success', 'Mesajınız Başarıyla İletildi!');
          this.contactForm.reset();
        } else {
          this.displayToast('error', 'Hata: ' + response.message);
        }
      },
      error: (err) => {
        console.error('Network Hatası:', err);
        this.displayToast('error', 'Sunucuya Bağlanılamadı!');
      }
    });
  }

  displayToast(type: 'success' | 'error', message: string) {
    this.toastType = type;
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => { this.showToast = false; }, 4000);
  }
}