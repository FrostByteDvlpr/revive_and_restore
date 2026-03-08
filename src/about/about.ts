import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="about-hero">
      <div class="container">
        <h1>About Us</h1>
        <p class="subtitle">
          Crafting beautiful spaces with passion and precision.
        </p>
      </div>
    </section>

    <section class="about-section">
      <div class="container about-grid">
        <div class="about-image">
          <h3>Our Values</h3>
          <ul>
            <li>✔ Quality craftsmanship</li>
            <li>✔ Transparent communication</li>
            <li>✔ Customer satisfaction</li>
          </ul>
          <img src="/reno_1.jpg" alt="Our Team at Work" />
        </div>
        <div class="about-content">
          <h2>Our Story</h2>
          <p>
            At Revive & Restore Renovations, we believe a well-designed home
            should feel both beautiful and effortless to live in. Our team
            specializes in modern, clean renovations that elevate everyday
            spaces while maintaining timeless design and quality craftsmanship.
            <br />
            <br />
            From kitchens and bathrooms to full home transformations, every
            project we take on is guided by a simple philosophy — thoughtful
            design, premium materials, and meticulous attention to detail. We
            take pride in creating spaces that feel fresh, functional, and built
            to last. <br />
            <br />
            By combining modern aesthetics with reliable construction practices,
            we help homeowners bring new life to their homes while ensuring the
            renovation process remains smooth, transparent, and stress-free.
            <br />
            <br />
            Whether you're updating a single room or reimagining your entire
            home, Revive & Restore Renovations is committed to delivering
            results that reflect your vision and exceed expectations.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: `
    .about-hero {
      background: var(--soft-panel);
      padding: 3rem 0 2rem 0;
      text-align: center;
    }
    .about-hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: 2.6rem;
      color: var(--blue-grey);
      margin-bottom: 0.5rem;
    }
    .about-hero .subtitle {
      font-size: 1.2rem;
      color: var(--mint-accent);
      margin-bottom: 0;
    }
    .about-section {
      background: #fff;
      padding: 2.5rem 0;
    }
    .about-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 2.5rem;
      align-items: center;
      justify-content: space-between;
    }
    .about-image {
      text-align: left;
      flex-direction: column;
      max-width: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .about-image img {
      width: 100%;
      border-radius: 18px;
      box-shadow: 0 2px 12px rgba(31, 42, 46, 0.1);
      object-fit: cover;
      max-height: 340px;
    }
    .about-content {
      flex: 2 1 400px;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      align-items: flex-start;
    }
    .about-content h2 {
      color: var(--mint-accent);
      font-family: 'Playfair Display', serif;
      margin-bottom: 0.5rem;
    }
    .about-content h3 {
      color: var(--blue-grey);
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
    }
    .about-image ul {
      list-style: none;
      padding: 0;
      margin: 0;
      margin-bottom: 1.5rem;
    }
    .about-image li {
      font-size: 1.08rem;
      margin-bottom: 0.7rem;
      color: var(--mint-accent);
    }
    @media (max-width: 900px) {
      .about-grid {
        flex-direction: column;
        align-items: stretch;
      }
      .about-image,
      .about-content {
        max-width: 100%;
      }
    }
    @media (max-width: 600px) {
      .about-hero h1 {
        font-size: 2rem;
      }
      .about-image img {
        max-height: 180px;
      }
      .about-section {
        padding: 1.2rem 0;
      }
    }
  `,
})
export class AboutComponent {}
