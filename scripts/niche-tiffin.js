function generateTiffinOverviewHTML(niche) {
    const ownerBanner = isOwnerMode ? `
        <div style="background: var(--t-bg-card); padding: 1rem; border-bottom: 1px solid var(--t-border);">
            <div class="niche-wrap" style="max-width: 1280px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--t-text); font-family: 'Inter', sans-serif; font-weight: 700; font-size: 1rem;">
                    👑 OWNER DASHBOARD
                    <div style="width: 10px; height: 10px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 10px #22c55e; animation: tiffinGlow 2s infinite;"></div>
                </div>
                <div style="display: flex; gap: 1rem;">
                    <div style="background: var(--t-bg); padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid var(--t-accent); display: flex; flex-direction: column; align-items: center;">
                        <span style="color: var(--t-text-muted); font-size: 0.75rem; font-family: 'Inter', sans-serif; text-transform: uppercase;">Active Tiffins</span>
                        <span style="color: var(--t-primary); font-size: 1.1rem; font-weight: 700; font-family: 'Inter', sans-serif;">1,840</span>
                    </div>
                    <div style="background: var(--t-bg); padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid var(--t-border); display: flex; flex-direction: column; align-items: center;">
                        <span style="color: var(--t-text-muted); font-size: 0.75rem; font-family: 'Inter', sans-serif; text-transform: uppercase;">Pause Requests</span>
                        <span style="color: #ef4444; font-size: 1.1rem; font-weight: 700; font-family: 'Inter', sans-serif;">14</span>
                    </div>
                </div>
            </div>
        </div>
    ` : '';

    return `
    <style>
        .theme-tiffin {
            --t-bg: #1c1917;
            --t-bg-card: #292524;
            --t-bg-card-hover: #44403c;
            --t-text: #fafaf9;
            --t-text-muted: #a8a29e;
            --t-primary: #f3cf88;
            --t-accent: #ea580c;
            --t-border: #44403c;
            --t-backdrop: rgba(28, 25, 23, 0.95);
        }
        
        .theme-tiffin.dark-slate {
            --t-bg: #152233;
            --t-bg-card: #203248;
            --t-bg-card-hover: #2a415c;
            --t-text: #ffffff;
            --t-text-muted: #94a3b8;
            --t-primary: #f3cf88;
            --t-accent: #e67e22;
            --t-border: #334155;
            --t-backdrop: rgba(21, 34, 51, 0.95);
        }

        @keyframes tiffinSteam { 
            0% { transform: translateY(0) scaleX(1) scaleY(1); opacity: 0; filter: blur(4px); } 
            20% { opacity: 0.8; }
            100% { transform: translateY(-120px) scaleX(2) scaleY(2); opacity: 0; filter: blur(10px); } 
        }
        @keyframes tiffinBounce { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-15px) rotate(5deg); } }
        @keyframes tiffinGlow { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.2); } }
        
        .steam-line-1 { animation: tiffinSteam 3s infinite ease-in; }
        .steam-line-2 { animation: tiffinSteam 3.5s infinite ease-in 0.7s; }
        .steam-line-3 { animation: tiffinSteam 2.5s infinite ease-in 1.4s; }
        .steam-line-4 { animation: tiffinSteam 4s infinite ease-in 2.1s; }

        .floating-emoji-1 { position: absolute; top: 15%; right: 10%; font-size: 2.5rem; animation: tiffinBounce 4s infinite ease-in-out; filter: drop-shadow(0 5px 15px rgba(0,0,0,0.3)); z-index: 5; }
        .floating-emoji-2 { position: absolute; bottom: 20%; left: 0%; font-size: 3rem; animation: tiffinBounce 5s infinite ease-in-out 1s reverse; filter: drop-shadow(0 5px 15px rgba(0,0,0,0.3)); z-index: 5; }
        .floating-emoji-3 { position: absolute; top: 30%; left: 10%; font-size: 2rem; animation: tiffinBounce 6s infinite ease-in-out 0.5s; filter: drop-shadow(0 5px 15px rgba(0,0,0,0.3)); z-index: 5; }

        .thali-container {
            width: 400px; height: 400px;
            background: radial-gradient(circle at 30% 30%, #d4af37, #997a00);
            border-radius: 50%;
            position: relative;
            box-shadow: inset 0 0 20px rgba(0,0,0,0.5), inset 0 0 5px rgba(255,255,255,0.3), 0 20px 50px rgba(0,0,0,0.6);
            border: 2px solid #e5c158;
            margin: 0 auto;
        }
        
        .thali-bowl {
            width: 80px; height: 80px;
            background: radial-gradient(circle at 30% 30%, #e5c158, #b89414);
            border-radius: 50%;
            position: absolute;
            box-shadow: inset 0 5px 10px rgba(0,0,0,0.4), 0 5px 10px rgba(0,0,0,0.3);
            display: flex; justify-content: center; align-items: center;
            font-size: 2.5rem;
            border: 1px solid #ffdb58;
            transition: transform 0.3s;
        }
        .thali-bowl:hover { transform: scale(1.15) rotate(5deg); z-index: 10; cursor: pointer; }
        
        .thali-center {
            width: 140px; height: 140px;
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            display: flex; justify-content: center; align-items: center;
            font-size: 5rem;
            filter: drop-shadow(0 10px 10px rgba(0,0,0,0.4));
            transition: transform 0.3s;
        }
        .thali-center:hover { transform: translate(-50%, -50%) scale(1.1); z-index: 10; cursor: pointer; }

        .t-btn-gradient {
            background: linear-gradient(135deg, var(--t-accent), #f97316);
            transition: all 0.3s;
        }
        .t-btn-gradient:hover {
            box-shadow: 0 10px 20px rgba(234, 88, 12, 0.4);
            transform: translateY(-2px);
        }
        
        .tiffin-counter {
            font-size: 2.5rem; font-weight: 900; font-family: 'GalanoGrotesque', 'Inter', sans-serif;
            background: linear-gradient(135deg, var(--t-primary), var(--t-accent));
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        
        .shimmer-loader-thali { display: none; }
        .thali-loading .shimmer-loader-thali { display: block; }
        .thali-loading .thali-container, .thali-loading .thali-menu-details { display: none; }
    </style>
    
    <div class="niche-page theme-tiffin" style="background-color: var(--t-bg); font-family: 'GalanoGrotesque', 'Inter', sans-serif; color: var(--t-text); overflow-x: hidden;">
        ${typeof generateMarqueeBanner === 'function' ? generateMarqueeBanner('100% Pure Desi Ghee • FSSAI Certified Kitchen • No Artificial Colors', '#ea580c', '#fff') : ''}
        ${ownerBanner}
        
        <!-- Header -->
        <header class="niche-header" style="position: sticky; top: 0; z-index: 50; background: var(--t-backdrop); backdrop-filter: blur(10px); border-bottom: 1px solid var(--t-border); padding: 1rem 0;">
            <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center; max-width: 1280px; margin: 0 auto; padding: 0 2rem;">
                <div class="niche-brand" style="display: flex; align-items: center; gap: 1rem;">
                    <div style="background: rgba(234, 88, 12, 0.1); border-radius: 50%; padding: 0.25rem;">
                        ${niche.logoSvg}
                    </div>
                    <div>
                        <h2 style="font-weight: 700; color: var(--t-primary); margin: 0; font-size: 1.5rem; letter-spacing: 0.05em;">Bangre Tiffin</h2>
                        <span style="font-size: 0.75rem; color: var(--t-text-muted); letter-spacing: 0.1em; text-transform: uppercase;">Homemade & Pure</span>
                    </div>
                </div>
                <div class="niche-nav-links" style="display: flex; gap: 1.5rem; align-items: center;">
                    <button onclick="document.querySelector('.theme-tiffin').classList.toggle('dark-slate');" style="background: transparent; border: none; font-size: 1.2rem; cursor: pointer; color: var(--t-text);">🌓</button>
                    <button onclick="typeof OrbitexSearch !== 'undefined' && OrbitexSearch.open('tiffin')" style="background: transparent; border: none; font-size: 1.2rem; cursor: pointer; color: var(--t-text);">🔍</button>
                    <a href="#" onclick="setNicheView('catalog')" style="color: var(--t-text-muted); text-decoration: none; font-weight: 600; font-size: 0.95rem; transition: color 0.2s;" onmouseover="this.style.color='var(--t-primary)'" onmouseout="this.style.color='var(--t-text-muted)'">Meal Plans</a>
                    <a href="#menu" style="color: var(--t-text-muted); text-decoration: none; font-weight: 600; font-size: 0.95rem; transition: color 0.2s;" onmouseover="this.style.color='var(--t-primary)'" onmouseout="this.style.color='var(--t-text-muted)'">Today's Menu</a>
                    <a href="bangre tiffin sample.html" target="_blank" style="color: var(--t-primary); text-decoration: none; font-weight: 700; font-size: 0.85rem; background: rgba(243,207,136,0.15); border: 1px solid rgba(243,207,136,0.4); padding: 0.45rem 1rem; border-radius: 50px; display: inline-flex; align-items: center; gap: 0.3rem;">📄 Standalone HTML ↗</a>
                    <a href="#" onclick="toggleOwnerMode(); renderNiche()" style="color: var(--t-accent); text-decoration: none; font-weight: 700; font-size: 0.95rem; background: rgba(234,88,12,0.1); padding: 0.5rem 1rem; border-radius: 50px;">${isOwnerMode ? '🔒 Exit Owner Mode' : '🔑 Owner Mode'}</a>
                    <button class="t-btn-gradient" onclick="setNicheView('catalog')" style="color: white; border: none; padding: 0.75rem 1.75rem; border-radius: 50px; font-weight: 700; font-size: 0.95rem; cursor: pointer;">Subscribe Now</button>
                </div>
            </div>
        </header>

        <!-- Hero Section -->
        <section style="padding: 6rem 2rem; position: relative; overflow: hidden; border-bottom: 1px solid var(--t-border);">
            <div style="position: absolute; inset: 0; background: radial-gradient(circle at right, rgba(234, 88, 12, 0.15) 0%, transparent 60%); z-index: 1;"></div>
            
            <div class="floating-emoji-1">🫓</div>
            <div class="floating-emoji-2">🥣</div>
            <div class="floating-emoji-3">🌶️</div>
            
            <div class="niche-wrap" style="max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; position: relative; z-index: 10;">
                <div data-aos="fade-right">
                    <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(243, 207, 136, 0.1); color: var(--t-primary); font-size: 0.75rem; font-weight: 800; padding: 0.5rem 1.25rem; border-radius: 50px; margin-bottom: 1.5rem; letter-spacing: 0.05em; border: 1px solid rgba(243, 207, 136, 0.2);">
                        <div style="width: 8px; height: 8px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 5px #22c55e;"></div>
                        FSSAI #11522003000451 • 100% PURE DESI GHEE
                    </div>
                    <h1 style="font-size: 4.5rem; font-weight: 700; color: var(--t-text); line-height: 1.1; margin-bottom: 1.5rem;">
                        Ghar Ka Khana,<br><span style="background: linear-gradient(135deg, var(--t-primary), var(--t-accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-style: italic;">Delivered Daily.</span>
                    </h1>
                    <p style="font-size: 1.25rem; color: var(--t-text-muted); line-height: 1.6; margin-bottom: 2.5rem; max-width: 500px;">
                        ${niche.tagline} Enjoy healthy, hygienic, and delicious homemade meals prepared by Aunty ji, delivered hot to your doorstep in Nagpur.
                    </p>
                    <div style="display: flex; gap: 1rem;">
                        <button class="t-btn-gradient" onclick="setNicheView('catalog')" style="color: white; border: none; padding: 1.25rem 2.5rem; border-radius: 50px; font-weight: 700; font-size: 1.1rem; cursor: pointer;">
                            View Meal Plans
                        </button>
                        <button onclick="openActionModal('${niche.id}')" style="background: transparent; color: var(--t-primary); border: 2px solid rgba(243,207,136,0.5); padding: 1.25rem 2.5rem; border-radius: 50px; font-weight: 700; font-size: 1.1rem; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.background='rgba(243,207,136,0.1)'; this.style.borderColor='var(--t-primary)'" onmouseout="this.style.background='transparent'; this.style.borderColor='rgba(243,207,136,0.5)'">
                            Try 1-Day Trial
                        </button>
                    </div>
                </div>
                <div data-aos="fade-left" style="position: relative; text-align: center;">
                    <div class="steam-wrap" style="font-size: 12rem; line-height: 1; filter: drop-shadow(0 20px 30px rgba(234,88,12,0.4)); position: relative; z-index: 2; margin-top: 2rem;">
                        🍱
                        <div class="steam-line-1" style="position: absolute; top: -20px; left: 30%; width: 10px; height: 80px; background: rgba(255,255,255,0.3); border-radius: 50px;"></div>
                        <div class="steam-line-2" style="position: absolute; top: -10px; left: 45%; width: 15px; height: 100px; background: rgba(255,255,255,0.4); border-radius: 50px;"></div>
                        <div class="steam-line-3" style="position: absolute; top: -30px; left: 60%; width: 12px; height: 90px; background: rgba(255,255,255,0.3); border-radius: 50px;"></div>
                        <div class="steam-line-4" style="position: absolute; top: 0px; left: 75%; width: 8px; height: 70px; background: rgba(255,255,255,0.2); border-radius: 50px;"></div>
                    </div>
                    
                    <div style="position: absolute; bottom: -2rem; right: 2rem; background: var(--t-backdrop); backdrop-filter: blur(10px); padding: 1.25rem 2rem; border-radius: 16px; border: 1px solid rgba(243,207,136,0.2); box-shadow: 0 10px 30px rgba(0,0,0,0.5); display: flex; align-items: center; gap: 1rem; text-align: left; z-index: 10;">
                        <div style="font-size: 2.5rem; animation: tiffinBounce 2s infinite;">🚲</div>
                        <div>
                            <div style="color: var(--t-primary); font-weight: 800; font-size: 1.1rem;">Daily by 12:30 PM</div>
                            <div style="color: var(--t-text-muted); font-size: 0.9rem;">Free Delivery in Nagpur</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <svg style="position: absolute; bottom: 0; left: 0; width: 100%; height: 50px;" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="var(--t-bg-card)" fill-opacity="1" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,224C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </section>

        <!-- Stats Section -->
        <section style="padding: 4rem 2rem; background: var(--t-bg-card); position: relative;">
            <div class="niche-wrap" style="max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem;">
                ${[
                    { val: '5000+', lbl: 'Tiffins Delivered', icon: '🍲' },
                    { val: '98%', lbl: 'On-Time', icon: '⏱️' },
                    { val: 'FSSAI', lbl: 'Certified Kitchen', icon: '🏅' },
                    { val: '4.8★', lbl: 'Rating', icon: '⭐' }
                ].map((stat, i) => `
                    <div data-aos="fade-up" data-aos-delay="${i*100}" style="background: var(--t-bg); border: 1px solid var(--t-border); padding: 2rem 1.5rem; border-radius: 16px; text-align: center; color: var(--t-text); box-shadow: 0 10px 20px rgba(0,0,0,0.1); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--t-primary)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='var(--t-border)'">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${stat.icon}</div>
                        <div class="tiffin-counter">${stat.val}</div>
                        <div style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--t-text-muted); letter-spacing: 0.05em; opacity: 0.9;">${stat.lbl}</div>
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- Delivery Zone Map & Pincode Checker -->
        <section style="padding: 6rem 2rem; background: var(--t-bg);">
            <div class="niche-wrap" style="max-width: 800px; margin: 0 auto; text-align: center;" data-aos="zoom-in">
                <div style="display: inline-block; background: rgba(234, 88, 12, 0.1); color: var(--t-accent); font-size: 0.85rem; font-weight: 800; padding: 0.5rem 1.5rem; border-radius: 50px; margin-bottom: 1.5rem; letter-spacing: 0.1em; text-transform: uppercase;">Delivery Area</div>
                <h2 style="font-size: 3rem; color: var(--t-primary); margin-bottom: 2rem; font-style: italic;">Check Your Delivery Zone</h2>
                <div style="display: flex; max-width: 400px; margin: 0 auto; border-radius: 50px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.3); border: 1px solid var(--t-border);">
                    <input type="text" id="tiffin-pincode" placeholder="Enter 6-digit Pincode" style="flex: 1; padding: 1rem 1.5rem; border: none; background: var(--t-bg-card); color: var(--t-text); font-size: 1rem; outline: none;">
                    <button onclick="if(typeof OrbitexToast !== 'undefined') OrbitexToast.show('Pincode valid! Free delivery available. 🚀', 'success'); else alert('Available!');" class="t-btn-gradient" style="border: none; padding: 0 2rem; color: white; font-weight: 700; cursor: pointer;">Check</button>
                </div>
                <p style="color: var(--t-text-muted); margin-top: 1.5rem; font-size: 0.95rem;">Currently serving Dharampeth, Sadar, Ramdaspeth, Seminary Hills, and nearby areas.</p>
            </div>
        </section>

        <!-- Meal Plan Timeline -->
        <section style="padding: 6rem 2rem; background: var(--t-bg-card); border-top: 1px solid var(--t-border);">
            <div class="niche-wrap" style="max-width: 1000px; margin: 0 auto; text-align: center;" data-aos="fade-up">
                <h2 style="font-size: 3rem; color: var(--t-primary); margin-bottom: 3rem; font-style: italic;">Weekly Rotation Plan</h2>
                <div style="display: flex; justify-content: space-between; overflow-x: auto; padding-bottom: 1rem; gap: 1rem;">
                    ${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => `
                        <div style="flex: 1; min-width: 120px; background: var(--t-bg); border: 1px solid var(--t-border); border-radius: 12px; padding: 1.5rem; text-align: center;">
                            <div style="font-weight: 700; color: var(--t-primary); margin-bottom: 0.5rem;">${day}</div>
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">${['🥘', '🥬', '🧆', '🍲', '🥔', '🍚'][i]}</div>
                            <div style="font-size: 0.85rem; color: var(--t-text-muted);">Different Sabzi & Dal</div>
                        </div>
                    `).join('')}
                    <div style="flex: 1; min-width: 120px; background: rgba(234, 88, 12, 0.1); border: 1px solid var(--t-accent); border-radius: 12px; padding: 1.5rem; text-align: center;">
                        <div style="font-weight: 700; color: var(--t-accent); margin-bottom: 0.5rem;">Sun</div>
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🍡</div>
                        <div style="font-size: 0.85rem; color: var(--t-text);">Special Sweet</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Today's Menu Preview (Thali View) -->
        <section id="menu" style="padding: 6rem 2rem; background: var(--t-bg); border-top: 1px dashed var(--t-border); border-bottom: 1px dashed var(--t-border); position: relative;">
            <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(234, 88, 12, 0.05) 0%, transparent 70%); pointer-events: none;"></div>
            <div class="niche-wrap" style="max-width: 1200px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 4rem;" data-aos="fade-down">
                    <h2 style="font-size: 3.5rem; color: var(--t-primary); margin-bottom: 1rem; font-style: italic;">Today's Thali</h2>
                    <p style="color: var(--t-text-muted); font-size: 1.2rem;">Prepared fresh today morning. (Rotational Day 14)</p>
                </div>
                
                <div style="display: flex; gap: 4rem; align-items: center; flex-wrap: wrap; justify-content: center;" class="thali-container-wrapper">
                    <!-- Shimmer Loader -->
                    <div class="shimmer-loader-thali" style="width: 400px;">
                        ${typeof OrbitexShimmer !== 'undefined' ? OrbitexShimmer.card() : ''}
                    </div>
                    
                    <!-- Circular Thali UI -->
                    <div data-aos="zoom-in" class="thali-container">
                        <!-- Center item (Rice) -->
                        <div class="thali-center" title="Jeera Rice">🍚</div>
                        
                        <!-- Surrounding Bowls (Calculated positions using CSS) -->
                        <div class="thali-bowl" style="top: 8%; left: 50%; transform: translateX(-50%);" title="Paneer Butter Masala">🥘</div>
                        <div class="thali-bowl" style="top: 25%; right: 5%;" title="Dal Tadka">🥣</div>
                        <div class="thali-bowl" style="bottom: 25%; right: 5%;" title="Aloo Gobi Dry">🥔</div>
                        <div class="thali-bowl" style="bottom: 8%; left: 50%; transform: translateX(-50%);" title="2 Gulab Jamuns">🍡</div>
                        <div class="thali-bowl" style="bottom: 25%; left: 5%;" title="Fresh Salad & Pickle">🥗</div>
                        <div class="thali-bowl" style="top: 25%; left: 5%;" title="4 Hot Butter Phulkas">🫓</div>
                    </div>
                    
                    <div data-aos="fade-left" data-aos-delay="200" class="thali-menu-details" style="flex: 1; min-width: 300px; max-width: 500px;">
                        <div style="background: var(--t-backdrop); backdrop-filter: blur(10px); border: 1px solid rgba(243,207,136,0.3); border-radius: 20px; padding: 2.5rem; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
                            <h3 style="color: var(--t-accent); font-size: 2rem; margin-top: 0; margin-bottom: 1.5rem; border-bottom: 1px solid var(--t-border); padding-bottom: 1rem; font-style: italic;">Premium Veg Menu</h3>
                            <ul style="list-style: none; padding: 0; margin: 0; font-size: 1.1rem; line-height: 2; color: var(--t-text);">
                                <li style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;"><span style="font-size: 1.5rem;">🫓</span> 4 Hot Butter Phulkas</li>
                                <li style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;"><span style="font-size: 1.5rem;">🥘</span> Paneer Butter Masala</li>
                                <li style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;"><span style="font-size: 1.5rem;">🥔</span> Aloo Gobi Dry</li>
                                <li style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;"><span style="font-size: 1.5rem;">🥣</span> Dal Tadka (Desi Ghee)</li>
                                <li style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;"><span style="font-size: 1.5rem;">🍚</span> Jeera Rice</li>
                                <li style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;"><span style="font-size: 1.5rem;">🥗</span> Fresh Green Salad & Pickle</li>
                                <li style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;"><span style="font-size: 1.5rem;">🍡</span> <strong style="color: var(--t-accent);">Sweet:</strong> 2 Gulab Jamuns</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                // Simulating Shimmer Loading on Thali
                setTimeout(() => {
                    const wrap = document.querySelector('.thali-container-wrapper');
                    if(wrap) {
                        wrap.classList.add('thali-loading');
                        setTimeout(() => wrap.classList.remove('thali-loading'), 1000);
                    }
                }, 500);
            </script>
        </section>

        <!-- CTA Section -->
        <section style="padding: 8rem 2rem; text-align: center; background: url('https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?w=1600&q=80') center/cover; position: relative;">
            <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(28,25,23,0.8) 0%, rgba(28,25,23,0.95) 100%);"></div>
            <div class="niche-wrap" data-aos="zoom-in" style="position: relative; z-index: 2; max-width: 800px; margin: 0 auto;">
                <h2 style="font-size: 3.5rem; color: var(--t-primary); margin-bottom: 1.5rem; font-style: italic;">Start Your Tiffin Service Today</h2>
                <p style="font-size: 1.25rem; color: var(--t-text-muted); margin-bottom: 3rem;">Serving Dharampeth, Sadar, Ramdaspeth, Seminary Hills, and nearby areas.</p>
                
                <button class="t-btn-gradient" onclick="setNicheView('catalog')" style="color: white; border: none; padding: 1.25rem 3.5rem; border-radius: 50px; font-weight: 800; font-size: 1.25rem; cursor: pointer; letter-spacing: 0.05em;">
                    View Plans & Subscribe
                </button>
            </div>
        </section>
        
        ${typeof OrbitexMobileNav !== 'undefined' ? OrbitexMobileNav.render([
            { icon: '🏠', label: 'Home', action: "setNicheView('overview')" },
            { icon: '🥘', label: 'Plans', action: "setNicheView('catalog')" },
            { icon: '⏸️', label: 'Pause', action: "typeof OrbitexToast !== 'undefined' ? OrbitexToast.show('WhatsApp us to pause!', 'info') : alert('WhatsApp us')" },
            { icon: '💬', label: 'WhatsApp', action: "alert('Opening WhatsApp...')" }
        ], '#e67e22') : ''}
    </div>
    `;
}

function generateTiffinCatalogHTML(niche) {
    const categories = [...new Set(niche.catalog.map(item => item.cat))];
    categories.unshift("Monthly Plans", "Weekly Plans", "Daily Tiffin", "Add-ons", "Special Diet"); // Extra ones requested
    
    const ownerBanner = isOwnerMode ? `
        <div style="background: var(--t-bg-card); padding: 1rem; border-bottom: 1px solid var(--t-border);">
            <div class="niche-wrap" style="max-width: 1280px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--t-text); font-weight: 700; font-size: 1rem;">
                    👑 OWNER DASHBOARD
                    <div style="width: 10px; height: 10px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 10px #22c55e; animation: tiffinGlow 2s infinite;"></div>
                </div>
            </div>
        </div>
    ` : '';

    return `
    <style>
        .theme-tiffin {
            --t-bg: #1c1917;
            --t-bg-card: #292524;
            --t-bg-card-hover: #44403c;
            --t-text: #fafaf9;
            --t-text-muted: #a8a29e;
            --t-primary: #f3cf88;
            --t-accent: #ea580c;
            --t-border: #44403c;
            --t-backdrop: rgba(28, 25, 23, 0.95);
        }
        
        .theme-tiffin.dark-slate {
            --t-bg: #152233;
            --t-bg-card: #203248;
            --t-bg-card-hover: #2a415c;
            --t-text: #ffffff;
            --t-text-muted: #94a3b8;
            --t-primary: #f3cf88;
            --t-accent: #e67e22;
            --t-border: #334155;
            --t-backdrop: rgba(21, 34, 51, 0.95);
        }

        @keyframes tiffinGlow { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.2); } }
        
        .t-cat-card { transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .t-cat-card:hover { 
            transform: translateY(-8px); 
            border-color: var(--t-primary); 
            box-shadow: 0 20px 40px rgba(234, 88, 12, 0.15), 0 0 20px rgba(243, 207, 136, 0.1); 
        }
        
        .t-btn-gradient { background: linear-gradient(135deg, var(--t-accent), #f97316); transition: all 0.3s; }
        .t-btn-gradient:hover { box-shadow: 0 5px 15px rgba(234, 88, 12, 0.4); transform: translateY(-2px); }
        
        .cal-day { width: 32px; height: 32px; border-radius: 8px; display: flex; justify-content: center; align-items: center; font-size: 0.75rem; font-weight: 700; }
        .cal-v { background: rgba(34, 197, 94, 0.1); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); }
        .cal-s { background: rgba(234, 88, 12, 0.1); color: var(--t-accent); border: 1px solid rgba(234, 88, 12, 0.3); }

        /* Sidebar Drawer */
        .category-sidebar {
            position: fixed; top: 0; left: -300px; width: 300px; height: 100vh;
            background: var(--t-bg-card); z-index: 100; transition: left 0.3s ease;
            box-shadow: 10px 0 30px rgba(0,0,0,0.5); padding: 2rem; border-right: 1px solid var(--t-border);
        }
        .category-sidebar.open { left: 0; }
        .sidebar-overlay {
            position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(5px);
            z-index: 99; display: none;
        }
        .sidebar-overlay.open { display: block; }
        
        /* Diet filter badge */
        .diet-badge {
            background: var(--t-bg-card); border: 1px solid var(--t-border); color: var(--t-text-muted);
            padding: 0.25rem 0.75rem; border-radius: 50px; font-size: 0.8rem; cursor: pointer; transition: all 0.2s;
        }
        .diet-badge.active { background: rgba(234, 88, 12, 0.1); border-color: var(--t-accent); color: var(--t-accent); }
    </style>
    <div class="niche-page theme-tiffin" style="background-color: var(--t-bg); font-family: 'GalanoGrotesque', 'Inter', sans-serif; color: var(--t-text); min-height: 100vh;">
        ${ownerBanner}
        
        <!-- Sidebar -->
        <div class="sidebar-overlay" onclick="document.querySelector('.category-sidebar').classList.remove('open'); this.classList.remove('open');"></div>
        <div class="category-sidebar">
            <h3 style="color: var(--t-primary); margin-bottom: 2rem; font-size: 1.5rem;">Categories</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <button onclick="filterCatalogItems(document.querySelector('.all-btn'), 'all'); document.querySelector('.category-sidebar').classList.remove('open'); document.querySelector('.sidebar-overlay').classList.remove('open');" style="background: transparent; color: var(--t-text); border: none; text-align: left; font-size: 1.1rem; cursor: pointer;">All Plans</button>
                ${[...new Set(categories)].map(cat => `
                    <button onclick="filterCatalogItems(document.querySelector('.all-btn'), '${cat}'); document.querySelector('.category-sidebar').classList.remove('open'); document.querySelector('.sidebar-overlay').classList.remove('open');" style="background: transparent; color: var(--t-text-muted); border: none; text-align: left; font-size: 1.1rem; cursor: pointer;" onmouseover="this.style.color='var(--t-primary)'" onmouseout="this.style.color='var(--t-text-muted)'">${cat}</button>
                `).join('')}
            </div>
        </div>

        <!-- Header -->
        <header class="niche-header" style="position: sticky; top: 0; z-index: 50; background: var(--t-backdrop); backdrop-filter: blur(10px); border-bottom: 1px solid var(--t-border); padding: 1rem 0;">
            <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center; max-width: 1280px; margin: 0 auto; padding: 0 2rem;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <button onclick="document.querySelector('.category-sidebar').classList.add('open'); document.querySelector('.sidebar-overlay').classList.add('open');" style="background: transparent; border: none; font-size: 1.5rem; color: var(--t-text); cursor: pointer;">☰</button>
                    <div class="niche-brand" style="display: flex; align-items: center; gap: 1rem; cursor: pointer;" onclick="setNicheView('overview')">
                        <div style="background: rgba(234, 88, 12, 0.1); border-radius: 50%; padding: 0.25rem;">
                            ${niche.logoSvg}
                        </div>
                        <h2 style="font-weight: 700; color: var(--t-primary); margin: 0; font-size: 1.5rem; letter-spacing: 0.05em;">Bangre Tiffin</h2>
                    </div>
                </div>
                <div style="display: flex; gap: 1rem;">
                    <button onclick="document.querySelector('.theme-tiffin').classList.toggle('dark-slate');" style="background: transparent; border: none; font-size: 1.2rem; cursor: pointer; color: var(--t-text);">🌓</button>
                    <button onclick="typeof OrbitexSearch !== 'undefined' && OrbitexSearch.open('tiffin')" style="background: transparent; border: none; font-size: 1.2rem; cursor: pointer; color: var(--t-text);">🔍</button>
                    <button onclick="setNicheView('overview')" style="background: transparent; color: var(--t-primary); border: 2px solid rgba(243,207,136,0.3); padding: 0.5rem 1.25rem; border-radius: 50px; font-weight: 600; cursor: pointer; transition: all 0.3s;">← Back</button>
                </div>
            </div>
        </header>

        <div class="niche-wrap" style="max-width: 1280px; margin: 3rem auto; padding: 0 2rem;">
            
            <div class="catalog-head" style="margin-bottom: 3rem; text-align: center;" data-aos="fade-down">
                <h1 style="font-size: 3.5rem; color: var(--t-primary); margin: 0 0 1rem 0; font-style: italic;">Choose Your Meal Plan</h1>
                
                <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 2rem;">
                    <span class="diet-badge" onclick="this.classList.toggle('active')">Jain</span>
                    <span class="diet-badge active" onclick="this.classList.toggle('active')">Vegan</span>
                    <span class="diet-badge" onclick="this.classList.toggle('active')">High-Protein</span>
                    <span class="diet-badge" onclick="this.classList.toggle('active')">Low-Carb</span>
                </div>

                <div class="catalog-filters" style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                    <button class="catalog-filter-btn all-btn" onclick="filterCatalogItems(this, 'all')" style="background: var(--t-accent); color: white; border: none; padding: 0.5rem 1.75rem; border-radius: 50px; font-weight: 700; cursor: pointer;">All Plans</button>
                    ${[...new Set(niche.catalog.map(i=>i.cat))].map(cat => `
                        <button class="catalog-filter-btn" onclick="filterCatalogItems(this, '${cat}')" style="background: var(--t-bg-card); color: var(--t-text-muted); border: 1px solid var(--t-border); padding: 0.5rem 1.75rem; border-radius: 50px; font-weight: 600; cursor: pointer;">${cat}</button>
                    `).join('')}
                </div>
            </div>

            <!-- Pause Subscription Card -->
            <div data-aos="fade-up" style="background: linear-gradient(90deg, rgba(234, 88, 12, 0.1), rgba(243, 207, 136, 0.1)); border: 1px solid var(--t-accent); border-radius: 16px; padding: 2rem; margin-bottom: 3rem; display: flex; align-items: center; justify-content: space-between;">
                <div>
                    <h3 style="color: var(--t-primary); margin: 0 0 0.5rem 0; font-size: 1.5rem;">Going out of town? ✈️</h3>
                    <p style="color: var(--t-text); margin: 0; font-size: 1rem;">Pause your active subscription on WhatsApp and resume when you're back. No lost days!</p>
                </div>
                <button onclick="if(typeof OrbitexToast !== 'undefined') OrbitexToast.show('Redirecting to WhatsApp...', 'info')" class="t-btn-gradient" style="border: none; padding: 0.75rem 2rem; border-radius: 50px; color: white; font-weight: 700; cursor: pointer;">Pause Now</button>
            </div>

            <div class="catalog-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 2.5rem;">
                ${niche.catalog.map((item, i) => {
                    const isMonthly = item.name.toLowerCase().includes('monthly');
                    const isWeekly = item.name.toLowerCase().includes('weekly');
                    const isVeg = item.isVeg !== false; 
                    
                    let dailyPrice = item.price;
                    if(isMonthly) dailyPrice = Math.round(item.price / 26);
                    if(isWeekly) dailyPrice = Math.round(item.price / 6);

                    return `
                    <div class="catalog-item-card t-cat-card" data-category="${item.cat}" data-aos="fade-up" data-aos-delay="${i*100}" style="background: var(--t-bg-card); border-radius: 20px; border: 2px solid var(--t-border); position: relative; display: flex; flex-direction: column; overflow: hidden;">
                        ${isMonthly ? '<div style="position: absolute; top: 10px; right: 10px; background: linear-gradient(90deg, var(--t-accent), #f97316); color: white; font-size: 0.75rem; font-weight: 800; padding: 0.35rem 1.2rem; border-radius: 50px; letter-spacing: 0.1em; box-shadow: 0 4px 10px rgba(234,88,12,0.4); z-index: 5;">MOST POPULAR</div>' : ''}
                        
                        <div style="height: 150px; overflow: hidden; position: relative;">
                            <img src="https://images.unsplash.com/photo-1626779875083-dcc85ab36d1b?w=800&q=80" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85);" />
                            <div style="position: absolute; inset: 0; background: linear-gradient(to top, var(--t-bg-card) 0%, transparent 100%);"></div>
                        </div>
                        
                        <div style="padding: 1.5rem 2rem 1.5rem; border-bottom: 1px dashed rgba(243,207,136,0.2);">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                                <h3 style="font-size: 1.8rem; color: var(--t-text); margin: 0; font-family: 'Georgia', serif;">${item.name}</h3>
                                <div style="border: 2px solid ${isVeg ? '#22c55e' : '#ef4444'}; padding: 3px; border-radius: 4px; width: 20px; height: 20px; display: flex; justify-content: center; align-items: center; background: white;">
                                    <div style="background: ${isVeg ? '#22c55e' : '#ef4444'}; width: 10px; height: 10px; border-radius: 50%;"></div>
                                </div>
                            </div>
                            
                            <!-- Duration Pills -->
                            <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
                                <span style="background: rgba(255,255,255,0.1); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; color: var(--t-text); cursor: pointer; border: 1px solid var(--t-border);">Daily</span>
                                <span style="background: rgba(255,255,255,0.1); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; color: var(--t-text); cursor: pointer; border: 1px solid var(--t-border);">Weekly</span>
                                <span style="background: var(--t-accent); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; color: white; cursor: pointer; border: 1px solid var(--t-accent);">Monthly</span>
                            </div>

                            <div style="color: var(--t-text-muted); font-size: 0.95rem; line-height: 1.6; min-height: 45px;">
                                ${item.desc}
                            </div>
                        </div>
                        
                        <div style="padding: 1.5rem 2rem; flex-grow: 1;">
                            <div style="font-size: 0.85rem; color: var(--t-accent); margin-bottom: 1rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">What's Included:</div>
                            <ul style="list-style: none; padding: 0; margin: 0 0 2rem 0; color: var(--t-text-muted); font-size: 0.95rem; line-height: 2;">
                                <li><span style="color: var(--t-primary); margin-right: 0.5rem; font-size: 1.2rem;">✓</span> 4 Roti / Phulka (Ghee)</li>
                                <li><span style="color: var(--t-primary); margin-right: 0.5rem; font-size: 1.2rem;">✓</span> 1 Dry Sabzi</li>
                                <li><span style="color: var(--t-primary); margin-right: 0.5rem; font-size: 1.2rem;">✓</span> 1 Gravy / Dal</li>
                                <li><span style="color: var(--t-primary); margin-right: 0.5rem; font-size: 1.2rem;">✓</span> Rice & Salad</li>
                                ${isMonthly ? '<li><span style="color: var(--t-accent); margin-right: 0.5rem; font-size: 1.2rem;">★</span> Sunday Special Sweet</li>' : ''}
                            </ul>
                        </div>

                        <div style="padding: 1.5rem 2rem 2rem; background: rgba(0,0,0,0.2); border-radius: 0 0 18px 18px; text-align: center; margin-top: auto; border-top: 1px solid rgba(0,0,0,0.3);">
                            <div style="display: flex; justify-content: center; align-items: baseline; gap: 0.25rem; margin-bottom: 0.25rem;">
                                <span style="font-size: 2.5rem; font-weight: 800; color: var(--t-primary);">${formatPrice(item.price)}</span>
                                <span style="color: var(--t-text-muted); font-size: 1rem; font-weight: 600;">${isMonthly ? '/mo' : (isWeekly ? '/wk' : '/meal')}</span>
                            </div>
                            
                            ${(isMonthly || isWeekly) ? `
                            <div style="font-size: 0.85rem; color: #22c55e; margin-bottom: 1.5rem; font-weight: 600;">
                                Breaks down to just ₹${dailyPrice}/day
                            </div>
                            ` : '<div style="height: 1.5rem; margin-bottom: 1.5rem;"></div>'}
                            
                            <button onclick="openItemOrderModal('${niche.id}', '${item.name}', ${item.price})" class="t-btn-gradient" style="width: 100%; color: white; border: none; padding: 1rem; border-radius: 8px; font-weight: 700; font-size: 1.1rem; cursor: pointer; letter-spacing: 0.05em;">
                                Select Plan
                            </button>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
            
        </div>
        ${typeof OrbitexMobileNav !== 'undefined' ? OrbitexMobileNav.render([
            { icon: '🏠', label: 'Home', action: "setNicheView('overview')" },
            { icon: '🥘', label: 'Plans', action: "setNicheView('catalog')" },
            { icon: '⏸️', label: 'Pause', action: "typeof OrbitexToast !== 'undefined' ? OrbitexToast.show('WhatsApp us to pause!', 'info') : alert('WhatsApp us')" },
            { icon: '💬', label: 'WhatsApp', action: "alert('Opening WhatsApp...')" }
        ], '#e67e22') : ''}
    </div>
    `;
}
