* {
  box-sizing: border-box;
}

:root {
  --bg: #06131d;
  --bg-soft: #0e1f2d;
  --panel: #112a3d;
  --panel-alt: #0d2235;
  --text: #ebf4ff;
  --muted: #bfd1e0;
  --line: rgba(191, 209, 224, 0.18);
  --primary: #5ec8ff;
  --primary-strong: #1ea7ff;
  --accent: #d8edff;
  --success: #90e6b2;
  --shadow: rgba(5, 15, 25, 0.45);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #071722 0%, #0b1d2d 100%);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

button, input, select, textarea {
  font: inherit;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(12px);
  background: rgba(6, 19, 29, 0.78);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 74px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.brand-mark {
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #04151f;
  font-weight: 800;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 24px;
  color: var(--muted);
  font-size: 0.96rem;
}

.main-nav a {
  transition: color 0.2s ease;
}

.main-nav a:hover,
.main-nav a:focus-visible {
  color: var(--text);
}

.hero {
  padding: 90px 0 40px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 48px;
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hero h1,
.section-heading h2,
.split-layout h2,
.contact-copy h2,
.contracts-hero h1 {
  margin: 0 0 18px;
  line-height: 1.06;
  letter-spacing: -0.05em;
}

.hero h1 {
  font-size: clamp(2.8rem, 5vw, 4.8rem);
  max-width: 670px;
}

.intro {
  max-width: 610px;
  margin: 0;
  color: var(--muted);
  font-size: 1.08rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 24px;
  border-radius: 12px;
  border: 1px solid transparent;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #05131d;
  box-shadow: 0 12px 28px rgba(30, 167, 255, 0.28);
}

.btn-secondary {
  background: transparent;
  color: var(--text);
  border-color: rgba(255, 255, 255, 0.12);
}

.hero-stats {
  list-style: none;
  padding: 0;
  margin: 28px 0 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.hero-stats li {
  display: flex;
  flex-direction: column;
  padding: 18px 14px 16px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(255,255,255,0.02);
}

.hero-stats strong {
  font-size: 1.06rem;
  margin-bottom: 6px;
}

.hero-stats span {
  color: var(--muted);
  font-size: 0.78rem;
}

.hero-panel {
  position: relative;
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.panel-card {
  background: rgba(17, 42, 61, 0.92);
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: 0 24px 54px var(--shadow);
}

.panel-main {
  width: min(100%, 500px);
  padding: 26px 22px 18px;
}

.panel-topline {
  display: flex;
  gap: 8px;
  margin-bottom: 18px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.16);
}

.dot.active {
  background: var(--success);
}

.chart-box {
  position: relative;
  height: 220px;
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015));
  border: 1px solid var(--line);
  overflow: hidden;
}

.chart-line {
  position: absolute;
  left: 10%;
  right: 10%;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(94,200,255,0.2), rgba(94,200,255,0.95), rgba(94,200,255,0.2));
}

.line-one {
  top: 60%;
  transform: rotate(-18deg);
}

.line-two {
  top: 38%;
  transform: rotate(8deg);
}

.chart-points {
  position: absolute;
  inset: 0;
}

.point {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 18px rgba(94,200,255,0.7);
}

.p1 { left: 18%; top: 52%; }
.p2 { left: 40%; top: 28%; }
.p3 { left: 61%; top: 40%; }
.p4 { left: 76%; top: 62%; }

.metric-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 20px;
}

.metric-row small {
  display: block;
  color: var(--muted);
  margin-bottom: 8px;
}

.metric-row strong {
  font-size: 1.18rem;
}

