function generateCafeOverviewHTML(niche) {
    return `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap');
        
        :root {
            --espresso: #4f2916;
            --latte: #faf6f0;
            --crema: #e5d9c5;
            --macchiato: #8b5a33;
        }

        .theme-cafe {
            font-family: 'IBM Plex Serif', serif;
            background-color: var(--latte);
            color: #333;
        }

        @keyframes cafeFloat {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(5deg); }
            100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes cafeSteam {
            0% { opacity: 0; transform: translateY(0) scale(1); }
            50% { opacity: 0.7; transform: translateY(-15px) scale(1.2); }
            100% { opacity: 0; transform: translateY(-30px) scale(1.5); }
        }

        .cafe-woodfire-icon {
            position: relative;
            display: inline-block;
        }
        .cafe-woodfire-icon::before, .cafe-woodfire-icon::after {
            content: '〰';
            position: absolute;
            color: var(--macchiato);
            font-size: 1.2rem;
            opacity: 0;
        }
        .cafe-woodfire-icon::before {
            top: -20px; left: 0;
            animation: cafeSteam 2.5s infinite;
        }
        .cafe-woodfire-icon::after {
            top: -15px; left: 12px;
            animation: cafeSteam 2.5s infinite 1.2s;
        }

        .cafe-card-lift {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            background: #fff;
            border: 1px solid var(--crema);
            padding: 30px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .cafe-card-lift:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(79, 41, 22, 0.15);
            border-color: var(--espresso);
            z-index: 10;
        }

        .cafe-ribbon {
            position: absolute;
            top: 15px;
            left: -10px;
            background: var(--espresso);
            color: var(--latte);
            padding: 4px 12px;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 4px;
            box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
            z-index: 2;
        }
        .cafe-ribbon::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            border-top: 8px solid #2a150b;
            border-left: 8px solid transparent;
        }

        .cafe-stat-badge {
            width: 160px;
            height: 160px;
            border-radius: 40px;
            border: 2px dashed var(--espresso);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: var(--latte);
            box-shadow: inset 0 0 0 6px var(--crema), 0 15px 25px rgba(79, 41, 22, 0.1);
            position: relative;
            transition: transform 0.3s ease;
        }
        .cafe-stat-badge:hover {
            transform: scale(1.05) rotate(5deg);
        }

        .zomato-rating {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            background: #cb202d;
            color: white;
            padding: 4px 10px;
            border-radius: 6px;
            font-weight: 700;
            font-size: 0.9rem;
            box-shadow: 0 4px 10px rgba(203, 32, 45, 0.3);
        }

        .masonry-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            padding: 20px 0;
        }
        .masonry-item {
            border-radius: 20px;
            overflow: hidden;
            position: relative;
        }
        .masonry-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
        }
        .masonry-item:hover img {
            transform: scale(1.1);
        }
        .masonry-item:nth-child(2n) {
            transform: translateY(30px);
        }

        .category-popup-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(250, 246, 240, 0.85);
            backdrop-filter: blur(10px);
            z-index: 1000;
            display: none;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .category-popup-content {
            background: #fff;
            padding: 40px;
            border-radius: 30px;
            border: 2px solid var(--espresso);
            box-shadow: 0 25px 50px rgba(79, 41, 22, 0.2);
            max-width: 800px;
            width: 90%;
            position: relative;
            transform: scale(0.9);
            transition: transform 0.3s;
        }
        .category-popup-overlay.active {
            display: flex;
            opacity: 1;
        }
        .category-popup-overlay.active .category-popup-content {
            transform: scale(1);
        }
        
        .cat-circle {
            text-align: center;
            cursor: pointer;
            transition: all 0.3s;
        }
        .cat-circle img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid var(--crema);
            margin-bottom: 10px;
            transition: all 0.3s;
        }
        .cat-circle:hover img {
            border-color: var(--espresso);
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(79, 41, 22, 0.2);
        }
    </style>

    <div class="niche-page theme-cafe">
        <!-- Header -->
        <header class="niche-header" style="background: rgba(250, 246, 240, 0.95); border-bottom: 1px solid var(--crema); backdrop-filter: blur(10px); position: sticky; top: 0; z-index: 100;">
            <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center; padding: 15px 20px;">
                <div class="niche-brand" style="display: flex; align-items: center; gap: 10px;">
                    ${niche.logoSvg}
                    <span style="font-size: 1.6rem; color: var(--espresso); font-weight: 700; letter-spacing: 0.5px;">${niche.name}</span>
                </div>
                <div class="niche-nav-links" style="display: flex; gap: 25px; align-items: center;">
                    <button onclick="setNicheView('overview')" style="background:none; border:none; cursor:pointer; font-family: inherit; color: var(--espresso); font-weight: 600; font-size: 1.05rem;">Story</button>
                    <button onclick="setNicheView('catalog')" style="background:none; border:none; cursor:pointer; font-family: inherit; color: #555; font-size: 1.05rem; transition: color 0.2s;" onmouseover="this.style.color='var(--espresso)'" onmouseout="this.style.color='#555'">Menu</button>
                    <button onclick="toggleCategoryPopup()" style="background:none; border:none; cursor:pointer; font-family: inherit; color: #555; font-size: 1.05rem; text-decoration: underline;">Categories</button>
                </div>
                <button class="niche-btn-primary" onclick="openActionModal('${niche.id}')" style="background-color: var(--espresso); color: var(--latte); border: none; padding: 12px 24px; font-family: inherit; cursor: pointer; border-radius: 30px; font-weight: 600; box-shadow: 0 4px 12px rgba(79, 41, 22, 0.2); transition: all 0.3s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 15px rgba(79, 41, 22, 0.3)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(79, 41, 22, 0.2)';">Reserve Table</button>
            </div>
        </header>

        <!-- Cross-sell Strip -->
        <div style="background: var(--espresso); color: var(--latte); text-align: center; padding: 10px; font-size: 0.95rem; letter-spacing: 1px;">
            Pair your meal with: Garlic Bread ₹149 | Tiramisu ₹249 | House Wine ₹399
        </div>

        <!-- Hero -->
        <section style="position: relative; overflow: hidden; padding: 80px 20px; min-height: 85vh; display: flex; align-items: center; background: linear-gradient(135deg, var(--latte) 0%, #f2e9d8 100%);">
            <div class="niche-wrap" style="position: relative; z-index: 2; max-width: 1200px; display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center;" data-aos="fade-up">
                <div style="background: rgba(250, 246, 240, 0.98); padding: 50px; border: 2px solid var(--espresso); border-radius: 40px; box-shadow: 15px 15px 0px rgba(79, 41, 22, 0.1); position: relative;">
                    <div style="display: inline-flex; align-items: center; gap: 10px; color: var(--macchiato); font-weight: 700; font-size: 0.9rem; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 25px;">
                        <span class="cafe-woodfire-icon">🔥</span> 450°C WOODFIRE BRICK OVEN
                    </div>
                    <h1 style="font-size: 3.8rem; color: var(--espresso); line-height: 1.15; margin-bottom: 25px; text-shadow: 2px 2px 4px rgba(0,0,0,0.05);">${niche.tagline}</h1>
                    <p style="font-size: 1.15rem; line-height: 1.8; color: #555; margin-bottom: 35px;">Experience authentic Tuscan flavors right here in Nagpur. Hand-rolled pasta, woodfire pizzas, and Italian romance on every plate.</p>
                    <button onclick="setNicheView('catalog')" style="background-color: var(--espresso); color: var(--latte); border: none; padding: 16px 35px; font-family: inherit; font-size: 1.1rem; cursor: pointer; border-radius: 30px; box-shadow: 0 8px 20px rgba(79, 41, 22, 0.25); transition: all 0.3s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.backgroundColor='#2a150b';" onmouseout="this.style.transform='translateY(0)'; this.style.backgroundColor='var(--espresso)';">Explore Menu</button>
                </div>
                <div style="height: 650px; position: relative; border-radius: 40px; overflow: hidden; box-shadow: -20px 20px 0px rgba(79, 41, 22, 0.15);" data-aos="zoom-in" data-aos-delay="200">
                    <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" alt="Ambiance" style="width: 100%; height: 100%; object-fit: cover;" />
                    <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(79,41,22,0.4) 0%, transparent 50%);"></div>
                </div>
            </div>
        </section>

        <!-- About / Ambiance Gallery -->
        <section style="padding: 100px 20px; background-color: var(--latte); position: relative;" data-aos="fade-up">
            <div class="niche-wrap" style="max-width: 1100px; margin: 0 auto; text-align: center;">
                <h2 style="font-size: 3rem; color: var(--espresso); margin-bottom: 20px;">The Experience</h2>
                <p style="font-size: 1.25rem; line-height: 1.9; color: #444; margin-bottom: 50px; font-weight: 500;">
                    Imported brick oven. Fresh pasta. Live acoustic music in a beautiful Tuscan garden.
                </p>
                
                <div class="masonry-grid">
                    <div class="masonry-item" style="height: 300px;"><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" alt="Interior"></div>
                    <div class="masonry-item" style="height: 400px;"><img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80" alt="Pizza"></div>
                    <div class="masonry-item" style="height: 300px;"><img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80" alt="Seating"></div>
                    <div class="masonry-item" style="height: 350px;"><img src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80" alt="Pasta"></div>
                    <div class="masonry-item" style="height: 250px;"><img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80" alt="Wine"></div>
                    <div class="masonry-item" style="height: 350px;"><img src="https://images.unsplash.com/photo-1571877227200-a0d98ea6cbac?w=800&q=80" alt="Tiramisu"></div>
                </div>
            </div>
        </section>

        <!-- Specialties Section -->
        <section style="padding: 100px 20px; background: #fff;" data-aos="fade-up">
            <div class="niche-wrap">
                <div style="text-align: center; margin-bottom: 60px;">
                    <h2 style="font-size: 3rem; color: var(--espresso); margin: 0;">Signature Creations</h2>
                    <p style="color: #666; font-style: italic; margin-top: 10px; font-size: 1.1rem;">Crafted with passion and imported ingredients</p>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 40px;">
                    <!-- Specialty 1 -->
                    <div class="cafe-card-lift" data-aos="fade-up" data-aos-delay="100">
                        <div class="cafe-ribbon">Bestseller</div>
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px; margin-top: 10px;">
                            <h3 style="font-size: 2rem; color: #333; margin: 0;">Neapolitan Woodfire Pizza</h3>
                            <span title="Vegetarian" style="border: 2px solid #16a34a; color: #16a34a; border-radius: 50%; width: 22px; height: 22px; display: inline-flex; align-items: center; justify-content: center; font-size: 10px;">🟢</span>
                        </div>
                        <p style="color: #666; font-style: italic; font-size: 1.1rem; line-height: 1.6;">San Marzano tomatoes, fresh buffalo mozzarella, basil, 450°C bake.</p>
                    </div>
                    <!-- Specialty 2 -->
                    <div class="cafe-card-lift" data-aos="fade-up" data-aos-delay="200">
                        <div class="cafe-ribbon" style="background:var(--macchiato);">Chef's Pick</div>
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px; margin-top: 10px;">
                            <h3 style="font-size: 2rem; color: #333; margin: 0;">Handmade Fettuccine</h3>
                            <span title="Vegetarian" style="border: 2px solid #16a34a; color: #16a34a; border-radius: 50%; width: 22px; height: 22px; display: inline-flex; align-items: center; justify-content: center; font-size: 10px;">🟢</span>
                        </div>
                        <p style="color: #666; font-style: italic; font-size: 1.1rem; line-height: 1.6;">Hand-rolled daily, tossed in truffle mushroom cream sauce.</p>
                    </div>
                    <!-- Specialty 3 -->
                    <div class="cafe-card-lift" data-aos="fade-up" data-aos-delay="300">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px; margin-top: 10px;">
                            <h3 style="font-size: 2rem; color: #333; margin: 0;">Chicken Parmigiana</h3>
                            <span title="Non-Vegetarian" style="border: 2px solid #dc2626; color: #dc2626; border-radius: 50%; width: 22px; height: 22px; display: inline-flex; align-items: center; justify-content: center; font-size: 10px;">🔴</span>
                        </div>
                        <p style="color: #666; font-style: italic; font-size: 1.1rem; line-height: 1.6;">Breaded chicken breast, marinara, melted provolone on a bed of spaghetti.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats -->
        <section style="padding: 80px 20px; border-bottom: 1px solid var(--crema); background: var(--latte);" data-aos="fade-up">
            <div class="niche-wrap" style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 40px;">
                <div class="cafe-stat-badge">
                    <div style="font-size: 3rem; color: var(--espresso); line-height: 1;">4.7★</div>
                    <div style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; color: #666; margin-top: 10px; font-weight: 700;">Zomato</div>
                </div>
                <div class="cafe-stat-badge">
                    <div style="font-size: 3rem; color: var(--espresso); line-height: 1;">120+</div>
                    <div style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; color: #666; margin-top: 10px; font-weight: 700;">Dishes</div>
                </div>
                <div class="cafe-stat-badge">
                    <div style="font-size: 3rem; color: var(--espresso); line-height: 1;">450°C</div>
                    <div style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; color: #666; margin-top: 10px; font-weight: 700;">Woodfire</div>
                </div>
            </div>
        </section>

        <!-- Category Popup -->
        <div class="category-popup-overlay" id="cafeCategoryPopup" onclick="toggleCategoryPopup(event)">
            <div class="category-popup-content" onclick="event.stopPropagation()">
                <button onclick="toggleCategoryPopup()" style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #555;">&times;</button>
                <h3 style="text-align: center; font-size: 2rem; color: var(--espresso); margin-bottom: 30px;">Explore Menu</h3>
                <div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
                    <div class="cat-circle" onclick="goToCatalog('Appetizers')">
                        <img src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&q=80" alt="Appetizers">
                        <h4>Appetizers</h4>
                    </div>
                    <div class="cat-circle" onclick="goToCatalog('Wood-Fire Pizza')">
                        <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80" alt="Pizza">
                        <h4>Pizzas</h4>
                    </div>
                    <div class="cat-circle" onclick="goToCatalog('Pasta')">
                        <img src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80" alt="Pasta">
                        <h4>Pasta</h4>
                    </div>
                    <div class="cat-circle" onclick="goToCatalog('Desserts')">
                        <img src="https://images.unsplash.com/photo-1571877227200-a0d98ea6cbac?w=400&q=80" alt="Desserts">
                        <h4>Desserts</h4>
                    </div>
                    <div class="cat-circle" onclick="goToCatalog('Beverages')">
                        <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80" alt="Beverages">
                        <h4>Beverages</h4>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <script>
        function toggleCategoryPopup(e) {
            const popup = document.getElementById('cafeCategoryPopup');
            popup.classList.toggle('active');
        }
        function goToCatalog(category) {
            setNicheView('catalog');
            // Assuming filterCatalogItems is globally accessible after view switch, might need a timeout
            setTimeout(() => {
                const btns = document.querySelectorAll('.catalog-filter-btn');
                btns.forEach(b => { if(b.innerText.includes(category)) b.click(); });
            }, 300);
        }
        
        if (typeof OrbitexHellobar !== 'undefined') {
            OrbitexHellobar.show({
                text: "Today's Chef Special: Truffle Mushroom Risotto — available for 4h 15m more ⏰",
                bgColor: "#4f2916",
                textColor: "#faf6f0"
            });
        }
    </script>
    `;
}

