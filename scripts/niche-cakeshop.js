function generateCakeShopOverviewHTML(niche) {
    // Determine Unsplash images for the gallery and occasional links
    const imgGallery1 = "https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=600&q=80";
    const imgGallery2 = "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&q=80";
    const imgGallery3 = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80";
    const imgGallery4 = "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80";
    const imgGallery5 = "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80";

    const occBirthday = "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=400&q=80";
    const occWedding = "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400&q=80";
    const occAnniversary = "https://images.unsplash.com/photo-1559553156-2e97137af16f?w=400&q=80";
    const occFestival = "https://images.unsplash.com/photo-1606890737305-653a3eb1f964?w=400&q=80";

    return `
        <div class="niche-page" style="background-color: #fffdf7; color: #4f2916; font-family: 'Inter', sans-serif; overflow-x: hidden;">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap');
                h1, h2, h3, h4, h5, h6 { font-family: 'Playfair Display', serif; color: #5d3226; }
                
                @keyframes dashRotate { to { transform: rotate(360deg); } }
                @keyframes floatUp {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                
                .trust-strip {
                    display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; padding: 16px 0; border-top: 1px solid rgba(93,50,38,0.1); border-bottom: 1px solid rgba(93,50,38,0.1); background: #faf5f0;
                }
                .trust-item {
                    display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 600; color: #5d3226;
                }
                
                .bestseller-carousel {
                    display: flex; gap: 24px; overflow-x: auto; padding: 24px 16px 40px; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
                }
                .bestseller-carousel::-webkit-scrollbar { display: none; }
                .bestseller-card {
                    min-width: 280px; scroll-snap-align: center; position: relative; background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 8px 24px rgba(93,50,38,0.08); transition: transform 0.3s; cursor: pointer; text-align: center;
                }
                .bestseller-card:hover { transform: translateY(-8px); }
                .bestseller-ribbon {
                    position: absolute; top: -12px; right: -12px; background: #5d3226; color: #fff; font-size: 0.75rem; font-weight: 700; padding: 6px 16px; border-radius: 16px; transform: rotate(5deg); z-index: 2; box-shadow: 0 4px 12px rgba(93,50,38,0.2);
                }
                .bestseller-img-wrap {
                    position: relative; width: 160px; height: 160px; margin: 0 auto 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 4rem; background: #faf5f0; z-index: 1;
                }
                .bestseller-img-wrap::before {
                    content: ''; position: absolute; top: -8px; left: -8px; right: -8px; bottom: -8px; border: 2px dashed #5d3226; border-radius: 50%; opacity: 0; transition: opacity 0.3s; animation: dashRotate 15s linear infinite;
                }
                .bestseller-card:hover .bestseller-img-wrap::before { opacity: 1; }
                
                .builder-step {
                    display: flex; flex-direction: column; align-items: center; text-align: center; gap: 16px; flex: 1; min-width: 150px;
                }
                .builder-icon {
                    width: 80px; height: 80px; border-radius: 50%; background: #fff; display: flex; align-items: center; justify-content: center; font-size: 2rem; box-shadow: 0 8px 24px rgba(93,50,38,0.1); border: 2px solid rgba(93,50,38,0.1); transition: all 0.3s;
                }
                .builder-step:hover .builder-icon { background: #5d3226; color: #fff; border-color: #5d3226; transform: scale(1.1); }
                
                .insta-grid {
                    display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;
                }
                .insta-item {
                    position: relative; border-radius: 12px; overflow: hidden; aspect-ratio: 1; cursor: pointer;
                }
                .insta-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
                .insta-overlay {
                    position: absolute; inset: 0; background: rgba(93,50,38,0.6); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s;
                }
                .insta-item:hover img { transform: scale(1.05); }
                .insta-item:hover .insta-overlay { opacity: 1; }
                .insta-overlay span { color: #fff; font-weight: 700; font-size: 1.1rem; }
                
                .occasion-card {
                    border-radius: 16px; overflow: hidden; position: relative; height: 200px; display: flex; align-items: center; justify-content: center; cursor: pointer;
                }
                .occasion-card img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
                .occasion-card::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(79,41,22,0.8), rgba(79,41,22,0.2)); }
                .occasion-card h4 { position: relative; z-index: 1; color: #fff; margin: 0; font-size: 1.5rem; text-shadow: 0 2px 8px rgba(0,0,0,0.4); }
                .occasion-card:hover img { transform: scale(1.1); }
                
                .btn-primary { background: linear-gradient(135deg, #5d3226, #4f2916); color: #fff; border: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(93,50,38,0.2); }
                .btn-primary:hover { box-shadow: 0 6px 16px rgba(93,50,38,0.3); transform: translateY(-2px); }
            </style>

            <!-- Hellobar will be mounted here dynamically via script -->
            <div id="hellobar-container"></div>

            <!-- Header -->
            <header class="niche-header" style="background: rgba(255, 253, 247, 0.95); padding: 16px 24px; position: sticky; top: 0; z-index: 100; backdrop-filter: blur(12px); border-bottom: 1px solid rgba(93,50,38,0.1);">
                <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center; gap: 12px; cursor: pointer;" onclick="setNicheView('overview')">
                        <div style="width: 48px; height: 48px; fill: #5d3226;">${niche.logoSvg}</div>
                        <div>
                            <h1 style="margin: 0; color: #5d3226; font-size: 1.6rem; font-weight: 700; line-height: 1.2;">${niche.name}</h1>
                            <p style="margin: 0; font-size: 0.75rem; color: #888; text-transform: uppercase; letter-spacing: 1px; font-weight: 500;">${niche.tagline}</p>
                        </div>
                    </div>
                    <nav style="display: flex; gap: 24px; align-items: center; font-weight: 600;">
                        <a href="#" onclick="setNicheView('overview'); return false;" style="color: #5d3226; text-decoration: none;">Home</a>
                        <a href="#" onclick="setNicheView('catalog'); return false;" style="color: #4f2916; text-decoration: none;">Menu</a>
                        <button onclick="OrbitexSearch.open('cakeshop')" style="background: none; border: none; cursor: pointer; font-size: 1.2rem;">🔍</button>
                        <button onclick="setNicheView('catalog')" class="btn-primary">Order Now</button>
                    </nav>
                </div>
            </header>

            <!-- Hero Section -->
            <section style="padding: 80px 24px; position: relative; overflow: hidden;">
                <div class="niche-wrap" style="display: flex; flex-wrap: wrap; align-items: center; gap: 48px;">
                    <div style="flex: 1; min-width: 320px;" data-aos="fade-right">
                        <h2 style="font-size: 4rem; line-height: 1.1; margin: 0 0 24px;">Artisanal Cakes,<br><span style="color: #5d3226; font-style: italic;">Baked with Love.</span></h2>
                        <p style="font-size: 1.1rem; color: #666; line-height: 1.6; margin-bottom: 32px; max-width: 480px;">
                            Handcrafted masterpieces using premium Belgian chocolate and 100% pure butter cream. Delivered fresh across Mumbai.
                        </p>
                        <div style="display: flex; gap: 16px;">
                            <button onclick="setNicheView('catalog')" class="btn-primary" style="padding: 16px 32px; font-size: 1.1rem;">Explore Menu</button>
                        </div>
                    </div>
                    <div style="flex: 1; min-width: 320px; position: relative;" data-aos="fade-left">
                        <div style="position: absolute; top: 10%; right: 10%; width: 80%; height: 80%; background: #faf5f0; border-radius: 50%; z-index: 0; filter: blur(40px);"></div>
                        <img src="${niche.heroImage}" alt="Delicious Cake" style="width: 100%; border-radius: 24px; position: relative; z-index: 1; box-shadow: 0 24px 48px rgba(93,50,38,0.15);" />
                    </div>
                </div>
            </section>

            <!-- Trust Strip -->
            <div class="trust-strip" data-aos="fade-up">
                <div class="trust-item"><span>🥚✕</span> Eggless Available</div>
                <div class="trust-item"><span>🧈</span> 100% Butter Cream</div>
                <div class="trust-item"><span>📜</span> FSSAI Certified</div>
                <div class="trust-item"><span>🚚</span> Same Day Delivery</div>
            </div>

            <!-- Occasion Quick Links -->
            <section style="padding: 80px 24px; background: #faf5f0;">
                <div class="niche-wrap">
                    <h3 style="text-align: center; font-size: 2.5rem; margin-bottom: 48px;" data-aos="fade-up">Cakes for Every Occasion</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px;">
                        <div class="occasion-card" onclick="setNicheView('catalog')" data-aos="fade-up" data-aos-delay="100">
                            <img src="${occBirthday}" alt="Birthday" />
                            <h4>Birthday</h4>
                        </div>
                        <div class="occasion-card" onclick="setNicheView('catalog')" data-aos="fade-up" data-aos-delay="200">
                            <img src="${occWedding}" alt="Wedding" />
                            <h4>Wedding</h4>
                        </div>
                        <div class="occasion-card" onclick="setNicheView('catalog')" data-aos="fade-up" data-aos-delay="300">
                            <img src="${occAnniversary}" alt="Anniversary" />
                            <h4>Anniversary</h4>
                        </div>
                        <div class="occasion-card" onclick="setNicheView('catalog')" data-aos="fade-up" data-aos-delay="400">
                            <img src="${occFestival}" alt="Festivals" />
                            <h4>Festivals</h4>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Bestseller Carousel -->
            <section style="padding: 80px 0;">
                <div class="niche-wrap" style="padding: 0 24px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 32px;" data-aos="fade-right">
                        <div>
                            <h3 style="font-size: 2.5rem; margin: 0 0 8px;">Crowd Favorites</h3>
                            <p style="margin: 0; color: #666;">Our most loved creations, baked fresh daily.</p>
                        </div>
                        <button onclick="setNicheView('catalog')" style="background: none; border: none; color: #5d3226; font-weight: 600; cursor: pointer;">View All →</button>
                    </div>
                </div>
                <div class="bestseller-carousel">
                    <!-- Cards -->
                    <div class="bestseller-card" onclick="setNicheView('catalog')" data-aos="fade-up" data-aos-delay="100">
                        <div class="bestseller-ribbon">BESTSELLER</div>
                        <div class="bestseller-img-wrap">🍫</div>
                        <h4 style="font-size: 1.4rem; margin: 0 0 8px;">Belgian Truffle</h4>
                        <div style="color: #5d3226; font-weight: 700;">₹850 / 0.5kg</div>
                    </div>
                    <div class="bestseller-card" onclick="setNicheView('catalog')" data-aos="fade-up" data-aos-delay="200">
                        <div class="bestseller-img-wrap">🍍</div>
                        <h4 style="font-size: 1.4rem; margin: 0 0 8px;">Fresh Pineapple</h4>
                        <div style="color: #5d3226; font-weight: 700;">₹650 / 0.5kg</div>
                    </div>
                    <div class="bestseller-card" onclick="setNicheView('catalog')" data-aos="fade-up" data-aos-delay="300">
                        <div class="bestseller-ribbon">MUST TRY</div>
                        <div class="bestseller-img-wrap">🍓</div>
                        <h4 style="font-size: 1.4rem; margin: 0 0 8px;">Strawberry Bliss</h4>
                        <div style="color: #5d3226; font-weight: 700;">₹1,100 / 0.5kg</div>
                    </div>
                    <div class="bestseller-card" onclick="setNicheView('catalog')" data-aos="fade-up" data-aos-delay="400">
                        <div class="bestseller-img-wrap">🌿</div>
                        <h4 style="font-size: 1.4rem; margin: 0 0 8px;">Pistachio Rose</h4>
                        <div style="color: #5d3226; font-weight: 700;">₹950 / 0.5kg</div>
                    </div>
                </div>
            </section>

            <!-- Custom Cake Builder Teaser -->
            <section style="padding: 80px 24px; background: #faf5f0; text-align: center;">
                <div class="niche-wrap">
                    <h3 style="font-size: 2.5rem; margin-bottom: 16px;" data-aos="fade-up">Build Your Dream Cake</h3>
                    <p style="color: #666; margin-bottom: 48px; max-width: 600px; margin-inline: auto;" data-aos="fade-up" data-aos-delay="100">Customize every layer to perfection with our bespoke cake builder process.</p>
                    
                    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 32px; position: relative;">
                        <div class="builder-step" data-aos="zoom-in" data-aos-delay="200">
                            <div class="builder-icon">🍰</div>
                            <div>
                                <h4 style="margin: 0 0 4px; font-size: 1.2rem;">1. Choose Base</h4>
                                <span style="font-size: 0.9rem; color: #666;">Sponge, Mud, or Vegan</span>
                            </div>
                        </div>
                        <div class="builder-step" data-aos="zoom-in" data-aos-delay="300">
                            <div class="builder-icon">🍯</div>
                            <div>
                                <h4 style="margin: 0 0 4px; font-size: 1.2rem;">2. Pick Filling</h4>
                                <span style="font-size: 0.9rem; color: #666;">Ganache, Compote, or Curd</span>
                            </div>
                        </div>
                        <div class="builder-step" data-aos="zoom-in" data-aos-delay="400">
                            <div class="builder-icon">🧁</div>
                            <div>
                                <h4 style="margin: 0 0 4px; font-size: 1.2rem;">3. Select Frosting</h4>
                                <span style="font-size: 0.9rem; color: #666;">Buttercream or Fondant</span>
                            </div>
                        </div>
                        <div class="builder-step" data-aos="zoom-in" data-aos-delay="500">
                            <div class="builder-icon">✨</div>
                            <div>
                                <h4 style="margin: 0 0 4px; font-size: 1.2rem;">4. Add Topper</h4>
                                <span style="font-size: 0.9rem; color: #666;">Custom text & decor</span>
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 48px;" data-aos="fade-up">
                        <button onclick="openActionModal('${niche.id}')" class="btn-primary" style="padding: 16px 32px;">Start Customizing</button>
                    </div>
                </div>
            </section>

            <!-- Instagram Gallery -->
            <section style="padding: 80px 24px;">
                <div class="niche-wrap">
                    <div style="text-align: center; margin-bottom: 48px;" data-aos="fade-up">
                        <h3 style="font-size: 2.5rem; margin: 0 0 8px;">Follow Our Journey</h3>
                        <p style="color: #666; margin: 0;">Tag us <strong style="color: #5d3226;">#FiestaPatisserie</strong> to be featured!</p>
                    </div>
                    <div class="insta-grid">
                        <div class="insta-item" data-aos="zoom-in" data-aos-delay="100">
                            <img src="${imgGallery1}" alt="Cake 1" />
                            <div class="insta-overlay"><span>#FiestaPatisserie</span></div>
                        </div>
                        <div class="insta-item" data-aos="zoom-in" data-aos-delay="200">
                            <img src="${imgGallery2}" alt="Cake 2" />
                            <div class="insta-overlay"><span>#FiestaPatisserie</span></div>
                        </div>
                        <div class="insta-item" data-aos="zoom-in" data-aos-delay="300">
                            <img src="${imgGallery3}" alt="Cake 3" />
                            <div class="insta-overlay"><span>#FiestaPatisserie</span></div>
                        </div>
                        <div class="insta-item" data-aos="zoom-in" data-aos-delay="400">
                            <img src="${imgGallery4}" alt="Cake 4" />
                            <div class="insta-overlay"><span>#FiestaPatisserie</span></div>
                        </div>
                        <div class="insta-item" data-aos="zoom-in" data-aos-delay="500">
                            <img src="${imgGallery5}" alt="Cake 5" />
                            <div class="insta-overlay"><span>#FiestaPatisserie</span></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <script>
            setTimeout(() => {
                // Same-day delivery countdown hellobar
                if(typeof OrbitexHellobar !== 'undefined') {
                    // Calculate time until 6 PM today
                    let now = new Date();
                    let target = new Date();
                    target.setHours(18, 0, 0, 0); // 6 PM
                    if (now > target) {
                        target.setDate(target.getDate() + 1); // Next day 6 PM if already past
                    }
                    
                    let diff = target - now;
                    let hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                    
                    OrbitexHellobar.show({
                        message: '🎂 Order before 6 PM for Same-Day Delivery! ⏳ ' + hrs + 'h ' + mins + 'm remaining',
                        background: '#5d3226',
                        color: '#fff',
                        targetId: 'hellobar-container'
                    });
                }
                if(typeof OrbitexAOS !== 'undefined') {
                    OrbitexAOS.refresh();
                }
            }, 100);
        </script>
    `;
}

