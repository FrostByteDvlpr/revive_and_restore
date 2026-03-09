import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  template: `
    <section class="hero revamped">
      <div class="hero-bg">
        <svg
          class="hero-blob"
          width="700"
          height="420"
          viewBox="0 0 700 420"
          fill="none"
        >
          <defs>
            <linearGradient
              id="blobGradient"
              x1="0"
              y1="0"
              x2="700"
              y2="420"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7fb9b3" />
              <stop offset="1" stop-color="#1f2a2e" />
            </linearGradient>
          </defs>
          <path
            d="M600,80 Q700,220 420,380 Q140,520 80,380 Q-40,220 80,80 Q140,-80 420,80 Q600,80 600,80 Z"
            fill="url(#blobGradient)"
            opacity="0.18"
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
        <div class="glass-card animated-fade">
          <h1 class="revamped-title">Transform Your Space</h1>
          <p class="revamped-subtitle">
            Luxury renovations, modern design, and craftsmanship that turns
            heads.
          </p>
          <div class="hero-buttons">
            <a class="btn-primary" routerLink="/contact">Get a Free Estimate</a>
            <a class="btn-secondary" routerLink="/gallery">View Our Work</a>
          </div>
        </div>
        <div class="hero-image animated-slide">
          <img src="/reno_5.jpg" alt="Renovated Interior" />
        </div>
      </div>
    </section>

    <section class="services revamped">
      <div class="container">
        <h2 class="revamped-title">Our Signature Services</h2>
        <div class="services-grid revamped">
          <div class="service-card revamped">
            <span class="service-icon">🍽️</span>
            <h3>Kitchen Renovations</h3>
            <p>Modern, functional, and beautiful kitchen transformations.</p>
          </div>
          <div class="service-card revamped">
            <span class="service-icon">🛁</span>
            <h3>Bathroom Remodels</h3>
            <p>Elegant and comfortable bathroom upgrades for any style.</p>
          </div>
          <div class="service-card revamped">
            <span class="service-icon">🪵</span>
            <h3>Flooring Installation</h3>
            <p>Premium hardwood, vinyl plank, and luxury flooring solutions.</p>
          </div>
          <div class="service-card revamped">
            <span class="service-icon">🏠</span>
            <h3>Full Home Renovations</h3>
            <p>Complete transformations that bring your vision to life.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about revamped">
      <div class="about-bg">
        <svg
          class="about-blob"
          width="620"
          height="460"
          viewBox="0 0 420 260"
          fill="none"
        >
          <defs>
            <linearGradient
              id="aboutGradient"
              x1="0"
              y1="0"
              x2="420"
              y2="260"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7fb9b3" />
              <stop offset="1" stop-color="#1f2a2e" />
            </linearGradient>
          </defs>
          <path
            d="M210,30 Q350,80 300,180 Q280,280 90,210 Q-20,140 60,60 Q140,-20 210,30 Z"
            fill="url(#aboutGradient)"
            opacity="0.15"
          />
        </svg>
        <svg
          width="320"
          height="220"
          viewBox="0 0 320 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="about-blob2"
        >
          <path
            d="M160,40 Q250,100 220,180 Q190,260 60,180 Q-20,120 60,60 Q140,0 160,40 Z"
            fill="#1f2a2e11"
          />
        </svg>
      </div>
      <div class="container about-grid revamped">
        <img
          src="/reno_1.jpg"
          alt="Renovation Work"
          class="about-img revamped"
        />
        <div class="about-content revamped glass-card animated-fade">
          <h2 class="revamped-title">Craftsmanship You Can Trust</h2>
          <p class="revamped-subtitle">
            Revive & Restore Renovations specializes in thoughtful home
            transformations. Our team focuses on quality materials, clean
            design, and meticulous attention to detail in every project.
          </p>
          <ul class="about-list revamped">
            <li>✔ Experienced renovation specialists</li>
            <li>✔ High-end finishes and materials</li>
            <li>✔ Transparent project communication</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="process revamped">
      <div class="container">
        <h2 class="revamped-title">Our Process</h2>
        <div class="process-grid revamped">
          <div class="step revamped glass-card animated-fade">
            <span class="step-icon">📝</span>
            <h3>Consultation</h3>
            <p>We start by understanding your vision and goals.</p>
          </div>
          <div class="step revamped glass-card animated-fade">
            <span class="step-icon">🎨</span>
            <h3>Design</h3>
            <p>We plan a layout that blends beauty and functionality.</p>
          </div>
          <div class="step revamped glass-card animated-fade">
            <span class="step-icon">🛠️</span>
            <h3>Build</h3>
            <p>Our skilled team brings your renovation to life.</p>
          </div>
          <div class="step revamped glass-card animated-fade">
            <span class="step-icon">✅</span>
            <h3>Final Walkthrough</h3>
            <p>We ensure every detail meets our quality standards.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta revamped">
      <div class="container cta-content revamped glass-card animated-fade">
        <h2 class="revamped-title">Ready to Transform Your Home?</h2>
        <p class="revamped-subtitle">
          Let’s bring your renovation vision to life.
        </p>
        <a class="btn-primary" routerLink="/contact">Request a Quote</a>
      </div>
    </section>
  `,
  styles: `
    section.hero.revamped {
      position: relative;
      min-height: 520px;
      background: linear-gradient(135deg, #e0f7fa 0%, #f0f4f6 100%);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    }
    .hero-bg {
      position: relative;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 1;
    }
    .hero-blob {
      position: absolute;
      top: -60px;
      left: -120px;
      z-index: 0;
      filter: blur(2px);
      pointer-events: none;
    }
    .glass-card {
      background: rgba(255, 255, 255, 0.7);
      border-radius: 32px;
      box-shadow: 0 8px 32px rgba(127, 185, 179, 0.18);
      padding: 3rem 2.5rem;
      max-width: 480px;
      backdrop-filter: blur(8px);
      border: 1.5px solid rgba(127, 185, 179, 0.12);
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      animation: fadeIn 1s;
      margin-bottom: 2rem;
    }
    .revamped-title {
      font-family: 'Playfair Display', serif;
      font-size: 3.2rem;
      font-weight: 700;
      color: #1f2a2e;
      margin-bottom: 1rem;
      letter-spacing: 0.02em;
      background: linear-gradient(90deg, #7fb9b3 0%, #1f2a2e 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    .revamped-subtitle {
      font-size: 1.35rem;
      color: #3a4a4e;
      margin-bottom: 2.2rem;
      font-weight: 500;
    }
    .hero-buttons {
      display: flex;
      gap: 1.2rem;
      margin-top: 1rem;
      flex-direction: column;
      width: 100%;
      text-align: center;
    }
    .btn-primary {
      background: linear-gradient(90deg, #7fb9b3 0%, #1f2a2e 100%);
      color: #fff;
      padding: 1rem 2.2rem;
      border-radius: 30px;
      font-weight: 300;
      text-decoration: none;
      font-size: 1.15rem;
      box-shadow: 0 2px 8px rgba(127, 185, 179, 0.12);
      transition:
        background 0.2s,
        box-shadow 0.2s;
      border: none;
    }
    .btn-primary:hover {
      background: linear-gradient(90deg, #1f2a2e 0%, #7fb9b3 100%);
      box-shadow: 0 4px 16px rgba(127, 185, 179, 0.18);
    }
    .btn-secondary {
      background: transparent;
      color: #7fb9b3;
      border: 2px solid #7fb9b3;
      padding: 1rem 2.2rem;
      border-radius: 30px;
      font-weight: 300;
      text-decoration: none;
      font-size: 1.15rem;
      transition:
        background 0.2s,
        color 0.2s;
    }
    .btn-secondary:hover {
      background: #7fb9b3;
      color: #fff;
    }
    .hero-image {
      margin-left: 2.5rem;
      z-index: 2;
      animation: slideIn 1.2s;
    }
    .hero-image img {
      width: 100%;
      max-width: 420px;
      border-radius: 28px;
      box-shadow: 0 8px 32px rgba(31, 42, 46, 0.18);
      border: 2px solid #7fb9b3;
      filter: drop-shadow(0 2px 8px #7fb9b3);
      transition: transform 0.2s;
    }
    .hero-image img:hover {
      transform: scale(1.04) rotate(-2deg);
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(80px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .services.revamped {
      background: linear-gradient(135deg, #f0f4f6 0%, #e0f7fa 100%);
      padding: 3rem 0;
    }
    .services-grid.revamped {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 2.5rem;
      margin-top: 2.5rem;
    }
    .service-card.revamped {
      background: rgba(255, 255, 255, 0.85);
      border-radius: 24px;
      box-shadow: 0 4px 24px rgba(127, 185, 179, 0.12);
      padding: 2.5rem 1.5rem;
      text-align: center;
      transition:
        box-shadow 0.2s,
        transform 0.2s;
      border: 1.5px solid rgba(127, 185, 179, 0.12);
      position: relative;
      animation: fadeIn 1.2s;
    }
    .service-card.revamped:hover {
      box-shadow: 0 8px 32px rgba(127, 185, 179, 0.18);
      transform: scale(1.04) translateY(-4px);
      z-index: 2;
    }
    .service-icon {
      font-size: 2.2rem;
      margin-bottom: 1rem;
      display: block;
      filter: drop-shadow(0 2px 8px #7fb9b3);
    }
    .service-card.revamped h3 {
      color: #7fb9b3;
      margin-bottom: 0.8rem;
      font-size: 1.35rem;
      font-family: 'Playfair Display', serif;
    }
    .service-card.revamped p {
      color: #1f2a2e;
      font-size: 1.08rem;
    }
    @media (max-width: 900px) {
      .hero-bg {
        flex-direction: column;
        align-items: stretch;
      }
      .glass-card {
        max-width: 100%;
        margin: 2rem 0.5rem;
        align-items: center;
        text-align: center;
      }
      .cta-content {
        margin: 0 1rem;
      }
      .hero-image {
        margin: 0 0.5rem;
        margin-bottom: 2rem;
      }
      .services-grid.revamped {
        grid-template-columns: 1fr;
      }
    }
    @media (max-width: 600px) {
      .revamped-title {
        font-size: 2rem;
      }
      .glass-card {
        padding: 1.2rem 0.5rem;
      }
      .service-card.revamped {
        padding: 1rem 0.5rem;
      }
    }

    .about.revamped {
      background: linear-gradient(135deg, #e0f7fa 0%, #f0f4f6 100%);
      padding: 3rem 0;
      position: relative;
      overflow: hidden;
    }
    .about-bg {
      position: absolute;
      top: -40px;
      left: -60px;
      z-index: 0;
      pointer-events: none;
    }
    .about-blob {
      filter: blur(2px);
    }
    .about-grid.revamped {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 2.5rem;
      align-items: center;
      justify-content: space-around;
      z-index: 1;
    }
    .about-img.revamped {
      max-width: 500px;
      border-radius: 24px;
      box-shadow: 0 4px 24px rgba(31, 42, 46, 0.18);
      margin-right: 2rem;
      border: 2px solid #7fb9b3;
      filter: drop-shadow(0 2px 8px #7fb9b3);
    }
    .about-content.revamped {
      flex: 1 1 0;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      align-items: flex-start;
      z-index: 2;
    }
    .about-list.revamped {
      margin-top: 1.2rem;
      list-style: none;
      padding-left: 0;
    }
    .about-list.revamped li {
      font-size: 1.15rem;
      margin-bottom: 0.6rem;
      color: #7fb9b3;
      font-weight: 600;
    }
    .process.revamped {
      background: linear-gradient(135deg, #f0f4f6 0%, #e0f7fa 100%);
      padding: 3rem 0;
    }
    .process-grid.revamped {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 2.5rem;
      margin-top: 2.5rem;
    }
    .step.revamped {
      background: rgba(255, 255, 255, 0.85);
      border-radius: 24px;
      box-shadow: 0 4px 24px rgba(127, 185, 179, 0.12);
      padding: 2rem 1.2rem;
      text-align: center;
      transition:
        box-shadow 0.2s,
        transform 0.2s;
      border: 1.5px solid rgba(127, 185, 179, 0.12);
      position: relative;
      animation: fadeIn 1.2s;
    }
    .step.revamped:hover {
      box-shadow: 0 8px 32px rgba(127, 185, 179, 0.18);
      transform: scale(1.04) translateY(-4px);
      z-index: 2;
    }
    .step-icon {
      font-size: 2rem;
      margin-bottom: 0.8rem;
      display: block;
      filter: drop-shadow(0 2px 8px #7fb9b3);
    }
    .step.revamped h3 {
      color: #7fb9b3;
      margin-bottom: 0.7rem;
      font-size: 1.2rem;
      font-family: 'Playfair Display', serif;
    }
    .step.revamped p {
      color: #1f2a2e;
      font-size: 1.05rem;
    }
    .cta.revamped {
      background: linear-gradient(135deg, #7fb9b3 0%, #1f2a2e 100%);
      color: #fff;
      padding: 3rem 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .cta-content.revamped {
      background: rgba(255, 255, 255, 0.7);
      border-radius: 32px;
      box-shadow: 0 8px 32px rgba(127, 185, 179, 0.18);
      padding: 2.5rem 2rem;
      max-width: 480px;
      backdrop-filter: blur(8px);
      border: 1.5px solid rgba(127, 185, 179, 0.12);
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: fadeIn 1s;
    }
    .cta-content.revamped .revamped-title {
      color: #1f2a2e;
      background: linear-gradient(90deg, #7fb9b3 0%, #1f2a2e 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    .cta-content.revamped .revamped-subtitle {
      color: #3a4a4e;
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
      .about-content.revamped {
        text-align: center;
      }
      .about-img.revamped {
        max-width: 100%;
        margin-right: 0;
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
