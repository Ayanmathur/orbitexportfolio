function generateGymOverviewHTML(niche) {
    setTimeout(() => {
        if (window.OrbitexHellobar) {
            OrbitexHellobar.show('💪 New Year Special: 40% OFF Annual Membership! Ends in <span style="color:#a3e635;font-weight:bold;">12:45:00</span>', {
                bg: '#171717',
                color: '#ffffff',
                accent: '#a3e635'
            });
        }
        if (typeof AOS !== 'undefined') AOS.init();
    }, 500);

    return `
    <style>
    @keyframes gymPulse {
        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(163, 230, 53, 0.7); }
        70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(163, 230, 53, 0); }
        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(163, 230, 53, 0); }
    }
    @keyframes gymGlitch {
        0% { text-shadow: 3px 0 0 #a3e635, -3px 0 0 #ef4444; }
        5% { text-shadow: -3px 0 0 #a3e635, 3px 0 0 #ef4444; }
        10% { text-shadow: 3px 0 0 #a3e635, -3px 0 0 #ef4444; }
        15% { text-shadow: -3px 0 0 #a3e635, 3px 0 0 #ef4444; }
        20% { text-shadow: 3px 0 0 #a3e635, -3px 0 0 #ef4444; }
        25% { text-shadow: none; }
        100% { text-shadow: none; }
    }
    @keyframes gymStrobe {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
    }
    .gym-card:hover {
        box-shadow: 0 0 20px rgba(163, 230, 53, 0.4);
        border-color: #a3e635 !important;
    }
    .bmi-input:focus {
        border-color: #a3e635 !important;
        box-shadow: 0 0 10px rgba(163, 230, 53, 0.5);
        outline: none;
    }
    .glitch-text:hover {
        animation: gymGlitch 1s infinite;
    }
    .torn-edge {
        height: 40px;
        background: #121212;
        clip-path: polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0);
        margin-top: -20px;
        position: relative;
        z-index: 10;
    }
    .pill {
        display: inline-block;
        padding: 5px 12px;
        border: 1px solid #333;
        color: #a3a3a3;
        border-radius: 20px;
        font-size: 0.8rem;
        cursor: pointer;
        transition: all 0.2s;
    }
    .pill.active {
        background: #a3e635;
        color: #0a0a0a;
        border-color: #a3e635;
        font-weight: bold;
    }
    .progress-bar-bg {
        width: 100%;
        height: 10px;
        background: #333;
        border-radius: 5px;
        overflow: hidden;
        margin-top: 10px;
    }
    .progress-bar-fill {
        height: 100%;
        width: 0%;
        transition: width 1s ease-out, background-color 0.5s ease;
    }
    .shimmer {
        background: #2a2a2a;
        background-image: linear-gradient(to right, #2a2a2a 0%, #3a3a3a 20%, #2a2a2a 40%, #2a2a2a 100%);
        background-repeat: no-repeat;
        background-size: 800px 100%;
        animation: placeholderShimmer 2s linear infinite;
    }
    @keyframes placeholderShimmer {
        0% { background-position: -468px 0; }
        100% { background-position: 468px 0; }
    }
    </style>
    <div class="niche-page ${niche.theme || 'theme-gym'}" style="background: #0a0a0a; color: #ffffff; font-family: 'Inter', sans-serif;">
        <!-- Header -->
        <header class="niche-header" style="background: rgba(10, 10, 10, 0.95); border-bottom: 2px solid #262626; position: sticky; top: 0; z-index: 50; backdrop-filter: blur(10px);">
            <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center; padding: 20px;">
                <div class="niche-brand" style="display: flex; align-items: center; gap: 15px;">
                    ${niche.logoSvg || '<div style="width: 45px; height: 45px; background: #a3e635; color: #0a0a0a; display: flex; align-items: center; justify-content: center; font-weight: 900; font-family: \\\'Montserrat\\\', sans-serif; font-size: 1.5rem; transform: skew(-10deg);">P</div>'}
                    <span style="font-family: 'Montserrat', sans-serif; font-weight: 900; color: #ffffff; font-size: 1.8rem; text-transform: uppercase; letter-spacing: -1px;">${niche.name}</span>
                </div>
                <div class="niche-nav-links" style="display: flex; gap: 30px;">
                    <a href="#" onclick="setNicheView('overview')" style="color: #a3e635; font-family: 'Montserrat', sans-serif; font-weight: 800; text-transform: uppercase; text-decoration: none; border-bottom: 3px solid #a3e635; padding-bottom: 5px;">Arena</a>
                    <a href="#" onclick="setNicheView('catalog')" style="color: #a3a3a3; font-family: 'Montserrat', sans-serif; font-weight: 800; text-transform: uppercase; text-decoration: none; padding-bottom: 5px; transition: color 0.3s;">Memberships</a>
                    <button onclick="if(window.OrbitexSearch) OrbitexSearch.open('gym')" style="background: transparent; border: none; color: #fff; cursor: pointer; font-size: 1.2rem;">🔍</button>
                </div>
                <button class="niche-btn-primary" onclick="openActionModal('${niche.id}')" style="background: #a3e635; color: #0a0a0a; border: none; padding: 12px 30px; font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 1rem; text-transform: uppercase; cursor: pointer; transform: skew(-10deg); transition: transform 0.2s;">
                    <span style="display: inline-block; transform: skew(10deg);">Join Now</span>
                </button>
            </div>
        </header>

        <!-- Hero Section -->
        <section style="position: relative; overflow: hidden; border-bottom: 4px solid #a3e635; min-height: 80vh; display: flex; align-items: center;" data-aos="fade-in">
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(163, 230, 53, 0.05) 10px, rgba(163, 230, 53, 0.05) 20px); z-index: 2;"></div>
                <img src="${niche.heroImage || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920'}" alt="Gym" style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(1.2) brightness(0.4);">
            </div>
            
            <div class="niche-wrap" style="position: relative; z-index: 2; padding: 80px 20px; width: 100%;">
                <div style="max-width: 800px;" data-aos="slide-up">
                    <div style="display: inline-flex; align-items: center; gap: 10px; background: rgba(163, 230, 53, 0.2); border: 1px solid #a3e635; color: #a3e635; padding: 8px 16px; font-family: 'Montserrat', sans-serif; font-weight: 800; text-transform: uppercase; font-size: 0.9rem; margin-bottom: 30px; letter-spacing: 2px;">
                        <span style="font-size: 1.2rem; animation: gymStrobe 2s infinite;">⚡</span> 12,000 SQ.FT ATHLETIC ARENA • 24/7 OPEN
                    </div>
                    <h1 class="glitch-text" style="font-family: 'Montserrat', sans-serif; color: #ffffff; font-size: 5rem; line-height: 0.9; margin: 0 0 30px 0; font-weight: 900; text-transform: uppercase; letter-spacing: -2px;">
                        Unleash Your <br><span style="color: #a3e635;">Raw Power.</span>
                    </h1>
                    <p style="font-size: 1.3rem; color: #d4d4d4; margin-bottom: 40px; line-height: 1.6; max-width: 600px;">
                        ${niche.tagline || 'More than a gym. A battleground for your goals. Built for the dedicated, open for everyone.'}
                    </p>
                    <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                        <button onclick="setNicheView('catalog')" style="background: #a3e635; color: #0a0a0a; border: none; padding: 20px 40px; font-family: 'Montserrat', sans-serif; font-size: 1.2rem; font-weight: 900; text-transform: uppercase; cursor: pointer; transform: skew(-10deg); animation: gymPulse 2s infinite;">
                            <span style="display: inline-block; transform: skew(10deg);">View Plans</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <div class="torn-edge"></div>

        <!-- Supplement Shop Mini-Section -->
        <section style="padding: 100px 20px; background: #0a0a0a;">
            <div class="niche-wrap">
                <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px;" data-aos="fade-up">
                    <div>
                        <h2 style="font-family: 'Montserrat', sans-serif; color: #ffffff; font-size: 3rem; margin: 0; font-weight: 900; text-transform: uppercase;">Pro <span style="color: #a3e635;">Supplements</span></h2>
                        <p style="color: #a3a3a3; font-size: 1.1rem; margin-top: 10px;">Fuel your grind with authentic nutrition.</p>
                    </div>
                    <a href="#" style="color: #a3e635; text-transform: uppercase; font-weight: 700; text-decoration: none;">View All Supplements →</a>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
                    ${[
                        { id: 'sup1', name: 'Premium Whey Protein', img: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80', basePrice: 4500, flavors: ['Chocolate', 'Vanilla'], sizes: ['1kg', '2kg'] },
                        { id: 'sup2', name: 'BCAA Energy Plus', img: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=800&q=80', basePrice: 1500, flavors: ['Berry', 'Orange'], sizes: ['300g', '500g'] },
                        { id: 'sup3', name: 'Explosive Pre-Workout', img: 'https://images.unsplash.com/photo-1622313628468-b3d95efc5d2c?w=800&q=80', basePrice: 2000, flavors: ['Fruit Punch', 'Green Apple'], sizes: ['250g'] },
                        { id: 'sup4', name: 'Pure Creatine Monohydrate', img: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=800&q=80', basePrice: 1200, flavors: ['Unflavored'], sizes: ['250g', '500g'] }
                    ].map(item => `
                        <div class="gym-card" style="background: #171717; border: 1px solid #262626; border-radius: 8px; overflow: hidden;" data-aos="fade-up">
                            <div style="height: 250px; position: relative; overflow: hidden;" class="shimmer">
                                <img src="${item.img}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" onload="this.parentElement.classList.remove('shimmer')" />
                            </div>
                            <div style="padding: 20px;">
                                <h3 style="font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 1.2rem; margin: 0 0 10px 0;">${item.name}</h3>
                                
                                <div style="margin-bottom: 15px;">
                                    <div style="font-size: 0.8rem; color: #666; margin-bottom: 5px; text-transform: uppercase;">Flavor</div>
                                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                        ${item.flavors.map((f, i) => `<span class="pill ${i===0?'active':''}" onclick="this.parentElement.querySelectorAll('.pill').forEach(p=>p.classList.remove('active')); this.classList.add('active');">${f}</span>`).join('')}
                                    </div>
                                </div>
                                
                                <div style="margin-bottom: 20px;">
                                    <div style="font-size: 0.8rem; color: #666; margin-bottom: 5px; text-transform: uppercase;">Size</div>
                                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                        ${item.sizes.map((s, i) => `<span class="pill ${i===0?'active':''}" onclick="this.parentElement.querySelectorAll('.pill').forEach(p=>p.classList.remove('active')); this.classList.add('active'); document.getElementById('price-${item.id}').innerText = formatPrice(${item.basePrice} * (this.innerText === '2kg' || this.innerText === '500g' ? 1.8 : 1));">${s}</span>`).join('')}
                                    </div>
                                </div>

                                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #262626; padding-top: 15px;">
                                    <div id="price-${item.id}" style="color: #a3e635; font-weight: 900; font-size: 1.3rem; font-family: 'Montserrat', sans-serif;">${formatPrice(item.basePrice)}</div>
                                    <button onclick="openItemOrderModal('${niche.id}', '${item.name}', ${item.basePrice})" style="background: #ffffff; color: #000; border: none; padding: 8px 15px; font-weight: 800; text-transform: uppercase; font-size: 0.9rem; cursor: pointer; border-radius: 4px;">Add</button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- BMI & Schedule Section -->
        <section style="padding: 100px 20px; background: #121212;">
            <div class="niche-wrap" style="display: flex; gap: 60px; flex-wrap: wrap;">
                
                <!-- Enhanced BMI Calculator -->
                <div style="flex: 1; min-width: 300px; background: #171717; padding: 40px; border: 1px solid #262626; border-radius: 12px; box-shadow: 0 0 30px rgba(163, 230, 53, 0.05);" class="gym-card" data-aos="fade-right">
                    <h3 style="font-family: 'Montserrat', sans-serif; font-size: 2rem; color: #ffffff; text-transform: uppercase; margin: 0 0 30px 0; font-weight: 900;">BMI <span style="color: #a3e635;">Analyzer</span></h3>
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; color: #a3e635; font-weight: 700; text-transform: uppercase; margin-bottom: 10px; font-size: 0.9rem;">Weight (kg)</label>
                        <input type="number" id="bmi-weight" class="bmi-input" placeholder="e.g. 75" style="width: 100%; padding: 15px; background: #0a0a0a; border: 1px solid #262626; color: white; font-size: 1.1rem; transition: all 0.3s; border-radius: 4px;">
                    </div>
                    <div style="margin-bottom: 30px;">
                        <label style="display: block; color: #a3e635; font-weight: 700; text-transform: uppercase; margin-bottom: 10px; font-size: 0.9rem;">Height (cm)</label>
                        <input type="number" id="bmi-height" class="bmi-input" placeholder="e.g. 180" style="width: 100%; padding: 15px; background: #0a0a0a; border: 1px solid #262626; color: white; font-size: 1.1rem; transition: all 0.3s; border-radius: 4px;">
                    </div>
                    <button onclick="calcBMIGlow()" style="width: 100%; background: #a3e635; color: #0a0a0a; border: none; padding: 15px; font-family: 'Montserrat', sans-serif; font-size: 1.1rem; font-weight: 900; text-transform: uppercase; cursor: pointer; margin-bottom: 20px; transition: transform 0.2s, box-shadow 0.2s; border-radius: 4px;" onmouseover="this.style.boxShadow='0 0 15px rgba(163, 230, 53, 0.5)'" onmouseout="this.style.boxShadow='none'">Analyze</button>
                    
                    <div style="margin-top: 20px;">
                        <div id="bmi-result-text" style="text-align: center; font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 1.5rem; color: #fff; min-height: 30px;"></div>
                        <div class="progress-bar-bg">
                            <div id="bmi-bar" class="progress-bar-fill"></div>
                        </div>
                    </div>
                </div>

                <!-- Schedule -->
                <div style="flex: 2; min-width: 300px;" data-aos="fade-left">
                    <h3 style="font-family: 'Montserrat', sans-serif; font-size: 2.5rem; color: #ffffff; text-transform: uppercase; margin: 0 0 30px 0; font-weight: 900;">Class Schedule</h3>
                    <div style="overflow-x: auto; background: #171717; border-radius: 8px; border: 1px solid #262626;">
                        <table style="width: 100%; min-width: 600px; border-collapse: collapse; text-align: left;">
                            <thead>
                                <tr style="border-bottom: 2px solid #a3e635;">
                                    <th style="padding: 20px; color: #a3e635; font-family: 'Montserrat', sans-serif; text-transform: uppercase; font-weight: 900;">Class & Trainer</th>
                                    <th style="padding: 20px; color: #ffffff; font-family: 'Montserrat', sans-serif; text-transform: uppercase; font-weight: 900;">Mon-Wed-Fri</th>
                                    <th style="padding: 20px; color: #ffffff; font-family: 'Montserrat', sans-serif; text-transform: uppercase; font-weight: 900;">Tue-Thu-Sat</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${[
                                    {name: 'HIIT Burn', trainer: 'Arjun K.', t1: '06:00 AM', t2: '07:00 PM'},
                                    {name: 'Yoga Flow', trainer: 'Priya M.', t1: '07:30 AM', t2: '06:00 PM'},
                                    {name: 'CrossFit', trainer: 'Vikram S.', t1: '06:00 PM', t2: '07:00 AM'},
                                    {name: 'Zumba', trainer: 'Neha R.', t1: '07:00 AM', t2: '08:00 AM'},
                                    {name: 'Strength', trainer: 'Arjun K.', t1: '08:00 AM', t2: '06:00 PM'}
                                ].map((cls, i) => `
                                    <tr style="border-bottom: 1px solid #262626; transition: background 0.3s;" class="gym-cell">
                                        <td style="padding: 20px; font-weight: 700; border-right: 1px solid #262626;">
                                            <div style="font-size: 1.1rem;">${cls.name}</div>
                                            <div style="color: #666; font-size: 0.8rem; margin-top: 5px;">with ${cls.trainer}</div>
                                        </td>
                                        <td style="padding: 20px; color: #a3a3a3; border-right: 1px solid #262626;">${cls.t1}</td>
                                        <td style="padding: 20px; color: #a3a3a3;">${cls.t2}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        <!-- Transformations -->
        <section style="padding: 100px 20px; background: #0a0a0a;">
            <div class="niche-wrap">
                <h2 style="font-family: 'Montserrat', sans-serif; font-size: 3rem; color: #ffffff; text-transform: uppercase; margin: 0 0 50px 0; font-weight: 900; text-align: center;" data-aos="fade-down">Real <span style="color: #a3e635;">Results</span></h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                    ${[
                        {name: 'Siddharth M.', res: 'Lost 18kg in 6 months', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80', quote: 'The environment here pushes you beyond your limits. Best trainers in Mumbai.', before: '105kg', after: '87kg'},
                        {name: 'Anjali D.', res: 'Gained 5kg lean muscle', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80', quote: 'From zero confidence to deadlifting 100kg. This arena changed my life.', before: '48kg', after: '53kg'},
                        {name: 'Karan V.', res: 'Fat loss & Conditioning', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80', quote: 'The functional arena is world-class. Unbeatable facility and community.', before: '28% BF', after: '14% BF'}
                    ].map((test, i) => `
                        <div class="gym-card" style="background: #171717; border-radius: 8px; overflow: hidden;" data-aos="fade-up" data-aos-delay="${i * 100}">
                            <div style="height: 200px; background: url('${test.img}') center/cover; filter: grayscale(50%);"></div>
                            <div style="padding: 30px; border-top: 4px solid #a3e635;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid #262626; padding-bottom: 10px;">
                                    <div style="color: #ef4444; font-weight: 900; font-family: 'Montserrat', sans-serif;">${test.before}</div>
                                    <div style="color: #ffffff;">➔</div>
                                    <div style="color: #a3e635; font-weight: 900; font-family: 'Montserrat', sans-serif;">${test.after}</div>
                                </div>
                                <div style="color: #a3e635; font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 1.1rem; text-transform: uppercase; margin-bottom: 5px;">${test.res}</div>
                                <h4 style="color: #ffffff; font-size: 1.4rem; margin: 0 0 15px 0;">${test.name}</h4>
                                <p style="color: #a3a3a3; line-height: 1.6; font-style: italic; font-size: 0.95rem;">"${test.quote}"</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <script>
            window.calcBMIGlow = function() {
                const w = parseFloat(document.getElementById('bmi-weight').value);
                const h = parseFloat(document.getElementById('bmi-height').value) / 100;
                if(w > 0 && h > 0) {
                    const bmi = (w / (h * h)).toFixed(1);
                    let status = 'Normal';
                    let color = '#a3e635'; // green
                    let pct = 50;
                    
                    if(bmi < 18.5) { 
                        status = 'Underweight'; 
                        color = '#3b82f6'; // blue
                        pct = 25;
                    }
                    else if(bmi >= 25 && bmi < 30) { 
                        status = 'Overweight'; 
                        color = '#facc15'; // yellow
                        pct = 75;
                    }
                    else if(bmi >= 30) {
                        status = 'Obese';
                        color = '#ef4444'; // red
                        pct = 95;
                    }
                    
                    document.getElementById('bmi-result-text').innerHTML = 'BMI: ' + bmi + ' <span style="color: ' + color + '; text-shadow: 0 0 10px ' + color + ';">(' + status + ')</span>';
                    
                    const bar = document.getElementById('bmi-bar');
                    bar.style.width = pct + '%';
                    bar.style.backgroundColor = color;
                    bar.style.boxShadow = '0 0 10px ' + color;
                }
            }
        </script>
    </div>
    `;
}

function generateGymCatalogHTML(niche) {
    setTimeout(() => {
        if (window.OrbitexMobileNav) {
            OrbitexMobileNav.show({
                tabs: [
                    {icon: '🏋️', label: 'Programs', action: "setNicheView('overview')"},
                    {icon: '📅', label: 'Schedule', action: "setNicheView('overview')"},
                    {icon: '🛒', label: 'Shop', action: "setNicheView('overview')"},
                    {icon: '⚡', label: 'Join', action: "setNicheView('catalog')"}
                ],
                accentColor: '#a3e635'
            });
        }
        if (typeof OrbitexAOS !== 'undefined') OrbitexAOS.refresh();
    }, 300);

    const memberships = [
        { id: 'm1', name: 'Base Access', basePrice: 2500, desc: 'Full access to gym floor and cardio deck. No group classes.', popular: false, value: false },
        { id: 'm2', name: 'Pro Athlete', basePrice: 3500, desc: 'Full access + all group classes + 1 PT session/month.', popular: true, value: false },
        { id: 'm3', name: 'Elite VIP', basePrice: 5000, desc: 'Full access + priority booking + towel service + recovery zone.', popular: false, value: true }
    ];

    return `
    <style>
    .gym-catalog-card {
        transition: all 0.3s ease;
        border-radius: 12px;
    }
    .gym-catalog-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(163, 230, 53, 0.1);
        border-color: #a3e635 !important;
    }
    .pill-duration {
        display: inline-block;
        padding: 8px 16px;
        background: #1a1a1a;
        color: #a3a3a3;
        border-radius: 30px;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.2s;
        border: 1px solid #333;
        font-weight: 700;
    }
    .pill-duration.active {
        background: #a3e635;
        color: #0a0a0a;
        border-color: #a3e635;
    }
    .sticky-buy {
        position: fixed;
        bottom: 70px; /* above mobile nav */
        left: 0;
        width: 100%;
        background: rgba(23, 23, 23, 0.95);
        backdrop-filter: blur(10px);
        border-top: 1px solid #333;
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 40;
        transform: translateY(150%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .sticky-buy.visible {
        transform: translateY(0);
    }
    @media (min-width: 768px) {
        .sticky-buy { display: none; }
    }
    </style>
    <div class="niche-page ${niche.theme || 'theme-gym'}" style="background: #0a0a0a; color: #ffffff; font-family: 'Inter', sans-serif; min-height: 100vh; padding-bottom: 140px;">
        
        <header class="niche-header" style="background: #0a0a0a; border-bottom: 2px solid #262626; position: sticky; top: 0; z-index: 50;">
            <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center; padding: 20px;">
                <div class="niche-brand" style="display: flex; align-items: center; gap: 15px;">
                    ${niche.logoSvg || '<div style="width: 45px; height: 45px; background: #a3e635; color: #0a0a0a; display: flex; align-items: center; justify-content: center; font-weight: 900; font-family: \\\'Montserrat\\\', sans-serif; font-size: 1.5rem; transform: skew(-10deg);">P</div>'}
                    <span style="font-family: 'Montserrat', sans-serif; font-weight: 900; color: #ffffff; font-size: 1.8rem; text-transform: uppercase; letter-spacing: -1px;">${niche.name}</span>
                </div>
                <div class="niche-nav-links" style="display: flex; gap: 30px;">
                    <a href="#" onclick="setNicheView('overview')" style="color: #a3a3a3; font-family: 'Montserrat', sans-serif; font-weight: 800; text-transform: uppercase; text-decoration: none; padding-bottom: 5px; transition: color 0.3s;">Arena</a>
                    <a href="#" onclick="setNicheView('catalog')" style="color: #a3e635; font-family: 'Montserrat', sans-serif; font-weight: 800; text-transform: uppercase; text-decoration: none; border-bottom: 3px solid #a3e635; padding-bottom: 5px;">Memberships</a>
                    <button onclick="if(window.OrbitexSearch) OrbitexSearch.open('gym')" style="background: transparent; border: none; color: #fff; cursor: pointer; font-size: 1.2rem;">🔍</button>
                </div>
            </div>
        </header>

        <section style="padding: 60px 20px;">
            <div class="niche-wrap" style="max-width: 1200px;">
                <div style="text-align: center; margin-bottom: 60px;" data-aos="fade-down">
                    <h1 style="font-family: 'Montserrat', sans-serif; font-size: 4rem; color: #ffffff; text-transform: uppercase; margin: 0 0 15px 0; font-weight: 900; letter-spacing: -1px;">Choose Your <span style="color: #a3e635;">Weapon</span></h1>
                    <p style="color: #a3a3a3; font-size: 1.2rem; max-width: 600px; margin: 0 auto;">Transparent pricing. Select your plan and duration to get started.</p>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; margin-bottom: 80px;">
                    ${memberships.map((plan, idx) => `
                        <div class="gym-catalog-card" style="background: #171717; border: 2px solid ${plan.popular || plan.value ? '#a3e635' : '#262626'}; position: relative; display: flex; flex-direction: column;" data-aos="fade-up" data-aos-delay="${idx * 100}">
                            ${plan.popular ? '<div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: #a3e635; color: #0a0a0a; padding: 5px 20px; font-size: 0.9rem; font-weight: 900; text-transform: uppercase; border-radius: 20px; box-shadow: 0 5px 15px rgba(163,230,53,0.3);">Most Popular</div>' : ''}
                            ${plan.value ? '<div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: #3b82f6; color: #fff; padding: 5px 20px; font-size: 0.9rem; font-weight: 900; text-transform: uppercase; border-radius: 20px; box-shadow: 0 5px 15px rgba(59,130,246,0.3);">Best Value</div>' : ''}
                            
                            <div style="padding: 40px 30px 30px; flex: 1;">
                                <h3 style="font-family: 'Montserrat', sans-serif; font-size: 2rem; color: #ffffff; margin: 0 0 15px 0; font-weight: 900; text-align: center;">${plan.name}</h3>
                                <p style="color: #a3a3a3; text-align: center; margin-bottom: 30px; min-height: 50px;">${plan.desc}</p>
                                
                                <div style="margin-bottom: 25px; text-align: center;">
                                    <div style="font-size: 0.85rem; color: #666; text-transform: uppercase; font-weight: 700; margin-bottom: 10px;">Select Duration</div>
                                    <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 10px;">
                                        ${['1 Month', '3 Months', '6 Months', 'Annual'].map((dur, i) => {
                                            const mult = i === 0 ? 1 : i === 1 ? 2.7 : i === 2 ? 5 : 9; // bulk discounts
                                            return `<span class="pill-duration ${i===0?'active':''}" onclick="updatePlanSelection(this, '${plan.id}', '${plan.name}', ${plan.basePrice}, ${mult}, '${dur}')">${dur}</span>`;
                                        }).join('')}
                                    </div>
                                </div>
                                
                                <div style="text-align: center; margin-bottom: 30px;">
                                    <div id="price-display-${plan.id}" style="font-family: 'Montserrat', sans-serif; font-size: 3rem; font-weight: 900; color: #a3e635;">
                                        ${formatPrice(plan.basePrice)}
                                    </div>
                                    <div style="color: #666; font-size: 0.9rem;">inclusive of taxes</div>
                                </div>
                            </div>
                            
                            <div style="padding: 0 30px 30px;">
                                <button id="btn-${plan.id}" onclick="openItemOrderModal('${niche.id}', '${plan.name} - 1 Month', ${plan.basePrice})" style="width: 100%; background: ${plan.popular || plan.value ? '#a3e635' : '#ffffff'}; color: #0a0a0a; border: none; padding: 15px; font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 1.1rem; text-transform: uppercase; cursor: pointer; border-radius: 8px; transition: transform 0.2s;">
                                    Select Plan
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Comparison Table -->
                <div data-aos="fade-up">
                    <h2 style="font-family: 'Montserrat', sans-serif; font-size: 2.5rem; color: #ffffff; text-transform: uppercase; margin: 0 0 30px 0; font-weight: 900; text-align: center;">Compare Features</h2>
                    <div style="overflow-x: auto; border-radius: 12px; border: 1px solid #262626; background: #171717;">
                        <table style="width: 100%; min-width: 700px; border-collapse: collapse; text-align: center;">
                            <thead>
                                <tr style="border-bottom: 2px solid #333;">
                                    <th style="padding: 20px; text-align: left; color: #a3a3a3;">Feature</th>
                                    <th style="padding: 20px; color: #fff; font-family: 'Montserrat', sans-serif; font-weight: 900;">Base</th>
                                    <th style="padding: 20px; color: #a3e635; font-family: 'Montserrat', sans-serif; font-weight: 900;">Pro Athlete</th>
                                    <th style="padding: 20px; color: #3b82f6; font-family: 'Montserrat', sans-serif; font-weight: 900;">Elite VIP</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="border-bottom: 1px solid #262626;">
                                    <td style="padding: 15px 20px; text-align: left; font-weight: 700;">Gym Floor Access</td>
                                    <td>✅</td><td>✅</td><td>✅</td>
                                </tr>
                                <tr style="border-bottom: 1px solid #262626;">
                                    <td style="padding: 15px 20px; text-align: left; font-weight: 700;">Cardio Deck</td>
                                    <td>✅</td><td>✅</td><td>✅</td>
                                </tr>
                                <tr style="border-bottom: 1px solid #262626;">
                                    <td style="padding: 15px 20px; text-align: left; font-weight: 700;">Group Classes</td>
                                    <td>❌</td><td>✅</td><td>✅</td>
                                </tr>
                                <tr style="border-bottom: 1px solid #262626;">
                                    <td style="padding: 15px 20px; text-align: left; font-weight: 700;">Monthly PT Session</td>
                                    <td>❌</td><td>✅</td><td>✅</td>
                                </tr>
                                <tr style="border-bottom: 1px solid #262626;">
                                    <td style="padding: 15px 20px; text-align: left; font-weight: 700;">Recovery Zone (Ice Bath)</td>
                                    <td>❌</td><td>❌</td><td>✅</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sticky Mobile Buy Bar -->
        <div id="sticky-buy-bar" class="sticky-buy">
            <div>
                <div id="sticky-plan-name" style="font-weight: 700; font-size: 0.9rem; color: #fff;">Select a Plan</div>
                <div id="sticky-plan-price" style="font-family: 'Montserrat', sans-serif; font-weight: 900; color: #a3e635; font-size: 1.2rem;">--</div>
            </div>
            <button id="sticky-btn" style="background: #a3e635; color: #000; border: none; padding: 10px 20px; font-weight: 900; font-family: 'Montserrat', sans-serif; text-transform: uppercase; border-radius: 6px; pointer-events: none; opacity: 0.5;">Join</button>
        </div>

        <script>
            window.updatePlanSelection = function(el, planId, planName, basePrice, multiplier, duration) {
                // Update pills
                const container = el.parentElement;
                container.querySelectorAll('.pill-duration').forEach(p => p.classList.remove('active'));
                el.classList.add('active');

                // Update price
                const finalPrice = Math.round(basePrice * multiplier);
                document.getElementById('price-display-' + planId).innerText = formatPrice(finalPrice);
                
                // Update main button
                const btn = document.getElementById('btn-' + planId);
                btn.onclick = function() { openItemOrderModal('${niche.id}', planName + ' - ' + duration, finalPrice); };

                // Update sticky bar
                const stickyBar = document.getElementById('sticky-buy-bar');
                stickyBar.classList.add('visible');
                document.getElementById('sticky-plan-name').innerText = planName + ' (' + duration + ')';
                document.getElementById('sticky-plan-price').innerText = formatPrice(finalPrice);
                
                const stickyBtn = document.getElementById('sticky-btn');
                stickyBtn.style.pointerEvents = 'auto';
                stickyBtn.style.opacity = '1';
                stickyBtn.onclick = function() { openItemOrderModal('${niche.id}', planName + ' - ' + duration, finalPrice); };
            }
        </script>
    </div>
    `;
}

if (typeof window !== 'undefined') {
    window.generateGymOverviewHTML = generateGymOverviewHTML;
    window.generateGymCatalogHTML = generateGymCatalogHTML;
}
