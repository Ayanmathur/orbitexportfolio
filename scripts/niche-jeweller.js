function generateJewellerOverviewHTML(niche) {
    return `
        <div class="niche-page" style="background-color: #3b0811; color: #f5e6d3; font-family: 'Cinzel', serif; background-image: radial-gradient(#4a0a15 1px, transparent 1px); background-size: 20px 20px; overflow-x: hidden;">
            <style>
                @keyframes jewellerMarquee {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
                @keyframes goldShimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                @keyframes diamondSparkle {
                    0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
                    50% { opacity: 1; transform: scale(1.2) rotate(45deg); }
                }
                @keyframes goldPulse {
                    0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.4); }
                    70% { box-shadow: 0 0 0 10px rgba(212, 175, 55, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
                }
                .gold-shimmer-text {
                    background: linear-gradient(90deg, #d4af37 0%, #fff6d6 25%, #d4af37 50%, #fff6d6 75%, #d4af37 100%);
                    background-size: 200% auto;
                    color: transparent;
                    -webkit-background-clip: text;
                    background-clip: text;
                    animation: goldShimmer 4s linear infinite;
                }
                .sparkle {
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    background: white;
                    clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);
                    animation: diamondSparkle 2s ease-in-out infinite;
                }
                .trust-badge:hover {
                    box-shadow: 0 0 15px rgba(212, 175, 55, 0.6);
                    border-color: #f5e6d3 !important;
                    transform: translateY(-3px);
                }
                .collection-card {
                    position: relative;
                    height: 450px;
                    border: 1px solid rgba(212, 175, 55, 0.3);
                    overflow: hidden;
                    cursor: zoom-in;
                    background: #2a050c;
                    border-radius: 8px;
                }
                .collection-card img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    filter: brightness(0.85);
                }
                .collection-card:hover img {
                    transform: scale(1.1);
                    filter: brightness(1);
                }
                .nav-btn:hover {
                    background: #d4af37 !important;
                    color: #3b0811 !important;
                    box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
                }
                .gold-gradient-btn {
                    background: linear-gradient(135deg, #bf953f, #fcf6ba, #b38728, #fbf5b7);
                    color: #1a0307 !important;
                }
                .active-result {
                    background: linear-gradient(135deg, #d4af37, #b38728);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent !important;
                    text-shadow: 0px 4px 10px rgba(212, 175, 55, 0.4);
                    transform: scale(1.05);
                    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
            </style>

            <!-- Marquee Top Bar -->
            ${typeof generateMarqueeBanner === 'function' ? generateMarqueeBanner('✦ LIVE GOLD RATE: 24K - ₹72,450 / 10g ✦ 22K (916) - ₹66,500 / 10g ✦ SILVER: ₹91,000 / 1kg ✦ WE ACCEPT OLD GOLD EXCHANGE ✦', '#1a0307', '#d4af37') : `
            <div style="background: linear-gradient(90deg, #1a0307, #2a050c, #1a0307); padding: 8px 0; border-bottom: 1px solid #d4af37; overflow: hidden; white-space: nowrap;">
                <div class="gold-shimmer-text" style="display: inline-block; animation: jewellerMarquee 25s linear infinite; font-size: 0.9rem; letter-spacing: 2px; font-weight: bold;">
                    ✦ LIVE GOLD RATE: 24K - ₹72,450 / 10g ✦ 22K (916) - ₹66,500 / 10g ✦ SILVER: ₹91,000 / 1kg ✦ WE ACCEPT OLD GOLD EXCHANGE ✦
                </div>
            </div>`}

            <!-- Header -->
            <header class="niche-header" data-aos="fade-down" style="background: rgba(26, 3, 7, 0.95); border-bottom: 1px solid rgba(212, 175, 55, 0.3); position: sticky; top: 0; z-index: 100; backdrop-filter: blur(10px);">
                <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center; padding: 15px 20px;">
                    <div class="niche-brand" style="display: flex; align-items: center; gap: 15px;">
                        <div style="width: 50px; height: 50px; fill: #d4af37;">${niche.logoSvg}</div>
                        <div>
                            <h1 style="margin: 0; color: #d4af37; font-size: 1.6rem; letter-spacing: 3px; text-transform: uppercase;">${niche.name}</h1>
                            <p style="margin: 0; font-size: 0.75rem; color: #e5cc8a; font-family: 'Inter', sans-serif; letter-spacing: 2px; text-transform: uppercase;">${niche.tagline}</p>
                        </div>
                    </div>
                    <nav class="niche-nav-links" style="display: flex; gap: 15px; font-size: 0.9rem; letter-spacing: 1px; align-items: center;">
                        <a href="#" onclick="setNicheView('overview'); return false;" style="color: #1a0307; background: #d4af37; text-decoration: none; padding: 8px 20px; border-radius: 50px; font-weight: bold;">HOME</a>
                        <a href="#" onclick="setNicheView('catalog'); return false;" style="color: #f5e6d3; text-decoration: none; padding: 8px 20px; border-radius: 50px; border: 1px solid transparent; transition: all 0.3s;" onmouseover="this.style.borderColor='#d4af37'; this.style.color='#d4af37'" onmouseout="this.style.borderColor='transparent'; this.style.color='#f5e6d3'">COLLECTIONS</a>
                        <a href="#about" style="color: #f5e6d3; text-decoration: none; padding: 8px 20px; border-radius: 50px; border: 1px solid transparent; transition: all 0.3s;" onmouseover="this.style.borderColor='#d4af37'; this.style.color='#d4af37'" onmouseout="this.style.borderColor='transparent'; this.style.color='#f5e6d3'">HERITAGE</a>
                        <button onclick="if(typeof OrbitexSearch !== 'undefined') OrbitexSearch.open('jeweller')" style="background: transparent; border: none; color: #d4af37; cursor: pointer; padding: 8px; border-radius: 50%;"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button>
                        <button class="nav-btn" onclick="openActionModal('${niche.id}')" style="background: transparent; border: 1px solid #d4af37; color: #d4af37; padding: 8px 25px; border-radius: 50px; cursor: pointer; font-family: 'Cinzel', serif; transition: all 0.4s; letter-spacing: 1px; animation: goldPulse 3s infinite;">BOOK APPOINTMENT</button>
                    </nav>
                </div>
            </header>

            <!-- Hero Section -->
            <section data-aos="fade-in" style="padding: 120px 20px; text-align: center; position: relative; overflow: hidden; min-height: 80vh; display: flex; flex-direction: column; justify-content: center; background: #2a050c;">
                <!-- Velvet Pattern Overlay -->
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%233b0811\\' fill-opacity=\\'0.4\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'); z-index: 1;"></div>
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80'); background-size: cover; background-position: center; opacity: 0.35; z-index: 0; filter: contrast(120%) brightness(80%);"></div>
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(26,3,7,0.95) 0%, rgba(59,8,17,0.5) 50%, rgba(26,3,7,0.95) 100%); z-index: 1;"></div>
                
                <!-- Diamond Particles -->
                <div class="sparkle" style="top: 20%; left: 15%; animation-delay: 0s;"></div>
                <div class="sparkle" style="top: 30%; right: 20%; animation-delay: 0.7s; transform: scale(0.8);"></div>
                <div class="sparkle" style="bottom: 25%; left: 25%; animation-delay: 1.2s; transform: scale(1.5);"></div>
                <div class="sparkle" style="top: 15%; right: 40%; animation-delay: 0.4s; transform: scale(0.5);"></div>

                <div class="niche-wrap" style="position: relative; z-index: 2; max-width: 900px; margin: 0 auto;">
                    <div style="margin-bottom: 30px; display: inline-flex; align-items: center; gap: 10px; border: 1px solid rgba(212, 175, 55, 0.5); padding: 8px 20px; color: #d4af37; font-size: 0.85rem; letter-spacing: 4px; background: rgba(0,0,0,0.3); border-radius: 50px;" data-aos="fade-up">
                        <span style="width: 30px; height: 1px; background: #d4af37;"></span>
                        ESTD 1984
                        <span style="width: 30px; height: 1px; background: #d4af37;"></span>
                    </div>
                    <h2 class="gold-shimmer-text" data-aos="fade-up" data-aos-delay="100" style="font-size: 5rem; margin: 0 0 25px 0; text-shadow: 0 10px 30px rgba(0,0,0,0.8); line-height: 1.1; font-weight: 400;">Timeless Elegance,<br>Crafted for Generations</h2>
                    <p data-aos="fade-up" data-aos-delay="200" style="font-size: 1.2rem; color: #f5e6d3; margin-bottom: 50px; font-family: 'Inter', sans-serif; font-weight: 300; line-height: 1.8; max-width: 700px; margin-left: auto; margin-right: auto; text-shadow: 0 2px 4px rgba(0,0,0,0.8);">Discover our exquisite range of BIS 916 hallmarked jewelry, blending traditional karigari with contemporary masterpiece designs.</p>
                    <div style="display: flex; gap: 25px; justify-content: center;" data-aos="fade-up" data-aos-delay="300">
                        <button onclick="setNicheView('catalog')" class="gold-gradient-btn" style="border: none; padding: 18px 45px; font-family: 'Cinzel', serif; font-size: 1.1rem; cursor: pointer; letter-spacing: 2px; font-weight: bold; border-radius: 50px; transition: transform 0.3s, box-shadow 0.3s; box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 25px rgba(212, 175, 55, 0.6)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 5px 15px rgba(212, 175, 55, 0.4)'">VIEW COLLECTIONS</button>
                        <button onclick="openActionModal('${niche.id}')" style="background: rgba(26,3,7,0.6); border: 1px solid #d4af37; color: #d4af37; padding: 18px 45px; font-family: 'Cinzel', serif; font-size: 1.1rem; cursor: pointer; letter-spacing: 2px; border-radius: 50px; backdrop-filter: blur(5px); transition: all 0.3s;" onmouseover="this.style.background='rgba(212,175,55,0.1)'" onmouseout="this.style.background='rgba(26,3,7,0.6)'">VISIT STORE</button>
                    </div>
                </div>
                
                <!-- Decorative Bottom SVG Wave -->
                <div style="position: absolute; bottom: 0; left: 0; width: 100%; overflow: hidden; line-height: 0; z-index: 2;">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style="display: block; width: 100%; height: 40px; transform: rotate(180deg);">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="#1a0307"></path>
                    </svg>
                </div>
            </section>

            <!-- Trust Badges Strip -->
            <section data-aos="fade-up" style="background: #1a0307; padding: 40px 0; position: relative; border-bottom: 1px solid rgba(212,175,55,0.2);">
                <div class="niche-wrap" style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 20px; text-align: center;">
                    <div class="trust-badge" style="padding: 15px 25px; border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 50px; transition: all 0.4s; background: linear-gradient(to bottom, rgba(59,8,17,0.5), transparent); position: relative; overflow: hidden; min-width: 200px;">
                        <h4 style="margin: 0; color: #d4af37; font-size: 1.1rem; letter-spacing: 1px;">BIS 916 HALLMARKED ✓</h4>
                    </div>
                    <div class="trust-badge" style="padding: 15px 25px; border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 50px; transition: all 0.4s; background: linear-gradient(to bottom, rgba(59,8,17,0.5), transparent); position: relative; overflow: hidden; min-width: 200px;">
                        <h4 style="margin: 0; color: #d4af37; font-size: 1.1rem; letter-spacing: 1px;">CERTIFIED PURITY</h4>
                    </div>
                    <div class="trust-badge" style="padding: 15px 25px; border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 50px; transition: all 0.4s; background: linear-gradient(to bottom, rgba(59,8,17,0.5), transparent); position: relative; overflow: hidden; min-width: 200px;">
                        <h4 style="margin: 0; color: #d4af37; font-size: 1.1rem; letter-spacing: 1px;">LIFETIME EXCHANGE</h4>
                    </div>
                    <div class="trust-badge" style="padding: 15px 25px; border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 50px; transition: all 0.4s; background: linear-gradient(to bottom, rgba(59,8,17,0.5), transparent); position: relative; overflow: hidden; min-width: 200px;">
                        <h4 style="margin: 0; color: #d4af37; font-size: 1.1rem; letter-spacing: 1px;">FREE INSURANCE</h4>
                    </div>
                </div>
            </section>

            <!-- About / Story -->
            <section id="about" data-aos="fade-up" style="padding: 100px 20px; position: relative;">
                <!-- Decorative BG pattern -->
                <div style="position: absolute; right: 0; top: 0; width: 400px; height: 100%; background: radial-gradient(circle at 100% 50%, rgba(212,175,55,0.05) 0%, transparent 50%); z-index: 0;"></div>
                
                <div class="niche-wrap" style="display: flex; flex-wrap: wrap; gap: 60px; align-items: center; position: relative; z-index: 1;">
                    <div style="flex: 1.2; min-width: 300px;" data-aos="fade-right">
                        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                            <span style="height: 1px; width: 50px; background: #d4af37;"></span>
                            <span style="color: #d4af37; letter-spacing: 3px; font-size: 0.9rem;">OUR STORY</span>
                        </div>
                        <h3 style="color: #f5e6d3; font-size: 3rem; margin-top: 0; margin-bottom: 30px; line-height: 1.2;">A Legacy of <span class="gold-shimmer-text">Purity & Trust</span></h3>
                        <p style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #e5cc8a; margin-bottom: 25px; font-weight: 300; font-size: 1.1rem;">
                            Welcome to <strong>Heritage Jewellers</strong>, a trusted name in Zaveri Bazar since 1984. For three generations, our master karigars (artisans) have been handcrafting masterpieces that celebrate India's rich cultural legacy. 
                        </p>
                        <p style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #e5cc8a; font-weight: 300; font-size: 1.1rem; border-left: 3px solid #d4af37; padding-left: 20px; background: linear-gradient(90deg, rgba(212,175,55,0.05), transparent);">
                            We believe that jewelry is more than just an ornament; it's an heirloom passed down through generations. That's why every piece in our showroom is 100% BIS 916 Hallmarked and features the unique HUID stamp, ensuring absolute purity and transparency. From intricate temple jewelry to bespoke bridal sets, we craft memories in gold.
                        </p>
                    </div>
                    <div style="flex: 1; min-width: 300px; position: relative;" data-aos="zoom-in">
                        <!-- Golden Frame -->
                        <div style="position: absolute; top: -15px; left: -15px; right: 15px; bottom: 15px; border: 1px solid #d4af37; z-index: 0; border-radius: 8px;"></div>
                        <div style="position: absolute; top: 15px; left: 15px; right: -15px; bottom: -15px; background: rgba(212,175,55,0.1); z-index: 0; border-radius: 8px;"></div>
                        
                        <div style="position: relative; z-index: 1; border: 1px solid rgba(212, 175, 55, 0.5); padding: 5px; background: #1a0307; border-radius: 8px; overflow: hidden;">
                            <img src="https://images.unsplash.com/photo-1599643478514-4a4e09b50708?w=800&q=80" style="width: 100%; height: auto; display: block; border-radius: 4px;" alt="Jewellery Crafting">
                        </div>
                        <div style="position: absolute; bottom: -30px; left: -30px; background: #1a0307; border: 1px solid #d4af37; padding: 25px; text-align: center; z-index: 2; box-shadow: 0 10px 20px rgba(0,0,0,0.5); border-radius: 8px;">
                            <div class="gold-shimmer-text" style="font-size: 3.5rem; line-height: 1; margin-bottom: 5px;">40+</div>
                            <div style="font-size: 0.9rem; letter-spacing: 2px; color: #f5e6d3;">YEARS OF TRUST</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Collections Preview (2x2 Grid) -->
            <section data-aos="fade-up" style="padding: 100px 20px; background: #1a0307; position: relative; border-top: 1px solid rgba(212,175,55,0.2);">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.05; background-image: radial-gradient(#d4af37 1px, transparent 1px); background-size: 30px 30px;"></div>
                
                <div class="niche-wrap" style="position: relative; z-index: 1;">
                    <div style="text-align: center; margin-bottom: 80px;" data-aos="fade-up">
                        <h3 class="gold-shimmer-text" style="font-size: 3rem; margin: 0;">Featured Collections</h3>
                        <div style="display: flex; align-items: center; justify-content: center; gap: 15px; margin-top: 20px;">
                            <span style="height: 1px; width: 80px; background: linear-gradient(90deg, transparent, #d4af37);"></span>
                            <span style="color: #d4af37; font-size: 1.5rem;">✦</span>
                            <span style="height: 1px; width: 80px; background: linear-gradient(-90deg, transparent, #d4af37);"></span>
                        </div>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; padding: 20px 0;">
                        <!-- Card 1 -->
                        <div class="collection-card" data-aos="zoom-in" data-aos-delay="0" onclick="setNicheView('catalog')">
                            <img src="https://images.unsplash.com/photo-1599643478514-4a4e09b50708?w=800&q=80" alt="Kundan Collection">
                            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to top, rgba(26,3,7,0.9) 0%, rgba(26,3,7,0.1) 100%); z-index: 1; pointer-events: none;"></div>
                            <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 40px 30px; z-index: 2; pointer-events: none;">
                                <h4 style="margin: 0 0 10px 0; color: #d4af37; font-size: 2.2rem; letter-spacing: 1px;">Kundan</h4>
                                <span style="font-family: 'Inter', sans-serif; font-size: 1rem; color: #e5cc8a; letter-spacing: 1px; text-transform: uppercase;">Royal Heritage • 120+ Designs</span>
                            </div>
                        </div>
                        <!-- Card 2 -->
                        <div class="collection-card" data-aos="zoom-in" data-aos-delay="100" onclick="setNicheView('catalog')">
                            <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80" alt="Polki Collection">
                            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to top, rgba(26,3,7,0.9) 0%, rgba(26,3,7,0.1) 100%); z-index: 1; pointer-events: none;"></div>
                            <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 40px 30px; z-index: 2; pointer-events: none;">
                                <h4 style="margin: 0 0 10px 0; color: #d4af37; font-size: 2.2rem; letter-spacing: 1px;">Polki</h4>
                                <span style="font-family: 'Inter', sans-serif; font-size: 1rem; color: #e5cc8a; letter-spacing: 1px; text-transform: uppercase;">Uncut Diamonds • 85+ Designs</span>
                            </div>
                        </div>
                        <!-- Card 3 -->
                        <div class="collection-card" data-aos="zoom-in" data-aos-delay="200" onclick="setNicheView('catalog')">
                            <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80" alt="Temple Collection">
                            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to top, rgba(26,3,7,0.9) 0%, rgba(26,3,7,0.1) 100%); z-index: 1; pointer-events: none;"></div>
                            <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 40px 30px; z-index: 2; pointer-events: none;">
                                <h4 style="margin: 0 0 10px 0; color: #d4af37; font-size: 2.2rem; letter-spacing: 1px;">Temple</h4>
                                <span style="font-family: 'Inter', sans-serif; font-size: 1rem; color: #e5cc8a; letter-spacing: 1px; text-transform: uppercase;">Divine Craftsmanship • 200+ Designs</span>
                            </div>
                        </div>
                        <!-- Card 4 -->
                        <div class="collection-card" data-aos="zoom-in" data-aos-delay="300" onclick="setNicheView('catalog')">
                            <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80" alt="Antique Collection">
                            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to top, rgba(26,3,7,0.9) 0%, rgba(26,3,7,0.1) 100%); z-index: 1; pointer-events: none;"></div>
                            <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 40px 30px; z-index: 2; pointer-events: none;">
                                <h4 style="margin: 0 0 10px 0; color: #d4af37; font-size: 2.2rem; letter-spacing: 1px;">Antique</h4>
                                <span style="font-family: 'Inter', sans-serif; font-size: 1rem; color: #e5cc8a; letter-spacing: 1px; text-transform: uppercase;">Vintage Gold • 150+ Designs</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Mobile responsive grid fix -->
                <style>
                    @media (max-width: 768px) {
                        div[style*="grid-template-columns: repeat(2, 1fr)"] { grid-template-columns: 1fr !important; }
                        .collection-card { height: 350px; }
                    }
                </style>
            </section>

            <!-- Gold Rate Calculator Widget -->
            <section data-aos="fade-up" style="padding: 100px 20px; background: url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80') center/cover fixed; position: relative;">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(26, 3, 7, 0.9); backdrop-filter: blur(5px);"></div>
                
                <div class="niche-wrap" style="position: relative; z-index: 2; max-width: 700px; margin: 0 auto; background: linear-gradient(145deg, #2a050c, #1a0307); border: 1px solid #d4af37; padding: 50px; text-align: center; box-shadow: 0 20px 50px rgba(0,0,0,0.6); position: relative; overflow: hidden; border-radius: 12px;">
                    <!-- Decorative Corners -->
                    <div style="position: absolute; top: 10px; left: 10px; width: 30px; height: 30px; border-top: 2px solid #d4af37; border-left: 2px solid #d4af37; border-top-left-radius: 8px;"></div>
                    <div style="position: absolute; top: 10px; right: 10px; width: 30px; height: 30px; border-top: 2px solid #d4af37; border-right: 2px solid #d4af37; border-top-right-radius: 8px;"></div>
                    <div style="position: absolute; bottom: 10px; left: 10px; width: 30px; height: 30px; border-bottom: 2px solid #d4af37; border-left: 2px solid #d4af37; border-bottom-left-radius: 8px;"></div>
                    <div style="position: absolute; bottom: 10px; right: 10px; width: 30px; height: 30px; border-bottom: 2px solid #d4af37; border-right: 2px solid #d4af37; border-bottom-right-radius: 8px;"></div>

                    <h3 class="gold-shimmer-text" style="font-size: 2.5rem; margin-top: 0; margin-bottom: 10px;">Gold Value Estimator</h3>
                    <p style="font-family: 'Inter', sans-serif; color: #e5cc8a; font-size: 1rem; margin-bottom: 40px; font-weight: 300;">Enter weight to calculate approx 22K value (excluding making charges & GST)</p>
                    
                    <div style="display: flex; gap: 15px; margin-bottom: 30px; flex-wrap: wrap; justify-content: center;">
                        <input type="number" id="goldWeight" placeholder="Weight in Grams (e.g. 10)" style="flex: 1; min-width: 250px; padding: 18px 25px; background: rgba(0,0,0,0.3); border: 1px solid rgba(212,175,55,0.5); color: #d4af37; font-family: 'Inter', sans-serif; font-size: 1.2rem; outline: none; transition: border 0.3s; border-radius: 50px;" onfocus="this.style.borderColor='#d4af37'" onblur="this.style.borderColor='rgba(212,175,55,0.5)'">
                        <button onclick="document.getElementById('goldResult').innerHTML = 'Estimated Value: <br><span style=\\'font-size: 2.5rem;\\'>₹' + (document.getElementById('goldWeight').value * 6650).toLocaleString('en-IN') + '</span>'; document.getElementById('goldResult').classList.add('active-result');" class="gold-gradient-btn" style="border: none; padding: 0 40px; height: 60px; font-family: 'Cinzel', serif; font-weight: bold; font-size: 1.1rem; cursor: pointer; letter-spacing: 1px; transition: filter 0.3s; border-radius: 50px;" onmouseover="this.style.filter='brightness(1.1)'" onmouseout="this.style.filter='brightness(1)'">CALCULATE</button>
                    </div>
                    
                    <div id="goldResult" style="font-size: 1.2rem; color: #d4af37; min-height: 80px; display: flex; flex-direction: column; justify-content: center; animation: goldPulse 2s infinite; border-radius: 12px; padding: 10px; transition: all 0.3s;">
                        Enter weight to see value
                    </div>
                </div>
            </section>

            <!-- Testimonials -->
            <section data-aos="fade-up" style="padding: 100px 20px; background: #3b0811;">
                <div class="niche-wrap">
                    <div style="text-align: center; margin-bottom: 60px;">
                        <span style="color: #d4af37; letter-spacing: 3px; font-size: 0.9rem; text-transform: uppercase;">Testimonials</span>
                        <h3 class="gold-shimmer-text" style="font-size: 3rem; margin-top: 10px; margin-bottom: 20px;">Words of Trust</h3>
                        <div style="width: 60px; height: 2px; background: #d4af37; margin: 0 auto;"></div>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px;">
                        <!-- Review 1 -->
                        <div data-aos="zoom-in" data-aos-delay="0" style="background: linear-gradient(145deg, #2a050c, #1a0307); padding: 40px; border: 1px solid rgba(212, 175, 55, 0.3); position: relative; transition: transform 0.3s; border-radius: 12px;" onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='#d4af37'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(212, 175, 55, 0.3)'">
                            <div style="position: absolute; top: 20px; right: 20px; color: rgba(212, 175, 55, 0.2); font-size: 4rem; font-family: serif; line-height: 1;">"</div>
                            <div style="display: flex; gap: 5px; color: #d4af37; margin-bottom: 20px; font-size: 1.2rem;">★★★★★</div>
                            <p style="font-family: 'Inter', sans-serif; color: #e5cc8a; font-style: italic; line-height: 1.8; margin-bottom: 30px; position: relative; z-index: 1;">"Purchased my entire bridal set from Mahalaxmi Heritage. The designs are stunning and the transparency regarding making charges and weight was very reassuring."</p>
                            <div style="display: flex; align-items: center; gap: 15px; border-top: 1px dashed rgba(212,175,55,0.3); padding-top: 20px;">
                                <div style="width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, #d4af37, #b38728); color: #3b0811; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.2rem; border: 2px solid #f5e6d3;">S</div>
                                <div>
                                    <div style="color: #d4af37; font-size: 1.1rem; letter-spacing: 1px;">Sneha Sharma</div>
                                    <div style="font-family: 'Inter', sans-serif; font-size: 0.85rem; color: rgba(229, 204, 138, 0.7);">📍 Nagpur, Maharashtra</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Review 2 -->
                        <div data-aos="zoom-in" data-aos-delay="100" style="background: linear-gradient(145deg, #2a050c, #1a0307); padding: 40px; border: 1px solid rgba(212, 175, 55, 0.3); position: relative; transition: transform 0.3s; border-radius: 12px;" onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='#d4af37'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(212, 175, 55, 0.3)'">
                            <div style="position: absolute; top: 20px; right: 20px; color: rgba(212, 175, 55, 0.2); font-size: 4rem; font-family: serif; line-height: 1;">"</div>
                            <div style="display: flex; gap: 5px; color: #d4af37; margin-bottom: 20px; font-size: 1.2rem;">★★★★★</div>
                            <p style="font-family: 'Inter', sans-serif; color: #e5cc8a; font-style: italic; line-height: 1.8; margin-bottom: 30px; position: relative; z-index: 1;">"Their temple jewelry collection is unmatched. I exchanged old gold and got a fair valuation. Highly recommend them for their honest practices."</p>
                            <div style="display: flex; align-items: center; gap: 15px; border-top: 1px dashed rgba(212,175,55,0.3); padding-top: 20px;">
                                <div style="width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, #d4af37, #b38728); color: #3b0811; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.2rem; border: 2px solid #f5e6d3;">R</div>
                                <div>
                                    <div style="color: #d4af37; font-size: 1.1rem; letter-spacing: 1px;">Ritu Deshmukh</div>
                                    <div style="font-family: 'Inter', sans-serif; font-size: 0.85rem; color: rgba(229, 204, 138, 0.7);">📍 Amravati, Maharashtra</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Review 3 -->
                        <div data-aos="zoom-in" data-aos-delay="200" style="background: linear-gradient(145deg, #2a050c, #1a0307); padding: 40px; border: 1px solid rgba(212, 175, 55, 0.3); position: relative; transition: transform 0.3s; border-radius: 12px;" onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='#d4af37'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(212, 175, 55, 0.3)'">
                            <div style="position: absolute; top: 20px; right: 20px; color: rgba(212, 175, 55, 0.2); font-size: 4rem; font-family: serif; line-height: 1;">"</div>
                            <div style="display: flex; gap: 5px; color: #d4af37; margin-bottom: 20px; font-size: 1.2rem;">★★★★★</div>
                            <p style="font-family: 'Inter', sans-serif; color: #e5cc8a; font-style: italic; line-height: 1.8; margin-bottom: 30px; position: relative; z-index: 1;">"Bought a diamond necklace for my wife's 25th anniversary. The IGI certification provided great peace of mind. Excellent staff and service."</p>
                            <div style="display: flex; align-items: center; gap: 15px; border-top: 1px dashed rgba(212,175,55,0.3); padding-top: 20px;">
                                <div style="width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, #d4af37, #b38728); color: #3b0811; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.2rem; border: 2px solid #f5e6d3;">M</div>
                                <div>
                                    <div style="color: #d4af37; font-size: 1.1rem; letter-spacing: 1px;">Milind Kulkarni</div>
                                    <div style="font-family: 'Inter', sans-serif; font-size: 0.85rem; color: rgba(229, 204, 138, 0.7);">📍 Nagpur, Maharashtra</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Footer -->
            <footer style="background: #1a0307; padding: 80px 20px 40px; border-top: 1px solid #d4af37; position: relative; overflow: hidden;">
                <!-- Decorative BG pattern -->
                <div style="position: absolute; left: 0; bottom: 0; width: 300px; height: 300px; background: radial-gradient(circle at 0% 100%, rgba(212,175,55,0.1) 0%, transparent 70%); z-index: 0;"></div>
                
                <div class="niche-wrap" style="display: flex; flex-wrap: wrap; gap: 50px; justify-content: space-between; position: relative; z-index: 1;">
                    <div style="flex: 1; min-width: 280px;">
                        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 25px;">
                            <div style="width: 40px; height: 40px; fill: #d4af37;">${niche.logoSvg}</div>
                            <h4 style="color: #d4af37; font-size: 1.8rem; margin: 0; letter-spacing: 2px;">${niche.name}</h4>
                        </div>
                        <h5 style="color: #f5e6d3; font-size: 1.2rem; margin-top: 0; margin-bottom: 15px; letter-spacing: 1px;">Visit Our Showroom</h5>
                        <p style="font-family: 'Inter', sans-serif; color: #e5cc8a; line-height: 1.8; font-weight: 300; font-size: 1rem;">
                            Mahalaxmi Heritage Jewellers<br>
                            Shop No. 45, Zaveri Bazar Line,<br>
                            Sadar, Nagpur - 440001
                        </p>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px;">
                        <h5 style="color: #f5e6d3; font-size: 1.2rem; margin-top: 10px; margin-bottom: 20px; letter-spacing: 1px;">Contact Information</h5>
                        <ul style="list-style: none; padding: 0; margin: 0; font-family: 'Inter', sans-serif; color: #e5cc8a; line-height: 2.2; font-weight: 300;">
                            <li><strong style="color:#d4af37;">WhatsApp/Call:</strong> +91 98765 43210</li>
                            <li><strong style="color:#d4af37;">Email:</strong> contact@mahalaxmiheritage.com</li>
                            <li><strong style="color:#d4af37;">Store Timings:</strong> 10:30 AM to 8:30 PM</li>
                            <li><strong style="color:#d4af37;">Weekly Off:</strong> Sunday Closed</li>
                        </ul>
                    </div>
                    
                    <div style="flex: 1; min-width: 280px; text-align: right; display: flex; flex-direction: column; justify-content: center; gap: 15px;">
                        <button onclick="openActionModal('${niche.id}')" class="gold-gradient-btn" style="border: none; padding: 18px 30px; font-family: 'Cinzel', serif; font-size: 1.1rem; cursor: pointer; font-weight: bold; width: 100%; border-radius: 50px; transition: transform 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 5px 15px rgba(212,175,55,0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">BOOK VIDEO CONSULTATION</button>
                        <button onclick="setNicheView('catalog')" style="background: rgba(26,3,7,0.5); border: 1px solid #d4af37; color: #d4af37; padding: 18px 30px; font-family: 'Cinzel', serif; font-size: 1.1rem; cursor: pointer; width: 100%; border-radius: 50px; transition: background 0.3s;" onmouseover="this.style.background='rgba(212,175,55,0.1)'" onmouseout="this.style.background='rgba(26,3,7,0.5)'">EXPLORE CATALOG</button>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 60px; padding-top: 20px; border-top: 1px solid rgba(212,175,55,0.2); font-family: 'Inter', sans-serif; color: rgba(229, 204, 138, 0.5); font-size: 0.8rem;">
                    © 2026 Mahalaxmi Heritage Jewellers. All Rights Reserved.
                </div>
            </footer>
            
            <script>
                if (typeof OrbitexMobileNav !== 'undefined') {
                    OrbitexMobileNav.show({
                        accent: '#d4af37',
                        tabs: [
                            { icon: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg>', label: 'Home', action: () => setNicheView('overview') },
                            { icon: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>', label: 'Collections', action: () => setNicheView('catalog') },
                            { icon: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>', label: 'Search', action: () => { if(typeof OrbitexSearch !== 'undefined') OrbitexSearch.open('jeweller'); } },
                            { icon: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78v0z"></path></svg>', label: 'Wishlist', action: () => { if(typeof OrbitexToast !== 'undefined') OrbitexToast.show('Wishlist opened'); } },
                            { icon: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.29 2.83c-.1.13-.22.25-.37.35A2 2 0 006 20h14M10 20a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>', label: 'Cart', action: () => { if(typeof OrbitexToast !== 'undefined') OrbitexToast.show('Cart opened'); } }
                        ]
                    });
                }
                if (typeof OrbitexAOS !== 'undefined') OrbitexAOS.init();
            </script>
        </div>
    `;
}

