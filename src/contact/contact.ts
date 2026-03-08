import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
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
            <li>
              <strong>Phone:</strong>
              <a href="tel:+1234567890"> (123) 456-7890</a>
            </li>
            <li><strong>Location:</strong> 123 Main St, Hometown, USA</li>
          </ul>
        </div>
        <form class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button class="btn-primary" type="submit">Send Message</button>
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
export class ContactComponent {}
