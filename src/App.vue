<script>

import { useCartStore } from './stores/cart'

export default {
  data() {
    return {
      cartStore: useCartStore()
    }
  }
}

</script>

<template>
  <div>
    <header class="navbar" style="background-color: black;">
      <div class="navbar-inner">
        <strong class="nav-brand">
          <span><img src="/public//images/Barber_logo.png" alt="" style="width: 2em;"></span>
          <span style="color: #D4AF37;">K.KAI HAIR ACADEMIC LONDON</span>
        </strong>
        <nav class="nav-links">
          <RouterLink :to="{ name: 'home' }">
            HOME
          </RouterLink>

          <RouterLink :to="{ name: 'products' }">
            SERVICES
          </RouterLink>

          <RouterLink :to="{ name: 'about' }">
            ABOUT
          </RouterLink>

          <RouterLink :to="{ name: 'cart' }">
            SHOPPING CART
            <span v-if="cartStore.totalQuantity">
              ({{ cartStore.totalQuantity }})
            </span>

          </RouterLink>

        </nav>

      </div>

    </header>

    <router-view></router-view>

    <footer class="site-footer">
      <div class="footer-container">

        <!-- Brand -->
        <div class="footer-column footer-brand">
          <h2>LinguaPro</h2>
          <p>
            Professional translation and localization services
            for businesses and individuals worldwide.
          </p>

          <div class="social-links">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Instagram">Instagram</a>
          </div>
        </div>

        <!-- Translation Services -->
        <div class="footer-column">
          <h3>Translation Services</h3>
          <ul>
            <li v-for="service in services" :key="service">
              <a href="#">{{ service }}</a>
            </li>
          </ul>
        </div>

        <!-- Languages -->
        <div class="footer-column">
          <h3>Q & A</h3>
          <ul>
            <li v-for="language in languages" :key="language">
              <a href="#">{{ language }}</a>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div class="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Translators</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Get a Quote</a></li>
          </ul>
        </div>

      </div>

      <!-- Bottom Footer -->
      <div class="footer-bottom">
        <p>
          © {{ currentYear }} LinguaPro. All rights reserved.
        </p>

        <div class="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.nav-brand img {
  width: 2em;
  display: block;
}

.site-footer {
  background: #111827;
  color: #d1d5db;
  padding: 60px 0 0;
}

.footer-container {
  width: min(1200px, 90%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 50px;
  padding-bottom: 50px;
}

.footer-brand h2 {
  color: #ffffff;
  font-size: 28px;
  margin: 0 0 15px;
}

.footer-brand p {
  max-width: 350px;
  line-height: 1.7;
  color: #9ca3af;
}

.footer-column h3 {
  color: #ffffff;
  font-size: 16px;
  margin: 0 0 20px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 12px;
}

.footer-column a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-column a:hover {
  color: #60a5fa;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 25px;
}

.social-links a {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
}

.social-links a:hover {
  color: #60a5fa;
}

.footer-bottom {
  border-top: 1px solid #374151;
  width: min(1200px, 90%);
  margin: 0 auto;
  padding: 22px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.footer-bottom p {
  margin: 0;
  color: #9ca3af;
  font-size: 14px;
}

.legal-links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.legal-links a {
  color: #9ca3af;
  text-decoration: none;
  font-size: 14px;
}

.legal-links a:hover {
  color: #60a5fa;
}

/* Tablet */
@media (max-width: 900px) {
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .site-footer {
    padding-top: 40px;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 30px;
    padding-bottom: 35px;
  }

  .footer-brand {
    grid-column: auto;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .legal-links {
    gap: 12px;
  }
}
</style>