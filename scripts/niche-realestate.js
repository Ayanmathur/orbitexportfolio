function generateRealEstateOverviewHTML(niche) {
    return `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Syne:wght@600;700;800&display=swap');
        
        @keyframes realEstateFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes realEstatePulse { 0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); } 70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); } 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); } }
        @keyframes realEstateSlide { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
        
        .blueprint-bg {
            background-image: 
                linear-gradient(rgba(4, 78, 58, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(4, 78, 58, 0.05) 1px, transparent 1px);
            background-size: 40px 40px;
        }

        .re-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .re-card:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 20px 40px rgba(4, 78, 58, 0.15); }
        
        .re-btn-gradient {
            background: linear-gradient(135deg, #044e3a 0%, #059669 100%);
            transition: all 0.3s;
        }
        .re-btn-gradient:hover {
            box-shadow: 0 10px 20px rgba(5, 150, 105, 0.3);
            transform: translateY(-2px);
        }
        
        .pulse-badge { animation: realEstatePulse 2s infinite; }
        
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            background: #044e3a;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(4, 78, 58, 0.5);
        }

        /* Advisor Chat Widget */
        .advisor-fab {
            position: fixed; bottom: 2rem; right: 2rem; width: 60px; height: 60px;
            background: linear-gradient(135deg, #044e3a, #10b981);
            border-radius: 50%; display: flex; align-items: center; justify-content: center;
            color: white; font-size: 1.5rem; cursor: pointer; z-index: 100;
            box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4); transition: transform 0.3s;
        }
        .advisor-fab:hover { transform: scale(1.1); }
        
        .advisor-card {
            position: fixed; bottom: 6rem; right: 2rem; width: 320px;
            background: white; border-radius: 16px; box-shadow: 0 15px 35px rgba(0,0,0,0.15);
            z-index: 99; overflow: hidden; opacity: 0; pointer-events: none;
            transform: translateY(20px); transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: 1px solid #e2e8f0;
        }
        .advisor-card.active { opacity: 1; pointer-events: auto; transform: translateY(0); }
        
        .advisor-header { background: #044e3a; color: white; padding: 1.5rem; display: flex; align-items: center; gap: 1rem; }
        .advisor-photo { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid #10b981; }
        
        /* 3D Hero Image */
        .hero-3d-perspective {
            transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
            transition: transform 0.5s ease;
        }
        .hero-3d-perspective:hover {
            transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
        }
    </style>
    <div class="niche-page theme-realestate" style="background-color: #f8fafc; font-family: 'Archivo', sans-serif; color: #1e293b; overflow-x: hidden;">
        <!-- Header -->
        <header class="niche-header" style="position: sticky; top: 0; z-index: 50; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(4, 78, 58, 0.1); padding: 1rem 0;">
            <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center; max-width: 1280px; margin: 0 auto; padding: 0 2rem;">
                <div class="niche-brand" style="display: flex; align-items: center; gap: 1rem;">
                    <div style="background: linear-gradient(135deg, #044e3a, #059669); padding: 0.5rem; border-radius: 8px;">
                        ${niche.logoSvg.replace('fill="currentColor"', 'fill="white"')}
                    </div>
                    <div>
                        <h2 style="font-family: 'Syne', sans-serif; font-weight: 700; color: #044e3a; margin: 0; font-size: 1.5rem; letter-spacing: -0.02em;">Mahalaxmi Properties</h2>
                        <span style="font-size: 0.75rem; color: #64748b; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600;">Premium Real Estate</span>
                    </div>
                </div>
                <div class="niche-nav-links" style="display: flex; gap: 2rem; align-items: center;">
                    <button onclick="OrbitexSearch.open('${niche.id}')" style="background:none;border:none;cursor:pointer;color:#475569;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                    <a href="#" onclick="setNicheView('catalog')" style="color: #475569; text-decoration: none; font-weight: 600; font-size: 0.95rem; transition: color 0.2s;" onmouseover="this.style.color='#059669'" onmouseout="this.style.color='#475569'">Projects</a>
                    <a href="#amenities" style="color: #475569; text-decoration: none; font-weight: 600; font-size: 0.95rem; transition: color 0.2s;" onmouseover="this.style.color='#059669'" onmouseout="this.style.color='#475569'">Amenities</a>
                    <button class="re-btn-gradient pulse-badge" onclick="openActionModal('${niche.id}')" style="color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600; font-size: 0.95rem; cursor: pointer;">Book Site Visit</button>
                </div>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="blueprint-bg" style="padding: 6rem 2rem; background-color: #f8fafc; position: relative; overflow: hidden; border-bottom: 1px solid rgba(4, 78, 58, 0.1);">
            <div style="position: absolute; top: 10%; right: 10%; width: 300px; height: 300px; background: radial-gradient(circle, rgba(5, 150, 105, 0.1) 0%, transparent 70%); border-radius: 50%;"></div>
            
            <div class="niche-wrap" style="max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
                <div data-aos="fade-up" style="position: relative; z-index: 10;">
                    <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: white; color: #044e3a; font-size: 0.75rem; font-weight: 700; padding: 0.5rem 1.25rem; border-radius: 50px; margin-bottom: 1.5rem; letter-spacing: 0.05em; border: 1px solid rgba(16, 185, 129, 0.3); box-shadow: 0 0 15px rgba(16, 185, 129, 0.2);">
                        <span class="pulse-badge" style="display: inline-block; width: 8px; height: 8px; background: #10b981; border-radius: 50%;"></span>
                        RERA VERIFIED: P50500012345
                    </div>
                    <h1 style="font-family: 'Syne', sans-serif; font-size: 4.5rem; font-weight: 800; color: #0f172a; line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -0.03em;">
                        Elevate Your <span style="background: linear-gradient(135deg, #044e3a, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Living</span> Experience.
                    </h1>
                    <p style="font-size: 1.25rem; color: #475569; line-height: 1.6; margin-bottom: 2.5rem; max-width: 500px;">
                        ${niche.tagline} Discover premium 2 & 3 BHK residences with 70% open green space.
                    </p>
                    <div style="display: flex; gap: 1rem;">
                        <button class="re-btn-gradient" onclick="setNicheView('catalog')" style="color: white; border: none; padding: 1rem 2rem; border-radius: 8px; font-weight: 600; font-size: 1.1rem; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                            View Floor Plans
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </button>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" style="position: relative; perspective: 1000px;">
                    <div style="position: absolute; inset: -20px; background: linear-gradient(135deg, #044e3a, #10b981); border-radius: 24px; opacity: 0.15; transform: rotate(3deg);"></div>
                    <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80" alt="Exterior" class="hero-3d-perspective" style="width: 100%; height: 600px; object-fit: cover; border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4); position: relative; z-index: 2;">
                    
                    <div style="position: absolute; top: 20%; left: -30px; z-index: 3; animation: realEstateFloat 4s ease-in-out infinite; background: white; padding: 1rem; border-radius: 50%; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">🏊‍♂️</div>
                    <div style="position: absolute; bottom: 30%; right: -20px; z-index: 3; animation: realEstateFloat 5s ease-in-out infinite reverse; background: white; padding: 1rem; border-radius: 50%; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">🌳</div>
                </div>
            </div>
            <!-- SVG Wave Divider -->
            <svg style="position: absolute; bottom: 0; left: 0; width: 100%; height: 60px;" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="#ffffff" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,133.3C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </section>

        <!-- Builder Marquee -->
        <div data-aos="fade-up" style="background: white; padding: 2rem 0; border-bottom: 1px solid #e2e8f0;">
            <div style="text-align: center; color: #64748b; font-size: 0.85rem; font-weight: 700; letter-spacing: 0.1em; margin-bottom: 1rem;">TRUSTED PARTNERS & DEVELOPERS</div>
            ${generateMarqueeBanner("Lodha Group • Mahindra Lifespaces • Godrej Properties • Oberoi Realty • DLF Limited • Prestige Estates • Shapoorji Pallonji • Tata Housing")}
        </div>

        <!-- Construction Timeline -->
        <section style="padding: 6rem 2rem; background: #f8fafc;">
            <div class="niche-wrap" style="max-width: 1000px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 4rem;" data-aos="fade-up">
                    <h2 style="font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 700; color: #044e3a;">Project Progress</h2>
                    <p style="color: #64748b; font-size: 1.1rem;">On track for timely delivery.</p>
                </div>
                
                <div data-aos="fade-up" data-aos-delay="100" style="background: white; padding: 3rem; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); position: relative;">
                    <div style="display: flex; justify-content: space-between; position: relative; z-index: 2;">
                        ${['Land Acq.', 'Foundation', 'Structure', 'Finishing', 'Possession'].map((step, i) => `
                            <div style="text-align: center; width: 20%;">
                                <div style="width: 40px; height: 40px; margin: 0 auto 1rem; background: ${i < 3 ? '#10b981' : 'white'}; border: 3px solid ${i < 3 ? '#10b981' : '#cbd5e1'}; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: ${i < 3 ? 'white' : '#94a3b8'}; font-weight: 700; position: relative; box-shadow: ${i===2 ? '0 0 0 5px rgba(16,185,129,0.2)' : 'none'};">
                                    ${i < 3 ? '✓' : i + 1}
                                </div>
                                <div style="font-weight: 700; color: #0f172a;">${step}</div>
                                <div style="font-size: 0.85rem; color: #64748b;">${i<2?'Completed':i===2?'In Progress':'Upcoming'}</div>
                            </div>
                        `).join('')}
                    </div>
                    <!-- Progress Line -->
                    <div style="position: absolute; top: 4.2rem; left: 10%; width: 80%; height: 4px; background: #cbd5e1; z-index: 1;">
                        <div style="width: 65%; height: 100%; background: #10b981; transition: width 1.5s ease-out; position: relative;">
                            <div style="position: absolute; right: 0; top: -25px; background: #0f172a; color: white; font-size: 0.75rem; padding: 2px 6px; border-radius: 4px; font-weight: 700;">65%</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Amenities Section -->
        <section id="amenities" style="padding: 6rem 2rem; background: white; position: relative;">
            <div class="niche-wrap" style="max-width: 1280px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 4rem;" data-aos="fade-up">
                    <h2 style="font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 700; color: #0f172a; margin-bottom: 1rem;">Curated Amenities</h2>
                    <p style="font-size: 1.1rem; color: #64748b; max-width: 600px; margin: 0 auto;">Designed for a resort-like lifestyle.</p>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem;">
                    ${[
                        { icon: '🏊‍♂️', name: 'Infinity Pool' },
                        { icon: '🏛️', name: 'Grand Clubhouse' },
                        { icon: '🏋️‍♂️', name: 'Modern Gym' },
                        { icon: '⚡', name: 'EV Charging' },
                        { icon: '🛝', name: "Children's Park" },
                        { icon: '🏃‍♂️', name: 'Jogging Track' },
                        { icon: '🛡️', name: '24/7 Security' },
                        { icon: '🔋', name: 'Power Backup' }
                    ].map((amenity, i) => `
                        <div class="re-card" data-aos="fade-up" data-aos-delay="${i*50}" style="background: #f8fafc; padding: 2.5rem 1.5rem; border-radius: 16px; text-align: center; border: 1px solid rgba(16, 185, 129, 0.1);">
                            <div style="width: 80px; height: 80px; margin: 0 auto 1.5rem; background: white; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 2.5rem; box-shadow: 0 10px 20px rgba(0,0,0,0.05); border: 2px solid transparent; background-image: linear-gradient(white, white), linear-gradient(135deg, #044e3a, #10b981); background-origin: border-box; background-clip: content-box, border-box;">
                                ${amenity.icon}
                            </div>
                            <h3 style="font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; color: #0f172a; margin: 0;">${amenity.name}</h3>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Office Locator -->
        <section style="padding: 6rem 2rem; background: #f8fafc;">
            <div class="niche-wrap" style="max-width: 1280px; margin: 0 auto;" data-aos="fade-up">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h2 style="font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 700; color: #044e3a;">Visit Our Offices</h2>
                    <p style="color: #64748b; font-size: 1.1rem;">We are present across major cities.</p>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
                    <div style="background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
                        <div style="height: 250px; background: #e2e8f0; display:flex; align-items:center; justify-content:center; color:#94a3b8; font-size:1.5rem;">[ Google Maps Iframe: Nagpur ]</div>
                        <div style="padding: 2rem;">
                            <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">Corporate Office - Nagpur</h3>
                            <p style="color: #64748b; margin-bottom: 1.5rem;">Mahalaxmi Towers, Wardha Road, Nagpur, Maharashtra 440015</p>
                            <button class="re-btn-gradient" style="padding: 0.75rem 1.5rem; border:none; border-radius:8px; color:white; font-weight:600; cursor:pointer;" onclick="openActionModal('${niche.id}')">Contact Office</button>
                        </div>
                    </div>
                    <div style="background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
                        <div style="height: 250px; background: #e2e8f0; display:flex; align-items:center; justify-content:center; color:#94a3b8; font-size:1.5rem;">[ Google Maps Iframe: Mumbai ]</div>
                        <div style="padding: 2rem;">
                            <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">Branch Office - Mumbai</h3>
                            <p style="color: #64748b; margin-bottom: 1.5rem;">Godrej BKC, Bandra Kurla Complex, Mumbai, Maharashtra 400051</p>
                            <button class="re-btn-gradient" style="padding: 0.75rem 1.5rem; border:none; border-radius:8px; color:white; font-weight:600; cursor:pointer;" onclick="openActionModal('${niche.id}')">Contact Office</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA / Klaviyo-style Email Capture -->
        <section class="blueprint-bg" style="padding: 6rem 2rem; background-color: #044e3a; color: white; text-align: center; position: relative;" data-aos="fade-up">
            <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent, rgba(0,0,0,0.5)); z-index: 1;"></div>
            <div class="niche-wrap" style="max-width: 600px; margin: 0 auto; position: relative; z-index: 2;">
                <h2 style="font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 800; margin-bottom: 1rem;">Stay Updated</h2>
                <p style="font-size: 1.1rem; color: #a7f3d0; margin-bottom: 2rem;">Subscribe to receive updates on new project launches and exclusive early-bird offers.</p>
                <div style="display:flex; gap:0.5rem; background:white; padding:0.5rem; border-radius:50px; box-shadow:0 10px 25px rgba(0,0,0,0.2);">
                    <input type="email" placeholder="Enter your email address" style="flex-grow:1; border:none; outline:none; padding:0 1rem; border-radius:50px; font-family:'Archivo',sans-serif; color:#0f172a;">
                    <button class="re-btn-gradient" style="border:none; color:white; padding:1rem 2rem; border-radius:50px; font-weight:700; cursor:pointer;" onclick="OrbitexToast.show('Subscribed successfully!', 'success')">Subscribe</button>
                </div>
            </div>
        </section>
        
        <!-- Advisor FAB & Card -->
        <div class="advisor-fab" onclick="document.getElementById('advisorCard').classList.toggle('active')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </div>
        
        <div id="advisorCard" class="advisor-card">
            <div class="advisor-header">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80" alt="Advisor" class="advisor-photo">
                <div>
                    <div style="font-weight:700; font-size:1.1rem;">Priya Sharma</div>
                    <div style="font-size:0.85rem; opacity:0.8;">Property Advisor</div>
                </div>
                <button onclick="document.getElementById('advisorCard').classList.remove('active')" style="background:none; border:none; color:white; margin-left:auto; cursor:pointer;">✕</button>
            </div>
            <div style="padding:1.5rem; background:#f8fafc;">
                <div style="background:white; padding:1rem; border-radius:12px; border:1px solid #e2e8f0; margin-bottom:1rem; font-size:0.95rem; color:#334155; position:relative;">
                    Hi! I'm your property advisor. How can I help you today?
                    <div style="position:absolute; top:-6px; left:20px; width:12px; height:12px; background:white; transform:rotate(45deg); border-top:1px solid #e2e8f0; border-left:1px solid #e2e8f0;"></div>
                </div>
                <div style="display:flex; flex-direction:column; gap:0.5rem;">
                    <button class="re-btn-gradient" style="border:none; color:white; padding:0.75rem; border-radius:8px; font-weight:600; cursor:pointer; text-align:left;" onclick="setNicheView('catalog')">🏢 Show 2BHK Properties</button>
                    <button style="border:1px solid #044e3a; background:transparent; color:#044e3a; padding:0.75rem; border-radius:8px; font-weight:600; cursor:pointer; text-align:left; transition:background 0.2s;" onmouseover="this.style.background='#ecfdf5'" onmouseout="this.style.background='transparent'">💰 EMI Calculator</button>
                    <button style="border:1px solid #044e3a; background:transparent; color:#044e3a; padding:0.75rem; border-radius:8px; font-weight:600; cursor:pointer; text-align:left; transition:background 0.2s;" onmouseover="this.style.background='#ecfdf5'" onmouseout="this.style.background='transparent'" onclick="openActionModal('${niche.id}')">📅 Schedule a Visit</button>
                </div>
            </div>
        </div>

    </div>
    `;
}

function generateRealEstateCatalogHTML(niche) {
    const categories = [...new Set(niche.catalog.map(item => item.cat))];
    
    return `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Syne:wght@600;700;800&display=swap');
        
        .re-cat-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .re-cat-card:hover { transform: translateY(-10px); box-shadow: 0 25px 50px -12px rgba(4, 78, 58, 0.25); }
        
        .sticky-filter { position: sticky; top: 70px; z-index: 40; background: rgba(255,255,255,0.9); backdrop-filter: blur(12px); padding: 1.5rem 0; border-bottom: 1px solid #e2e8f0; }
        
        .filter-group { display: flex; flex-direction: column; gap: 0.5rem; }
        .filter-label { font-size: 0.85rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; }
        
        .adv-filter-select { padding: 0.5rem 1rem; border: 1px solid #cbd5e1; border-radius: 8px; font-family: 'Archivo', sans-serif; font-weight: 600; color: #0f172a; outline: none; background: white; cursor: pointer; }
        
        /* Compare Drawer */
        .compare-drawer {
            position: fixed; bottom: 0; left: 0; right: 0; background: white; padding: 1.5rem 2rem;
            box-shadow: 0 -10px 30px rgba(0,0,0,0.1); border-top: 1px solid #e2e8f0; z-index: 100;
            transform: translateY(100%); transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            display: flex; justify-content: space-between; align-items: center;
        }
        .compare-drawer.active { transform: translateY(0); }
        
        /* Range slider styling */
        .price-slider { width: 100%; height: 6px; background: #e2e8f0; border-radius: 4px; outline: none; -webkit-appearance: none; }
        .price-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%; background: #10b981; cursor: pointer; box-shadow: 0 0 10px rgba(16,185,129,0.4); }
    </style>
    <div class="niche-page theme-realestate" style="background-color: #f8fafc; font-family: 'Archivo', sans-serif; color: #1e293b; min-height: 100vh;">
        <!-- Header -->
        <header class="niche-header" style="position: sticky; top: 0; z-index: 50; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid #e2e8f0; padding: 1rem 0;">
            <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center; max-width: 1280px; margin: 0 auto; padding: 0 2rem;">
                <div class="niche-brand" style="display: flex; align-items: center; gap: 1rem; cursor: pointer;" onclick="setNicheView('overview')">
                    <div style="background: linear-gradient(135deg, #044e3a, #059669); padding: 0.5rem; border-radius: 8px;">
                        ${niche.logoSvg.replace('fill="currentColor"', 'fill="white"')}
                    </div>
                    <div>
                        <h2 style="font-family: 'Syne', sans-serif; font-weight: 700; color: #044e3a; margin: 0; font-size: 1.5rem; letter-spacing: -0.02em;">Mahalaxmi Properties</h2>
                    </div>
                </div>
                <div style="display:flex; gap:1rem; align-items:center;">
                    <button onclick="OrbitexSearch.open('${niche.id}')" style="background:none;border:none;cursor:pointer;color:#475569;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                    <button class="niche-btn-primary" onclick="setNicheView('overview')" style="background: transparent; color: #044e3a; border: 2px solid #044e3a; padding: 0.5rem 1.25rem; border-radius: 8px; font-weight: 700; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.background='#044e3a'; this.style.color='white'" onmouseout="this.style.background='transparent'; this.style.color='#044e3a'">← Back to Home</button>
                </div>
            </div>
        </header>

        <!-- Advanced Filter Panel -->
        <div class="sticky-filter">
            <div class="niche-wrap" style="max-width: 1280px; margin: 0 auto; padding: 0 2rem; display: flex; flex-wrap: wrap; gap: 2rem; align-items: flex-end;">
                
                <div class="filter-group">
                    <span class="filter-label">BHK Type</span>
                    <div style="display: flex; gap: 0.5rem;">
                        <button class="catalog-filter-btn active" onclick="filterCatalogItems(this, 'all')" style="background: #044e3a; color: white; border: none; padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; cursor: pointer;">All</button>
                        <button class="catalog-filter-btn" onclick="filterCatalogItems(this, '1 BHK')" style="background: white; color: #475569; border: 1px solid #cbd5e1; padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; cursor: pointer;">1 BHK</button>
                        <button class="catalog-filter-btn" onclick="filterCatalogItems(this, '2 BHK')" style="background: white; color: #475569; border: 1px solid #cbd5e1; padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; cursor: pointer;">2 BHK</button>
                        <button class="catalog-filter-btn" onclick="filterCatalogItems(this, '3 BHK')" style="background: white; color: #475569; border: 1px solid #cbd5e1; padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; cursor: pointer;">3 BHK</button>
                        <button class="catalog-filter-btn" onclick="filterCatalogItems(this, 'Penthouse')" style="background: white; color: #475569; border: 1px solid #cbd5e1; padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Penthouse</button>
                    </div>
                </div>

                <div class="filter-group" style="flex-grow: 1; min-width: 200px;">
                    <div style="display:flex; justify-content:space-between; width:100%;">
                        <span class="filter-label">Price Range</span>
                        <span id="priceVal" style="font-weight:700; color:#10b981; font-size:0.85rem;">₹1.5 Cr</span>
                    </div>
                    <input type="range" class="price-slider" min="2000000" max="50000000" step="1000000" value="15000000" oninput="document.getElementById('priceVal').innerText = formatPrice(this.value)">
                </div>

                <div class="filter-group">
                    <span class="filter-label">Locality</span>
                    <select class="adv-filter-select">
                        <option>All Localities</option>
                        <option>Wardha Road</option>
                        <option>Hingna</option>
                        <option>Manish Nagar</option>
                        <option>Dharampeth</option>
                    </select>
                </div>
                
                <div class="filter-group" style="flex-direction: row; align-items: center; gap: 0.5rem;">
                    <span class="filter-label">RERA Verified</span>
                    <label style="position: relative; display: inline-block; width: 44px; height: 24px;">
                        <input type="checkbox" checked style="opacity: 0; width: 0; height: 0;" onchange="this.nextElementSibling.style.background = this.checked ? '#10b981' : '#cbd5e1'; this.nextElementSibling.firstElementChild.style.transform = this.checked ? 'translateX(20px)' : 'translateX(0)'">
                        <span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #10b981; transition: .4s; border-radius: 34px;">
                            <span style="position: absolute; content: ''; height: 18px; width: 18px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%; transform: translateX(20px);"></span>
                        </span>
                    </label>
                </div>
            </div>
        </div>

        <div class="niche-wrap" style="max-width: 1280px; margin: 3rem auto; padding: 0 2rem;">
            <div class="catalog-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 3rem;">
                ${niche.catalog.map((item, i) => {
                    const isComm = item.cat.toLowerCase().includes('commercial');
                    const beds = isComm ? '-' : (item.name.includes('1') ? 1 : item.name.includes('2') ? 2 : 3);
                    const baths = beds === '-' ? '-' : beds;
                    const area = isComm ? '1000+' : (beds === 1 ? '620' : beds === 2 ? '1050' : '1520');
                    const emiEst = Math.round((item.price * 0.8) * (0.085/12) * Math.pow(1+0.085/12, 240) / (Math.pow(1+0.085/12, 240)-1));
                    const imgUrl = 'https://images.unsplash.com/photo-' + (1512917774073 + i) + '?w=600&q=80';
                    const itemNameEsc = item.name.replace(/'/g, "\\'");

                    return `
                    <div class="catalog-item-card re-cat-card" data-aos="fade-up" data-aos-delay="${(i%3)*100}" data-category="${item.name.includes('1') ? '1 BHK' : item.name.includes('2') ? '2 BHK' : item.name.includes('3') ? '3 BHK' : 'all'}" style="background: white; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; display: flex; flex-direction: column;">
                        <div style="height: 280px; background: url('${imgUrl}') center/cover; position: relative;">
                            <div style="position: absolute; inset: 0; background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 50%);"></div>
                            
                            <div style="position: absolute; top: 1rem; left: 1rem; display: flex; gap: 0.5rem; align-items: center;">
                                <div style="background: #10b981; color: white; font-weight: 800; font-size: 0.7rem; padding: 0.4rem 0.8rem; border-radius: 50px; text-transform: uppercase; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">RERA: P5050${1000+i}</div>
                                <div style="background: rgba(255,255,255,0.9); color: #044e3a; font-weight: 800; font-size: 0.7rem; padding: 0.4rem 0.8rem; border-radius: 50px; text-transform: uppercase; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">${item.cat}</div>
                            </div>

                            <label style="position: absolute; top: 1rem; right: 1rem; background: rgba(255,255,255,0.9); padding: 0.5rem 1rem; border-radius: 50px; font-size: 0.8rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; color: #0f172a;">
                                <input type="checkbox" onchange="document.querySelector('.compare-drawer').classList.toggle('active')"> Compare
                            </label>

                            <div style="position: absolute; bottom: 1.5rem; left: 1.5rem; color: white;">
                                <h3 style="font-family: 'Syne', sans-serif; font-size: 1.75rem; font-weight: 700; margin: 0;">${item.name}</h3>
                            </div>
                        </div>
                        
                        <div style="padding: 2rem; flex-grow: 1; display: flex; flex-direction: column;">
                            <div style="color: #64748b; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">${item.desc}</div>
                            
                            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; padding: 1.5rem 0; border-top: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; margin-bottom: 2rem;">
                                <div style="text-align: center;">
                                    <div style="font-size: 1.5rem; margin-bottom: 0.25rem;">🏠</div>
                                    <div style="font-weight: 800; color: #0f172a; font-size: 1.1rem;">${area}</div>
                                    <div style="font-size: 0.75rem; color: #64748b; text-transform: uppercase; font-weight: 600;">Sq.Ft</div>
                                </div>
                                <div style="text-align: center;">
                                    <div style="font-size: 1.5rem; margin-bottom: 0.25rem;">🛏️</div>
                                    <div style="font-weight: 800; color: #0f172a; font-size: 1.1rem;">${beds}</div>
                                    <div style="font-size: 0.75rem; color: #64748b; text-transform: uppercase; font-weight: 600;">Beds</div>
                                </div>
                                <div style="text-align: center;">
                                    <div style="font-size: 1.5rem; margin-bottom: 0.25rem;">🚿</div>
                                    <div style="font-weight: 800; color: #0f172a; font-size: 1.1rem;">${baths}</div>
                                    <div style="font-size: 0.75rem; color: #64748b; text-transform: uppercase; font-weight: 600;">Baths</div>
                                </div>
                            </div>
                            
                            <div style="margin-top: auto;">
                                <div style="display: flex; align-items: baseline; gap: 0.5rem; margin-bottom: 0.25rem;">
                                    <div style="font-size: 2.25rem; font-weight: 800; color: #044e3a; font-family: 'Syne', sans-serif;">
                                        ${formatPrice(item.price)}
                                    </div>
                                    <div style="color: #64748b; font-weight: 600; text-transform: uppercase; font-size: 0.85rem;">Onwards</div>
                                </div>
                                <div style="font-size: 0.95rem; color: #10b981; font-weight: 700; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem; background: #ecfdf5; padding: 0.5rem 1rem; border-radius: 8px; display: inline-flex;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                                    EMI: ₹${emiEst.toLocaleString('en-IN')}/mo
                                </div>
                                
                                <button onclick="openItemOrderModal('${niche.id}', '${itemNameEsc}', ${item.price})" style="width: 100%; background: linear-gradient(135deg, #044e3a, #059669); color: white; border: none; padding: 1rem; border-radius: 8px; font-weight: 700; font-size: 1.1rem; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 10px rgba(4,78,58,0.2);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 10px 20px rgba(4,78,58,0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 10px rgba(4,78,58,0.2)'">Schedule Visit</button>
                            </div>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>

        <!-- Enhanced EMI Calculator Section (below catalog) -->
        <section style="padding: 4rem 2rem; background: white; border-top: 1px solid #e2e8f0;">
            <div class="niche-wrap" style="max-width: 900px; margin: 0 auto;" data-aos="fade-up">
                <div style="background: #f8fafc; padding: 3rem; border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
                    <div style="text-align: center; margin-bottom: 2rem;">
                        <h2 style="font-family: 'Syne', sans-serif; font-size: 2.5rem; font-weight: 700; color: #0f172a;">Smart EMI Calculator</h2>
                        <p style="color: #64748b;">Plan your finances with our trusted banking partners.</p>
                    </div>

                    <div style="display: flex; gap: 1rem; margin-bottom: 2rem; justify-content: center;">
                        <div style="padding: 1rem; border: 2px solid #10b981; border-radius: 12px; background: white; cursor: pointer; font-weight: 700;">SBI (8.5%)</div>
                        <div style="padding: 1rem; border: 1px solid #cbd5e1; border-radius: 12px; background: white; cursor: pointer; font-weight: 700;">HDFC (8.6%)</div>
                        <div style="padding: 1rem; border: 1px solid #cbd5e1; border-radius: 12px; background: white; cursor: pointer; font-weight: 700;">ICICI (8.7%)</div>
                    </div>
                    
                    <div style="margin-bottom: 2.5rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                            <label style="font-weight: 600; color: #475569; font-size: 1.1rem;">Loan Amount (₹)</label>
                            <span id="loanAmountDisplay" style="font-weight: 800; color: #10b981; font-size: 1.25rem;">₹50,00,000</span>
                        </div>
                        <input type="range" class="price-slider" id="loanAmount" min="1000000" max="20000000" step="100000" value="5000000" oninput="document.getElementById('loanAmountDisplay').innerText = formatPrice(this.value); calcEmiWidget()">
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 3rem;">
                        <div style="background: white; padding: 1rem; border-radius: 12px; border: 1px solid #e2e8f0;">
                            <label style="display: block; font-weight: 600; color: #64748b; margin-bottom: 0.5rem; font-size: 0.9rem; text-transform: uppercase;">Interest Rate (%)</label>
                            <input type="number" id="loanInterest" value="8.5" step="0.1" style="width: 100%; border: none; font-size: 1.5rem; font-weight: 700; color: #0f172a; outline: none; font-family: 'Archivo';" oninput="calcEmiWidget()">
                        </div>
                        <div style="background: white; padding: 1rem; border-radius: 12px; border: 1px solid #e2e8f0;">
                            <label style="display: block; font-weight: 600; color: #64748b; margin-bottom: 0.5rem; font-size: 0.9rem; text-transform: uppercase;">Tenure (Years)</label>
                            <div style="display:flex; align-items:center; gap:1rem;">
                                <input type="range" class="price-slider" id="loanTenureSlider" min="1" max="30" value="20" style="flex-grow:1;" oninput="document.getElementById('loanTenure').value = this.value; calcEmiWidget()">
                                <input type="number" id="loanTenure" value="20" style="width: 50px; border: none; font-size: 1.5rem; font-weight: 700; color: #0f172a; outline: none; font-family: 'Archivo';" oninput="document.getElementById('loanTenureSlider').value = this.value; calcEmiWidget()">
                            </div>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, #044e3a, #10b981); padding: 2.5rem; border-radius: 16px; text-align: center; color: white; box-shadow: 0 10px 25px rgba(16,185,129,0.3);">
                        <div style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; letter-spacing: 0.05em; opacity: 0.9;">ESTIMATED MONTHLY EMI</div>
                        <div id="emiResult" style="font-family: 'Syne', sans-serif; font-size: 4rem; font-weight: 800; line-height: 1;">₹43,391</div>
                    </div>
                </div>
            </div>
            <script>
                function calcEmiWidget() {
                    const P = parseFloat(document.getElementById('loanAmount').value);
                    const r = parseFloat(document.getElementById('loanInterest').value) / 12 / 100;
                    const n = parseFloat(document.getElementById('loanTenure').value) * 12;
                    if(P && r && n) {
                        const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
                        document.getElementById('emiResult').innerText = '₹' + Math.round(emi).toLocaleString('en-IN');
                    }
                }
            </script>
        </section>

        <!-- Compare Drawer -->
        <div class="compare-drawer">
            <div style="display:flex; gap:2rem; align-items:center;">
                <div style="font-weight:700; font-size:1.2rem; color:#0f172a;">Compare Properties (1/3)</div>
                <div style="display:flex; gap:1rem;">
                    <div style="background:#f1f5f9; padding:0.5rem 1rem; border-radius:8px; display:flex; align-items:center; gap:1rem; border:1px solid #cbd5e1;">
                        <span style="font-weight:600; font-size:0.9rem;">2 BHK Premium</span>
                        <button style="border:none; background:none; cursor:pointer; color:#ef4444;">✕</button>
                    </div>
                    <div style="border:1px dashed #cbd5e1; padding:0.5rem 1rem; border-radius:8px; display:flex; align-items:center; color:#94a3b8; font-weight:600; font-size:0.9rem;">
                        + Add Property
                    </div>
                </div>
            </div>
            <div style="display:flex; gap:1rem;">
                <button style="border:none; background:transparent; color:#64748b; font-weight:600; cursor:pointer;" onclick="document.querySelector('.compare-drawer').classList.remove('active')">Clear All</button>
                <button class="re-btn-gradient" style="border:none; color:white; padding:0.75rem 2rem; border-radius:8px; font-weight:700; cursor:pointer;">Compare Now</button>
            </div>
        </div>

    </div>
    `;
}


