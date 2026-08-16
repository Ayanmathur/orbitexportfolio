// niche-tuition.js

if (typeof window !== 'undefined') {
    window.startTuitionPopups = function() {
        const popups = [
            "Rahul from Nagpur just enrolled for JEE Advanced!",
            "Priya scored 98.7% in NEET 2025",
            "Amit just downloaded JEE Past Papers",
            "Neha registered for the Foundation batch"
        ];
        let i = 0;
        const popupEl = document.getElementById('tuition-live-popup');
        if (!popupEl) return;
        
        function showNext() {
            popupEl.innerText = popups[i];
            popupEl.style.transform = 'translateY(0)';
            popupEl.style.opacity = '1';
            
            setTimeout(() => {
                popupEl.style.transform = 'translateY(20px)';
                popupEl.style.opacity = '0';
                i = (i + 1) % popups.length;
                setTimeout(showNext, 4000);
            }, 3000);
        }
        setTimeout(showNext, 2000);
    };
}

function generateTuitionOverviewHTML(niche) {
    return `
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700&family=Nunito:wght@400;600;700;800&family=IBM+Plex+Sans:wght@400;600;700&display=swap');
    
    .theme-tuition {
        font-family: 'Assistant', sans-serif;
        color: #333;
    }
    .theme-tuition h1, .theme-tuition h2, .theme-tuition h3, .theme-tuition h4 {
        font-family: 'Nunito', sans-serif;
    }
    
    .tuition-hero-bg {
        background-color: #09454F; /* deep teal */
        background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        color: white;
    }
    
    .tuition-btn {
        transition: all 0.3s ease;
        font-family: 'IBM Plex Sans', sans-serif;
    }
    .tuition-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(220, 20, 60, 0.4);
    }
    
    .scroll-container {
        display: flex;
        gap: 20px;
        overflow-x: auto;
        padding-bottom: 20px;
        scrollbar-width: none;
    }
    .scroll-container::-webkit-scrollbar { display: none; }
    
    .dotted-connector {
        position: relative;
    }
    .dotted-connector::after {
        content: '';
        position: absolute;
        bottom: -25px;
        left: 20px;
        height: 20px;
        border-left: 2px dotted #dc143c; /* crimson */
    }
    .dotted-connector:last-child::after {
        display: none;
    }
    
    #tuition-live-popup {
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: white;
        color: #09454F;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        border-left: 4px solid #dc143c;
        transform: translateY(20px);
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        z-index: 9999;
        font-weight: 600;
        font-family: 'IBM Plex Sans', sans-serif;
    }
    </style>
    
    <div class="niche-page ${niche.theme || 'theme-tuition'}">
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="if(window.startTuitionPopups) window.startTuitionPopups()" style="display:none;">
        <div id="tuition-live-popup">Rahul from Nagpur just enrolled for JEE Advanced!</div>

        <!-- Header -->
        <header class="niche-header" style="background: white; border-bottom: 2px solid #dc143c; position: sticky; top: 0; z-index: 100;">
            <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center; padding: 15px 20px;">
                <div class="niche-brand" style="display: flex; align-items: center; gap: 15px;">
                    ${niche.logoSvg || `<div style="width: 40px; height: 40px; background: #dc143c; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; border-radius: 4px; font-family: 'Nunito', sans-serif;">B</div>`}
                    <span style="font-weight: 800; color: #09454F; font-size: 1.5rem;">${niche.name}</span>
                </div>
                <div class="niche-nav-links" style="display: flex; gap: 20px;">
                    <a href="#" onclick="setNicheView('overview')" style="color: #dc143c; font-weight: 700; text-decoration: none; border-bottom: 2px solid #dc143c;">Overview</a>
                    <a href="#" onclick="setNicheView('catalog')" style="color: #333; font-weight: 600; text-decoration: none;">Programs</a>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button class="tuition-btn" onclick="if(window.OrbitexSearch) window.OrbitexSearch.open('tuition')" style="background: #f1f5f9; color: #09454F; border: none; padding: 10px 15px; cursor: pointer; border-radius: 4px; font-weight: 600;">🔍 Search</button>
                    <button class="tuition-btn" onclick="openActionModal('${niche.id}')" style="background: #dc143c; color: white; border: none; padding: 10px 24px; font-weight: 600; cursor: pointer; border-radius: 4px;">Enroll Now</button>
                </div>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="tuition-hero-bg" style="padding: 80px 20px; position: relative; overflow: hidden;">
            <div class="niche-wrap" style="display: flex; gap: 40px; align-items: center; flex-wrap: wrap; position: relative; z-index: 2;">
                <div style="flex: 1; min-width: 300px;" data-aos="fade-right">
                    <div style="display: inline-block; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); color: #fff; padding: 6px 15px; border-radius: 20px; font-size: 0.9rem; font-weight: 700; margin-bottom: 20px;">
                        🏆 AIR 14, AIR 42 in JEE Advanced 2025
                    </div>
                    <h1 style="font-size: 3.8rem; line-height: 1.1; margin: 0 0 20px 0; font-weight: 800;">
                        Crack JEE & NEET with <span style="color: #FFD700;">Kota's Best</span> in Nagpur.
                    </h1>
                    <p style="font-size: 1.2rem; color: #e2e8f0; margin-bottom: 30px; line-height: 1.6; font-family: 'Assistant', sans-serif;">
                        ${niche.tagline || 'Expert faculty, rigorous testing, and personal mentoring to secure your seat in IITs and top medical colleges.'}
                    </p>
                    <div style="display: flex; gap: 15px;">
                        <button class="tuition-btn" onclick="setNicheView('catalog')" style="background: #dc143c; color: white; border: none; padding: 15px 30px; font-size: 1.1rem; font-weight: 700; cursor: pointer; border-radius: 4px;">View Programs</button>
                        <button class="tuition-btn" onclick="openActionModal('${niche.id}')" style="background: transparent; color: white; border: 2px solid white; padding: 15px 30px; font-size: 1.1rem; font-weight: 700; cursor: pointer; border-radius: 4px;">Free Mock Test</button>
                    </div>
                </div>
                <div style="flex: 1; min-width: 300px; position: relative;" data-aos="fade-left">
                    <img src="${niche.heroImage || 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800'}" alt="Classroom" style="width: 100%; height: 450px; object-fit: cover; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); border: 4px solid #fff;">
                </div>
            </div>
        </section>

        <!-- Toppers Showcase Carousel -->
        <section style="padding: 80px 20px; background: #f8fafc; text-align: center;">
            <div class="niche-wrap">
                <h2 style="color: #09454F; font-size: 2.5rem; margin-bottom: 40px;" data-aos="fade-up">Recent Top Rankers</h2>
                <div class="scroll-container" data-aos="fade-up" data-aos-delay="100">
                    ${[
                        {name: 'Arjun Mehta', rank: 'AIR 14', exam: 'JEE Adv 2025', medal: '🥇', score: '320/360', institute: 'IIT Bombay'},
                        {name: 'Priya Patel', rank: 'AIR 42', exam: 'JEE Adv 2025', medal: '🥈', score: '310/360', institute: 'IIT Delhi'},
                        {name: 'Rohan Sharma', rank: 'AIR 89', exam: 'NEET 2025', medal: '🥉', score: '710/720', institute: 'AIIMS Delhi'},
                        {name: 'Sneha Gupta', rank: 'AIR 112', exam: 'NEET 2025', medal: '🏅', score: '705/720', institute: 'AFMC Pune'},
                        {name: 'Vikram Singh', rank: 'AIR 156', exam: 'JEE Main 2025', medal: '🏅', score: '99.98%ile', institute: 'NIT Trichy'}
                    ].map(student => `
                        <div style="min-width: 280px; background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                            <div style="font-size: 2rem; margin-bottom: 10px;">${student.medal}</div>
                            <div style="width: 80px; height: 80px; background: #f1f5f9; border-radius: 50%; margin: 0 auto 15px auto; overflow: hidden; border: 3px solid #dc143c; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; color: #dc143c;">
                                ${student.name.split(' ').map(n=>n[0]).join('')}
                            </div>
                            <h4 style="margin: 0 0 5px 0; font-size: 1.2rem; color: #09454F;">${student.name}</h4>
                            <div style="color: #dc143c; font-weight: 800; font-size: 1.4rem; margin-bottom: 5px;">${student.rank}</div>
                            <div style="background: #f1f5f9; display: inline-block; padding: 4px 10px; border-radius: 12px; font-size: 0.85rem; font-weight: 600; color: #475569; margin-bottom: 10px;">${student.exam} • ${student.score}</div>
                            <div style="color: #10b981; font-weight: 700; font-size: 0.95rem;">Admitted to ${student.institute}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Course Comparison Feature -->
        <section style="padding: 80px 20px; background: white;">
            <div class="niche-wrap">
                <h2 style="color: #09454F; font-size: 2.5rem; text-align: center; margin-bottom: 40px;" data-aos="fade-up">Compare Our Programs</h2>
                <div style="overflow-x: auto;" data-aos="fade-up" data-aos-delay="100">
                    <table style="width: 100%; border-collapse: collapse; min-width: 600px; text-align: center;">
                        <thead>
                            <tr style="background: #09454F; color: white;">
                                <th style="padding: 15px; border: 1px solid #e2e8f0; text-align: left;">Feature</th>
                                <th style="padding: 15px; border: 1px solid #e2e8f0; width: 25%;">JEE Target</th>
                                <th style="padding: 15px; border: 1px solid #e2e8f0; width: 25%;">NEET Target</th>
                                <th style="padding: 15px; border: 1px solid #e2e8f0; width: 25%;">Foundation</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${[
                                { f: "Batch Size", j: "40 Max", n: "40 Max", d: "30 Max" },
                                { f: "Duration", j: "2 Years", n: "2 Years", d: "1-3 Years" },
                                { f: "Study Material", j: "Advanced Modules", n: "NCERT + Modules", d: "Basic Modules" },
                                { f: "Mock Tests", j: "Weekly CBT", n: "Weekly OMR", d: "Monthly" },
                                { f: "Doubt Sessions", j: "Daily", n: "Daily", d: "Weekend" }
                            ].map((row, i) => `
                            <tr style="background: ${i%2===0 ? '#f8fafc' : 'white'};">
                                <td style="padding: 15px; border: 1px solid #e2e8f0; text-align: left; font-weight: 600; color: #333;">${row.f}</td>
                                <td style="padding: 15px; border: 1px solid #e2e8f0; color: #475569;">${row.j}</td>
                                <td style="padding: 15px; border: 1px solid #e2e8f0; color: #475569;">${row.n}</td>
                                <td style="padding: 15px; border: 1px solid #e2e8f0; color: #475569;">${row.d}</td>
                            </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- Why Choose Us -->
        <section style="padding: 80px 20px; background: #fcf8f3;">
            <div class="niche-wrap">
                <h2 style="color: #09454F; font-size: 2.5rem; text-align: center; margin-bottom: 50px;" data-aos="fade-up">The Bansal Advantage</h2>
                <div style="display: flex; flex-direction: column; gap: 25px; max-width: 600px; margin: 0 auto;">
                    ${[
                        {title: 'IITian & Doctor Faculty', desc: 'Learn directly from experts who have cracked these exams themselves.'},
                        {title: 'Small Batches (Max 40)', desc: 'Personalized attention ensures no student is left behind.'},
                        {title: 'Kota-Style DPPs', desc: 'Daily Practice Problems aligned with latest exam patterns.'},
                        {title: 'Weekly Simulation Tests', desc: 'Computer-based testing facility to mimic real exam environment.'}
                    ].map((usp, i) => `
                        <div class="dotted-connector" style="display: flex; gap: 20px; align-items: flex-start;" data-aos="fade-up" data-aos-delay="${i*100}">
                            <div style="width: 45px; height: 45px; background: #dc143c; color: white; display: flex; align-items: center; justify-content: center; border-radius: 50%; flex-shrink: 0; font-weight: bold; font-family: 'IBM Plex Sans', sans-serif; position: relative; z-index: 2; font-size: 1.1rem; box-shadow: 0 4px 10px rgba(220,20,60,0.3);">
                                0${i + 1}
                            </div>
                            <div style="background: white; padding: 20px; border-radius: 8px; flex: 1; border: 1px solid #e2e8f0; box-shadow: 0 2px 5px rgba(0,0,0,0.02);">
                                <h4 style="color: #09454F; font-size: 1.2rem; margin: 0 0 8px 0;">${usp.title}</h4>
                                <p style="color: #475569; font-size: 1rem; margin: 0; line-height: 1.5;">${usp.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Free Resources Teaser -->
        <section style="padding: 60px 20px; background: #09454F; color: white; text-align: center;">
            <div class="niche-wrap" style="max-width: 800px; margin: 0 auto;" data-aos="zoom-in">
                <div style="font-size: 3rem; margin-bottom: 20px;">📚</div>
                <h2 style="font-size: 2.2rem; margin-bottom: 20px;">Access Free Study Materials</h2>
                <p style="font-size: 1.1rem; margin-bottom: 30px; color: #cbd5e1;">Download previous year question papers, formula sheets, and attempt free full-length mock tests to evaluate your prep.</p>
                <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                    <button class="tuition-btn" onclick="openActionModal('${niche.id}')" style="background: white; color: #09454F; border: none; padding: 12px 25px; font-weight: 700; border-radius: 4px; font-size: 1rem; cursor: pointer;">Download Past Papers</button>
                    <button class="tuition-btn" onclick="openActionModal('${niche.id}')" style="background: transparent; color: white; border: 2px solid white; padding: 12px 25px; font-weight: 700; border-radius: 4px; font-size: 1rem; cursor: pointer;">Take Free Mock Test</button>
                </div>
            </div>
        </section>

    </div>
    `;
}

function generateTuitionCatalogHTML(niche) {
    const defaultPrograms = [
        {name: "Foundation Class 10", duration: "1 Year", price: 45000, featClass: true, featDpp: true, featTest: true, featDoubt: false, start: "15 Apr 2026", seats: "12/30", emi: "3,750"},
        {name: "JEE Target Batch", duration: "2 Years", price: 180000, featClass: true, featDpp: true, featTest: true, featDoubt: true, popular: true, start: "01 May 2026", seats: "8/40", emi: "7,500"},
        {name: "NEET Target Batch", duration: "2 Years", price: 175000, featClass: true, featDpp: true, featTest: true, featDoubt: true, popular: true, start: "05 May 2026", seats: "15/40", emi: "7,291"},
        {name: "Dropper Batch (JEE/NEET)", duration: "1 Year", price: 95000, featClass: true, featDpp: true, featTest: true, featDoubt: true, start: "20 Jun 2026", seats: "22/40", emi: "7,916"}
    ];

    const programs = (niche.catalog && niche.catalog.length >= 2) ? niche.catalog.slice(0, 4).map((item, i) => {
        const base = defaultPrograms[i % defaultPrograms.length];
        return { ...base, name: item.name, price: item.price, id: item.id };
    }) : defaultPrograms;

    return `
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700&family=Nunito:wght@400;600;700;800&family=IBM+Plex+Sans:wght@400;600;700&display=swap');
    
    .theme-tuition {
        font-family: 'Assistant', sans-serif;
        color: #333;
    }
    .theme-tuition h1, .theme-tuition h2, .theme-tuition h3, .theme-tuition h4 {
        font-family: 'Nunito', sans-serif;
    }
    .tuition-btn {
        transition: all 0.3s ease;
        font-family: 'IBM Plex Sans', sans-serif;
    }
    .tuition-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(220, 20, 60, 0.4);
    }
    
    .tuition-pricing-card {
        transition: transform 0.3s, box-shadow 0.3s;
        border: 1px solid #e2e8f0;
    }
    .tuition-pricing-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
    }
    
    @keyframes animatedGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    .card-header-gradient {
        background: linear-gradient(270deg, #dc143c, #881337, #dc143c);
        background-size: 200% 200%;
        animation: animatedGradient 4s ease infinite;
    }
    </style>
    
    <div class="niche-page ${niche.theme || 'theme-tuition'}">
        <header class="niche-header" style="background: white; border-bottom: 2px solid #dc143c; position: sticky; top: 0; z-index: 100;">
            <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center; padding: 15px 20px;">
                <div class="niche-brand" style="display: flex; align-items: center; gap: 15px;">
                    ${niche.logoSvg || `<div style="width: 40px; height: 40px; background: #dc143c; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; border-radius: 4px; font-family: 'Nunito', sans-serif;">B</div>`}
                    <span style="font-weight: 800; color: #09454F; font-size: 1.5rem;">${niche.name}</span>
                </div>
                <div class="niche-nav-links" style="display: flex; gap: 20px;">
                    <a href="#" onclick="setNicheView('overview')" style="color: #333; font-weight: 600; text-decoration: none;">Overview</a>
                    <a href="#" onclick="setNicheView('catalog')" style="color: #dc143c; font-weight: 700; text-decoration: none; border-bottom: 2px solid #dc143c;">Programs</a>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button class="tuition-btn" onclick="if(window.OrbitexSearch) window.OrbitexSearch.open('tuition')" style="background: #f1f5f9; color: #09454F; border: none; padding: 10px 15px; cursor: pointer; border-radius: 4px; font-weight: 600;">🔍 Search</button>
                </div>
            </div>
        </header>

        <section style="padding: 60px 20px; background: #f8fafc; min-height: calc(100vh - 74px);">
            <div class="niche-wrap" style="max-width: 1200px;">
                <div style="text-align: center; margin-bottom: 50px;" data-aos="fade-up">
                    <h1 style="color: #09454F; font-size: 3rem; margin: 0 0 15px 0;">Admissions Open 2026-27</h1>
                    <p style="color: #475569; font-size: 1.1rem; max-width: 600px; margin: 0 auto;">Select your program below. EMI options available for all long-term batches.</p>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; padding-bottom: 40px;">
                    ${programs.map((prog, i) => `
                        <div class="tuition-pricing-card" style="background: white; border-radius: 12px; overflow: hidden; position: relative;" data-aos="fade-up" data-aos-delay="${i*100}">
                            ${prog.popular ? '<div style="position: absolute; top: 20px; right: -35px; background: #FFD700; color: #09454F; padding: 6px 40px; font-size: 0.75rem; font-weight: 800; transform: rotate(45deg); box-shadow: 0 2px 4px rgba(0,0,0,0.2); z-index: 10; letter-spacing: 1px;">MOST POPULAR</div>' : ''}
                            
                            <div class="${prog.popular ? 'card-header-gradient' : ''}" style="padding: 25px 20px; text-align: center; border-bottom: 1px solid #e2e8f0; background: ${prog.popular ? '' : '#09454F'}; color: white;">
                                <h3 style="font-size: 1.4rem; margin: 0 0 10px 0; font-weight: 700;">${prog.name}</h3>
                                <div style="font-size: 0.9rem; margin-bottom: 15px; opacity: 0.9;">${prog.duration}</div>
                                <div style="font-size: 2.2rem; font-weight: 800; margin-bottom: 5px;">${formatPrice(prog.price)}</div>
                                <div style="font-size: 0.85rem; opacity: 0.9; margin-bottom: 20px;">EMI from ₹${prog.emi}/month</div>
                                
                                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; background: rgba(0,0,0,0.2); padding: 8px 12px; border-radius: 6px; margin-bottom: 20px;">
                                    <span>🗓️ Starts: ${prog.start}</span>
                                    <span style="color: #FFD700; font-weight: bold;">🔥 Seats: ${prog.seats}</span>
                                </div>
                                
                                <button class="tuition-btn" onclick="openItemOrderModal('${niche.id}', '${prog.name}', ${prog.price})" style="width: 100%; padding: 12px; background: white; color: ${prog.popular ? '#dc143c' : '#09454F'}; border: none; border-radius: 6px; font-size: 1.1rem; font-weight: 700; cursor: pointer;">Enroll Now</button>
                            </div>
                            
                            <div style="padding: 25px 20px;">
                                <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.95rem; color: #334155;">
                                    <li style="margin-bottom: 12px; display: flex; align-items: center; gap: 10px;">
                                        <span style="color: #10b981; font-weight: bold;">✓</span> Classroom Teaching
                                    </li>
                                    <li style="margin-bottom: 12px; display: flex; align-items: center; gap: 10px;">
                                        <span style="color: #10b981; font-weight: bold;">✓</span> Daily Practice Problems
                                    </li>
                                    <li style="margin-bottom: 12px; display: flex; align-items: center; gap: 10px;">
                                        <span style="color: ${prog.featTest ? '#10b981' : '#94a3b8'}; font-weight: bold;">${prog.featTest ? '✓' : '—'}</span> All India Test Series
                                    </li>
                                    <li style="margin-bottom: 12px; display: flex; align-items: center; gap: 10px;">
                                        <span style="color: ${prog.featDoubt ? '#10b981' : '#94a3b8'}; font-weight: bold;">${prog.featDoubt ? '✓' : '—'}</span> 1-on-1 Doubt Sessions
                                    </li>
                                </ul>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Parent Testimonials -->
                <div style="margin-top: 60px;" data-aos="fade-up">
                    <h2 style="text-align: center; color: #09454F; font-size: 2rem; margin-bottom: 30px;">What Parents Say</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                        ${[
                            {quote: "The discipline and regular testing really helped my son stay on track. Highly satisfied with the JEE results.", author: "Mr. Rajeev Desai", role: "Parent", year: "2025"},
                            {quote: "Best faculty in Nagpur for NEET. They cleared all her doubts patiently. The EMI option also helped us a lot.", author: "Mrs. Kavita Singh", role: "Parent", year: "2024"}
                        ].map(test => `
                            <div style="background: white; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0; position: relative; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                                    <span style="background: #f1f5f9; color: #09454F; padding: 4px 12px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">${test.role}</span>
                                    <span style="color: #dc143c; font-size: 0.85rem; font-weight: 600;">Exam Year ${test.year}</span>
                                </div>
                                <p style="color: #475569; font-style: italic; line-height: 1.6; margin: 20px 0;">"${test.quote}"</p>
                                <strong style="color: #09454F;">- ${test.author}</strong>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </section>
    </div>
    `;
}

if (typeof window !== 'undefined') {
    window.generateTuitionOverviewHTML = generateTuitionOverviewHTML;
    window.generateTuitionCatalogHTML = generateTuitionCatalogHTML;
}
