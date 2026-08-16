/* ==========================================================================
   Orbitex Shared Components Library (v1.0)
   Reusable UI components inspired by 23 production e-commerce templates
   ========================================================================== */

// ═══════════════════════════════════════════════════════════════════════════
// 1. TOAST NOTIFICATION SYSTEM
//    Inspired by: Dukaan snackbar.js across all samples
// ═══════════════════════════════════════════════════════════════════════════

const OrbitexToast = {
  _container: null,

  _ensureContainer() {
    if (this._container) return;
    this._container = document.createElement('div');
    this._container.id = 'orbitex-toast-container';
    this._container.setAttribute('role', 'alert');
    this._container.setAttribute('aria-live', 'polite');
    document.body.appendChild(this._container);
  },

  show(message, type = 'info', duration = 3500) {
    this._ensureContainer();
    const toast = document.createElement('div');
    toast.className = `orbitex-toast orbitex-toast--${type}`;

    const icons = {
      success: '✓',
      error: '✕',
      info: 'ℹ',
      warning: '⚠'
    };

    toast.innerHTML = `
      <span class="orbitex-toast__icon">${icons[type] || 'ℹ'}</span>
      <span class="orbitex-toast__msg">${message}</span>
      <div class="orbitex-toast__progress"></div>
    `;

    this._container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('orbitex-toast--visible'));

    toast.querySelector('.orbitex-toast__progress').style.animationDuration = `${duration}ms`;

    setTimeout(() => {
      toast.classList.remove('orbitex-toast--visible');
      toast.classList.add('orbitex-toast--exit');
      setTimeout(() => toast.remove(), 350);
    }, duration);
  },

  success(msg) { this.show(msg, 'success'); },
  error(msg) { this.show(msg, 'error'); },
  info(msg) { this.show(msg, 'info'); },
  warning(msg) { this.show(msg, 'warning'); }
};


// ═══════════════════════════════════════════════════════════════════════════
// 2. UNIVERSAL SEARCH DRAWER
//    Inspired by: HealthXP instant search, Catalyst search offcanvas
// ═══════════════════════════════════════════════════════════════════════════