function generateCafeCatalogHTML(niche) {
    const cats = [...new Set(niche.catalog.map(i => i.cat))];
    const courseOrder = ["Starters", "Wood-Fire Pizza", "Pasta", "Mains", "Burgers", "Desserts", "Beverages"];
    cats.sort((a, b) => {
        let indexA = courseOrder.indexOf(a);
        let indexB = courseOrder.indexOf(b);
        if(indexA === -1) indexA = 99;
        if(indexB === -1) indexB = 99;
        if(indexA !== indexB) return indexA - indexB;
        return a.localeCompare(b);
    });

    let menuSections = '';

    cats.forEach((cat, idx) => {
        const items = niche.catalog.filter(i => i.cat === cat);
        let itemsHtml = items.map(item => {
            const vegIcon = item.isVeg !== false 
                ? '<span title="Vegetarian" style="border: 2px solid #16a34a; color: #16a34a; border-radius: 50%; width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center; font-size: 8px; flex-shrink: 0; box-shadow: 0 2px 4px rgba(22,163,74,0.1);">🟢</span>' 
                : '<span title="Non-Vegetarian" style="border: 2px solid #dc2626; color: #dc2626; border-radius: 50%; width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center; font-size: 8px; flex-shrink: 0; box-shadow: 0 2px 4px rgba(220,38,38,0.1);">🔴</span>';
            
            const spiceLevel = (item.name.toLowerCase().includes('spicy') || item.desc?.toLowerCase().includes('chilli')) ? 'Spice Level: 🌶️🌶️' : '';
            
            return \`
            <div class="catalog-item-card" style="display: flex; gap: 20px; margin-bottom: 20px; align-items: flex-start; padding: 20px; transition: all 0.3s; border-radius: 20px; background: #fff; border: 1px solid var(--crema);" 
                 onmouseover="this.style.borderColor='var(--espresso)'; this.style.boxShadow='0 10px 20px rgba(79, 41, 22, 0.1)';" 
                 onmouseout="this.style.borderColor='var(--crema)'; this.style.boxShadow='none';">
                <img src="\${item.image || niche.heroImage}" alt="\${item.name}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 12px; flex-shrink: 0;" />
                <div style="flex-grow: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <h4 style="font-size: 1.3rem; color: var(--espresso); margin: 0; display: flex; align-items: center; gap: 8px;">
                            \${item.name} \${vegIcon}
                        </h4>
                        <span style="font-weight: 700; color: #333; font-size: 1.2rem;">\${formatPrice(item.price)}</span>
                    </div>
                    <p style="font-style: italic; color: #666; font-size: 1rem; margin: 0; line-height: 1.5; margin-bottom: 15px;">\${item.desc || 'Prepared with fresh ingredients.'}</p>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div style="font-size: 0.85rem; color: #888; display: flex; gap: 15px;">
                            <span>⏱ 15 min</span>
                            \${spiceLevel ? \`<span>\${spiceLevel}</span>\` : ''}
                        </div>
                        <div style="display: flex; gap: 10px;">
                            <button onclick="openItemOrderModal('\${niche.id}', '\${item.name.replace(/'/g, "\\\\'")}', \${item.price})" style="background: var(--latte); color: var(--espresso); border: 1px solid var(--espresso); padding: 6px 15px; border-radius: 20px; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='var(--crema)'" onmouseout="this.style.background='var(--latte)'">Dine-In</button>
                            <button onclick="openItemOrderModal('\${niche.id}', '\${item.name.replace(/'/g, "\\\\'")}', \${item.price})" style="background: var(--espresso); color: #fff; border: none; padding: 6px 15px; border-radius: 20px; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='#2a150b'" onmouseout="this.style.background='var(--espresso)'">Takeaway</button>
                        </div>
                    </div>
                </div>
            </div>\`;
        }).join('');

        menuSections += \`
        <div style="margin-bottom: 50px;" data-aos="fade-up">
            <h3 style="font-size: 2rem; color: #333; margin: 0 0 20px 0; border-bottom: 2px dashed var(--crema); padding-bottom: 10px;">\${cat}</h3>
            <div style="max-width: 900px; margin: 0 auto;">
                \${itemsHtml}
            </div>
        </div>
        \`;
    });

    return \`
    <style>
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap');
        
        :root {
            --espresso: #4f2916;
            --latte: #faf6f0;
            --crema: #e5d9c5;
        }
        
        .theme-cafe {
            font-family: 'IBM Plex Serif', serif;
            background-color: var(--latte);
            color: #333;
        }

        .catalog-filter-btn {
            background: transparent; color: #555; border: 1px solid var(--crema); padding: 8px 20px; font-family: inherit; cursor: pointer; transition: all 0.3s; border-radius: 30px; font-size: 0.95rem; margin-bottom: 10px;
        }
        .catalog-filter-btn:hover {
            border-color: var(--espresso); color: var(--espresso);
        }
        .catalog-filter-btn.active {
            background: var(--espresso); color: #fff; border-color: var(--espresso);
        }
        .veg-filter-pill {
            display: inline-flex; align-items: center; gap: 5px; background: #fff; border: 1px solid #ccc; padding: 6px 15px; border-radius: 20px; cursor: pointer; font-size: 0.9rem;
        }
        .veg-filter-pill.veg-active { border-color: #16a34a; background: #f0fdf4; color: #16a34a; }
        .veg-filter-pill.nonveg-active { border-color: #dc2626; background: #fef2f2; color: #dc2626; }
    </style>

    <div class="niche-page theme-cafe" style="padding-bottom: 80px;">
        <!-- Header -->
        <header class="niche-header" style="background: rgba(250, 246, 240, 0.95); border-bottom: 1px solid var(--crema); position: sticky; top: 0; z-index: 100; backdrop-filter: blur(10px);">
            <div class="niche-wrap" style="display: flex; justify-content: space-between; align-items: center; padding: 15px 20px;">
                <div class="niche-brand" style="display: flex; align-items: center; gap: 10px;">
                    \${niche.logoSvg}
                    <span style="font-size: 1.6rem; color: var(--espresso); font-weight: 700; letter-spacing: 0.5px;">\${niche.name}</span>
                </div>
                <div class="niche-nav-links" style="display: flex; gap: 25px; align-items: center;">
                    <button onclick="setNicheView('overview')" style="background:none; border:none; cursor:pointer; font-family: inherit; color: #555; font-size: 1.05rem;">Story</button>
                    <button onclick="setNicheView('catalog')" style="background:none; border:none; cursor:pointer; font-family: inherit; color: var(--espresso); font-weight: 600; font-size: 1.05rem;">Menu</button>
                    <button onclick="if(typeof OrbitexSearch !== 'undefined') OrbitexSearch.open('cafe')" style="background:none; border:none; cursor:pointer; font-size: 1.2rem;" title="Search Menu">🔍</button>
                </div>
            </div>
        </header>

        <!-- Menu Content -->
        <div class="niche-wrap" style="padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 50px;" data-aos="fade-down">
                <h1 style="font-size: 3.5rem; color: var(--espresso); margin-bottom: 15px;">Our Menu</h1>
                
                <div style="display: flex; justify-content: center; gap: 15px; margin-bottom: 20px;">
                    <div class="veg-filter-pill" onclick="this.classList.toggle('veg-active')">🟢 Veg Only</div>
                    <div class="veg-filter-pill" onclick="this.classList.toggle('nonveg-active')">🔴 Non-Veg</div>
                </div>

                <div class="catalog-filters" style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
                    <button class="catalog-filter-btn active" onclick="filterCatalogItems(this, 'all')">All</button>
                    \${cats.map(cat => \`<button class="catalog-filter-btn" onclick="filterCatalogItems(this, '\${cat}')">\${cat}</button>\`).join('')}
                </div>
            </div>

            <div class="catalog-grid" style="position: relative;">
                \${menuSections}
            </div>
        </div>
    </div>

    <script>
        if (typeof OrbitexMobileNav !== 'undefined') {
            OrbitexMobileNav.init([
                { label: 'Menu', icon: '🍽️', action: () => setNicheView('catalog') },
                { label: 'Reserve', icon: '📅', action: () => openActionModal('${niche.id}') },
                { label: 'Order', icon: '🛵', action: () => window.scrollTo(0,0) },
                { label: 'Cart', icon: '🛒', action: () => alert('Cart opened') }
            ]);
        }
    </script>
    \`;
}
