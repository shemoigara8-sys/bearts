:root {
  --bg: #f7f3ee;
  --card: #fffdfb;
  --text: #1d1a17;
  --muted: #6d655e;
  --line: #e7dfd7;
  --accent: #a8673c;
  --accent-dark: #7c4b2c;
  --soft: #f3e6dc;
  --shadow: rgba(24, 20, 17, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  background: var(--bg);
  color: var(--text);
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  width: 100%;
  display: block;
}

button,
input,
select,
textarea {
  font: inherit;
}

.container {
  width: min(1100px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  background: rgba(247, 243, 238, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
  z-index: 20;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 74px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 0.2em;
}

.menu {
  display: flex;
  gap: 24px;
  color: var(--muted);
  font-weight: 600;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  font-weight: 700;
  border: 1px solid transparent;
  transition: 0.2s ease;
  cursor: pointer;
}

.btn-primary {
  background: var(--accent);
  color: white;
}

.btn-primary:hover {
  background: var(--accent-dark);
}

.btn-secondary {
  color: var(--text);
  border-color: var(--line);
  background: transparent;
}

.hero {
  padding: 72px 0 32px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 34px;
  align-items: center;
}

.badge {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--soft);
  color: var(--accent-dark);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.72rem;
  font-weight: 800;
}

.hero-copy h1 {
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 1.02;
  margin: 18px 0 18px;
}

.hero-copy p {
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.8;
  max-width: 620px;
  margin-bottom: 20px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.art-card {
  position: relative;
  width: 100%;
  height: 560px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 24px 50px var(--shadow);
  background: linear-gradient(135deg, #d7b291, #bb7c58, #3b2c29);
}

.art-image {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.2), rgba(0,0,0,0.1)),
    radial-gradient(circle at 25% 30%, rgba(255,255,255,0.7), transparent 18%),
    linear-gradient(135deg, #d7c0a7 0%, #c18a62 40%, #563a33 100%);
}

.floating-card {
  position: absolute;
  left: 24px;
  bottom: 24px;
  background: rgba(255,255,255,0.88);
  border-radius: 18px;
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-shadow: 0 16px 32px rgba(0,0,0,0.08);
}

.section {
  padding: 70px 0;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
}

.section-head h2,
.commission-box h2,
.about-card h2,
.contact-copy h2 {
  margin: 0;
  font-size: clamp(2.1rem, 3vw, 3rem);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.product-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(0,0,0,0.02);
}

.product-card img {
  height: 320px;
  object-fit: cover;
}

.product-info {
  padding: 18px 20px 22px;
}

.product-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.product-row h3 {
  margin: 0;
  font-size: 1.2rem;
}

.product-info p {
  margin: 10px 0 0;
  color: var(--muted);
  font-weight: 600;
}

.commission-box,
.contact-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  background: #f2e3d5;
  border: 1px solid #e4c8a8;
  border-radius: 30px;
  padding: 38px;
}

.order-form {
  display: grid;
  gap: 14px;
}

.order-form input,
.order-form select,
.order-form textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 14px 16px;
  background: #fff;
  color: var(--text);
}

.order-form textarea {
  resize: vertical;
  min-height: 110px;
}

.status-message {
  margin: 0;
  color: var(--accent-dark);
  font-weight: 700;
}

.about-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 40px 30px;
}

.about-card p {
  color: var(--muted);
  line-height: 1.8;
  margin-top: 12px;
}

.footer {
  padding: 24px 0 40px;
  color: var(--muted);
  text-align: center;
}

@media (max-width: 820px) {
  .menu {
    display: none;
  }

  .hero-grid,
  .commission-box,
  .contact-box,
  .product-grid {
    grid-template-columns: 1fr;
  }

  .art-card {
    height: 420px;
  }

  .hero {
    padding-top: 50px;
  }
}