function generateCakeShopCatalogHTML(niche) {
    let categories = [...new Set(niche.catalog.map(item => item.cat))];
    
    // Size multipliers
    const sizeMultipliers = { '0.5kg': 1, '1kg': 1.8, '2kg': 3.4, '3kg': 5 };

    const categoryTabs = categories.map(cat => `<button class="cat-tab" onclick="filterCakes(this, '${cat}')">${cat}</button>`).join('');

    const productCards = niche.catalog.map((item, idx) => {
        let vegBadge = item.isVeg === false ? '<span class="badge badge-nonveg">🔴 Egg</span>' : '<span class="badge badge-veg">🟢 Eggless</span>';
        let flavorBadge = item.flavor ? `<span class="badge badge-flavor">${item.flavor}</span>` : '<span class="badge badge-flavor">Signature</span>';
        let itemNameEsc = item.name.replace(/'/g, "\\'");
        
        return `
        <div class="catalog-item-card product-card" data-category="${item.cat}" data-base-price="${item.price}" data-aos="fade-up" data-aos-delay="${(idx%4)*50}">
            <img src="${niche.heroImage}" alt="${item.name}" class="product-img" />
            <div class="product-info">
                <div class="badges">
                    ${vegBadge}
                    ${flavorBadge}
                </div>
                <h3 style="margin: 0 0 8px; font-size: 1.25rem;">${item.name}</h3>
                <p style="margin: 0 0 16px; font-size: 0.9rem; color: #666; line-height: 1.5; flex: 1;">${item.desc}</p>
                
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                    <span style="font-size: 0.8rem; color: #888;">Starting from</span>
                    <span class="price-display" style="font-size: 1.4rem; font-weight: 700; color: #5d3226;">${formatPrice(item.price)}</span>
                </div>
                
                <div class="size-selector">
                    <div class="size-pill active" onclick="updatePrice(this, ${item.price}, 1)">0.5kg</div>
                    <div class="size-pill" onclick="updatePrice(this, ${item.price}, 1.8)">1kg</div>
                    <div class="size-pill" onclick="updatePrice(this, ${item.price}, 3.4)">2kg</div>
                </div>
                
                <button class="btn-order" onclick="openItemOrderModal('${niche.id}', '${itemNameEsc}', ${item.price})">
                    Customize & Order
                </button>
            </div>
        </div>
        `;
    }).join('');

    return `
        <div class="niche-page" style="background-color: #fffdf7; color: #4f2916; font-family: 'Inter', sans-serif; min-height: 100vh; padding-bottom: 80px;">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap');
                h1, h2, h3, h4, h5, h6 { font-family: 'Playfair Display', serif; color: #5d3226; }
                
                .cat-tab {
                    padding: 10px 20px; border-radius: 8px; border: 1px solid rgba(93,50,38,0.2); background: #fff; color: #5d3226; font-weight: 600; cursor: pointer; transition: all 0.3s;
                }
                .cat-tab.active {
                    background: linear-gradient(135deg, #5d3226, #4f2916); color: #fff; border-color: transparent;
                }
                
                .product-card {
                    background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.05); transition: transform 0.3s, box-shadow 0.3s; display: flex; flex-direction: column; border: 1px solid rgba(0,0,0,0.05);
                }
                .product-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
                
                .product-img {
                    height: 200px; width: 100%; object-fit: cover;
                }
                .product-info {
                    padding: 20px; display: flex; flex-direction: column; flex: 1;
                }
                .badges {
                    display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;
                }
                .badge {
                    padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
                }
                .badge-flavor { background: #faf5f0; color: #5d3226; border: 1px solid rgba(93,50,38,0.2); }
                .badge-veg { background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; }
                .badge-nonveg { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; }
                
                .size-selector {
                    display: flex; gap: 8px; margin: 16px 0; background: #faf5f0; padding: 4px; border-radius: 8px;
                }
                .size-pill {
                    flex: 1; text-align: center; padding: 6px 0; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.2s; color: #666;
                }
                .size-pill.active {
                    background: #fff; color: #5d3226; box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                }
                
                .btn-order {
                    background: linear-gradient(135deg, #5d3226, #4f2916); color: #fff; border: none; padding: 12px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s; width: 100%; margin-top: auto; display: flex; justify-content: center; align-items: center; gap: 8px;
                }
                .btn-order:hover { opacity: 0.9; }
                
                /* Fixed Mobile Action Bar */
                .mobile-action-bar {
                    position: fixed; bottom: 0; left: 0; right: 0; background: #fff; padding: 16px 24px; box-shadow: 0 -4px 16px rgba(0,0,0,0.08); display: flex; justify-content: space-between; align-items: center; z-index: 1000; border-top: 1px solid rgba(93,50,38,0.1);
                }
                @media (min-width: 768px) { .mobile-action-bar { display: none; } }
            </style>

            <!-- Header -->
            <header style="background: #fff; padding: 16px 24px; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center; gap: 12px; cursor: pointer;" onclick="setNicheView('overview')">
                        <span style="font-size: 1.5rem;">←</span>
                        <h2 style="margin: 0; font-size: 1.4rem;">Menu</h2>
                    </div>
                    <button onclick="OrbitexSearch.open('cakeshop')" style="background: #faf5f0; border: none; padding: 8px 16px; border-radius: 8px; color: #5d3226; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                        🔍 Search
                    </button>
                </div>
            </header>

            <main class="niche-wrap" style="padding: 40px 24px;">
                <!-- Category Tabs -->
                <div style="display: flex; gap: 12px; overflow-x: auto; padding-bottom: 16px; margin-bottom: 32px; -webkit-overflow-scrolling: touch;" id="cat-container">
                    <button class="cat-tab active" onclick="filterCakes(this, 'all')">All</button>
                    ${categoryTabs}
                </div>

                <!-- Product Grid -->
                <div class="catalog-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
                    ${productCards}
                </div>
            </main>

            <!-- Fixed Mobile Action Bar -->
            <div class="mobile-action-bar">
                <div>
                    <div style="font-size: 0.8rem; color: #666; margin-bottom: 2px;">Your Order</div>
                    <div style="font-weight: 700; color: #5d3226; font-size: 1.1rem;">₹0.00</div>
                </div>
                <button class="btn-order" style="width: auto; padding: 12px 24px;" onclick="OrbitexCheckout.open()">View Cart</button>
            </div>
        </div>
        <script>
            function filterCakes(btn, cat) {
                document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filterCatalogItems(btn, cat);
            }
            
            function updatePrice(pillEl, basePrice, multiplier) {
                let container = pillEl.closest('.size-selector');
                container.querySelectorAll('.size-pill').forEach(p => p.classList.remove('active'));
                pillEl.classList.add('active');
                
                let card = pillEl.closest('.product-card');
                let newPrice = basePrice * multiplier;
                card.querySelector('.price-display').innerHTML = formatPrice(newPrice);
                
                let btn = card.querySelector('.btn-order');
                let name = card.querySelector('h3').innerText;
                btn.onclick = function() { openItemOrderModal('${niche.id}', name, newPrice); };
            }
            
            setTimeout(() => {
                if(typeof OrbitexAOS !== 'undefined') {
                    OrbitexAOS.refresh();
                }
            }, 100);
        </script>
    `;
}
