import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="container footer-grid">
        <div class="footer-info">
          <h3>Revive & Restore</h3>
          <p style="margin-bottom: 1rem;">
            Modern renovations designed with elegance and care.
          </p>
          <a href="">About us</a>
          <a href="">Gallery</a>
          <a href="">Quote</a>
        </div>

        <div>
          <h4>Services</h4>
          <p>Kitchen Renovations</p>
          <p>Bathroom Remodels</p>
          <p>Flooring</p>
          <p>Fire Places</p>
          <p>Basements</p>
          <p>Custom Carpentry</p>
          <p>Whole Home Renovations</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: project@reviverestorereno.com</p>
          <p>Phone: (555) 555-5555</p>
        </div>
      </div>

      <div class="copyright">
        © {{ date.getFullYear() }} Revive & Restore Renovations
      </div>
    </footer>
  `,
  styles: `
    :host {
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      h1,
      h2,
      h3 {
        font-family: 'Playfair Display', serif;
      }

      .container {
        width: 90%;
        max-width: 1200px;
        margin: auto;
      }
      footer {
        background: #1f2a2e;
        color: white;
        padding: 50px 0 20px;
        a {
          text-decoration: none;
          color: inherit;
        }
      }

      .footer-info {
        display: flex;
        flex-direction: column;
      }

      .footer-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
      }

      .copyright {
        text-align: center;
        margin-top: 30px;
        font-size: 14px;
        opacity: 0.7;
      }

      @media (max-width: 768px) {
        .footer-grid {
          grid-template-columns: 1fr;
          text-align: center;
        }
      }
    }
  `,
})
export class FooterComponent {
  readonly date = new Date();
}
