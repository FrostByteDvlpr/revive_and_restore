import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactStore } from './contact.store';
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  providers: [ContactStore],
  imports: [FormsModule],
  template: `
    <section class="contact-hero">
      <div class="container">
        <h1>Contact Us</h1>
        <p class="subtitle">
          We'd love to hear from you! Reach out for a free consultation or any
          questions about your renovation project.
        </p>
      </div>
    </section>

    @if (contactStore.success()) {
      <div class="alert alert-success" role="alert">
        <strong>Success!</strong> Your message has been sent. We'll get back to
        you soon.
      </div>
    }

    <section class="contact-form-section">
      <div class="container contact-form-grid">
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Fill out the form or use the information below to contact our team.
            We respond promptly to all inquiries!
          </p>
          <ul class="contact-details">
            <li>
              <strong>Email:</strong>
              <a href="mailto:projects@reviverestorereno.com">
                projects@reviverestorereno.com</a
              >
            </li>
            <li><strong>Location:</strong> Metro Detroit, MI</li>
          </ul>
        </div>
        <form
          class="contact-form"
          #contactForm="ngForm"
          (ngSubmit)="contactStore.submitForm()"
        >
          <div class="form-group">
            <label for="name">Name</label>
            <input
              id="name"
              name="name"
              [value]="contactStore.form().name"
              (input)="onFieldChange('name', $event)"
              [class.is-invalid]="contactStore.shouldShowError('name')"
              (blur)="contactStore.markTouched('name')"
              type="text"
              required
            />
            @if (contactStore.shouldShowError('name')) {
              <div class="invalid-feedback">
                {{ contactStore.getError('name') }}
              </div>
            }
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              [value]="contactStore.form().phone"
              (input)="onFieldChange('phone', $event)"
              [class.is-invalid]="contactStore.shouldShowError('phone')"
              (blur)="contactStore.markTouched('phone')"
              type="tel"
              required
            />
            @if (contactStore.shouldShowError('phone')) {
              <div class="invalid-feedback">
                {{ contactStore.getError('phone') }}
              </div>
            }
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              name="email"
              [value]="contactStore.form().email"
              (input)="onFieldChange('email', $event)"
              [class.is-invalid]="contactStore.shouldShowError('email')"
              (blur)="contactStore.markTouched('email')"
              type="email"
              required
            />
            @if (contactStore.shouldShowError('email')) {
              <div class="invalid-feedback">
                {{ contactStore.getError('email') }}
              </div>
            }
          </div>
          <div class="form-group">
            <label for="reason">Reason</label>
            <ul class="radios">
              <li>
                <input
                  id="quote"
                  type="radio"
                  (input)="onFieldChange('inquiryType', $event)"
                  name="reason"
                  value="quote"
                />
                <label for="quote">Request a Quote</label>
              </li>
              <li>
                <input
                  id="consultation"
                  type="radio"
                  (input)="onFieldChange('inquiryType', $event)"
                  name="reason"
                  value="consultation"
                />
                <label for="consultation">Consultation / General inquiry</label>
              </li>
              <li>
                <input
                  id="other"
                  type="radio"
                  (input)="onFieldChange('inquiryType', $event)"
                  name="reason"
                  value="other"
                />
                <label for="other">Other</label>
              </li>
            </ul>
            @if (contactStore.shouldShowError('inquiryType')) {
              <div class="invalid-feedback">
                {{ contactStore.getError('inquiryType') }}
              </div>
            }
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              [value]="contactStore.form().message"
              (input)="onFieldChange('message', $event)"
              (blur)="contactStore.markTouched('message')"
              [class.is-invalid]="contactStore.shouldShowError('message')"
              required
            ></textarea>
            @if (contactStore.shouldShowError('message')) {
              <div class="invalid-feedback">
                {{ contactStore.getError('message') }}
              </div>
            }
          </div>
          <button class="btn-primary" type="submit">
            @if (contactStore.loading()) {
              <span class="spinner" aria-label="Loading"></span>
            }
            Send Message
          </button>
        </form>
      </div>
    </section>
  `,
  styles: `
    .contact-hero {
      background: var(--soft-panel);
      padding: 3rem 0 2rem 0;
      text-align: center;
    }
    .contact-hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: 2.6rem;
      color: var(--blue-grey);
      margin-bottom: 0.5rem;
    }
    .contact-hero .subtitle {
      font-size: 1.2rem;
      color: var(--mint-accent);
      margin-bottom: 0;
    }
    .contact-form-section {
      background: #fff;
      padding: 2.5rem 0;
    }
    .contact-form-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 2.5rem;
      align-items: flex-start;
      justify-content: space-between;
    }
    .contact-info {
      flex: 1 1 320px;
      max-width: 400px;
      background: var(--soft-panel);
      border-radius: 16px;
      box-shadow: 0 2px 8px rgba(31, 42, 46, 0.06);
      padding: 2rem 1.5rem;
      margin-bottom: 2rem;
    }
    .contact-info h2 {
      color: var(--mint-accent);
      margin-bottom: 1rem;
      font-family: 'Playfair Display', serif;
    }
    .radios {
      display: flex;
      flex-direction: column;
      li {
        list-style-type: none;
        display: flex;
        align-items: center;
        input,
        label {
          width: auto;
        }
        input {
          margin-right: 0.5rem;
        }
      }
    }
    .contact-details {
      list-style: none;
      padding: 0;
      margin-top: 1.5rem;
      color: var(--blue-grey);
    }
    .contact-details li {
      margin-bottom: 0.7rem;
      font-size: 1.08rem;
    }
    .contact-details a {
      color: var(--mint-accent);
      text-decoration: none;
    }
    .contact-details a:hover {
      text-decoration: underline;
    }
    .contact-form {
      flex: 2 1 400px;
      background: var(--light-grey);
      border-radius: 16px;
      box-shadow: 0 2px 8px rgba(31, 42, 46, 0.06);
      padding: 2rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.4rem;
    }
    .form-group label {
      font-weight: 500;
      color: var(--blue-grey);
      font-size: 1.05rem;
    }
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.7rem 1rem;
      border: 1px solid #cfd8dc;
      border-radius: 8px;
      font-size: 1rem;
      font-family: inherit;
      background: #fff;
      color: var(--blue-grey);
      transition: border 0.2s;
    }
    .form-group input:focus,
    .form-group textarea:focus {
      border: 1.5px solid var(--mint-accent);
      outline: none;
    }
    input.is-invalid,
    textarea.is-invalid {
      border-color: #ef4444 !important;
    }
    .invalid-feedback {
      color: #ef4444;
      font-size: 0.9rem;
      margin-top: 0.3rem;
    }
    .alert {
      padding: 1rem 1.5rem;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      width: 100%;
      text-align: center;
    }

    .alert-success {
      background: #d1fae5;
      color: #065f46;
      border: 1px solid #a7f3d0;
    }
    .btn-primary {
      background: var(--mint-accent);
      color: #fff;
      padding: 0.8rem 2rem;
      border-radius: 30px;
      font-weight: 500;
      text-decoration: none;
      border: none;
      font-size: 1.1rem;
      box-shadow: 0 2px 8px rgba(127, 185, 179, 0.12);
      transition:
        background 0.2s,
        box-shadow 0.2s;
      cursor: pointer;
      margin-top: 0.5rem;
      align-self: flex-start;
    }
    .btn-primary:hover {
      background: #6fa7a3;
      box-shadow: 0 4px 16px rgba(127, 185, 179, 0.18);
    }
    .spinner {
      display: inline-block;
      width: 1.2em;
      height: 1.2em;
      border: 2.5px solid #fff;
      border-top: 2.5px solid var(--mint-accent);
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
      margin-right: 0.6em;
      vertical-align: middle;
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    @media (max-width: 900px) {
      .contact-form-grid {
        flex-direction: column;
        align-items: stretch;
      }
      .contact-info,
      .contact-form {
        max-width: 100%;
      }
    }
    @media (max-width: 600px) {
      .contact-hero h1 {
        font-size: 2rem;
      }
      .contact-form,
      .contact-info {
        padding: 1rem 0.5rem;
      }
    }
  `,
})
export class ContactComponent {
  readonly contactStore = inject(ContactStore);

  onFieldChange(field: string, event: Event) {
    const target = event.target as
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement;
    this.contactStore.updateField(field as any, target.value);
  }
}
