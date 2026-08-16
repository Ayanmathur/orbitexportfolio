function generateClothingOverviewHTML(niche) {
    return `
    <style>
        @keyframes clothingReveal {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes clothingShimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
        }
        @keyframes clothingZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
        }
        @keyframes badgePulse {
            0% { box-shadow: 0 0 0 0 rgba(46, 16, 63, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(46, 16, 63, 0); }
            100% { box-shadow: 0 0 0 0 rgba(46, 16, 63, 0); }
        }
        
        /* New CSS for mega menu, sizes, wishlist */
        .clothing-mega-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 500px;
            background: rgba(250, 248, 246, 0.98);
            backdrop-filter: blur(10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            border-bottom: 1px solid #e0d5ce;
            padding: 30px;
            z-index: 1000;
            border-radius: 4px;
        }
        .nav-collection:hover .clothing-mega-menu {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }
        .mega-col h4 {
            font-family: 'Bodoni Moda', serif; color: #2e103f; font-size: 1.1rem; margin-bottom: 15px; text-transform: uppercase;
        }
        .mega-col ul {
            list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;
        }
        .mega-col ul li a {
            color: #555; text-decoration: none; font-size: 0.85rem; transition: color 0.3s;
        }
        .mega-col ul li a:hover { color: #2e103f; }
        
        .wishlist-btn {
            position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.9); border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; border: none; box-shadow: 0 2px 5px rgba(0,0,0,0.1); z-index: 20; transition: transform 0.2s;
        }
        .wishlist-btn:hover { transform: scale(1.1); }
        .wishlist-btn svg { width: 18px; height: 18px; fill: transparent; stroke: #2e103f; stroke-width: 2; transition: all 0.3s; }
        .wishlist-btn.active svg { fill: #e74c3c; stroke: #e74c3c; }

        .size-pill {
            border: 1px solid #ccc; border-radius: 20px; padding: 4px 10px; font-size: 0.7rem; color: #555; cursor: pointer; transition: all 0.2s;
        }
        .size-pill:hover, .size-pill.active { border-color: #2e103f; background: #2e103f; color: #fff; }
        
        .color-swatch {
            width: 16px; height: 16px; border-radius: 50%; border: 1px solid #ccc; cursor: pointer;
        }

        .clothing-anim-reveal {
            animation: clothingReveal 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            opacity: 0;
        }
        .clothing-delay-1 { animation-delay: 0.2s; }
        .clothing-delay-2 { animation-delay: 0.4s; }

        .clothing-shimmer-text {
            background: linear-gradient(to right, #2e103f 20%, #8e44ad 40%, #8e44ad 60%, #2e103f 80%);
            background-size: 200% auto;
            color: #000;
            background-clip: text;
            text-fill-color: transparent;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: clothingShimmer 4s linear infinite;
        }

        .clothing-hero-split {
            display: grid;
            grid-template-columns: 4fr 5fr;
            gap: 0;
            align-items: center;
        }
        
        .clothing-new-badge {
            display: inline-block;
            background: #2e103f;
            color: #fff;
            padding: 4px 12px;
            font-size: 0.75rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            border-radius: 20px;
            animation: badgePulse 2s infinite;
        }

        .clothing-drop-cap::first-letter {
            font-family: 'Bodoni Moda', serif;
            font-size: 4.5rem;
            float: left;
            margin-right: 15px;
            line-height: 0.8;
            color: #2e103f;
            padding-top: 4px;
        }

        .clothing-pull-quote {
            border-left: 2px solid #2e103f;
            padding-left: 30px;
            margin: 40px 0;
            position: relative;
        }
        .clothing-pull-quote::before {
            content: '"';
            font-family: 'Bodoni Moda', serif;
            font-size: 5rem;
            color: rgba(46,16,63,0.1);
            position: absolute;
            top: -20px;
            left: 10px;
            line-height: 1;
        }

        .clothing-collection-card {
            min-width: 300px; 
            height: 450px; 
            position: relative; 
            overflow: hidden;
            cursor: pointer;
        }
        .clothing-collection-card-inner {
            position: absolute;
            inset: 15px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            transition: all 0.4s ease;
            border: 1px solid rgba(255,255,255,0.3);
            z-index: 2;
        }
        .clothing-collection-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: #e8ded8;
            transition: transform 0.6s ease;
            z-index: 1;
        }
        .clothing-collection-card:nth-child(even)::before { background: #dcd3d0; }
        .clothing-collection-card:nth-child(3n)::before { background: #f1ebe5; }
        
        .clothing-collection-card:hover::before {
            transform: scale(1.05);
        }
        .clothing-collection-card:hover .clothing-collection-card-inner {
            inset: 10px;
            border-color: rgba(46,16,63,0.5);
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(2px);
        }

        .clothing-silk-thread {
            width: 1px;
            height: 80px;
            background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent);
            margin: 0 auto 20px auto;
        }

        .clothing-stat-pill {
            background: linear-gradient(135deg, #3d1554 0%, #2e103f 100%);
            border-radius: 40px;
            padding: 40px 30px;
            text-align: center;
            box-shadow: 0 15px 30px rgba(46,16,63,0.2);
            border: 1px solid rgba(255,255,255,0.1);
            transition: transform 0.3s ease;
        }
        .clothing-stat-pill:hover {
            transform: translateY(-10px);
        }

        .clothing-testimonial {
            text-align: center;
            padding: 40px;
            background: #fff;
            position: relative;
            transition: all 0.4s ease;
        }
        .clothing-testimonial:hover {
            box-shadow: 0 20px 40px rgba(0,0,0,0.06);
            transform: translateY(-5px);
        }
    </style>
    <div class="niche-page theme-clothing" style="font-family: 'Inter', sans-serif; background-color: #faf8f6; color: #333;">
        <!-- Header -->
        ${generateMarqueeBanner("FREE SHIPPING ON ₹2,999+ • NEW ARRIVALS EVERY FRIDAY • HANDLOOM CERTIFIED • 100% AUTHENTIC WEAVES", {background: '#2e103f', color: '#fff', padding: '8px', fontSize: '0.8rem'})}
        <header class="niche-header" style="background: rgba(250, 248, 246, 0.95); border-bottom: 1px solid #e0d5ce; backdrop-filter: blur(10px); position: sticky; top: 0; z-index: 100;">
            <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center; padding: 20px;">
                <div class="niche-brand" style="display: flex; align-items: center; gap: 12px;">
                    ${niche.logoSvg}
                    <span style="font-family: 'Bodoni Moda', serif; font-size: 1.6rem; color: #2e103f; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">${niche.name}</span>
                </div>
                <div class="niche-nav-links" style="display: flex; gap: 30px; align-items: center;">
                    <button onclick="setNicheView('overview')" style="background:none; border:none; cursor:pointer; font-family: 'Inter', sans-serif; color: #2e103f; font-weight: 600; letter-spacing: 1.5px; font-size: 0.85rem; transition: opacity 0.3s;">THE ATELIER</button>
                    <div class="nav-collection" style="position: relative; height: 100%; display: flex; align-items: center;">
                        <button onclick="setNicheView('catalog')" style="background:none; border:none; cursor:pointer; font-family: 'Inter', sans-serif; color: #777; letter-spacing: 1.5px; font-size: 0.85rem; transition: color 0.3s; padding: 10px 0;">COLLECTION</button>
                        <div class="clothing-mega-menu">
                            <div class="mega-col">
                                <h4>Category</h4>
                                <ul>
                                    <li><a href="#" onclick="setNicheView('catalog')">Sarees</a></li>
                                    <li><a href="#" onclick="setNicheView('catalog')">Kurtas</a></li>
                                    <li><a href="#" onclick="setNicheView('catalog')">Lehengas</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h4>Fabric</h4>
                                <ul>
                                    <li><a href="#" onclick="setNicheView('catalog')">Pure Silk</a></li>
                                    <li><a href="#" onclick="setNicheView('catalog')">Handloom Cotton</a></li>
                                    <li><a href="#" onclick="setNicheView('catalog')">Georgette</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h4>Featured</h4>
                                <ul>
                                    <li><a href="#" onclick="setNicheView('catalog')">Bridal Trousseau</a></li>
                                    <li><a href="#" onclick="setNicheView('catalog')">Festive Edit</a></li>
                                    <li><a href="#" onclick="setNicheView('catalog')">Menswear</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="niche-btn-primary" onclick="openActionModal('${niche.id}')" style="background-color: #2e103f; color: #fff; border: 1px solid #2e103f; padding: 12px 30px; font-family: 'Inter', sans-serif; letter-spacing: 1.5px; cursor: pointer; text-transform: uppercase; font-size: 0.8rem; transition: all 0.3s;" onmouseover="this.style.backgroundColor='#fff'; this.style.color='#2e103f';" onmouseout="this.style.backgroundColor='#2e103f'; this.style.color='#fff';">Book Trial</button>
            </div>
        </header>

        <!-- Hero Editorial -->
        <section style="padding: 0 0 100px 0; overflow: hidden;">
            <div class="clothing-hero-split">
                <!-- Left Text -->
                <div class="clothing-anim-reveal" style="padding: 60px 40px 60px 80px; z-index: 10;">
                    <div style="margin-bottom: 30px;">
                        <span class="clothing-new-badge">New Collection</span>
                        <span style="display: block; font-size: 0.9rem; letter-spacing: 4px; color: #666; text-transform: uppercase; margin-top: 20px;">Autumn Bridal Couture</span>
                    </div>
                    <h1 class="clothing-shimmer-text" style="font-family: 'Bodoni Moda', serif; font-size: 5rem; font-weight: 400; line-height: 1; margin: 0 0 30px 0; text-transform: uppercase; letter-spacing: -1px;">Elegance<br/>Woven In<br/>Tradition</h1>
                    
                    <div class="clothing-pull-quote" style="margin: 0 0 40px 0; max-width: 400px;">
                        <p style="color: #555; line-height: 1.7; font-size: 1.05rem; margin: 0;">${niche.tagline} Discover handcrafted masterpieces curated for the modern bride, preserving centuries-old weaving techniques.</p>
                    </div>
                    
                    <button onclick="setNicheView('catalog')" style="background: none; border: none; color: #2e103f; border-bottom: 1px solid #2e103f; padding-bottom: 5px; font-family: 'Inter', sans-serif; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; font-size: 0.9rem; transition: all 0.3s; display: inline-flex; align-items: center; gap: 10px;" onmouseover="this.style.gap='15px'" onmouseout="this.style.gap='10px'">
                        Explore Collection <span style="font-size: 1.2rem;">&rarr;</span>
                    </button>
                </div>
                
                <!-- Right Image -->
                <div class="clothing-anim-reveal clothing-delay-1" style="height: 90vh; position: relative; clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);">
                    <img src="${niche.heroImage}" alt="Fashion Editorial" style="width: 100%; height: 100%; object-fit: cover; object-position: top center;" />
                    <!-- Subtle overlay -->
                    <div style="position: absolute; inset: 0; background: linear-gradient(to left, transparent, rgba(250,248,246,0.3));"></div>
                </div>
            </div>
        </section>

        <!-- Trust Badge Strip -->
        <div data-aos="fade-up" style="background: #2e103f; color: #fff; padding: 15px 0; border-top: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1);">
            <div class="niche-wrap" style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 20px;">
                <span style="font-size: 0.85rem; letter-spacing: 2px; text-transform: uppercase; display: flex; align-items: center; gap: 8px;"><span style="color:#d4af37;">✓</span> HANDLOOM MARK</span>
                <span style="font-size: 0.85rem; letter-spacing: 2px; text-transform: uppercase; display: flex; align-items: center; gap: 8px;"><span style="color:#d4af37;">✓</span> FREE ALTERATIONS</span>
                <span style="font-size: 0.85rem; letter-spacing: 2px; text-transform: uppercase; display: flex; align-items: center; gap: 8px;"><span style="color:#d4af37;">✓</span> 10-DAY RETURNS</span>
                <span style="font-size: 0.85rem; letter-spacing: 2px; text-transform: uppercase; display: flex; align-items: center; gap: 8px;"><span style="color:#d4af37;">✓</span> COD AVAILABLE</span>
            </div>
        </div>

        <!-- Video Lookbook Section -->
        <section data-aos="fade-up" style="padding: 80px 20px; background: #fff;">
            <div class="niche-wrap">
                <div style="text-align: center; margin-bottom: 40px;">
                    <h2 style="font-family: 'Bodoni Moda', serif; font-size: 3rem; color: #2e103f; font-weight: 400; text-transform: uppercase;">The Autumn Lookbook</h2>
                    <p style="color: #666; max-width: 600px; margin: 15px auto; font-size: 1.1rem;">Immerse yourself in the fluidity and grace of our latest festive weaves.</p>
                </div>
                <div style="position: relative; width: 100%; max-width: 900px; margin: 0 auto; aspect-ratio: 16/9; background: #000; overflow: hidden; border-radius: 8px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
                    <img src="https://images.unsplash.com/photo-1610030469983-98e550d615ef?w=1200&q=80" alt="Video Thumbnail" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.7;">
                    <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
                        <button style="background: rgba(255,255,255,0.2); backdrop-filter: blur(5px); border: 1px solid rgba(255,255,255,0.5); width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- About -->
        <section data-aos="fade-up" style="padding: 100px 20px; background-color: #f1ebe5; position: relative;">
            <div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 1px; height: 100px; background: #2e103f; opacity: 0.2;"></div>
            
            <div class="niche-wrap clothing-anim-reveal clothing-delay-2" style="max-width: 1000px; margin: 0 auto;">
                <h2 style="font-family: 'Bodoni Moda', serif; font-size: 3.5rem; color: #2e103f; margin-bottom: 50px; font-weight: 400; text-align: center; text-transform: uppercase; letter-spacing: 2px;">The Legacy</h2>
                
                <div style="display: grid; grid-template-columns: 5fr 4fr; gap: 80px; align-items: start;">
                    <div>
                        <p class="clothing-drop-cap" style="font-size: 1.15rem; line-height: 1.9; color: #444; margin-bottom: 30px; text-align: justify;">
                            Sutra Designer Ethnic & Couture is the vision of celebrated designer Kavya Mehta, bringing over 20 years of expertise in luxury ethnic fashion to Nagpur. Specializing in pure silk sarees, bespoke bridal lehengas, and custom couture, we source our fabrics directly from master weavers in Kanchipuram, Varanasi, and Patan.
                        </p>
                        <p style="font-size: 1.15rem; line-height: 1.9; color: #555; text-align: justify;">
                            Our flagship atelier at Sadar Bazaar offers an intimate, personalized shopping experience where every drape tells a story of heritage and craftsmanship. From the loom to your wardrobe, we ensure uncompromised quality.
                        </p>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 30px;">
                        <div class="clothing-stat-pill" style="color: #fff;">
                            <h4 style="font-family: 'Bodoni Moda', serif; font-size: 3.5rem; margin: 0 0 5px 0; font-weight: 400;">20+</h4>
                            <p style="text-transform: uppercase; font-size: 0.85rem; letter-spacing: 2px; color: rgba(255,255,255,0.7); margin: 0;">Years Expertise</p>
                        </div>
                        <div class="clothing-stat-pill" style="color: #fff; background: linear-gradient(135deg, #2e103f 0%, #1a0824 100%);">
                            <h4 style="font-family: 'Bodoni Moda', serif; font-size: 3.5rem; margin: 0 0 5px 0; font-weight: 400;">3+</h4>
                            <p style="text-transform: uppercase; font-size: 0.85rem; letter-spacing: 2px; color: rgba(255,255,255,0.7); margin: 0;">Weaving Hubs</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Collections -->
        <section data-aos="fade-up" style="padding: 100px 0; overflow: hidden; background: #fff;">
            <div class="niche-wrap" style="padding: 0 20px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 50px;">
                    <h2 style="font-family: 'Bodoni Moda', serif; font-size: 3rem; color: #2e103f; margin: 0; font-weight: 400; text-transform: uppercase; letter-spacing: 1px;">Curated Edits</h2>
                    <a href="#" onclick="setNicheView('catalog')" style="color: #2e103f; text-decoration: none; border-bottom: 1px solid #2e103f; padding-bottom: 4px; font-size: 0.95rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 600; transition: opacity 0.3s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">View Complete Archive</a>
                </div>
            </div>
            
            <!-- Horizontal scroll strip -->
            <div style="display: flex; gap: 20px; overflow-x: auto; padding: 0 20px 40px 20px; scrollbar-width: none; cursor: ew-resize;">
                <!-- Collection Cards -->
                <div class="clothing-collection-card" onclick="setNicheView('catalog')">
                    <div class="clothing-collection-card-inner">
                        <span class="clothing-new-badge" style="position: absolute; top: 30px; right: 30px;">New</span>
                        <h3 style="font-family: 'Bodoni Moda', serif; font-size: 2rem; color: #2e103f; margin-bottom: 10px; font-weight: 400;">Pure Silk Sarees</h3>
                        <p style="font-size: 0.85rem; color: #555; text-transform: uppercase; letter-spacing: 2px;">350+ Pieces</p>
                    </div>
                </div>
                <div class="clothing-collection-card" onclick="setNicheView('catalog')">
                    <div class="clothing-collection-card-inner" style="background: rgba(46,16,63,0.9);">
                        <h3 style="font-family: 'Bodoni Moda', serif; font-size: 2rem; color: #fff; margin-bottom: 10px; font-weight: 400;">Bridal Lehengas</h3>
                        <p style="font-size: 0.85rem; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 2px;">Bespoke Artistry</p>
                    </div>
                </div>
                <div class="clothing-collection-card" onclick="setNicheView('catalog')">
                    <div class="clothing-collection-card-inner">
                        <h3 style="font-family: 'Bodoni Moda', serif; font-size: 2rem; color: #2e103f; margin-bottom: 10px; font-weight: 400;">Designer Sarees</h3>
                        <p style="font-size: 0.85rem; color: #555; text-transform: uppercase; letter-spacing: 2px;">120+ Pieces</p>
                    </div>
                </div>
                <div class="clothing-collection-card" onclick="setNicheView('catalog')">
                    <div class="clothing-collection-card-inner">
                        <h3 style="font-family: 'Bodoni Moda', serif; font-size: 2rem; color: #2e103f; margin-bottom: 10px; font-weight: 400;">Menswear</h3>
                        <p style="font-size: 0.85rem; color: #555; text-transform: uppercase; letter-spacing: 2px;">Kurta & Sherwanis</p>
                    </div>
                </div>
                <div class="clothing-collection-card" onclick="setNicheView('catalog')">
                    <div class="clothing-collection-card-inner">
                        <h3 style="font-family: 'Bodoni Moda', serif; font-size: 2rem; color: #2e103f; margin-bottom: 10px; font-weight: 400;">Cotton & Daily</h3>
                        <p style="font-size: 0.85rem; color: #555; text-transform: uppercase; letter-spacing: 2px;">Everyday Elegance</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Craftsmanship -->
        <section data-aos="fade-up" style="padding: 100px 20px; background-color: #2e103f; color: #fff; position: relative;">
            <div class="niche-wrap" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 60px; text-align: center;">
                <div>
                    <div class="clothing-silk-thread"></div>
                    <div style="font-family: 'Bodoni Moda', serif; font-size: 4rem; opacity: 0.2; line-height: 1; margin-bottom: -20px;">01</div>
                    <h3 style="font-family: 'Bodoni Moda', serif; font-size: 2.2rem; margin-bottom: 25px; font-weight: 400;">Silk Mark Certified</h3>
                    <p style="color: rgba(255,255,255,0.7); line-height: 1.8; font-size: 1.05rem;">100% guarantee of pure silk authenticity. Every silk piece comes with official certification.</p>
                </div>
                <div>
                    <div class="clothing-silk-thread"></div>
                    <div style="font-family: 'Bodoni Moda', serif; font-size: 4rem; opacity: 0.2; line-height: 1; margin-bottom: -20px;">02</div>
                    <h3 style="font-family: 'Bodoni Moda', serif; font-size: 2.2rem; margin-bottom: 25px; font-weight: 400;">Direct from Weavers</h3>
                    <p style="color: rgba(255,255,255,0.7); line-height: 1.8; font-size: 1.05rem;">We eliminate middlemen to support artisan communities directly, ensuring fair wages and unparalleled quality.</p>
                </div>
                <div>
                    <div class="clothing-silk-thread"></div>
                    <div style="font-family: 'Bodoni Moda', serif; font-size: 4rem; opacity: 0.2; line-height: 1; margin-bottom: -20px;">03</div>
                    <h3 style="font-family: 'Bodoni Moda', serif; font-size: 2.2rem; margin-bottom: 25px; font-weight: 400;">Custom Tailoring</h3>
                    <p style="color: rgba(255,255,255,0.7); line-height: 1.8; font-size: 1.05rem;">In-house master tailors provide perfect fittings and bespoke blouse designs within 7 days.</p>
                </div>
            </div>
        </section>

        <!-- Testimonials -->
        <section data-aos="fade-up" style="padding: 100px 20px; background: #faf8f6;">
            <div class="niche-wrap">
                <div style="text-align: center; margin-bottom: 70px;">
                    <span style="font-size: 0.85rem; letter-spacing: 4px; color: #888; text-transform: uppercase;">Voices</span>
                    <h2 style="font-family: 'Bodoni Moda', serif; font-size: 3rem; color: #2e103f; margin-top: 10px; font-weight: 400; text-transform: uppercase;">Client Diaries</h2>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px;">
                    <div class="clothing-testimonial">
                        <div style="font-family: 'Bodoni Moda', serif; font-size: 4rem; color: #e0d5ce; line-height: 0; margin-bottom: 20px;">"</div>
                        <p style="font-family: 'Bodoni Moda', serif; font-style: italic; color: #333; margin-bottom: 30px; line-height: 1.7; font-size: 1.3rem;">Found my dream Kanjivaram bridal saree here. Kavya mam personally helped me select the drape and the custom blouse fitting was absolutely flawless.</p>
                        <h5 style="font-family: 'Inter', sans-serif; font-weight: 600; font-size: 1rem; color: #2e103f; margin: 0 0 5px 0; text-transform: uppercase; letter-spacing: 1px;">Roshni Patel</h5>
                        <span style="font-size: 0.8rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">Bride, Nagpur — Oct 2025</span>
                    </div>
                    <div class="clothing-testimonial">
                        <div style="font-family: 'Bodoni Moda', serif; font-size: 4rem; color: #e0d5ce; line-height: 0; margin-bottom: 20px;">"</div>
                        <p style="font-family: 'Bodoni Moda', serif; font-style: italic; color: #333; margin-bottom: 30px; line-height: 1.7; font-size: 1.3rem;">The exclusive range of Banarasi silks is unmatched. The store feels like a luxury boutique in Mumbai or Delhi. Highly recommend for wedding trousseau.</p>
                        <h5 style="font-family: 'Inter', sans-serif; font-weight: 600; font-size: 1rem; color: #2e103f; margin: 0 0 5px 0; text-transform: uppercase; letter-spacing: 1px;">Anjali Sharma</h5>
                        <span style="font-size: 0.8rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">Patron — Aug 2025</span>
                    </div>
                    <div class="clothing-testimonial">
                        <div style="font-family: 'Bodoni Moda', serif; font-size: 4rem; color: #e0d5ce; line-height: 0; margin-bottom: 20px;">"</div>
                        <p style="font-family: 'Bodoni Moda', serif; font-style: italic; color: #333; margin-bottom: 30px; line-height: 1.7; font-size: 1.3rem;">We got outfits for our entire family for my brother's wedding. The menswear sherwanis were regal, and the service was exceptional from start to finish.</p>
                        <h5 style="font-family: 'Inter', sans-serif; font-weight: 600; font-size: 1rem; color: #2e103f; margin: 0 0 5px 0; text-transform: uppercase; letter-spacing: 1px;">Neha Deshmukh</h5>
                        <span style="font-size: 0.8rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">Patron — Jan 2026</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section data-aos="fade-up" style="padding: 100px 20px; background-color: #f1ebe5; border-top: 1px solid #e0d5ce;">
            <div class="niche-wrap" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                <span style="width: 2px; height: 60px; background: #2e103f; margin-bottom: 30px;"></span>
                <h2 style="font-family: 'Bodoni Moda', serif; font-size: 3.5rem; color: #2e103f; margin-bottom: 25px; font-weight: 400; text-transform: uppercase;">Book a Private Viewing</h2>
                <p style="color: #555; margin-bottom: 50px; font-size: 1.15rem; max-width: 600px; line-height: 1.7;">Experience our collections in person with a dedicated stylist to guide your selections.</p>
                
                <button class="niche-btn-primary" onclick="openActionModal('${niche.id}')" style="background-color: #2e103f; color: #fff; border: none; padding: 18px 50px; font-family: 'Inter', sans-serif; letter-spacing: 2px; cursor: pointer; text-transform: uppercase; margin-bottom: 70px; font-size: 0.95rem; transition: transform 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 20px rgba(46,16,63,0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">Schedule Appointment</button>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; width: 100%; max-width: 1000px; text-align: left; border-top: 1px solid #e0d5ce; padding-top: 60px;">
                    <div>
                        <h4 style="font-family: 'Bodoni Moda', serif; color: #2e103f; margin-bottom: 15px; font-size: 1.4rem; text-transform: uppercase; letter-spacing: 1px;">Atelier</h4>
                        <p style="color: #555; line-height: 1.8; font-size: 1rem;">Sutra Flagship Store<br/>Mount Road, Sadar Bazaar<br/>Nagpur, Maharashtra 440001</p>
                    </div>
                    <div>
                        <h4 style="font-family: 'Bodoni Moda', serif; color: #2e103f; margin-bottom: 15px; font-size: 1.4rem; text-transform: uppercase; letter-spacing: 1px;">Contact</h4>
                        <p style="color: #555; line-height: 1.8; font-size: 1rem;">+91 98765 12345<br/>concierge@sutracouture.com<br/><span style="border-bottom: 1px solid #555;">WhatsApp available</span></p>
                    </div>
                    <div>
                        <h4 style="font-family: 'Bodoni Moda', serif; color: #2e103f; margin-bottom: 15px; font-size: 1.4rem; text-transform: uppercase; letter-spacing: 1px;">Hours</h4>
                        <p style="color: #555; line-height: 1.8; font-size: 1rem;">Mon-Sat: 11:00 AM - 8:30 PM<br/>Sunday: <span style="font-style: italic;">By Appointment Only</span></p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `;
}

