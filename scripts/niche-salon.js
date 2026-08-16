function generateSalonOverviewHTML(niche) {
    return `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
        
        .theme-salon {
            font-family: 'Manrope', sans-serif;
            background-color: #faf9f6;
            color: #2c302e;
            overflow-x: hidden;
            --olive: #556245;
            --olive-light: #7a8b66;
            --olive-dark: #3a432f;
            --sand: #e6e2d6;
        }

        .salon-transparent-nav {
            position: fixed;
            top: 0; left: 0; right: 0;
            background: transparent;
            transition: all 0.4s ease;
            z-index: 1000;
            padding: 1.5rem 2rem;
            color: #fff;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .salon-nav-solid {
            background: rgba(85, 98, 69, 0.95) !important;
            backdrop-filter: blur(10px);
            padding: 1rem 2rem !important;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            border-bottom: none;
        }

        .salon-hero {
            position: relative;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            text-align: center;
        }

        .salon-hero-bg {
            position: absolute;
            inset: 0;
            background: url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1600&q=80') center/cover no-repeat;
            z-index: -2;
        }

        .salon-hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(85,98,69,0.7));
            z-index: -1;
        }

        .salon-cat-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            margin-top: -5rem;
            position: relative;
            z-index: 10;
            padding: 0 2rem;
        }

        .salon-cat-tile {
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            aspect-ratio: 16/9;
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .salon-cat-tile img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.7s cubic-bezier(0.2, 1, 0.2, 1);
        }

        .salon-cat-tile:hover img {
            transform: scale(1.08);
        }

        .salon-cat-content {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 2rem;
            color: #fff;
        }

        .stylist-card {
            background: #fff;
            border-radius: 16px;
            padding: 2rem;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s;
            border: 1px solid var(--sand);
        }
        
        .stylist-card:hover {
            transform: translateY(-5px);
            border-color: var(--olive);
        }

        .stylist-img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            margin: 0 auto 1.5rem;
            background: linear-gradient(135deg, var(--sand), var(--olive-light));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: #fff;
            border: 4px solid #fff;
            box-shadow: 0 8px 20px rgba(85,98,69,0.2);
        }

        .ba-slider {
            position: relative;
            width: 100%;
            height: 500px;
            border-radius: 16px;
            overflow: hidden;
            cursor: ew-resize;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .ba-image {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            object-fit: cover;
        }

        .ba-after {
            clip-path: polygon(0 0, var(--pos, 50%) 0, var(--pos, 50%) 100%, 0 100%);
        }

        .ba-handle {
            position: absolute;
            top: 0; bottom: 0;
            left: var(--pos, 50%);
            width: 3px;
            background: #fff;
            transform: translateX(-50%);
            pointer-events: none;
            box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }

        .ba-handle::after {
            content: '↔';
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            width: 40px; height: 40px;
            background: #fff;
            color: var(--olive);
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-weight: bold;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        .trust-badge {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1rem;
            padding: 2rem;
        }

        .trust-icon {
            width: 60px; height: 60px;
            background: var(--sand);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: var(--olive);
        }
        
        .salon-btn {
            background: var(--olive);
            color: #fff;
            padding: 1rem 2rem;
            border-radius: 30px;
            border: none;
            font-family: inherit;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            display: inline-block;
            text-decoration: none;
        }
        
        .salon-btn:hover {
            background: var(--olive-dark);
            transform: scale(1.05);
        }
    </style>

    <div class="niche-page theme-salon" id="salonMainScroll">
        <!-- Transparent Overlay Navigation -->
        <header class="niche-header salon-transparent-nav" id="salonNav">
            <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 0.8rem; font-size: 1.5rem; font-weight: 700;">
                    <div style="width: 32px; height: 32px; filter: brightness(0) invert(1);">${niche.logoSvg}</div>
                    <span>${niche.name}</span>
                </div>
                <nav style="display: none; gap: 2rem; font-weight: 500;" class="desktop-nav">
                    <a href="#" style="color: inherit; text-decoration: none;">Services</a>
                    <a href="#" style="color: inherit; text-decoration: none;">Our Stylists</a>
                    <a href="#" style="color: inherit; text-decoration: none;">Gallery</a>
                </nav>
                <div style="display: flex; gap: 1rem; align-items: center;">
                    <button onclick="OrbitexSearch.open('salon')" style="background: none; border: none; color: inherit; cursor: pointer; font-size: 1.2rem;">🔍</button>
                    <button class="salon-btn" onclick="openActionModal('${niche.id}')" style="padding: 0.6rem 1.5rem; font-size: 0.9rem; background: #fff; color: var(--olive);">Book Now</button>
                </div>
            </div>
        </header>

        <!-- Script for scroll nav -->
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="
            window.addEventListener('scroll', function() {
                var nav = document.getElementById('salonNav');
                if (window.scrollY > 50) {
                    nav.classList.add('salon-nav-solid');
                } else {
                    nav.classList.remove('salon-nav-solid');
                }
            });
            
            // Operating hours logic
            var now = new Date();
            var day = now.getDay();
            var hour = now.getHours();
            var isOpen = (hour >= 10 && hour < 20); // 10 AM to 8 PM
            var statusEl = document.getElementById('opStatus');
            var dotEl = document.getElementById('opDot');
            if (statusEl && dotEl) {
                if (isOpen) {
                    statusEl.innerText = 'OPEN NOW';
                    statusEl.style.color = '#2e7d32';
                    dotEl.style.backgroundColor = '#2e7d32';
                } else {
                    statusEl.innerText = 'CLOSED';
                    statusEl.style.color = '#c62828';
                    dotEl.style.backgroundColor = '#c62828';
                }
            }
        " style="display:none;" />

        <!-- Hero -->
        <section class="salon-hero">
            <div class="salon-hero-bg"></div>
            <div class="salon-hero-overlay"></div>
            <div class="niche-wrap" style="z-index: 1;" data-aos="fade-up" data-aos-duration="1000">
                <span style="display: inline-block; padding: 0.5rem 1.2rem; border: 1px solid rgba(255,255,255,0.3); border-radius: 20px; font-size: 0.85rem; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 1.5rem; backdrop-filter: blur(5px);">Premium Beauty Studio</span>
                <h1 style="font-size: 4.5rem; font-weight: 300; margin-bottom: 1.5rem; line-height: 1.1;">Reveal Your <br><strong style="font-weight: 700;">Natural Brilliance</strong></h1>
                <p style="font-size: 1.2rem; opacity: 0.9; max-width: 600px; margin: 0 auto 2.5rem; font-weight: 300;">${niche.tagline}</p>
                <button class="salon-btn" onclick="setNicheView('catalog')" style="padding: 1.2rem 2.5rem; font-size: 1.1rem;">Explore Our Menu</button>
            </div>
        </section>

        <!-- Service Category Grid (2x2) -->
        <section style="background: var(--sand); padding-bottom: 6rem;">
            <div class="niche-wrap salon-cat-grid" data-aos="fade-up" data-aos-delay="200">
                <div class="salon-cat-tile" onclick="setNicheView('catalog')">
                    <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80" alt="Hair Styling">
                    <div class="salon-cat-content">
                        <h3 style="font-size: 1.8rem; margin: 0;">Hair Artistry</h3>
                        <p style="margin: 0.5rem 0 0; opacity: 0.8; font-size: 0.95rem;">Cuts, Color & Treatments →</p>
                    </div>
                </div>
                <div class="salon-cat-tile" onclick="setNicheView('catalog')">
                    <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80" alt="Skin Care">
                    <div class="salon-cat-content">
                        <h3 style="font-size: 1.8rem; margin: 0;">Skin & Spa</h3>
                        <p style="margin: 0.5rem 0 0; opacity: 0.8; font-size: 0.95rem;">Facials & Rejuvenation →</p>
                    </div>
                </div>
                <div class="salon-cat-tile" onclick="setNicheView('catalog')">
                    <img src="https://images.unsplash.com/photo-1595954421405-b3e6a713b198?w=800&q=80" alt="Bridal">
                    <div class="salon-cat-content">
                        <h3 style="font-size: 1.8rem; margin: 0;">Bridal Suite</h3>
                        <p style="margin: 0.5rem 0 0; opacity: 0.8; font-size: 0.95rem;">Makeup & Styling →</p>
                    </div>
                </div>
                <div class="salon-cat-tile" onclick="setNicheView('catalog')">
                    <img src="https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?w=800&q=80" alt="Nails">
                    <div class="salon-cat-content">
                        <h3 style="font-size: 1.8rem; margin: 0;">Nail Studio</h3>
                        <p style="margin: 0.5rem 0 0; opacity: 0.8; font-size: 0.95rem;">Manicures & Pedicures →</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Trust Badges -->
        <section style="padding: 4rem 2rem; background: #fff; border-bottom: 1px solid var(--sand);">
            <div class="niche-wrap" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem;" data-aos="fade-up">
                <div class="trust-badge">
                    <div class="trust-icon">🤝</div>
                    <div>
                        <h4 style="margin: 0 0 0.5rem; font-size: 1.1rem;">L'Oréal Partner</h4>
                        <p style="margin: 0; color: #666; font-size: 0.9rem;">Certified exclusive salon</p>
                    </div>
                </div>
                <div class="trust-badge">
                    <div class="trust-icon">⭐</div>
                    <div>
                        <h4 style="margin: 0 0 0.5rem; font-size: 1.1rem;">10+ Years</h4>
                        <p style="margin: 0; color: #666; font-size: 0.9rem;">Of styling excellence</p>
                    </div>
                </div>
                <div class="trust-badge">
                    <div class="trust-icon">💖</div>
                    <div>
                        <h4 style="margin: 0 0 0.5rem; font-size: 1.1rem;">5000+ Clients</h4>
                        <p style="margin: 0; color: #666; font-size: 0.9rem;">Happy transformations</p>
                    </div>
                </div>
                <div class="trust-badge">
                    <div class="trust-icon">✨</div>
                    <div>
                        <h4 style="margin: 0 0 0.5rem; font-size: 1.1rem;">Premium Only</h4>
                        <p style="margin: 0; color: #666; font-size: 0.9rem;">Top-tier products</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Before / After Gallery -->
        <section style="padding: 6rem 2rem; background: var(--sand);">
            <div class="niche-wrap">
                <div style="text-align: center; margin-bottom: 3rem;" data-aos="fade-up">
                    <h2 style="font-size: 2.5rem; margin: 0 0 1rem; color: var(--olive-dark);">Transformations</h2>
                    <p style="color: #666; font-size: 1.1rem;">Slide to see the magic of our color treatments.</p>
                </div>
                <div class="ba-slider" data-aos="zoom-in" onmousemove="this.style.setProperty('--pos', (event.offsetX / this.offsetWidth * 100) + '%')">
                    <!-- Before Image (Base) -->
                    <img src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=1200&q=80" alt="Before" class="ba-image">
                    <!-- After Image (Clipped) -->
                    <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&q=80" alt="After" class="ba-image ba-after">
                    <!-- Handle -->
                    <div class="ba-handle"></div>
                </div>
            </div>
        </section>

        <!-- Stylists Profile Cards -->
        <section style="padding: 6rem 2rem; background: #fff;">
            <div class="niche-wrap">
                <div style="text-align: center; margin-bottom: 4rem;" data-aos="fade-up">
                    <h2 style="font-size: 2.5rem; margin: 0 0 1rem; color: var(--olive-dark);">Meet Our Experts</h2>
                    <p style="color: #666; font-size: 1.1rem;">Award-winning stylists dedicated to your vision.</p>
                </div>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
                    ${[
                        {name: 'Priya Sharma', spec: 'Master Colorist', exp: '12 Years Exp', rating: '4.9', rev: '124', initial: 'P'},
                        {name: 'Rahul Verma', spec: 'Creative Director', exp: '15 Years Exp', rating: '5.0', rev: '208', initial: 'R'},
                        {name: 'Sneha Patil', spec: 'Bridal Specialist', exp: '8 Years Exp', rating: '4.8', rev: '96', initial: 'S'}
                    ].map((s, i) => `
                        <div class="stylist-card" data-aos="fade-up" data-aos-delay="${i * 100}">
                            <div class="stylist-img">${s.initial}</div>
                            <h3 style="font-size: 1.4rem; margin: 0 0 0.2rem;">${s.name}</h3>
                            <div style="color: var(--olive); font-weight: 500; font-size: 0.95rem; margin-bottom: 0.5rem;">${s.spec} • ${s.exp}</div>
                            <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: #666;">
                                <span style="color: #f59e0b;">★</span> <strong>${s.rating}</strong> (${s.rev} reviews)
                            </div>
                            <button class="salon-btn" style="width: 100%; padding: 0.8rem; font-size: 0.95rem;" onclick="openActionModal('${niche.id}')">Book with ${s.name.split(' ')[0]}</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Operating Hours Card -->
        <section style="padding: 4rem 2rem; background: var(--olive); color: #fff;">
            <div class="niche-wrap" style="display: flex; justify-content: center;" data-aos="fade-up">
                <div style="background: #fff; color: #333; padding: 3rem; border-radius: 16px; width: 100%; max-width: 500px; text-align: center; box-shadow: 0 15px 40px rgba(0,0,0,0.2);">
                    <div style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.4rem 1rem; background: var(--sand); border-radius: 20px; font-size: 0.85rem; font-weight: 700; margin-bottom: 1.5rem;">
                        <span id="opDot" style="width: 8px; height: 8px; border-radius: 50%; background: #999;"></span>
                        <span id="opStatus">CHECKING...</span>
                    </div>
                    <h2 style="font-size: 2rem; margin: 0 0 2rem; color: var(--olive-dark);">Opening Hours</h2>
                    
                    <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--sand); padding-bottom: 0.8rem; margin-bottom: 0.8rem;">
                        <span style="font-weight: 600;">Monday - Friday</span>
                        <span>10:00 AM - 8:00 PM</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--sand); padding-bottom: 0.8rem; margin-bottom: 0.8rem;">
                        <span style="font-weight: 600;">Saturday</span>
                        <span>09:00 AM - 9:00 PM</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding-bottom: 0.8rem; margin-bottom: 1.5rem;">
                        <span style="font-weight: 600;">Sunday</span>
                        <span>10:00 AM - 7:00 PM</span>
                    </div>
                    
                    <p style="color: #666; font-size: 0.9rem; margin: 0;">Located at West High Court Road, Dharampeth, Nagpur.</p>
                </div>
            </div>
        </section>
        
        ${generateMarqueeBanner('10% OFF YOUR FIRST VISIT • ORGANIC PRODUCTS • AWARD WINNING STYLISTS • ')}
    </div>
    `;
}

function generateSalonCatalogHTML(niche) {
    const categories = [...new Set(niche.catalog.map(item => item.cat))];
    
    return `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
        
        .theme-salon-catalog {
            font-family: 'Manrope', sans-serif;
            background-color: #faf9f6;
            color: #2c302e;
            padding-bottom: 100px;
            --olive: #556245;
            --olive-light: #7a8b66;
            --olive-dark: #3a432f;
            --sand: #e6e2d6;
        }

        .catalog-header {
            position: sticky;
            top: 0;
            background: rgba(250, 249, 246, 0.95);
            backdrop-filter: blur(12px);
            z-index: 100;
            border-bottom: 1px solid var(--sand);
            padding: 1rem 2rem;
        }

        .cat-filter-btn {
            background: transparent;
            border: 1px solid var(--olive-light);
            color: var(--olive);
            padding: 0.6rem 1.2rem;
            border-radius: 30px;
            cursor: pointer;
            font-family: inherit;
            font-weight: 500;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .cat-filter-btn.active, .cat-filter-btn:hover {
            background: var(--olive);
            color: #fff;
            border-color: var(--olive);
        }

        .service-card {
            background: #fff;
            border: 1px solid var(--sand);
            border-radius: 12px;
            padding: 1.5rem;
            transition: all 0.3s;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 1.5rem;
            align-items: start;
        }
        
        .service-card:hover {
            box-shadow: 0 10px 30px rgba(85,98,69,0.08);
            border-color: var(--olive-light);
        }

        .variant-pill-container {
            display: flex;
            gap: 0.5rem;
            margin-top: 1rem;
            background: var(--sand);
            padding: 0.3rem;
            border-radius: 8px;
            width: fit-content;
        }

        .variant-pill {
            padding: 0.4rem 0.8rem;
            font-size: 0.85rem;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            color: #666;
            transition: all 0.2s;
        }

        .variant-pill.active {
            background: #fff;
            color: var(--olive-dark);
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        .meta-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.3rem;
            font-size: 0.8rem;
            color: #666;
            background: var(--sand);
            padding: 0.2rem 0.6rem;
            border-radius: 12px;
            margin-right: 0.5rem;
            margin-top: 0.5rem;
        }

        .mobile-action-bar {
            position: fixed;
            bottom: 0; left: 0; right: 0;
            background: #fff;
            padding: 1rem 2rem;
            box-shadow: 0 -5px 20px rgba(0,0,0,0.08);
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            border-top: 1px solid var(--sand);
        }
        
        .stylist-select {
            padding: 0.6rem 1rem;
            border: 1px solid var(--sand);
            border-radius: 8px;
            font-family: inherit;
            color: var(--olive-dark);
            background: #fff;
            outline: none;
            font-weight: 500;
            width: 100%;
            margin-bottom: 1.5rem;
        }
    </style>

    <div class="theme-salon-catalog">
        <header class="catalog-header">
            <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 1rem; cursor: pointer;" onclick="setNicheView('overview')">
                    <span style="font-size: 1.5rem;">←</span>
                    <span style="font-weight: 700; font-size: 1.2rem;">${niche.name} Menu</span>
                </div>
                <div style="display: flex; gap: 1rem;">
                    <button onclick="OrbitexSearch.open('salon')" style="background: none; border: none; font-size: 1.2rem; cursor: pointer;">🔍</button>
                </div>
            </div>
        </header>

        <div class="niche-wrap" style="padding: 2rem 2rem 0;">
            <!-- Stylist Selection -->
            <div data-aos="fade-down">
                <label style="display: block; font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--olive);">Assign Preferred Stylist</label>
                <select class="stylist-select">
                    <option>Any Available Stylist</option>
                    <option>Priya Sharma (Master Colorist)</option>
                    <option>Rahul Verma (Creative Director)</option>
                    <option>Sneha Patil (Bridal Specialist)</option>
                </select>
            </div>

            <!-- Filters -->
            <div style="display: flex; gap: 0.8rem; overflow-x: auto; padding-bottom: 1rem; margin-bottom: 2rem; scrollbar-width: none;" data-aos="fade-in" data-aos-delay="100">
                <button class="cat-filter-btn active" onclick="filterCatalogItems(this, 'all')">🌿 All Services</button>
                ${categories.map(cat => `
                    <button class="cat-filter-btn" onclick="filterCatalogItems(this, '${cat}')">✨ ${cat}</button>
                `).join('')}
            </div>
        </div>

        <div class="niche-wrap" style="padding: 0 2rem;">
            ${niche.catalog.map((item, idx) => `
                <div class="service-card catalog-item" data-category="${item.cat}" style="margin-bottom: 1.5rem;" data-aos="fade-up" data-aos-delay="${(idx % 5) * 50}">
                    <div>
                        <h3 style="margin: 0 0 0.3rem; font-size: 1.3rem;">${item.name}</h3>
                        <p style="margin: 0; color: #666; font-size: 0.95rem; line-height: 1.5;">${item.desc || 'Premium service tailored to your needs.'}</p>
                        
                        <div>
                            <span class="meta-badge">⏱️ Est. 60 min</span>
                            <span class="meta-badge">⭐ High Skill</span>
                            <span class="meta-badge">🧴 L'Oréal / Olaplex</span>
                        </div>

                        <!-- Duration Variants -->
                        <div class="variant-pill-container">
                            <div class="variant-pill" onclick="this.parentElement.querySelectorAll('.variant-pill').forEach(p=>p.classList.remove('active')); this.classList.add('active'); this.closest('.service-card').querySelector('.price-val').innerText = '${formatPrice(item.price * 0.7)}';">30 Min</div>
                            <div class="variant-pill active" onclick="this.parentElement.querySelectorAll('.variant-pill').forEach(p=>p.classList.remove('active')); this.classList.add('active'); this.closest('.service-card').querySelector('.price-val').innerText = '${formatPrice(item.price)}';">60 Min</div>
                            <div class="variant-pill" onclick="this.parentElement.querySelectorAll('.variant-pill').forEach(p=>p.classList.remove('active')); this.classList.add('active'); this.closest('.service-card').querySelector('.price-val').innerText = '${formatPrice(item.price * 1.4)}';">90 Min</div>
                        </div>
                    </div>
                    
                    <div style="text-align: right; display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
                        <div class="price-val" style="font-size: 1.4rem; font-weight: 700; color: var(--olive-dark);">${formatPrice(item.price)}</div>
                        <button style="background: var(--olive); color: white; border: none; padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 600; cursor: pointer; margin-top: auto;" onclick="openItemOrderModal('${niche.id}', '${item.name}', ${item.price})">Add</button>
                    </div>
                </div>
            `).join('')}
        </div>

        <!-- Fixed Mobile Action Bar -->
        <div class="mobile-action-bar">
            <div>
                <div style="font-size: 0.85rem; color: #666;">Total Value</div>
                <div style="font-size: 1.3rem; font-weight: 700; color: var(--olive-dark);">₹0.00</div>
            </div>
            <button style="background: var(--olive); color: white; border: none; padding: 0.8rem 2rem; border-radius: 30px; font-weight: 600; font-size: 1rem; cursor: pointer;" onclick="openActionModal('${niche.id}')">Book Appointment</button>
        </div>
    </div>
    `;
}

