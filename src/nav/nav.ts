import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  template: `
    <header>
      <div class="container nav">
        <div class="logo">Revive & Restore</div>
        <button
          class="nav-toggle"
          (click)="menuOpen = !menuOpen"
          aria-label="Toggle navigation"
        >
          <span></span><span></span><span></span>
        </button>
        <nav [class.open]="menuOpen">
          <a (click)="menuOpen = !menuOpen" routerLink="/">Home</a>
          <a (click)="menuOpen = !menuOpen" routerLink="/services">Services</a>
          <a (click)="menuOpen = !menuOpen" routerLink="/gallery">Gallery</a>
          <a (click)="menuOpen = !menuOpen" routerLink="/about">About</a>
          <a (click)="menuOpen = !menuOpen" routerLink="/contact">Contact</a>
        </nav>
      </div>
    </header>
  `,
  styles: `
    :host {
      header {
        background: var(--soft-panel);
        box-shadow: 0 2px 8px rgba(31, 42, 46, 0.04);
        padding: 1.5rem 0;
      }
      .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
      }
      .logo {
        font-size: 2rem;
        font-family: 'Playfair Display', serif;
        color: var(--blue-grey);
        font-weight: 700;
        letter-spacing: 2px;
      }
      .nav-toggle {
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background: none;
        border: none;
        cursor: pointer;
        z-index: 20;
      }
      .nav-toggle span {
        display: block;
        width: 28px;
        height: 3px;
        margin: 4px 0;
        background: var(--blue-grey);
        border-radius: 2px;
        transition: 0.3s;
      }
      nav {
        display: flex;
        align-items: center;
        transition: max-height 0.3s;
      }
      nav a {
        color: var(--blue-grey);
        text-decoration: none;
        margin-left: 2rem;
        font-size: 1.1rem;
        transition: color 0.2s;
      }
      nav a:hover {
        color: var(--mint-accent);
      }
      @media (max-width: 800px) {
        .nav-toggle {
          display: flex;
        }
        .logo {
          font-size: 1.5rem;
        }
        nav {
          position: absolute;
          top: 100%;
          right: 0;
          background: var(--soft-panel);
          flex-direction: column;
          align-items: flex-end;
          width: 100vw;
          max-height: 0;
          padding: 0;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(31, 42, 46, 0.08);
          border-radius: 0 0 12px 12px;
          transition:
            max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1),
            padding 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1002;
        }
        nav.open {
          max-height: 400px;
          padding: 1rem 0.5rem;
          z-index: 1002;
        }
        nav a {
          margin: 0.5rem 1rem;
          font-size: 1.15rem;
        }
      }
      @media (max-width: 360px) {
        .logo {
          font-size: 1.1rem;
        }
      }
    }
  `,
})
export class NavComponent {
  menuOpen = false;
}
