import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero">
      <div class="bg-svg-hero" aria-hidden="true">
        <svg
          width="520"
          height="380"
          viewBox="0 0 520 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="blob1"
        >
          <path
            d="M420,60 Q500,180 320,320 Q140,460 60,320 Q-20,180 60,60 Q140,-60 320,60 Q420,60 420,60 Z"
            fill="#7fb9b322"
          />
        </svg>
        <svg
          width="420"
          height="320"
          viewBox="0 0 420 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="blob2"
        >
          <path
            d="M210,40 Q350,100 320,220 Q290,340 110,260 Q-20,180 60,60 Q140,-20 210,40 Z"
            fill="#1f2a2e11"
          />
        </svg>
      </div>
      <div class="container hero-grid">
        <div class="hero-text">
          <h1>Revitalize Your Home</h1>
          <p>
            Elegant renovations designed to transform your space with
            craftsmanship and care.
          </p>
          <div class="hero-buttons">
            <a class="btn-primary" href="#">Get a Free Estimate</a>
            <a class="btn-secondary" href="#">View Our Work</a>
          </div>
        </div>

        <div class="hero-image">
          <img src="/reno_5.jpg" alt="Renovated Interior" />
        </div>
      </div>
    </section>

    <section class="services">
      <div class="container">
        <h2>Our Services</h2>

        <div class="services-grid">
          <div class="service-card">
            <h3>Kitchen Renovations</h3>
            <p>Modern kitchens designed for both beauty and functionality.</p>
          </div>

          <div class="service-card">
            <h3>Bathroom Remodels</h3>
            <p>
              Elegant spaces crafted with high-end finishes and comfort in mind.
            </p>
          </div>

          <div class="service-card">
            <h3>Flooring Installation</h3>
            <p>Premium hardwood, vinyl, and luxury flooring solutions.</p>
          </div>

          <div class="service-card">
            <h3>Full Home Renovations</h3>
            <p>Complete transformations that bring your vision to life.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="bg-svg-about" aria-hidden="true">
        <svg
          width="380"
          height="260"
          viewBox="0 0 380 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="blob1"
        >
          <path
            d="M190,30 Q320,80 300,180 Q280,280 90,210 Q-20,140 60,60 Q140,-20 190,30 Z"
            fill="#7fb9b322"
          />
        </svg>
        <svg
          width="320"
          height="220"
          viewBox="0 0 320 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="blob2"
        >
          <path
            d="M160,40 Q250,100 220,180 Q190,260 60,180 Q-20,120 60,60 Q140,0 160,40 Z"
            fill="#1f2a2e11"
          />
        </svg>
      </div>
      <div class="container about-grid">
        <img src="/reno_1.jpg" alt="Renovation Work" />

        <div>
          <h2 class="mb-2">Craftsmanship You Can Trust</h2>
          <p>
            Revive & Restore Renovations specializes in thoughtful home
            transformations. Our team focuses on quality materials, clean
            design, and meticulous attention to detail in every project.
          </p>

          <ul>
            <li>✔ Experienced renovation specialists</li>
            <li>✔ High-end finishes and materials</li>
            <li>✔ Transparent project communication</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="process">
      <div class="container">
        <h2>Our Process</h2>

        <div class="process-grid">
          <div class="step">
            <span>01</span>
            <h3>Consultation</h3>
            <p>We start by understanding your vision and goals.</p>
          </div>

          <div class="step">
            <span>02</span>
            <h3>Design</h3>
            <p>We plan a layout that blends beauty and functionality.</p>
          </div>

          <div class="step">
            <span>03</span>
            <h3>Build</h3>
            <p>Our skilled team brings your renovation to life.</p>
          </div>

          <div class="step">
            <span>04</span>
            <h3>Final Walkthrough</h3>
            <p>We ensure every detail meets our quality standards.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <h2>Ready to Transform Your Home?</h2>
        <p>Let’s bring your renovation vision to life.</p>
        <a class="btn-primary" href="#">Request a Quote</a>
      </div>
    </section>
  `,
  styles: `
    section.hero,
    section.about {
      position: relative;
      overflow: hidden;
    }
    :host {
      h1,
      h2,
      h3 {
        font-family: 'Playfair Display', serif;
        font-weight: 600;
        color: var(--blue-grey);
      }
      .hero {
        background: var(--soft-panel);
        padding: 3rem 0 2rem 0;
      }
      .hero-grid {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 2rem;
      }
      .hero-text {
        flex: 1 1 350px;
      }
      .hero-text h1 {
        font-size: 2.8rem;
        margin-bottom: 1rem;
      }
      .hero-text p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
      }
      .hero-buttons {
        display: flex;
        gap: 1rem;
      }
      .btn-primary {
        background: var(--mint-accent);
        color: #fff;
        padding: 0.8rem 2rem;
        border-radius: 30px;
        font-weight: 500;
        text-decoration: none;
        box-shadow: 0 2px 8px rgba(127, 185, 179, 0.12);
        transition:
          background 0.2s,
          box-shadow 0.2s;
      }
      .btn-primary:hover {
        background: #6fa7a3;
        box-shadow: 0 4px 16px rgba(127, 185, 179, 0.18);
      }
      .btn-secondary {
        background: transparent;
        color: var(--mint-accent);
        border: 2px solid var(--mint-accent);
        padding: 0.8rem 2rem;
        border-radius: 30px;
        font-weight: 500;
        text-decoration: none;
        transition:
          background 0.2s,
          color 0.2s;
      }
      .btn-secondary:hover {
        background: var(--mint-accent);
        color: #fff;
      }
      .hero-image img {
        width: 100%;
        max-width: 420px;
        border-radius: 18px;
        box-shadow: 0 4px 24px rgba(31, 42, 46, 0.1);
      }

      .services {
        background: var(--light-grey);
        padding: 2.5rem 0;
      }
      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
      }
      .service-card {
        background: var(--soft-panel);
        border-radius: 16px;
        box-shadow: 0 2px 8px rgba(31, 42, 46, 0.06);
        padding: 2rem 1.2rem;
        text-align: center;
        transition: box-shadow 0.2s;
      }
      .service-card:hover {
        box-shadow: 0 6px 24px rgba(127, 185, 179, 0.12);
      }
      .service-card h3 {
        color: var(--mint-accent);
        margin-bottom: 0.8rem;
      }

      .about {
        background: #fff;
        padding: 2.5rem 0;
      }
      .about-grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        align-items: center;
        justify-content: space-around;
      }
      .about-grid img {
        flex: 1 1 0;
        max-width: 340px;
        border-radius: 16px;
        box-shadow: 0 2px 12px rgba(31, 42, 46, 0.1);
        margin-right: 2rem;
      }
      .about-grid > div {
        flex: 1 1 0;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        align-items: center;
      }
    }
    .about-grid img {
      width: 100%;
      max-width: 340px;
      border-radius: 16px;
      box-shadow: 0 2px 12px rgba(31, 42, 46, 0.1);
    }
    .about-grid ul {
      margin-top: 1rem;
      list-style: none;
      padding-left: 0;
    }
    .about-grid li {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: var(--mint-accent);
    }

    .process {
      background: var(--soft-panel);
      padding: 2.5rem 0;
    }
    .process-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    .step {
      background: #fff;
      border-radius: 14px;
      box-shadow: 0 2px 8px rgba(31, 42, 46, 0.06);
      padding: 1.5rem 1rem;
      text-align: center;
    }
    .step span {
      display: block;
      font-size: 1.4rem;
      color: var(--mint-accent);
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .cta {
      background: var(--mint-accent);
      color: #fff;
      padding: 2.5rem 0;
      text-align: center;
      display: flex;
      flex-direction: column;
    }
    .cta h2 {
      color: #fff;
      margin-bottom: 1rem;
    }
    .cta p {
      margin-bottom: 2rem;
    }
    .cta a.btn-primary {
      background: #fff;
      color: var(--mint-accent);
      border: none;
      margin-top: 1rem;
    }
    .cta a.btn-primary:hover {
      background: #f0f4f6;
      color: #6fa7a3;
    }

    footer {
      background: var(--blue-grey);
      color: #fff;
      padding: 2rem 0 1rem 0;
    }
    .footer-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: space-between;
    }
    footer h3,
    footer h4 {
      color: #fff;
    }
    footer p {
      color: #e0e6ea;
    }
    .copyright {
      text-align: center;
      margin-top: 1.5rem;
      color: #bfc8ce;
      font-size: 0.95rem;
    }

    @media (max-width: 900px) {
      .hero-grid,
      .footer-grid {
        flex-direction: column;
        align-items: stretch;
      }
      .hero-buttons {
        flex-direction: column;
        text-align: center;
      }
      .about-grid {
        flex-direction: column;
        align-items: stretch;
      }
      .container {
        width: 98%;
      }
    }
    @media (max-width: 600px) {
      h1 {
        font-size: 2rem;
      }
      .service-card,
      .step {
        padding: 1rem 0.5rem;
      }
    }
  `,
})
export class HomeComponent {}
