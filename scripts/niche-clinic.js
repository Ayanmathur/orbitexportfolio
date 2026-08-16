function generateClinicOverviewHTML(niche) {
    return `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        
        .theme-clinic {
            font-family: 'Montserrat', sans-serif;
            background-color: #fdfdfd;
            color: #1a1a1a;
            overflow-x: hidden;
        }
        
        .clinic-plum-text { color: #7D3658; }
        .clinic-plum-bg { background-color: #7D3658; }
        
        .mega-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            padding: 2rem;
            z-index: 1000;
            border-top: 3px solid #7D3658;
        }
        .nav-item:hover .mega-menu {
            display: grid;
        }

        .consult-card {
            background: white;
            border-radius: 16px;
            padding: 2.5rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
            overflow: hidden;
            border: 1px solid #f0f0f0;
        }
        .consult-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(125, 54, 88, 0.15);
            border-color: #7D3658;
        }
        
        .pipeline-step {
            text-align: center;
            position: relative;
            flex: 1;
        }
        .pipeline-step:not(:last-child)::after {
            content: '';
            position: absolute;
            top: 40px;
            right: -50%;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, #7D3658 50%, transparent 50%);
            background-size: 15px 3px;
            z-index: 0;
        }
        .pipeline-icon {
            width: 80px;
            height: 80px;
            background: #fff;
            border: 3px solid #7D3658;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            position: relative;
            z-index: 1;
            box-shadow: 0 5px 15px rgba(125, 54, 88, 0.2);
            color: #7D3658;
        }
        
        .trust-badge {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 4px 10px rgba(0,0,0,0.03);
            font-weight: 700;
            color: #333;
            white-space: nowrap;
        }
        
        .shimmer {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
    </style>
    <div class="niche-page theme-clinic">
        <header style="background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(10px); border-bottom: 1px solid #eaeaea; position: sticky; top: 0; z-index: 100;">
            <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center; margin: 0 auto; padding: 1rem 2rem; position: relative;">
                <div style="display: flex; align-items: center; gap: 0.75rem; color: #7D3658; font-size: 1.5rem; font-weight: 800;">
                    <div style="width: 36px; height: 36px;">${niche.logoSvg}</div>
                    <span>Manrevive Clinic</span>
                </div>
                <nav style="display: flex; gap: 2.5rem; font-weight: 600; height: 100%; align-items: center;">
                    <div class="nav-item" style="position: relative; padding: 1rem 0; cursor: pointer;">
                        <a style="color: #444; text-decoration: none;">Departments ▾</a>
                        <div class="mega-menu" style="grid-template-columns: repeat(4, 1fr); gap: 2rem;">
                            <div>
                                <h4 style="color: #7D3658; margin-bottom: 1rem;">Diagnostics</h4>
                                <div style="display: flex; flex-direction: column; gap: 0.5rem; font-weight: 500;">
                                    <a href="#" style="color: #666; text-decoration: none;">Pathology</a>
                                    <a href="#" style="color: #666; text-decoration: none;">X-Ray & Imaging</a>
                                </div>
                            </div>
                            <div>
                                <h4 style="color: #7D3658; margin-bottom: 1rem;">Treatments</h4>
                                <div style="display: flex; flex-direction: column; gap: 0.5rem; font-weight: 500;">
                                    <a href="#" style="color: #666; text-decoration: none;">Dermatology</a>
                                    <a href="#" style="color: #666; text-decoration: none;">General Medicine</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" style="color: #444; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#7D3658'" onmouseout="this.style.color='#444'" onclick="setNicheView('catalog')">Pricing</a>
                    <a href="#" style="color: #444; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#7D3658'" onmouseout="this.style.color='#444'" onclick="OrbitexSearch.open('clinic')">🔍 Search</a>
                </nav>
            </div>
        </header>

        <!-- Dual Consultation Cards Section -->
        <section style="padding: 6rem 2rem; background: linear-gradient(135deg, #fcfafb, #f3edf0);">
            <div class="niche-wrap" style="margin: 0 auto;" data-aos="fade-up">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <span style="color: #7D3658; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;">Get Care Now</span>
                    <h1 style="font-size: 3.5rem; font-weight: 800; color: #111; margin-top: 1rem;">Choose Your Consultation Mode</h1>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; max-width: 1000px; margin: 0 auto;">
                    <!-- In-Clinic -->
                    <div class="consult-card" data-aos="fade-right">
                        <div style="width: 60px; height: 60px; background: #fff0f5; color: #7D3658; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin-bottom: 1.5rem;">🏥</div>
                        <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 1rem;">In-Clinic Visit</h2>
                        <div style="font-size: 2.5rem; color: #7D3658; font-weight: 800; margin-bottom: 1.5rem;">₹500</div>
                        <ul style="list-style: none; padding: 0; margin-bottom: 2.5rem; color: #555; display: flex; flex-direction: column; gap: 0.8rem; font-weight: 500;">
                            <li style="display: flex; gap: 0.8rem;"><span style="color: #7D3658;">✓</span> Walk-in or pre-book</li>
                            <li style="display: flex; gap: 0.8rem;"><span style="color: #7D3658;">✓</span> Complete physical examination</li>
                            <li style="display: flex; gap: 0.8rem;"><span>📍</span> Clinic address, phone contact</li>
                        </ul>
                        <button onclick="openItemOrderModal('${niche.id}', 'In-Clinic Consultation', 500)" style="width: 100%; background: #7D3658; color: white; border: none; padding: 1.2rem; border-radius: 8px; font-size: 1.1rem; font-weight: 700; cursor: pointer; transition: background 0.3s;" onmouseover="this.style.background='#5a2640'" onmouseout="this.style.background='#7D3658'">Book Clinic Visit</button>
                    </div>
                    <!-- Online -->
                    <div class="consult-card" data-aos="fade-left">
                        <div style="position: absolute; top: 1.5rem; right: -2.5rem; background: #25D366; color: white; padding: 0.5rem 3.5rem; transform: rotate(45deg); font-weight: 800; font-size: 0.8rem; letter-spacing: 1px;">POPULAR</div>
                        <div style="width: 60px; height: 60px; background: #e8f5e9; color: #25D366; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin-bottom: 1.5rem;">💻</div>
                        <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 1rem;">Video Consultation</h2>
                        <div style="font-size: 2.5rem; color: #25D366; font-weight: 800; margin-bottom: 1.5rem;">₹300</div>
                        <ul style="list-style: none; padding: 0; margin-bottom: 2.5rem; color: #555; display: flex; flex-direction: column; gap: 0.8rem; font-weight: 500;">
                            <li style="display: flex; gap: 0.8rem;"><span style="color: #25D366;">✓</span> WhatsApp Video Call</li>
                            <li style="display: flex; gap: 0.8rem;"><span style="color: #25D366;">✓</span> 30-min dedicated slot</li>
                            <li style="display: flex; gap: 0.8rem;"><span style="color: #25D366;">✓</span> Digital prescription included</li>
                        </ul>
                        <button onclick="window.open('https://wa.me/919876543210')" style="width: 100%; background: white; color: #25D366; border: 2px solid #25D366; padding: 1.2rem; border-radius: 8px; font-size: 1.1rem; font-weight: 700; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.background='#25D366'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='#25D366'">Chat on WhatsApp</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Trust Certification Row -->
        <section style="padding: 3rem 2rem; background: white; border-bottom: 1px solid #eaeaea;">
            <div class="niche-wrap" style="margin: 0 auto; display: flex; justify-content: space-between; gap: 1.5rem; overflow-x: auto; padding-bottom: 1rem;" data-aos="fade-up">
                <div class="trust-badge"><span>🏆</span> NABH Accredited</div>
                <div class="trust-badge"><span>📜</span> ISO 9001:2015</div>
                <div class="trust-badge"><span>👨‍⚕️</span> Dental Council Reg.</div>
                <div class="trust-badge"><span>🌟</span> 15+ Years Experience</div>
            </div>
        </section>

        <!-- Doctor Profile Section -->
        <section style="padding: 7rem 2rem; background: #fff;">
            <div class="niche-wrap" style="margin: 0 auto; display: grid; grid-template-columns: 1fr 1.5fr; gap: 5rem; align-items: center;" data-aos="fade-up">
                <div style="position: relative;">
                    <div style="position: absolute; inset: -20px; background: linear-gradient(135deg, #fdf2f8, #e0d4da); border-radius: 30px; z-index: 0; transform: rotate(-4deg);"></div>
                    <div style="position: relative; z-index: 1; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); background: linear-gradient(180deg, #7D3658, #3b1728); height: 500px; display: flex; align-items: flex-end; justify-content: center;">
                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80" alt="Doctor" style="width: 100%; height: 100%; object-fit: cover; mix-blend-mode: luminosity; opacity: 0.9;" />
                    </div>
                </div>
                <div>
                    <h4 style="color: #7D3658; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 1rem;">Meet Our Doctor</h4>
                    <h2 style="font-size: 3rem; font-weight: 800; color: #111; margin-bottom: 0.5rem;">Dr. Amit Sharma</h2>
                    <p style="font-size: 1.2rem; color: #666; font-weight: 600; margin-bottom: 2rem;">BDS, MDS (Oral & Maxillofacial Surgery)</p>
                    
                    <p style="font-size: 1.1rem; color: #444; line-height: 1.8; margin-bottom: 2.5rem; font-weight: 500;">With over 15 years of experience in advanced clinical procedures, Dr. Sharma brings world-class medical expertise to Central India. Specializing in painless treatments and digital diagnostics, ensuring the best care for your health.</p>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem; font-weight: 700; color: #222;"><span style="color: #7D3658; font-size: 1.5rem; background: #fff0f5; padding: 0.5rem; border-radius: 8px;">🎖️</span> Gold Medalist</div>
                        <div style="display: flex; align-items: center; gap: 1rem; font-weight: 700; color: #222;"><span style="color: #7D3658; font-size: 1.5rem; background: #fff0f5; padding: 0.5rem; border-radius: 8px;">🎓</span> Ex-AIIMS Delhi</div>
                        <div style="display: flex; align-items: center; gap: 1rem; font-weight: 700; color: #222;"><span style="color: #7D3658; font-size: 1.5rem; background: #fff0f5; padding: 0.5rem; border-radius: 8px;">🔬</span> 5000+ Surgeries</div>
                        <div style="display: flex; align-items: center; gap: 1rem; font-weight: 700; color: #222;"><span style="color: #7D3658; font-size: 1.5rem; background: #fff0f5; padding: 0.5rem; border-radius: 8px;">🌐</span> Int. Fellow (UK)</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Treatment Pipeline visual -->
        <section style="padding: 7rem 2rem; background: #fdf2f8;">
            <div class="niche-wrap" style="margin: 0 auto; text-align: center;" data-aos="fade-up">
                <h2 style="font-size: 3rem; font-weight: 800; margin-bottom: 5rem; color: #111;">Our Care Pipeline</h2>
                <div style="display: flex; justify-content: space-between; align-items: flex-start; max-width: 1000px; margin: 0 auto; position: relative;">
                    <div class="pipeline-step" data-aos="zoom-in" data-aos-delay="100">
                        <div class="pipeline-icon">📅</div>
                        <h3 style="margin-top: 1.5rem; font-size: 1.2rem; font-weight: 800; color: #222;">1. Book</h3>
                        <p style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-weight: 500;">Schedule online or walk-in</p>
                    </div>
                    <div class="pipeline-step" data-aos="zoom-in" data-aos-delay="200">
                        <div class="pipeline-icon">🔬</div>
                        <h3 style="margin-top: 1.5rem; font-size: 1.2rem; font-weight: 800; color: #222;">2. Diagnose</h3>
                        <p style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-weight: 500;">Comprehensive scanning</p>
                    </div>
                    <div class="pipeline-step" data-aos="zoom-in" data-aos-delay="300">
                        <div class="pipeline-icon">⚕️</div>
                        <h3 style="margin-top: 1.5rem; font-size: 1.2rem; font-weight: 800; color: #222;">3. Treat</h3>
                        <p style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-weight: 500;">Painless execution</p>
                    </div>
                    <div class="pipeline-step" data-aos="zoom-in" data-aos-delay="400" style="flex: 0 1 auto;">
                        <div class="pipeline-icon">📱</div>
                        <h3 style="margin-top: 1.5rem; font-size: 1.2rem; font-weight: 800; color: #222;">4. Follow-up</h3>
                        <p style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-weight: 500;">Digital prescription & tracking</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials -->
        <section style="padding: 7rem 2rem; background: #fff;">
            <div class="niche-wrap" style="margin: 0 auto;" data-aos="fade-up">
                <h2 style="font-size: 3.5rem; color: #111; margin-bottom: 4rem; text-align: center; font-weight: 800;">Patient Reviews</h2>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem;">
                    ${[
                        {name: 'Anjali Verma', date: 'Oct 2025', text: 'Dr. Sharma is extremely patient. I had severe anxiety, but the consultation was very reassuring.'},
                        {name: 'Ramesh Kulkarni', date: 'Sep 2025', text: 'Got my treatment done here. The video consultation saved me so much time. Great digital prescription workflow.'},
                        {name: 'Kavita Chawla', date: 'Nov 2025', text: 'Took my father for a general checkup. The staff is wonderful and the facilities are top-notch. Highly recommend!'}
                    ].map((t, idx) => `
                        <div style="background: #fdfdfd; padding: 2.5rem; border-radius: 16px; border: 1px solid #eee; box-shadow: 0 10px 30px rgba(0,0,0,0.03);" data-aos="fade-up" data-aos-delay="${idx * 100}">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem;">
                                <div style="color: #f59e0b; font-size: 1.4rem; letter-spacing: 2px;">★★★★★</div>
                                <div style="background: #e8f5e9; color: #2e7d32; font-size: 0.75rem; font-weight: 800; padding: 0.4rem 0.8rem; border-radius: 50px; display: flex; align-items: center; gap: 0.4rem; text-transform: uppercase;">
                                    <span style="font-size: 1rem;">✓</span> Verified
                                </div>
                            </div>
                            <p style="color: #444; font-size: 1.1rem; line-height: 1.7; margin-bottom: 2rem; font-style: italic;">"${t.text}"</p>
                            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f0f0f0; padding-top: 1.5rem;">
                                <div style="font-weight: 800; color: #111; font-size: 1.1rem;">${t.name}</div>
                                <div style="color: #888; font-size: 0.9rem; font-weight: 600;">${t.date}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    </div>
    `;
}

function generateClinicCatalogHTML(niche) {
    const uniqueCats = [...new Set(niche.catalog.map(i => i.cat))];
    const targetCategories = ['Diagnostic', 'Preventive', 'Root Canal', 'Orthodontics', 'Cosmetic', 'Pediatric', 'Surgery'];
    const displayCategories = [...new Set([...uniqueCats, ...targetCategories])].slice(0, 8); // Display reasonable number of categories
    
    let html = `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        
        .theme-clinic {
            font-family: 'Montserrat', sans-serif;
            background-color: #fcfafb;
            color: #111;
            min-height: 100vh;
        }

        .filter-sidebar {
            background: white;
            padding: 2rem;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.03);
            border: 1px solid #f0f0f0;
            position: sticky;
            top: 100px;
        }

        .filter-btn {
            display: block;
            width: 100%;
            text-align: left;
            padding: 1rem 1.5rem;
            background: none;
            border: none;
            border-bottom: 1px solid #f0f0f0;
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
            font-weight: 700;
            color: #555;
            cursor: pointer;
            transition: all 0.2s;
            border-radius: 8px;
        }
        .filter-btn:hover, .filter-btn.active {
            background: #fdf2f8;
            color: #7D3658;
            padding-left: 2rem;
        }

        .treatment-card {
            background: white;
            border-radius: 16px;
            padding: 2rem;
            box-shadow: 0 5px 20px rgba(0,0,0,0.03);
            border: 1px solid #f0f0f0;
            margin-bottom: 1.5rem;
            transition: transform 0.3s;
        }
        .treatment-card:hover {
            transform: translateY(-3px);
            border-color: #7D3658;
            box-shadow: 0 15px 30px rgba(125, 54, 88, 0.1);
        }

        .insurance-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: #e3f2fd;
            color: #1565c0;
            padding: 0.4rem 0.8rem;
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: 800;
            margin-top: 1rem;
        }
        
        .before-after-container {
            position: relative;
            width: 100%;
            height: 400px;
            background: url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80') center/cover;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .before-after-divider {
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 4px;
            background: white;
            cursor: ew-resize;
        }
        .before-after-divider::after {
            content: '↔';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 40px;
            height: 40px;
            background: white;
            color: #7D3658;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.2rem;
            box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }
    </style>
    <div class="niche-page theme-clinic">
        <header style="background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(10px); padding: 1rem 2rem; border-bottom: 1px solid #eaeaea; position: sticky; top: 0; z-index: 100;">
            <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center; margin: 0 auto;">
                <div style="display: flex; align-items: center; gap: 0.8rem; cursor: pointer; color: #7D3658; font-weight: 800;" onclick="setNicheView('overview')">
                    <span style="font-size: 1.4rem;">←</span> Back
                </div>
                <div style="font-weight: 800; font-size: 1.3rem; color: #111;">Treatments & Pricing</div>
                <button onclick="OrbitexSearch.open('clinic')" style="background: none; border: none; font-size: 1.2rem; cursor: pointer; color: #444; font-weight: 700;">🔍 Search</button>
            </div>
        </header>

        <div class="niche-wrap" style="padding: 4rem 2rem; max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 280px 1fr; gap: 3rem;">
            
            <!-- Sidebar -->
            <aside>
                <div class="filter-sidebar" data-aos="fade-right">
                    <h3 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 1.5rem; color: #111;">Departments</h3>
                    <button class="filter-btn active" onclick="filterCatalogItems(this, 'all')">All Treatments</button>
                    ${displayCategories.map(cat => `
                        <button class="filter-btn" onclick="filterCatalogItems(this, '${cat}')">${cat}</button>
                    `).join('')}
                </div>
            </aside>

            <!-- Main Content -->
            <div>
                <!-- Before/After Teaser -->
                <div style="margin-bottom: 4rem;" data-aos="fade-up">
                    <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 1.5rem; color: #111;">Patient Transformations</h2>
                    <div class="before-after-container">
                        <div style="position: absolute; top: 1rem; left: 1rem; background: rgba(0,0,0,0.7); color: white; padding: 0.5rem 1rem; border-radius: 4px; font-weight: bold; letter-spacing: 1px;">BEFORE</div>
                        <div style="position: absolute; top: 1rem; right: 1rem; background: rgba(255,255,255,0.9); color: #7D3658; padding: 0.5rem 1rem; border-radius: 4px; font-weight: bold; letter-spacing: 1px;">AFTER</div>
                        <div class="before-after-divider"></div>
                    </div>
                </div>

                <div class="catalog-grid">
                    ${niche.catalog.map((item, idx) => {
                        const duration = Math.floor(Math.random() * 3 + 1) * 15;
                        const hasInsurance = Math.random() > 0.5;
                        return `
                        <div class="treatment-card catalog-item" data-category="${item.cat}" data-aos="fade-up" data-aos-delay="${idx * 50}">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 2rem;">
                                <div style="flex: 1; min-width: 300px;">
                                    <div style="color: #7D3658; font-size: 0.85rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem;">${item.cat}</div>
                                    <h3 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.8rem; color: #111;">${item.name}</h3>
                                    <p style="color: #555; line-height: 1.6; margin-bottom: 1.2rem; font-weight: 500;">${item.desc || 'Standard clinical procedure utilizing sterilized and advanced medical equipment.'}</p>
                                    
                                    <div style="display: flex; gap: 1.5rem; font-size: 0.9rem; color: #444; font-weight: 700; margin-bottom: 0.5rem;">
                                        <span style="background: #f0f0f0; padding: 0.4rem 0.8rem; border-radius: 6px;">⏱ Duration: ~${duration} mins</span>
                                        <span style="background: #f0f0f0; padding: 0.4rem 0.8rem; border-radius: 6px;">🔄 Recovery: 1-2 days</span>
                                    </div>
                                    
                                    ${hasInsurance ? `<div class="insurance-badge">🛡️ Covered by major insurance</div>` : ''}
                                    
                                    <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px dashed #e0e0e0;">
                                        <button onclick="OrbitexToast.show('Procedure details: 1. Consultation 2. Preparation 3. Execution', 'info')" style="background: none; border: 2px solid #7D3658; color: #7D3658; padding: 0.6rem 1.2rem; border-radius: 6px; font-family: 'Montserrat'; font-weight: 700; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='#7D3658'; this.style.color='white'" onmouseout="this.style.background='none'; this.style.color='#7D3658'">Learn More About Procedure</button>
                                    </div>
                                </div>
                                <div style="text-align: right; min-width: 150px; display: flex; flex-direction: column; justify-content: center;">
                                    <div style="font-size: 2.2rem; font-weight: 800; color: #111; margin-bottom: 1rem;">${formatPrice(item.price)}</div>
                                    <button onclick="openItemOrderModal('${niche.id}', '${item.name}', ${item.price})" style="background: #7D3658; color: white; border: none; padding: 1rem 1.5rem; width: 100%; border-radius: 8px; font-family: 'Montserrat'; font-weight: 700; font-size: 1rem; cursor: pointer; transition: background 0.3s; box-shadow: 0 4px 10px rgba(125,54,88,0.2);" onmouseover="this.style.background='#5a2640'" onmouseout="this.style.background='#7D3658'">Book Now</button>
                                </div>
                            </div>
                        </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
    </div>
    `;
    
    return html;
}