function generateJewellerCatalogHTML(niche) {
    let categories = [...new Set(niche.catalog.map(item => item.cat))];
    
    let catalogHTML = `
        <div class="niche-page" style="background-color: #2a050c; color: #f5e6d3; font-family: 'Cinzel', serif; min-height: 100vh; background-image: radial-gradient(#3b0811 1px, transparent 1px); background-size: 20px 20px;">
            <style>
                @keyframes goldShimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                .gold-shimmer-text {
                    background: linear-gradient(90deg, #d4af37 0%, #fff6d6 25%, #d4af37 50%, #fff6d6 75%, #d4af37 100%);
                    background-size: 200% auto;
                    color: transparent;
                    -webkit-background-clip: text;
                    background-clip: text;
                    animation: goldShimmer 4s linear infinite;
                }
                .catalog-filter-btn {
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s;
                }
                .catalog-filter-btn:hover, .catalog-filter-btn.active {
                    background: #d4af37 !important;
                    color: #1a0307 !important;
                }
                .jewel-item-card {
                    position: relative;
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
                }
                .jewel-item-card::before {
                    content: '';
                    position: absolute;
                    top: -2px; left: -2px; right: -2px; bottom: -2px;
                    background: linear-gradient(45deg, #d4af37, transparent, #d4af37);
                    z-index: -1;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    border-radius: 14px;
                }
                .jewel-item-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.6);
                }
                .jewel-item-card:hover::before {
                    opacity: 1;
                }
                .jewel-item-card:hover .card-sparkle {
                    opacity: 1;
                    animation: sparklePulse 1.5s infinite;
                }
                @keyframes sparklePulse {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.5); opacity: 1; }
                }
                .jewel-img-placeholder {
                    transition: transform 0.8s ease;
                }
                .jewel-item-card:hover .jewel-img-placeholder {
                    transform: scale(1.1);
                }
                .gold-gradient-btn {
                    background: linear-gradient(135deg, #bf953f, #fcf6ba, #b38728, #fbf5b7);
                    color: #1a0307 !important;
                }
            </style>

            <!-- Header -->
            <header class="niche-header" data-aos="fade-down" style="background: rgba(26,3,7,0.95); border-bottom: 1px solid rgba(212,175,55,0.3); position: sticky; top: 0; z-index: 100; backdrop-filter: blur(10px);">
                <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center; padding: 15px 20px;">
                    <div class="niche-brand" style="display: flex; align-items: center; gap: 15px; cursor: pointer;" onclick="setNicheView('overview')">
                        <div style="width: 45px; height: 45px; fill: #d4af37;">${niche.logoSvg}</div>
                        <h1 style="margin: 0; color: #d4af37; font-size: 1.4rem; letter-spacing: 2px; text-transform: uppercase;">${niche.name}</h1>
                    </div>
                    <div style="display: flex; align-items: center; gap: 25px;">
                        <div style="color: #d4af37; font-size: 0.85rem; font-family: 'Inter', sans-serif; border: 1px solid rgba(212,175,55,0.5); padding: 8px 15px; background: rgba(0,0,0,0.3); letter-spacing: 1px; border-radius: 50px;">
                            Today's Rate: <strong style="color: #fff6d6;">₹72,450 / 10g (24K)</strong>
                        </div>
                        <button onclick="if(typeof OrbitexSearch !== 'undefined') OrbitexSearch.open('jeweller')" style="background: transparent; border: none; color: #d4af37; cursor: pointer; padding: 8px; border-radius: 50%;"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button>
                        <button onclick="setNicheView('overview')" style="background: transparent; border: none; color: #f5e6d3; font-family: 'Cinzel', serif; cursor: pointer; font-size: 1rem; transition: color 0.3s; display: flex; align-items: center; gap: 8px;" onmouseover="this.style.color='#d4af37'" onmouseout="this.style.color='#f5e6d3'">
                            <span style="font-size: 1.2rem;">←</span> Back
                        </button>
                    </div>
                </div>
            </header>

            <main class="niche-wrap" style="padding: 60px 20px 100px;">
                <div style="text-align: center; margin-bottom: 50px;" data-aos="fade-up">
                    <h2 class="gold-shimmer-text" style="font-size: 3.5rem; margin: 0 0 15px 0; font-weight: 400;">Our Heritage Collection</h2>
                    <p style="font-family: 'Inter', sans-serif; color: #e5cc8a; font-size: 1.1rem; font-weight: 300;">Exquisite handcrafted masterpieces for every occasion.</p>
                </div>

                <!-- Filters -->
                <div data-aos="fade-up" style="margin-bottom: 40px; border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 30px;">
                    <!-- Multi-attribute mock UI -->
                    <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 20px; flex-wrap: wrap;">
                        <select style="background: rgba(26,3,7,0.8); border: 1px solid #d4af37; color: #d4af37; padding: 10px 20px; border-radius: 50px; font-family: 'Inter', sans-serif; outline: none; cursor: pointer; text-align: center; min-width: 150px;">
                            <option value="">Metal: All</option>
                            <option value="22k">Gold 22K</option>
                            <option value="18k">Gold 18K</option>
                            <option value="silver">Silver</option>
                        </select>
                        <select style="background: rgba(26,3,7,0.8); border: 1px solid #d4af37; color: #d4af37; padding: 10px 20px; border-radius: 50px; font-family: 'Inter', sans-serif; outline: none; cursor: pointer; text-align: center; min-width: 150px;">
                            <option value="">Stone: All</option>
                            <option value="diamond">Diamond</option>
                            <option value="ruby">Ruby</option>
                            <option value="emerald">Emerald</option>
                            <option value="pearl">Pearl</option>
                        </select>
                    </div>
                    
                    <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                        <button onclick="filterCatalogItems(this, 'all')" class="catalog-filter-btn active" style="background: transparent; color: #d4af37; border: 1px solid #d4af37; padding: 8px 20px; border-radius: 50px; font-family: 'Cinzel', serif; font-size: 1rem; cursor: pointer; letter-spacing: 1px;">All Designs</button>
                        ${categories.map(cat => `
                            <button onclick="filterCatalogItems(this, '${cat}')" class="catalog-filter-btn" style="background: transparent; color: #d4af37; border: 1px solid #d4af37; padding: 8px 20px; border-radius: 50px; font-family: 'Cinzel', serif; font-size: 1rem; cursor: pointer; letter-spacing: 1px;">${cat}</button>
                        `).join('')}
                    </div>
                </div>

                <!-- Product Gallery -->
                <div class="catalog-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 40px;">
                    ${niche.catalog.map(item => `
                        <div class="catalog-item-card jewel-item-card" data-category="${item.cat}" data-aos="fade-up" style="background: linear-gradient(to bottom, #1a0307, #2a050c); padding: 25px; display: flex; flex-direction: column; border: 1px solid rgba(212,175,55,0.3); border-radius: 12px; overflow: hidden; position: relative;">
                            
                            <!-- Wishlist Heart -->
                            <button onclick="if(typeof OrbitexToast !== 'undefined') OrbitexToast.show('Added to Wishlist')" style="position: absolute; top: 35px; right: 35px; z-index: 10; background: rgba(26,3,7,0.6); border: 1px solid #d4af37; color: #d4af37; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; backdrop-filter: blur(4px); transition: all 0.3s;" onmouseover="this.style.background='#d4af37'; this.style.color='#1a0307'"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></button>
                            
                            <!-- Sparkles -->
                            <div class="card-sparkle" style="position: absolute; top: 20%; left: 15%; width: 4px; height: 4px; background: white; border-radius: 50%; opacity: 0; box-shadow: 0 0 10px 2px #d4af37; z-index: 5; pointer-events: none;"></div>
                            <div class="card-sparkle" style="position: absolute; top: 50%; right: 15%; width: 5px; height: 5px; background: white; border-radius: 50%; opacity: 0; box-shadow: 0 0 10px 2px #d4af37; z-index: 5; animation-delay: 0.5s; pointer-events: none;"></div>
                            
                            <div style="height: 250px; background: radial-gradient(circle, #3b0811, #1a0307); border: 1px solid rgba(212, 175, 55, 0.2); margin-bottom: 20px; overflow: hidden; position: relative; border-radius: 8px; cursor: zoom-in;">
                                <img src="${niche.heroImage}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.9) contrast(1.15);" class="jewel-img-placeholder" />
                                <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(26,3,7,0.7), transparent 60%); pointer-events: none;"></div>
                                
                                <!-- Weight & Purity Badge -->
                                <div style="position: absolute; bottom: 10px; left: 10px; background: rgba(26,3,7,0.85); border: 1px solid #d4af37; color: #d4af37; font-size: 0.75rem; font-family: 'Inter', sans-serif; padding: 4px 10px; border-radius: 50px; backdrop-filter: blur(4px); pointer-events: none;">
                                    22K • ${(Math.random() * 20 + 5).toFixed(1)}g • BIS ✓
                                </div>
                            </div>
                            
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                                <h3 style="margin: 0; color: #f5e6d3; font-size: 1.3rem; flex: 1; padding-right: 15px; letter-spacing: 1px;">${item.name}</h3>
                            </div>
                            <p style="font-family: 'Inter', sans-serif; color: #e5cc8a; font-size: 0.9rem; margin-top: 0; margin-bottom: 20px; flex-grow: 1; line-height: 1.5; font-weight: 300;">
                                ${item.desc}
                            </p>
                            
                            <!-- Price Breakdown -->
                            <div style="margin-bottom: 20px; background: rgba(212,175,55,0.05); padding: 12px; border: 1px solid rgba(212,175,55,0.15); border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; font-family: 'Inter', sans-serif; font-size: 0.8rem; color: rgba(229,204,138,0.8); margin-bottom: 5px;">
                                    <span>Gold Value:</span>
                                    <span>₹${(item.price * 0.85).toFixed(0)}</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-family: 'Inter', sans-serif; font-size: 0.8rem; color: rgba(229,204,138,0.8); margin-bottom: 8px;">
                                    <span>Making & GST:</span>
                                    <span>₹${(item.price * 0.15).toFixed(0)}</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed rgba(212,175,55,0.3); padding-top: 8px;">
                                    <span style="font-family: 'Inter', sans-serif; font-size: 0.9rem; color: #d4af37; font-weight: 600;">Total Price:</span>
                                    <span class="gold-shimmer-text" style="font-size: 1.4rem; font-weight: bold;">${formatPrice(item.price)}</span>
                                </div>
                            </div>
                            
                            <button onclick="openItemOrderModal('${niche.id}', '${item.name}', ${item.price})" class="gold-gradient-btn" style="width: 100%; border: none; padding: 12px 0; font-family: 'Cinzel', serif; font-weight: bold; font-size: 1rem; cursor: pointer; letter-spacing: 1px; border-radius: 50px; transition: transform 0.2s, filter 0.2s; box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);" onmouseover="this.style.transform='scale(1.02)'; this.style.filter='brightness(1.1)'" onmouseout="this.style.transform='scale(1)'; this.style.filter='brightness(1)'">BOOK APPOINTMENT</button>
                        </div>
                    `).join('')}
                </div>
            </main>
            
            <script>
                // Active state logic for catalog filters
                document.querySelectorAll('.catalog-filter-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        document.querySelectorAll('.catalog-filter-btn').forEach(b => {
                            b.classList.remove('active');
                            b.style.background = 'transparent';
                            b.style.color = '#d4af37';
                        });
                        this.classList.add('active');
                        this.style.background = '#d4af37';
                        this.style.color = '#1a0307';
                    });
                });
                
                if (typeof OrbitexMobileNav !== 'undefined') {
                    OrbitexMobileNav.show({
                        accent: '#d4af37',
                        tabs: [
                            { icon: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg>', label: 'Home', action: () => setNicheView('overview') },
                            { icon: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>', label: 'Collections', action: () => setNicheView('catalog') },
                            { icon: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>', label: 'Search', action: () => { if(typeof OrbitexSearch !== 'undefined') OrbitexSearch.open('jeweller'); } },
                            { icon: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78v0z"></path></svg>', label: 'Wishlist', action: () => { if(typeof OrbitexToast !== 'undefined') OrbitexToast.show('Wishlist opened'); } },
                            { icon: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.29 2.83c-.1.13-.22.25-.37.35A2 2 0 006 20h14M10 20a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>', label: 'Cart', action: () => { if(typeof OrbitexToast !== 'undefined') OrbitexToast.show('Cart opened'); } }
                        ]
                    });
                }
                if (typeof OrbitexAOS !== 'undefined') OrbitexAOS.init();
            </script>
        </div>
    `;
    return catalogHTML;
}