const OrbitexSearch = {
  _drawer: null,
  _isOpen: false,

  init() {
    if (this._drawer) return;

    const drawer = document.createElement('div');
    drawer.id = 'orbitex-search-drawer';
    drawer.className = 'orbitex-search-drawer';
    drawer.innerHTML = `
      <div class="orbitex-search-backdrop" onclick="OrbitexSearch.close()"></div>
      <div class="orbitex-search-panel">
        <div class="orbitex-search-header">
          <div class="orbitex-search-input-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <input type="text" id="orbitexSearchInput" placeholder="Search services, products, treatments..." autocomplete="off" />
            <button class="orbitex-search-clear" onclick="OrbitexSearch.clearInput()" style="display:none">✕</button>
          </div>
          <button class="orbitex-search-close-btn" onclick="OrbitexSearch.close()">Cancel</button>
        </div>
        <div class="orbitex-search-body">
          <div id="orbitexSearchRecent" class="orbitex-search-section">
            <div class="orbitex-search-section-header">
              <span>Recent Searches</span>
              <button onclick="OrbitexSearch.clearHistory()">Clear All</button>
            </div>
            <div id="orbitexRecentList" class="orbitex-search-chips"></div>
          </div>
          <div id="orbitexSearchCategories" class="orbitex-search-section">
            <div class="orbitex-search-section-header"><span>Categories</span></div>
            <div id="orbitexCategoryChips" class="orbitex-search-chips"></div>
          </div>
          <div id="orbitexSearchResults" class="orbitex-search-results" style="display:none"></div>
          <div id="orbitexSearchEmpty" class="orbitex-search-empty" style="display:none">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#b0a99a" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <p>No results found</p>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(drawer);
    this._drawer = drawer;

    const input = document.getElementById('orbitexSearchInput');
    input.addEventListener('input', () => this._onInput(input.value));
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
  },

  open(nicheId) {
    this.init();
    this._currentNiche = nicheId;
    this._drawer.classList.add('orbitex-search-drawer--open');
    this._isOpen = true;
    document.body.style.overflow = 'hidden';

    const input = document.getElementById('orbitexSearchInput');
    input.value = '';
    input.focus();

    this._renderRecent();
    this._renderCategories();
    document.getElementById('orbitexSearchResults').style.display = 'none';
    document.getElementById('orbitexSearchEmpty').style.display = 'none';
    document.getElementById('orbitexSearchRecent').style.display = '';
    document.getElementById('orbitexSearchCategories').style.display = '';
  },

  close() {
    if (!this._drawer) return;
    this._drawer.classList.remove('orbitex-search-drawer--open');
    this._isOpen = false;
    document.body.style.overflow = '';
  },

  clearInput() {
    const input = document.getElementById('orbitexSearchInput');
    input.value = '';
    input.focus();
    this._onInput('');
  },

  _onInput(query) {
    const clearBtn = this._drawer.querySelector('.orbitex-search-clear');
    clearBtn.style.display = query.length > 0 ? 'flex' : 'none';

    if (query.length < 2) {
      document.getElementById('orbitexSearchResults').style.display = 'none';
      document.getElementById('orbitexSearchEmpty').style.display = 'none';
      document.getElementById('orbitexSearchRecent').style.display = '';
      document.getElementById('orbitexSearchCategories').style.display = '';
      return;
    }

    document.getElementById('orbitexSearchRecent').style.display = 'none';
    document.getElementById('orbitexSearchCategories').style.display = 'none';

    const niche = NICHES_DATA[this._currentNiche];
    if (!niche) return;

    const q = query.toLowerCase();
    const matches = niche.catalog.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.cat.toLowerCase().includes(q) ||
      (item.desc && item.desc.toLowerCase().includes(q))
    );

    const resultsEl = document.getElementById('orbitexSearchResults');
    const emptyEl = document.getElementById('orbitexSearchEmpty');

    if (matches.length === 0) {
      resultsEl.style.display = 'none';
      emptyEl.style.display = 'flex';
      return;
    }

    emptyEl.style.display = 'none';
    resultsEl.style.display = 'block';
    resultsEl.innerHTML = matches.map(item => `
      <div class="orbitex-search-result-item" onclick="OrbitexSearch._selectResult('${item.name}', '${this._currentNiche}', '${item.id}', ${item.price})">
        <div class="orbitex-search-result-info">
          <span class="orbitex-search-result-cat">${item.cat}</span>
          <span class="orbitex-search-result-name">${item.name}</span>
          <span class="orbitex-search-result-price">${formatPrice(item.price)}</span>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b0a99a" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </div>
    `).join('');
  },

  _selectResult(name, nicheId, itemId, price) {
    this._addToHistory(name);
    this.close();
    if (typeof openItemOrderModal === 'function') {
      openItemOrderModal(nicheId, name, price);
    }
  },

  _addToHistory(term) {
    let history = JSON.parse(localStorage.getItem('orbitex_search_history') || '[]');
    history = history.filter(h => h !== term);
    history.unshift(term);
    if (history.length > 8) history = history.slice(0, 8);
    localStorage.setItem('orbitex_search_history', JSON.stringify(history));
  },

  _renderRecent() {
    const history = JSON.parse(localStorage.getItem('orbitex_search_history') || '[]');
    const container = document.getElementById('orbitexRecentList');
    const section = document.getElementById('orbitexSearchRecent');

    if (history.length === 0) {
      section.style.display = 'none';
      return;
    }
    section.style.display = '';
    container.innerHTML = history.map(term =>
      `<button class="orbitex-search-chip" onclick="document.getElementById('orbitexSearchInput').value='${term}'; OrbitexSearch._onInput('${term}')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="9"/></svg>
        ${term}
      </button>`
    ).join('');
  },

  _renderCategories() {
    const niche = NICHES_DATA[this._currentNiche];
    if (!niche) return;

    const cats = [...new Set(niche.catalog.map(i => i.cat))];
    const container = document.getElementById('orbitexCategoryChips');
    container.innerHTML = cats.map(cat =>
      `<button class="orbitex-search-chip orbitex-search-chip--cat" onclick="document.getElementById('orbitexSearchInput').value='${cat}'; OrbitexSearch._onInput('${cat}')">
        ${cat}
      </button>`
    ).join('');
  },

  clearHistory() {
    localStorage.removeItem('orbitex_search_history');
    this._renderRecent();
  }
};


// ═══════════════════════════════════════════════════════════════════════════
// 3. PROMOTIONAL HELLOBAR WITH COUNTDOWN
//    Inspired by: TINKR, HealthXP, Crux Coffee countdown bars
// ═══════════════════════════════════════════════════════════════════════════

const OrbitexHellobar = {
  _bar: null,
  _interval: null,

  show(config) {
    // config: { message, endTime (Date), accent, bgColor, textColor, link, linkText, dismissKey }
    const dismissKey = config.dismissKey || 'hellobar_dismissed';
    if (localStorage.getItem(dismissKey)) return;

    this.remove();

    const bar = document.createElement('div');
    bar.id = 'orbitex-hellobar';
    bar.className = 'orbitex-hellobar';
    bar.style.cssText = `--hellobar-bg: ${config.bgColor || '#1a1918'}; --hellobar-text: ${config.textColor || '#f5f0e8'}; --hellobar-accent: ${config.accent || '#c85a32'};`;

    let countdownHTML = '';
    if (config.endTime) {
      countdownHTML = `
        <div class="orbitex-hellobar__countdown">
          <div class="orbitex-hellobar__time-block"><span id="hellobarDays">00</span><small>Days</small></div>
          <span class="orbitex-hellobar__colon">:</span>
          <div class="orbitex-hellobar__time-block"><span id="hellobarHours">00</span><small>Hrs</small></div>
          <span class="orbitex-hellobar__colon">:</span>
          <div class="orbitex-hellobar__time-block"><span id="hellobarMins">00</span><small>Min</small></div>
          <span class="orbitex-hellobar__colon">:</span>
          <div class="orbitex-hellobar__time-block"><span id="hellobarSecs">00</span><small>Sec</small></div>
        </div>
      `;
    }

    let linkHTML = '';
    if (config.link && config.linkText) {
      linkHTML = `<a href="${config.link}" class="orbitex-hellobar__cta">${config.linkText} →</a>`;
    }

    bar.innerHTML = `
      <div class="orbitex-hellobar__content">
        <span class="orbitex-hellobar__msg">${config.message}</span>
        ${countdownHTML}
        ${linkHTML}
      </div>
      <button class="orbitex-hellobar__dismiss" onclick="OrbitexHellobar.dismiss('${dismissKey}')" aria-label="Dismiss">✕</button>
    `;

    document.body.prepend(bar);
    document.body.classList.add('has-hellobar');
    this._bar = bar;

    if (config.endTime) {
      this._startCountdown(config.endTime);
    }
  },

  _startCountdown(endTime) {
    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, endTime - now);

      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      const dEl = document.getElementById('hellobarDays');
      const hEl = document.getElementById('hellobarHours');
      const mEl = document.getElementById('hellobarMins');
      const sEl = document.getElementById('hellobarSecs');
      if (dEl) dEl.textContent = String(d).padStart(2, '0');
      if (hEl) hEl.textContent = String(h).padStart(2, '0');
      if (mEl) mEl.textContent = String(m).padStart(2, '0');
      if (sEl) sEl.textContent = String(s).padStart(2, '0');

      if (diff <= 0) clearInterval(this._interval);
    };
    update();
    this._interval = setInterval(update, 1000);
  },

  dismiss(key) {
    localStorage.setItem(key, 'true');
    this.remove();
  },

  remove() {
    if (this._interval) clearInterval(this._interval);
    if (this._bar) {
      this._bar.remove();
      document.body.classList.remove('has-hellobar');
      this._bar = null;
    }
  }
};


// ═══════════════════════════════════════════════════════════════════════════
// 4. MOBILE BOTTOM NAVIGATION BAR
//    Inspired by: Jaipur Mart, Pizza Heist, Cold Pressed Oil
// ═══════════════════════════════════════════════════════════════════════════

const OrbitexMobileNav = {
  _nav: null,

  show(config) {
    // config: { tabs: [{ icon, label, action, badge? }], accentColor }
    this.remove();

    if (window.innerWidth > 768) return; // Desktop hidden

    const nav = document.createElement('div');
    nav.id = 'orbitex-mobile-nav';
    nav.className = 'orbitex-mobile-nav';
    nav.style.setProperty('--mobile-nav-accent', config.accentColor || '#c85a32');

    nav.innerHTML = config.tabs.map((tab, i) => `
      <button class="orbitex-mobile-nav__tab ${i === 0 ? 'orbitex-mobile-nav__tab--active' : ''}"
              onclick="${tab.action}; OrbitexMobileNav._setActive(this)">
        <span class="orbitex-mobile-nav__icon">${tab.icon}</span>
        ${tab.badge ? `<span class="orbitex-mobile-nav__badge">${tab.badge}</span>` : ''}
        <span class="orbitex-mobile-nav__label">${tab.label}</span>
      </button>
    `).join('');

    document.body.appendChild(nav);
    document.body.classList.add('has-mobile-nav');
    this._nav = nav;
  },

  _setActive(btn) {
    if (!this._nav) return;
    this._nav.querySelectorAll('.orbitex-mobile-nav__tab').forEach(t => t.classList.remove('orbitex-mobile-nav__tab--active'));
    btn.classList.add('orbitex-mobile-nav__tab--active');
  },

  remove() {
    if (this._nav) {
      this._nav.remove();
      document.body.classList.remove('has-mobile-nav');
      this._nav = null;
    }
  }
};

// Re-evaluate mobile nav on resize
window.addEventListener('resize', () => {
  const nav = document.getElementById('orbitex-mobile-nav');
  if (nav && window.innerWidth > 768) {
    nav.style.display = 'none';
  } else if (nav) {
    nav.style.display = '';
  }
});


// ═══════════════════════════════════════════════════════════════════════════
// 5. MULTI-STEP CHECKOUT / BOOKING MODAL
//    Inspired by: Amaze checkout 3-step, Helsinki savings display
// ═══════════════════════════════════════════════════════════════════════════

const OrbitexCheckout = {
  _overlay: null,
  _currentStep: 1,
  _cart: [],
  _nicheId: null,

  open(nicheId, items) {
    // items: [{ id, name, price, qty, cat, variant? }]
    this._nicheId = nicheId;
    this._cart = items.map(i => ({ ...i, qty: i.qty || 1 }));
    this._currentStep = 1;

    if (!this._overlay) this._createOverlay();
    this._render();
    this._overlay.classList.add('orbitex-checkout--open');
    document.body.style.overflow = 'hidden';
  },

  close() {
    if (this._overlay) {
      this._overlay.classList.remove('orbitex-checkout--open');
      document.body.style.overflow = '';
    }
  },

  _createOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'orbitex-checkout-overlay';
    overlay.className = 'orbitex-checkout';
    overlay.innerHTML = `
      <div class="orbitex-checkout__backdrop" onclick="OrbitexCheckout.close()"></div>
      <div class="orbitex-checkout__panel">
        <div class="orbitex-checkout__header">
          <div class="orbitex-checkout__steps" id="checkoutSteps"></div>
          <button class="orbitex-checkout__close" onclick="OrbitexCheckout.close()">✕</button>
        </div>
        <div class="orbitex-checkout__body" id="checkoutBody"></div>
        <div class="orbitex-checkout__footer" id="checkoutFooter"></div>
      </div>
    `;
    document.body.appendChild(overlay);
    this._overlay = overlay;
  },

  _render() {
    this._renderSteps();
    if (this._currentStep === 1) this._renderCart();
    else if (this._currentStep === 2) this._renderDetails();
    else this._renderConfirm();
  },

  _renderSteps() {
    const steps = ['Review', 'Details', 'Confirm'];
    document.getElementById('checkoutSteps').innerHTML = steps.map((s, i) => {
      const num = i + 1;
      let cls = 'orbitex-checkout__step';
      if (num < this._currentStep) cls += ' orbitex-checkout__step--done';
      if (num === this._currentStep) cls += ' orbitex-checkout__step--active';
      return `
        <div class="${cls}">
          <span class="orbitex-checkout__step-num">${num < this._currentStep ? '✓' : num}</span>
          <span class="orbitex-checkout__step-label">${s}</span>
        </div>
        ${num < 3 ? '<div class="orbitex-checkout__step-line"></div>' : ''}
      `;
    }).join('');
  },

  _renderCart() {
    const niche = NICHES_DATA[this._nicheId];
    const total = this._cart.reduce((s, i) => s + (i.price * i.qty), 0);

    document.getElementById('checkoutBody').innerHTML = `
      <div class="orbitex-checkout__cart">
        ${this._cart.map((item, idx) => `
          <div class="orbitex-checkout__cart-item">
            <div class="orbitex-checkout__cart-info">
              <span class="orbitex-checkout__cart-cat">${item.cat}</span>
              <span class="orbitex-checkout__cart-name">${item.name}</span>
              ${item.variant ? `<span class="orbitex-checkout__cart-variant">${item.variant}</span>` : ''}
            </div>
            <div class="orbitex-checkout__cart-actions">
              <div class="orbitex-checkout__qty">
                <button onclick="OrbitexCheckout._updateQty(${idx}, -1)">−</button>
                <span>${item.qty}</span>
                <button onclick="OrbitexCheckout._updateQty(${idx}, 1)">+</button>
              </div>
              <span class="orbitex-checkout__cart-price">${formatPrice(item.price * item.qty)}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    document.getElementById('checkoutFooter').innerHTML = `
      <div class="orbitex-checkout__summary">
        <div class="orbitex-checkout__total">
          <span>Total</span>
          <span class="orbitex-checkout__total-amount">${formatPrice(total)}</span>
        </div>
        <button class="orbitex-checkout__btn" onclick="OrbitexCheckout._nextStep()">Continue →</button>
      </div>
    `;
  },

  _renderDetails() {
    document.getElementById('checkoutBody').innerHTML = `
      <div class="orbitex-checkout__form">
        <h3 style="margin-bottom: 16px; font-size: 17px;">Your Details</h3>
        <div class="orbitex-checkout__field">
          <label>Full Name</label>
          <input type="text" id="checkoutName" placeholder="Your full name" required />
        </div>
        <div class="orbitex-checkout__field">
          <label>Phone Number</label>
          <input type="tel" id="checkoutPhone" placeholder="+91 98765 43210" required />
        </div>
        <div class="orbitex-checkout__field">
          <label>Email (optional)</label>
          <input type="email" id="checkoutEmail" placeholder="your@email.com" />
        </div>
        <div class="orbitex-checkout__field">
          <label>Preferred Date</label>
          <input type="date" id="checkoutDate" />
        </div>
        <div class="orbitex-checkout__field">
          <label>Notes / Special Requests</label>
          <textarea id="checkoutNotes" rows="3" placeholder="Any special requirements..."></textarea>
        </div>
      </div>
    `;

    document.getElementById('checkoutFooter').innerHTML = `
      <div class="orbitex-checkout__summary">
        <button class="orbitex-checkout__btn orbitex-checkout__btn--outline" onclick="OrbitexCheckout._prevStep()">← Back</button>
        <button class="orbitex-checkout__btn" onclick="OrbitexCheckout._nextStep()">Review →</button>
      </div>
    `;
  },

  _renderConfirm() {
    const total = this._cart.reduce((s, i) => s + (i.price * i.qty), 0);
    const name = document.getElementById('checkoutName')?.value || 'Guest';
    const phone = document.getElementById('checkoutPhone')?.value || '';

    document.getElementById('checkoutBody').innerHTML = `
      <div class="orbitex-checkout__confirm">
        <div class="orbitex-checkout__confirm-icon">✓</div>
        <h3>Order Summary</h3>
        <div class="orbitex-checkout__confirm-details">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Items:</strong> ${this._cart.length}</p>
          <p class="orbitex-checkout__confirm-total"><strong>Total:</strong> ${formatPrice(total)}</p>
        </div>
      </div>
    `;

    document.getElementById('checkoutFooter').innerHTML = `
      <div class="orbitex-checkout__summary">
        <button class="orbitex-checkout__btn orbitex-checkout__btn--outline" onclick="OrbitexCheckout._prevStep()">← Back</button>
        <button class="orbitex-checkout__btn orbitex-checkout__btn--confirm" onclick="OrbitexCheckout._submit()">Confirm Booking ✓</button>
      </div>
    `;
  },

  _nextStep() {
    if (this._currentStep === 2) {
      const name = document.getElementById('checkoutName')?.value;
      const phone = document.getElementById('checkoutPhone')?.value;
      if (!name || !phone) {
        OrbitexToast.warning('Please fill in your name and phone number.');
        return;
      }
    }
    if (this._currentStep < 3) {
      this._currentStep++;
      this._render();
    }
  },

  _prevStep() {
    if (this._currentStep > 1) {
      this._currentStep--;
      this._render();
    }
  },

  _updateQty(idx, delta) {
    this._cart[idx].qty = Math.max(1, this._cart[idx].qty + delta);
    this._renderCart();
  },

  _submit() {
    const niche = NICHES_DATA[this._nicheId];
    this.close();
    OrbitexToast.success(`Booking confirmed with ${niche?.name || 'us'}! We'll contact you shortly.`);
  }
};


// ═══════════════════════════════════════════════════════════════════════════
// 6. SHIMMER SKELETON LOADER UTILITY
//    Inspired by: HealthXP, Dukaan Demo Store shimmer gradients
// ═══════════════════════════════════════════════════════════════════════════

const OrbitexShimmer = {
  card(count = 4) {
    return Array(count).fill(0).map(() => `
      <div class="orbitex-shimmer-card">
        <div class="orbitex-shimmer orbitex-shimmer--image"></div>
        <div class="orbitex-shimmer orbitex-shimmer--title"></div>
        <div class="orbitex-shimmer orbitex-shimmer--text"></div>
        <div class="orbitex-shimmer orbitex-shimmer--text orbitex-shimmer--short"></div>
      </div>
    `).join('');
  },

  line(count = 3) {
    return Array(count).fill(0).map((_, i) => `
      <div class="orbitex-shimmer orbitex-shimmer--line" style="width:${80 - i * 15}%; animation-delay:${i * 0.1}s"></div>
    `).join('');
  }
};


// ═══════════════════════════════════════════════════════════════════════════
// 7. ANIMATE ON SCROLL (AOS LITE)
//    Inspired by: Dukaan Enterprise AOS integration
// ═══════════════════════════════════════════════════════════════════════════

const OrbitexAOS = {
  _observer: null,

  init() {
    if (this._observer) return;

    this._observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('orbitex-aos--visible');
          this._observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    this.refresh();
  },

  refresh() {
    document.querySelectorAll('[data-aos]').forEach(el => {
      el.classList.remove('orbitex-aos--visible');
      if (this._observer) this._observer.observe(el);
    });
  }
};

// Auto-init AOS when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => OrbitexAOS.init());
} else {
  OrbitexAOS.init();
}


// ═══════════════════════════════════════════════════════════════════════════
// 8. MARQUEE BANNER COMPONENT
//    Inspired by: Helsinki scrolling marquee, Gold ticker
// ═══════════════════════════════════════════════════════════════════════════

function generateMarqueeBanner(text, bgColor = '#1a1918', textColor = '#f5f0e8', speed = 30) {
  return `
    <div class="orbitex-marquee" style="background:${bgColor}; color:${textColor};">
      <div class="orbitex-marquee__track" style="animation-duration:${speed}s">
        <span>${text}</span>
        <span>${text}</span>
        <span>${text}</span>
        <span>${text}</span>
      </div>
    </div>
  `;
}
