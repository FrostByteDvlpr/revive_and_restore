import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <section class="services-hero">
      <div class="container">
        <h1>Our Services</h1>
        <p class="subtitle">
          Comprehensive renovation solutions for every home.
        </p>
      </div>
    </section>

    <section class="services-section">
      <div class="container">
        <div class="services-list">
          <div class="service-card">
            <h2>Kitchen Renovations</h2>
            <p>Modern, functional, and beautiful kitchen transformations.</p>
          </div>
          <div class="service-card">
            <h2>Bathroom Remodels</h2>
            <p>Elegant and comfortable bathroom upgrades for any style.</p>
          </div>
          <div class="service-card">
            <h2>Flooring Installation</h2>
            <p>Premium hardwood, vinyl, and luxury flooring solutions.</p>
          </div>
          <div class="service-card">
            <h2>Basement Finishing</h2>
            <p>Turn your basement into a livable, inviting space.</p>
          </div>
          <div class="service-card">
            <h2>Custom Carpentry</h2>
            <p>Built-ins, shelving, and custom woodwork for unique spaces.</p>
          </div>
          <div class="service-card">
            <h2>Painting & Drywall</h2>
            <p>
              Professional painting and flawless drywall installation/repair.
            </p>
          </div>
          <div class="service-card">
            <h2>Exterior Renovations</h2>
            <p>Curb appeal upgrades, siding, windows, and more.</p>
          </div>
          <div class="service-card">
            <h2>Full Home Renovations</h2>
            <p>Complete transformations to bring your vision to life.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .services-hero {
      background: var(--soft-panel);
      padding: 3rem 0 2rem 0;
      text-align: center;
    }
    .services-hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: 2.6rem;
      color: var(--blue-grey);
      margin-bottom: 0.5rem;
    }
    .services-hero .subtitle {
      font-size: 1.2rem;
      color: var(--mint-accent);
      margin-bottom: 0;
    }
    .services-section {
      background: #fff;
      padding: 2.5rem 0;
    }
    .services-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    .service-card {
      background: var(--soft-panel);
      border-radius: 16px;
      box-shadow: 0 2px 8px rgba(31, 42, 46, 0.06);
      padding: 2rem 1.2rem;
      text-align: center;
      transition:
        box-shadow 0.2s,
        transform 0.2s;
    }
    .service-card:hover {
      box-shadow: 0 6px 24px rgba(127, 185, 179, 0.12);
      transform: translateY(-4px) scale(1.03);
    }
    .service-card h2 {
      color: var(--mint-accent);
      margin-bottom: 0.8rem;
      font-size: 1.3rem;
      font-family: 'Playfair Display', serif;
    }
    .service-card p {
      color: var(--blue-grey);
      font-size: 1.05rem;
    }
    @media (max-width: 900px) {
      .services-list {
        grid-template-columns: 1fr;
      }
    }
    @media (max-width: 600px) {
      .services-hero h1 {
        font-size: 2rem;
      }
      .service-card {
        padding: 1rem 0.5rem;
      }
    }
  `,
})
export class ServicesComponent {}