function generateClothingCatalogHTML(niche) {
    const cats = [...new Set(niche.catalog.map(i => i.cat))];
    
    let itemsHtml = niche.catalog.map((item, index) => {
        // Make some items larger for editorial feel (Masonry style grid)
        const isFeatured = index % 5 === 0;
        const gridStyle = isFeatured ? 'grid-column: span 2; grid-row: span 2;' : '';
        const imgHeight = isFeatured ? '100%' : '350px';
        const dummyImgColor = isFeatured ? '#e8ded8' : '#f1ebe5';
        const featuredRibbon = isFeatured ? '<div style="position: absolute; top: 20px; left: -10px; background: #2e103f; color: #fff; padding: 5px 15px; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; z-index: 10; box-shadow: 2px 2px 5px rgba(0,0,0,0.2);">Featured</div>' : '';
        
        const originalPrice = Math.round(item.price * 1.3);
        const savedAmount = originalPrice - item.price;
        const discountPercent = Math.round((savedAmount / originalPrice) * 100);

        return `
        <div class="catalog-item-card" data-aos="fade-up" style="${gridStyle} display: flex; flex-direction: column; background: #fff; border: 1px solid #e0d5ce; position: relative; transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 40px rgba(46,16,63,0.1)'; this.style.borderColor='#2e103f';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'; this.style.borderColor='#e0d5ce';">
            ${featuredRibbon}
            <button class="wishlist-btn" onclick="this.classList.toggle('active')">
                <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
            <div style="height: ${imgHeight}; min-height: 350px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; background: #2e103f;">
                <img src="${isFeatured ? 'https://images.unsplash.com/photo-1610030469983-98e550d615ef?w=800&q=80' : 'https://images.unsplash.com/photo-1583391733958-d25e07fac04f?w=600&q=80'}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.95); transition: transform 0.6s ease;" class="brand-watermark" />
                <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(46,16,63,0.5), transparent 60%);"></div>
                <div style="position: absolute; top: 15px; right: 60px; background: rgba(255,255,255,0.95); padding: 5px 12px; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; color: #2e103f; border: 1px solid #e0d5ce; font-weight: 700; border-radius: 2px; z-index: 5;">${item.cat}</div>
            </div>
            <div style="padding: 30px; display: flex; flex-direction: column; flex-grow: 1; position: relative; z-index: 2; background: #fff;">
                <div style="display: flex; gap: 10px; margin-bottom: 12px;">
                    <span style="font-size: 0.7rem; color: #888; text-transform: uppercase; letter-spacing: 1px; border: 1px solid #eee; padding: 2px 8px;">Pure Handloom</span>
                    <span style="font-size: 0.7rem; color: #888; text-transform: uppercase; letter-spacing: 1px; border: 1px solid #eee; padding: 2px 8px;">Custom Fit</span>
                </div>
                <h4 style="font-family: 'Bodoni Moda', serif; font-size: 1.6rem; color: #2e103f; margin: 0 0 10px 0; font-weight: 400; line-height: 1.3;">${item.name}</h4>
                <div style="display: flex; gap: 6px; margin-bottom: 15px;">
                    <span class="size-pill">S</span>
                    <span class="size-pill active">M</span>
                    <span class="size-pill">L</span>
                    <span class="size-pill">XL</span>
                </div>
                <p style="color: #666; font-size: 0.95rem; line-height: 1.7; margin-bottom: 15px; flex-grow: 1;">${item.desc || 'Exquisite handcrafted detailing.'}</p>
                <div style="display: flex; gap: 8px; margin-bottom: 20px;">
                    <div class="color-swatch" style="background: #2e103f;"></div>
                    <div class="color-swatch" style="background: #e74c3c;"></div>
                    <div class="color-swatch" style="background: #f1c40f;"></div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 5px; margin-bottom: 20px;">
                    <div style="display: flex; align-items: baseline; gap: 10px;">
                        <span class="price-tag" style="font-family: 'Inter', sans-serif; font-weight: 600; color: #2e103f; font-size: 1.2rem; letter-spacing: 0.5px;">${formatPrice(item.price)}</span>
                        <span style="font-size: 0.9rem; color: #999; text-decoration: line-through;">${formatPrice(originalPrice)}</span>
                    </div>
                    <span style="color: #27ae60; font-size: 0.85rem; font-weight: 600;">You save ₹${savedAmount} (${discountPercent}% off)</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; border-top: 1px solid #f1ebe5; padding-top: 20px;">
                    <button onclick="openItemOrderModal('${niche.id}', '${item.name.replace(/'/g, "\\'")}', ${item.price})" style="width: 100%; background: #2e103f; border: 1px solid #2e103f; color: #fff; padding: 12px 20px; font-family: 'Inter', sans-serif; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1.5px; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.background='none'; this.style.color='#2e103f';" onmouseout="this.style.background='#2e103f'; this.style.color='#fff';">Book Trial</button>
                </div>
            </div>
        </div>
        `;
    }).join('');

    return `
    <style>
        .catalog-item-card:hover .brand-watermark {
            transform: scale(1.1);
        }
        .wishlist-btn {
            position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.9); border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; border: none; box-shadow: 0 2px 5px rgba(0,0,0,0.1); z-index: 20; transition: transform 0.2s;
        }
        .wishlist-btn:hover { transform: scale(1.1); }
        .wishlist-btn svg { width: 18px; height: 18px; fill: transparent; stroke: #2e103f; stroke-width: 2; transition: all 0.3s; }
        .wishlist-btn.active svg { fill: #e74c3c; stroke: #e74c3c; }

        .size-pill {
            border: 1px solid #ccc; border-radius: 20px; padding: 4px 10px; font-size: 0.7rem; color: #555; cursor: pointer; transition: all 0.2s;
        }
        .size-pill:hover, .size-pill.active { border-color: #2e103f; background: #2e103f; color: #fff; }
        
        .color-swatch {
            width: 16px; height: 16px; border-radius: 50%; border: 1px solid #ccc; cursor: pointer;
        }
        .catalog-filter-btn {
            background: transparent; color: #555; border: 1px solid #e0d5ce; padding: 10px 25px; font-family: 'Inter', sans-serif; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1.5px; cursor: pointer; transition: all 0.3s;
        }
        .catalog-filter-btn:hover {
            border-color: #2e103f; color: #2e103f;
        }
        .catalog-filter-btn.active {
            background: #2e103f; color: #fff; border-color: #2e103f;
        }
    </style>
    <div class="niche-page theme-clothing" style="font-family: 'Inter', sans-serif; background-color: #faf8f6; color: #333; min-height: 100vh;">
        <!-- Header -->
        <header class="niche-header" style="background: rgba(250, 248, 246, 0.95); border-bottom: 1px solid #e0d5ce; position: sticky; top: 0; z-index: 100; backdrop-filter: blur(10px);">
            <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center; padding: 20px;">
                <div class="niche-brand" style="display: flex; align-items: center; gap: 12px;">
                    ${niche.logoSvg}
                    <span style="font-family: 'Bodoni Moda', serif; font-size: 1.6rem; color: #2e103f; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">${niche.name}</span>
                </div>
                <div class="niche-nav-links" style="display: flex; gap: 30px;">
                    <button onclick="setNicheView('overview')" style="background:none; border:none; cursor:pointer; font-family: 'Inter', sans-serif; color: #777; letter-spacing: 1.5px; font-size: 0.85rem; transition: color 0.3s;" onmouseover="this.style.color='#2e103f'" onmouseout="this.style.color='#777'">THE ATELIER</button>
                    <button onclick="setNicheView('catalog')" style="background:none; border:none; cursor:pointer; font-family: 'Inter', sans-serif; color: #2e103f; font-weight: 600; letter-spacing: 1.5px; font-size: 0.85rem; transition: opacity 0.3s;">COLLECTION</button>
                </div>
                <button class="niche-btn-primary" onclick="openActionModal('${niche.id}')" style="background-color: #2e103f; color: #fff; border: 1px solid #2e103f; padding: 12px 30px; font-family: 'Inter', sans-serif; letter-spacing: 1.5px; cursor: pointer; text-transform: uppercase; font-size: 0.8rem; transition: all 0.3s;" onmouseover="this.style.backgroundColor='#fff'; this.style.color='#2e103f';" onmouseout="this.style.backgroundColor='#2e103f'; this.style.color='#fff';">Book Trial</button>
            </div>
        </header>

        <!-- Catalog Content -->
        <div class="niche-wrap" style="padding: 80px 20px;">
            <div style="text-align: center; margin-bottom: 60px;">
                <h1 style="font-family: 'Bodoni Moda', serif; font-size: 4rem; color: #2e103f; margin-bottom: 20px; font-weight: 400; text-transform: uppercase; letter-spacing: 1px;">The Lookbook</h1>
                <p style="color: #666; font-size: 1.15rem; max-width: 600px; margin: 0 auto;">Explore our curated selection of luxury ethnic wear, meticulously handcrafted for life's most precious moments.</p>
                
                <div class="catalog-filters" style="display: flex; justify-content: center; gap: 15px; margin-top: 50px; flex-wrap: wrap;">
                    <button class="catalog-filter-btn active" onclick="filterCatalogItems(this, 'all')"><span style="margin-right: 5px;">⊞</span> All Edits</button>
                    ${cats.map(cat => `<button class="catalog-filter-btn" onclick="filterCatalogItems(this, '${cat}')"><span style="margin-right: 5px;">✧</span> ${cat}</button>`).join('')}
                    <button class="catalog-filter-btn" onclick="OrbitexSearch.open('clothing')" style="background: #f1ebe5; color: #2e103f; border-color: #2e103f;"><span style="margin-right: 5px;">🔍</span> Search</button>
                </div>
            </div>

            <div class="catalog-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 40px; grid-auto-flow: dense;">
                ${itemsHtml}
            </div>
            
            <div style="text-align: center; margin-top: 80px; padding-top: 40px; border-top: 1px solid #e0d5ce;">
                <p style="font-family: 'Bodoni Moda', serif; font-size: 1.5rem; color: #2e103f; font-style: italic;">Don't see exactly what you're looking for?</p>
                <button onclick="openActionModal('${niche.id}')" style="background: none; border: none; color: #2e103f; border-bottom: 1px solid #2e103f; padding-bottom: 5px; font-family: 'Inter', sans-serif; letter-spacing: 1px; text-transform: uppercase; cursor: pointer; font-size: 0.9rem; margin-top: 15px;">Inquire about custom designs</button>
            </div>
        </div>
        
        <!-- BXGY Sticky Footer Banner -->
        <div style="position: fixed; bottom: 0; left: 0; width: 100%; background: #2e103f; color: #fff; text-align: center; padding: 12px 20px; z-index: 999; box-shadow: 0 -5px 15px rgba(0,0,0,0.1);">
            <div style="font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 600; letter-spacing: 1px; margin-bottom: 8px;">Buy 2 Get 1 Free! Add 1 more to unlock</div>
            <div style="width: 100%; max-width: 300px; height: 6px; background: rgba(255,255,255,0.2); margin: 0 auto; border-radius: 3px; overflow: hidden;">
                <div style="width: 66%; height: 100%; background: #d4af37;"></div>
            </div>
        </div>
    </div>
    `;
}