.floating-card {
  position: absolute;
  right: 16px;
  bottom: 20px;
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tag {
  display: inline-block;
  width: fit-content;
  background: rgba(144, 230, 178, 0.12);
  border: 1px solid rgba(144, 230, 178, 0.28);
  color: var(--success);
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.trust-band {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(8, 22, 32, 0.68);
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  text-align: center;
  color: var(--muted);
  padding: 18px 0;
  font-weight: 600;
}

.section {
  padding: 92px 0;
}

.section-alt {
  background: rgba(15, 27, 38, 0.82);
}

.section-heading {
  margin-bottom: 34px;
}

.section-heading h2,
.split-layout h2,
.contact-copy h2,
.contracts-hero h1 {
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  max-width: 760px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.info-card {
  background: rgba(17, 42, 61, 0.88);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 24px 22px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.info-card:hover {
  transform: translateY(-3px);
  border-color: rgba(94,200,255,0.35);
}

.icon {
  font-size: 2.1rem;
  margin-bottom: 12px;
}

.info-card h3 {
  margin: 0 0 10px;
  font-size: 1.25rem;
}

.info-card p {
  margin: 0;
  color: var(--muted);
}

.split-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 38px;
  align-items: start;
}

.feature-list {
  display: grid;
  gap: 20px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 18px;
  background: rgba(8, 20, 30, 0.8);
  border: 1px solid var(--line);
  border-radius: 18px;
}

.feature-item span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(94,200,255,0.15);
  color: var(--primary);
  font-weight: 800;
}

.feature-item h3 {
  margin: 0 0 6px;
  font-size: 1.15rem;
}

.feature-item p {
  margin: 0;
  color: var(--muted);
}

.timeline {
  display: grid;
  gap: 18px;
}

.step {
  display: grid;
  grid-template-columns: 74px 1fr;
  gap: 20px;
  align-items: start;
  padding: 18px 20px;
  background: rgba(17, 42, 61, 0.86);
  border: 1px solid var(--line);
  border-radius: 18px;
}

.step span {
  display: inline-flex;
  width: 74px;
  height: 74px;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(94,200,255,0.24), rgba(94,200,255,0.08));
  border: 1px solid rgba(94,200,255,0.35);
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--primary);
}

.step h3 {
  margin: 0 0 6px;
}

.step p {
  margin: 0;
  color: var(--muted);
}

.testimonial-section {
  background: rgba(11, 24, 35, 0.85);
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.quote {
  margin: 0;
  padding: 24px 22px;
  border-radius: 22px;
  border: 1px solid var(--line);
  background: rgba(17, 42, 61, 0.82);
  color: var(--text);
  line-height: 1.75;
}

.quote footer {
  margin-top: 18px;
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 600;
}

.contact-wrap {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 36px;
  align-items: start;
}

.contact-copy p {
  color: var(--muted);
}

.contact-meta {
  margin-top: 26px;
  display: grid;
  gap: 8px;
}

.contact-meta a {
  color: var(--primary);
}

.contact-form {
  display: grid;
  gap: 18px;
  background: rgba(17, 42, 61, 0.9);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 24px;
}

.contact-form label {
  display: grid;
  gap: 8px;
  font-weight: 600;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  background: rgba(7, 18, 27, 0.76);
  color: var(--text);
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #a9c0d4;
}

.contact-form textarea {
  resize: vertical;
  min-height: 120px;
}

.site-footer {
  border-top: 1px solid var(--line);
  background: rgba(6, 19, 29, 0.9);
}

.footer-wrap {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 0;
  color: var(--muted);
  font-size: 0.94rem;
}

.contracts-hero {
  padding-top: 80px;
}

.contracts-terms {
  margin-top: 8px;
}

@media (max-width: 900px) {
  .hero-grid,
  .split-layout,
  .contact-wrap,
  .card-grid,
  .testimonial-grid {
    grid-template-columns: 1fr;
  }

  .trust-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero-panel {
    min-height: 360px;
  }
}

@media (max-width: 640px) {
  .main-nav {
    display: none;
  }

  .hero {
    padding-top: 56px;
  }

  .hero-stats,
  .trust-grid,
  .card-grid {
    grid-template-columns: 1fr;
  }

  .step {
    grid-template-columns: 1fr;
  }

  .footer-wrap {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
