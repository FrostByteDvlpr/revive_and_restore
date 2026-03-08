import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-gallery',
  template: `
    <section class="gallery-hero">
      <div class="container">
        <h1>Gallery</h1>
        <p class="subtitle">
          Explore our collection of projects and completed works.
        </p>
      </div>
    </section>

    <section class="gallery-section">
      <div class="container">
        <div class="gallery-masonry">
          <div class="gallery-item tall" (click)="openLightbox('/reno_1.jpg')">
            <img src="/reno_1.jpg" alt="Renovation Project 1" />
          </div>
          <div class="gallery-item" (click)="openLightbox('/reno_5.jpg')">
            <img src="/reno_5.jpg" alt="Renovation Project 2" />
          </div>
          <div class="gallery-item wide" (click)="openLightbox('/reno_5.jpg')">
            <img src="/reno_5.jpg" alt="Renovation Project 2" />
          </div>
          <div class="gallery-item" (click)="openLightbox('/reno_1.jpg')">
            <img src="/reno_1.jpg" alt="Renovation Project 1" />
          </div>
          <div class="gallery-item tall" (click)="openLightbox('/reno_5.jpg')">
            <img src="/reno_5.jpg" alt="Renovation Project 2" />
          </div>
          <div class="gallery-item" (click)="openLightbox('/reno_1.jpg')">
            <img src="/reno_1.jpg" alt="Renovation Project 1" />
          </div>
        </div>
        @if (lightboxImg()) {
          <div class="lightbox" (click)="closeLightbox()">
            <img [src]="lightboxImg()" alt="Gallery Large" />
          </div>
        }
      </div>
    </section>
  `,
  styles: `
    .gallery-hero {
      background: var(--soft-panel);
      padding: 3rem 0 2rem 0;
      text-align: center;
    }
    .gallery-hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: 2.6rem;
      color: var(--blue-grey);
      margin-bottom: 0.5rem;
    }
    .gallery-hero .subtitle {
      font-size: 1.2rem;
      color: var(--mint-accent);
      margin-bottom: 0;
    }
    .gallery-section {
      background: #fff;
      padding: 2.5rem 0;
    }
    .gallery-masonry {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      grid-auto-rows: 220px;
      gap: 2rem;
      margin-top: 1.5rem;
    }
    .gallery-item {
      background: var(--soft-panel);
      border-radius: 18px;
      box-shadow: 0 2px 12px rgba(31, 42, 46, 0.1);
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition:
        box-shadow 0.2s,
        transform 0.2s;
      cursor: pointer;
      overflow: hidden;
      position: relative;
    }
    .gallery-item.tall {
      grid-row: span 2;
    }
    .gallery-item.wide {
      grid-column: span 2;
    }
    .gallery-item:hover {
      box-shadow: 0 8px 32px rgba(127, 185, 179, 0.18);
      transform: scale(1.03) rotate(-1deg);
      z-index: 2;
    }
    .gallery-item img {
      width: 100%;
      height: 100%;
      border-radius: 14px;
      box-shadow: 0 2px 8px rgba(31, 42, 46, 0.08);
      object-fit: cover;
      transition: filter 0.2s;
    }
    .gallery-item:hover img {
      filter: brightness(1.08) saturate(1.2);
    }
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(31, 42, 46, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.2s;
    }
    .lightbox img {
      max-width: 90vw;
      max-height: 80vh;
      border-radius: 18px;
      box-shadow: 0 8px 32px rgba(127, 185, 179, 0.22);
      background: #fff;
      padding: 1rem;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @media (max-width: 900px) {
      .gallery-masonry {
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 180px;
      }
      .gallery-item.wide {
        grid-column: span 1;
      }
    }
    @media (max-width: 600px) {
      .gallery-hero h1 {
        font-size: 2rem;
      }
      .gallery-masonry {
        grid-template-columns: 1fr;
        grid-auto-rows: 140px;
      }
      .gallery-item {
        padding: 0.2rem;
      }
    }
  `,
})
export class GalleryComponent {
  lightboxImg = signal<string | null>(null);
  openLightbox(img: string) {
    this.lightboxImg.set(img);
  }
  closeLightbox() {
    this.lightboxImg.set(null);
  }
}
