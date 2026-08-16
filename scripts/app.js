/* ==========================================================================
   Orbitex Portfolio App Engine (v4) — Lean Coordinator
   Delegates all niche rendering to individual niche-*.js modules
   ========================================================================== */

// 10 Business Niches Comprehensive Data Store (Exhaustive Indian Catalogs)
const NICHES_DATA = {
  salon: {
    id: 'salon',
    name: 'Aranya Hair & Skin Studio',
    tagline: 'Botanical Hair & Skin Care',
    category: 'services',
    theme: 'theme-salon',
    heroImage: 'images/salon.jpg',
    spanClass: 'bento-span-8',
    logoSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c89b53" stroke-width="2"><path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z"/></svg>`,
    catalog: [
      { id: 's1', name: 'Precision Haircut & Blowdry Finish', cat: 'Hair Cut & Styling', price: 450, desc: 'Personalized consultation, scalp wash, conditioning & master stylist cut.' },
      { id: 's2', name: 'Advanced Organic Keratin Smooth Treatment', cat: 'Hair Spa & Keratin', price: 3500, desc: 'Formaldehyde-free organic smoothing treatment for frizzy hair lasting 4 months.' },
      { id: 's3', name: 'French Balayage & Ombre Hair Color', cat: 'Hair Color', price: 4200, desc: 'Hand-painted dimension highlights with gloss toner & ammonia-free pigment.' },
      { id: 's4', name: 'Olaplex Hair Bond Reconstruction Spa', cat: 'Hair Spa & Keratin', price: 2200, desc: 'Restores broken disulfide hair bonds damaged by heat styling or bleaching.' },
      { id: 's5', name: 'Hydra Glow Derma Facial Ritual', cat: 'Skin Facials', price: 2800, desc: '6-step deep cleansing, hyaluronic acid infusion & LED collagen therapy.' },
      { id: 's6', name: 'Ayurvedic Botanical Radiance Facial', cat: 'Skin Facials', price: 1500, desc: 'Saffron, sandalwood, and manjistha extract facial for instant skin brightening.' },
      { id: 's7', name: 'Charcoal Detan & Exfoliating Scrub', cat: 'Skin Facials', price: 950, desc: 'Removes deep sun tan, unclogs pores, and restores natural skin tone.' },
      { id: 's8', name: 'Airbrush HD Luxury Bridal Makeup', cat: 'Bridal Couture', price: 18500, desc: 'Complete HD makeup, hair design, saree draping, lashes, and trial run.' },
      { id: 's9', name: 'Engagement & Sangeet Glam Styling', cat: 'Bridal Couture', price: 8500, desc: 'Long-lasting dewy makeup look with designer hair updos and dupatta setting.' },
      { id: 's10', name: 'Party Glam Makeup & Hair Styling', cat: 'Bridal Couture', price: 4500, desc: 'Sophisticated event makeup tailored for wedding guests & receptions.' },
      { id: 's11', name: 'Groom Executive Haircut & Beard Sculpting', cat: 'Mens Grooming', price: 650, desc: 'Precision haircut, beard shaping, hot towel facial massage & styling.' },
      { id: 's12', name: 'Organic Rose Spa Pedicure & Manicure', cat: 'Nail & Pedicure', price: 1400, desc: 'Foot soak, cuticle care, rose petal scrub, massage & gel polish finish.' },
      { id: 's13', name: 'Full Body Rica Wax & Tan Removal', cat: 'Waxing & Threading', price: 1800, desc: 'Brazilian Rica wax for arms, legs, underarms, and bikini with tan removal mask.' },
      { id: 's14', name: 'Eyebrow Threading & Shape Design', cat: 'Waxing & Threading', price: 60, desc: 'Clean eyebrow threading with arch correction by expert technician.' },
      { id: 's15', name: 'Classic French Gel Nail Art (Set of 10)', cat: 'Nail & Pedicure', price: 1200, desc: 'UV gel nail art with 10 custom hand-painted designs with top coat seal.' },
      { id: 's16', name: 'Hair Rebonding / Japanese Straightening', cat: 'Hair Spa & Keratin', price: 5500, desc: 'Permanent straightening with protein bonding, lasting 8-12 months.' },
      { id: 's17', name: 'Root Touch-Up Global Hair Color (L\'Oréal)', cat: 'Hair Color', price: 1200, desc: 'Ammonia-free root touch-up with L\'Oréal INOA professional color system.' },
      { id: 's18', name: 'Anti-Ageing Collagen Boost Facial', cat: 'Skin Facials', price: 3200, desc: 'Micro-current lift therapy with marine collagen mask for firming and wrinkle reduction.' }
    ]
  },

  clinic: {
    id: 'clinic',
    name: 'Shubh Dental Clinic',
    tagline: 'Advanced NABH Multispecialty Care',
    category: 'health',
    theme: 'theme-clinic',
    heroImage: 'images/clinic.jpg',
    spanClass: 'bento-span-4',
    logoSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#006d77" stroke-width="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-4H7v-2h4V7h2v4h4v2h-4v4z"/></svg>`,
    catalog: [
      { id: 'c1', name: 'Comprehensive Dental Checkup & RVG Digital X-Ray', cat: 'Diagnostic', price: 300, desc: 'Full intraoral camera screening, digital radiation X-ray & treatment plan.' },
      { id: 'c2', name: 'Ultrasonic Scaling & Tooth Polishing', cat: 'Preventive', price: 1200, desc: 'Removes tartar plaque buildup, stain removal, and gum tone restoration.' },
      { id: 'c3', name: 'Single-Seating Rotary Root Canal (RCT)', cat: 'Root Canal (RCT)', price: 3800, desc: 'Painless 45-minute procedure under local anesthesia with apex locator precision.' },
      { id: 'c4', name: 'Micro-Endodontic Laser RCT', cat: 'Root Canal (RCT)', price: 5500, desc: 'Advanced laser sterilization of root canals for maximum infection elimination.' },
      { id: 'c5', name: 'Zirconia CAD/CAM Metal-Free Crown', cat: 'Crowns & Bridges', price: 6500, desc: 'High strength translucent tooth crown with 15-year warranty.' },
      { id: 'c6', name: 'US-FDA Approved Clear Invisalign Aligners', cat: 'Orthodontics', price: 95000, desc: 'Invisible custom aligners set with 3D digital simulation.' },
      { id: 'c7', name: 'In-Office Zoom Laser Teeth Whitening', cat: 'Cosmetic', price: 4500, desc: 'Lightens discolored teeth by up to 8 shades in a single 60-minute session.' },
      { id: 'c8', name: 'Osstem Dental Implant (Single Tooth)', cat: 'Surgery & Implants', price: 25000, desc: 'Korean Titanium implant fixture with permanent ceramic crown.' },
      { id: 'c9', name: 'Ceramic Braces with Self-Ligating System', cat: 'Orthodontics', price: 35000, desc: 'Tooth-colored brackets for discreet orthodontic treatment, includes retainer.' },
      { id: 'c10', name: 'Full Mouth Rehabilitation (Complete)', cat: 'Cosmetic', price: 150000, desc: 'Complete smile makeover with veneers, crowns, and implant-supported prosthetics.' },
      { id: 'c11', name: 'Dental Composite Tooth Filling', cat: 'Preventive', price: 800, desc: 'Tooth-colored composite resin filling for cavities, seamless aesthetic finish.' },
      { id: 'c12', name: 'Child Fluoride Application & Sealant', cat: 'Pediatric', price: 500, desc: 'Protective fluoride varnish and pit-fissure sealant for children under 14.' },
      { id: 'c13', name: 'Wisdom Tooth Surgical Extraction', cat: 'Surgery & Implants', price: 3500, desc: 'Impacted third molar extraction under local anesthesia with sutures.' },
      { id: 'c14', name: 'General Physician OPD Consultation', cat: 'General OPD', price: 200, desc: 'Walk-in consultation with MBBS physician for fever, cold, infections.' },
      { id: 'c15', name: 'ECG + Blood Pressure + Sugar Test', cat: 'Diagnostic', price: 450, desc: 'Quick cardiac ECG reading with BP and fasting blood glucose screening.' },
      { id: 'c16', name: 'Full Body Health Checkup Package', cat: 'Diagnostic', price: 2500, desc: 'CBC, lipid profile, thyroid, liver, kidney function, urine, and vitamin tests.' }
    ]
  },

  jeweller: {
    id: 'jeweller',
    name: 'Heritage Jewellers',
    tagline: '100% BIS Hallmarked Pure Gold',
    category: 'retail',
    theme: 'theme-jeweller',
    heroImage: 'images/jeweller.jpg',
    spanClass: 'bento-span-6',
    logoSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>`,
    catalog: [
      { id: 'j1', name: '22K Kundan Temple Bridal Choker Set (45g)', cat: 'Gold Necklaces', price: 285000, desc: 'Royal Laxmi motif temple artwork set with matching jhumkas in 22K (916 Hallmarked).' },
      { id: 'j2', name: '22K Antique Floral Gold Hararam Necklace (38g)', cat: 'Gold Necklaces', price: 240000, desc: 'Traditional long wedding hararam with antique nakshi gold finish.' },
      { id: 'j3', name: '22K Solid Gold Churi Bangle Set 4-pc (28g)', cat: 'Gold Bangles', price: 175000, desc: 'Classic Indian bride bangles with intricate laser filigree engraving.' },
      { id: 'j4', name: '18K Solitaire Diamond Ring (0.75 Carat)', cat: 'Diamonds', price: 95000, desc: 'IGI certified VVS-EF round brilliant solitaire set in 18K white gold band.' },
      { id: 'j5', name: '18K VVS Diamond Drop Earrings (1.2ct Total)', cat: 'Diamonds', price: 85000, desc: 'Elegant chandelier diamond earrings perfect for evening galas.' },
      { id: 'j6', name: '999 Purity Pure Silver Laxmi Coin (10g)', cat: 'Silver & Coins', price: 950, desc: 'Auspicious Dhanteras & Diwali gift coin with 999 purity hallmark stamp.' },
      { id: 'j7', name: '925 Silver Antique Pooja Thali Set (500g)', cat: 'Silver & Coins', price: 42000, desc: 'Heavy silver thali with diyas, kalash, bell, and agarbatti holder.' },
      { id: 'j8', name: '22K Gold Kaasu Mala Coin Necklace (32g)', cat: 'Gold Necklaces', price: 202000, desc: 'Traditional South Indian coin necklace in 916 hallmarked gold.' },
      { id: 'j9', name: '22K Gold Mangalsutra with Diamond Pendant', cat: 'Mangalsutra', price: 48000, desc: 'Daily wear mangalsutra with small diamond pendant and black beads chain.' },
      { id: 'j10', name: '22K Gold Payal / Anklet Pair (12g)', cat: 'Gold Bangles', price: 76000, desc: 'Elegant gold anklets with ghungroo charm work for bridal trousseau.' },
      { id: 'j11', name: '18K Diamond Tennis Bracelet (3ct Total)', cat: 'Diamonds', price: 175000, desc: 'Round brilliant cut diamonds set in 18K white gold bracelet.' },
      { id: 'j12', name: '22K Gold Jhumka Earrings (15g)', cat: 'Gold Earrings', price: 95000, desc: 'Traditional temple jhumkas with dome shape and pearl drops.' },
      { id: 'j13', name: '24K Gold Bar (10g) MMTC-PAMP', cat: 'Gold Investment', price: 74700, desc: 'Investment grade 999.9 fine gold bar with tamper-proof packaging.' },
      { id: 'j14', name: '22K Baby Gold Bangle Set (8g)', cat: 'Gold Bangles', price: 50000, desc: 'Lightweight adjustable baby bangles with bell charms for naming ceremony.' }
    ]
  },

  cakeshop: {
    id: 'cakeshop',
    name: 'Fiesta Patisserie & Bakery',
    tagline: 'Artisanal Cakes & Gourmet Cafe',
    category: 'food',
    theme: 'theme-cakeshop',
    heroImage: 'images/cakeshop.jpg',
    spanClass: 'bento-span-6',
    logoSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s2-1 4-1 4 1 4 1 2-1 4-1 4 1 4 1"/><path d="M2 21h20"/></svg>`,
    catalog: [
      { id: 'b1', name: 'Belgian Dark Chocolate Truffle Cake (1 Kg)', cat: 'Custom Cakes', price: 850, desc: 'Rich 70% dark Belgian ganache layered with moist chocolate sponge.' },
      { id: 'b2', name: 'Red Velvet Cream Cheese Layer Cake (1 Kg)', cat: 'Custom Cakes', price: 950, desc: 'Classic crimson sponge with smooth vanilla bean cream cheese frosting.' },
      { id: 'b3', name: 'Pastel Korean Bento Birthday Cake (300g)', cat: 'Bento Mini Cakes', price: 380, desc: 'Cute aesthetic birthday cake packaged in an eco-friendly bento box.' },
      { id: 'b4', name: 'French Macaron Gift Box (Set of 6)', cat: 'Pastries & Desserts', price: 420, desc: 'Flavors: Pistachio, Raspberry, Salted Caramel, Dark Chocolate, Passionfruit & Vanilla.' },
      { id: 'b5', name: 'Classic Blueberry New York Cheesecake Slice', cat: 'Pastries & Desserts', price: 190, desc: 'Dense baked cream cheesecake topped with wild blueberry compote.' },
      { id: 'b6', name: '36-Hour Fermented Garlic Sourdough Loaf', cat: 'Artisan Breads', price: 160, desc: 'Slow fermented naturally leavened crusty bread infused with roasted garlic & herbs.' },
      { id: 'b7', name: 'Butterscotch Crunch Pastry', cat: 'Pastries & Desserts', price: 120, desc: 'Layers of choux pastry with butterscotch cream and praline crunch topping.' },
      { id: 'b8', name: 'Eggless Vanilla Rainbow Cake (1 Kg)', cat: 'Eggless Range', price: 750, desc: '100% eggless rainbow layered vanilla cake with whipped cream frosting.' },
      { id: 'b9', name: 'Custom Photo Cake with Edible Print (1 Kg)', cat: 'Custom Cakes', price: 1100, desc: 'Personalized cake with your photo printed on edible rice paper icing.' },
      { id: 'b10', name: 'Tiered Fondant Wedding Cake (3 Tier, 5 Kg)', cat: 'Wedding Cakes', price: 4500, desc: 'Custom designed 3-tier fondant cake with sugar flowers and toppers.' },
      { id: 'b11', name: 'Assorted Cookie Gift Tin (500g)', cat: 'Cookies & Brownies', price: 350, desc: 'Butter cookies, chocolate chip, almond biscotti in festive tin packaging.' },
      { id: 'b12', name: 'Double Chocolate Fudge Brownies (Box of 6)', cat: 'Cookies & Brownies', price: 280, desc: 'Dense, gooey center brownies with dark chocolate chunks and walnut topping.' },
      { id: 'b13', name: 'Whole Wheat Multigrain Bread Loaf', cat: 'Artisan Breads', price: 90, desc: 'Healthy 100% whole wheat bread with oats, flax, and sunflower seeds.' },
      { id: 'b14', name: 'Mango Mousse Cake (500g, Seasonal)', cat: 'Pastries & Desserts', price: 450, desc: 'Light Alphonso mango mousse layered on almond sponge, summer special.' },
      { id: 'b15', name: 'Croissant Plain / Chocolate (Each)', cat: 'Artisan Breads', price: 80, desc: 'Freshly laminated French butter croissant, available plain or with Belgian chocolate.' },
      { id: 'b16', name: 'Pull-Apart Garlic Cheese Bread', cat: 'Artisan Breads', price: 140, desc: 'Soft dinner rolls stuffed with garlic butter and mozzarella cheese.' }
    ]
  },

  tuition: {
    id: 'tuition',
    name: 'Master\'s Academy',
    tagline: 'Leading Entrance Coaching Institute',
    category: 'education',
    theme: 'theme-tuition',
    heroImage: 'images/tuition.jpg',
    spanClass: 'bento-span-4',
    logoSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#881337" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    catalog: [
      { id: 't1', name: '2-Year Integrated Classroom Program (Class 11 & 12 JEE)', cat: 'JEE Main & Adv', price: 145000, desc: 'Comprehensive coverage of Physics, Chemistry, Maths, Kota DPPs & AIR Test Series.' },
      { id: 't2', name: '1-Year Dropper / Repeater Intensive Batch (JEE)', cat: 'JEE Main & Adv', price: 95000, desc: 'Fast-track problem-solving focus for 12th passed students targeting IITs.' },
      { id: 't3', name: '2-Year NEET Medical Champion Batch (Class 11 & 12)', cat: 'NEET Medical', price: 130000, desc: 'NCERT biology deep dive, botany, zoology, chemistry & physics lab tests.' },
      { id: 't4', name: 'Class 10th Board + NTSE & Foundation Batch', cat: 'Foundation (8-10th)', price: 45000, desc: 'Strengthens Math & Science concepts for board exams & early JEE/NEET grounding.' },
      { id: 't5', name: 'All India Computer-Based JEE Mock Test Series (30 CBTs)', cat: 'Test Series', price: 8500, desc: 'NTA pattern online CBT test series with national AIR rank predictor report.' },
      { id: 't6', name: '1-Year NEET Dropper Intensive Batch', cat: 'NEET Medical', price: 85000, desc: 'Crash + regular batch combo for NEET re-attempt with biology marathon sessions.' },
      { id: 't7', name: 'Class 8th Foundation Science & Maths', cat: 'Foundation (8-10th)', price: 35000, desc: 'Early talent nurture program covering NCERT + Olympiad level problems.' },
      { id: 't8', name: 'Online Live Interactive Batch (JEE/NEET)', cat: 'Online Programs', price: 65000, desc: 'Live classes with chat doubt-solving, recorded lectures, and weekly tests.' },
      { id: 't9', name: 'NEET All India Mock Test Series (25 CBTs)', cat: 'Test Series', price: 7500, desc: 'NTA pattern bio-focused test series with topic-wise & full-length mocks.' },
      { id: 't10', name: 'Scholarship-cum-Admission Test (FREE)', cat: 'Scholarship', price: 0, desc: 'Free aptitude test for scholarship up to 90% fee waiver based on merit.' },
      { id: 't11', name: 'Weekend Batch — Class 9 & 10 (Sat-Sun Only)', cat: 'Foundation (8-10th)', price: 28000, desc: 'School-compatible weekend classes covering Science, Maths & Mental Ability.' },
      { id: 't12', name: 'Personal Doubt Resolution Sessions (10-pack)', cat: 'Add-ons', price: 5000, desc: '1-on-1 faculty sessions for clearing specific topic doubts (PCM/PCB).' }
    ]
  },

  gym: {
    id: 'gym',
    name: 'Pulse Fit Club & Arena',
    tagline: 'High-Performance Athletic Arena',
    category: 'health',
    theme: 'theme-gym',
    heroImage: 'images/gym.jpg',
    spanClass: 'bento-span-8',
    logoSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#84cc16" stroke-width="2"><path d="M6 5v14M18 5v14M2 9h4M18 9h4M2 15h4M18 15h4M6 12h12"/></svg>`,
    catalog: [
      { id: 'g1', name: 'Monthly All-Access Fitness Membership', cat: 'Memberships', price: 2500, desc: 'Full access to cardio deck, strength arena, locker room & steam bath.' },
      { id: 'g2', name: '3-Month Fat Loss Transformation Pass', cat: 'Memberships', price: 6500, desc: 'Includes InBody scanner body comp analysis & customized workout plan.' },
      { id: 'g3', name: 'Annual Elite VIP All-Access Membership', cat: 'Memberships', price: 18000, desc: 'Best value pass with 2 free PT sessions & 6 guest passes included.' },
      { id: 'g4', name: '1-on-1 Personal Training (12 Sessions Pack)', cat: 'Personal Training', price: 7500, desc: 'Dedicated certified coach focusing on progressive overload & nutrition.' },
      { id: 'g5', name: 'Steam Sauna & Hydro Recovery (10-Pass Card)', cat: 'Recovery', price: 1800, desc: 'Infrared steam sauna access to soothe aching joints and speed recovery.' },
      { id: 'g6', name: 'Couples Fitness Membership (Monthly)', cat: 'Memberships', price: 4000, desc: 'Discounted dual membership for couples training together.' },
      { id: 'g7', name: 'CrossFit Functional Training Batch (Monthly)', cat: 'Group Classes', price: 3500, desc: 'High-intensity functional workouts: WODs, kettlebells, battle ropes & box jumps.' },
      { id: 'g8', name: 'Yoga & Meditation Morning Batch (Monthly)', cat: 'Group Classes', price: 2000, desc: 'Hatha & Vinyasa yoga sessions 6-7 AM with guided pranayama meditation.' },
      { id: 'g9', name: 'Zumba Dance Fitness Class (Monthly)', cat: 'Group Classes', price: 1800, desc: 'High-energy Latin dance cardio workout with certified Zumba instructor.' },
      { id: 'g10', name: 'Boxing & MMA Fundamentals (Monthly)', cat: 'Group Classes', price: 4000, desc: 'Learn boxing stance, combos, kick drills, and bag work with MMA coach.' },
      { id: 'g11', name: 'Diet & Nutrition Plan (One-time)', cat: 'Nutrition', price: 2000, desc: 'Customized macro-based diet chart from certified sports nutritionist.' },
      { id: 'g12', name: 'InBody Body Composition Scan', cat: 'Recovery', price: 300, desc: 'Advanced bioelectrical impedance analysis showing muscle, fat, water levels.' },
      { id: 'g13', name: 'Student Special Monthly Pass (with ID)', cat: 'Memberships', price: 1500, desc: 'Discounted membership for school/college students with valid student ID.' },
      { id: 'g14', name: '6-Month Muscle Building Program', cat: 'Personal Training', price: 12000, desc: 'Progressive overload program with bi-weekly PT sessions and diet plan.' }
    ]
  },

  cafe: {
    id: 'cafe',
    name: 'Linguini Bistro & Woodfire Kitchen',
    tagline: 'Authentic Italian & Continental Bistro',
    category: 'food',
    theme: 'theme-cafe',
    heroImage: 'images/cafe.jpg',
    spanClass: 'bento-span-6',
    logoSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9a3412" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>`,
    catalog: [
      { id: 'f1', name: 'Classic Margherita Basilico Woodfire Pizza', cat: 'Woodfire Pizzas', price: 380, isVeg: true, desc: 'San Marzano tomato sauce, fresh buffalo mozzarella fior di latte, basil.' },
      { id: 'f2', name: 'Truffle Wild Mushroom & Burrata Pizza', cat: 'Woodfire Pizzas', price: 540, isVeg: true, desc: 'Creamy burrata ball, porcini mushroom ragu, black truffle oil drizzle.' },
      { id: 'f3', name: 'Smoked Chicken & Jalapeño Fiesta Pizza', cat: 'Woodfire Pizzas', price: 580, isVeg: false, desc: 'Hickory smoked chicken, pickled jalapeños, red onions, smoked scamorza.' },
      { id: 'f4', name: 'Handcrafted Creamy Fettuccine Alfredo', cat: 'Handmade Pasta', price: 360, isVeg: true, desc: 'Ribbon pasta tossed in aged Parmesan butter cream sauce with garlic.' },
      { id: 'f5', name: 'Authentic Venetian Tiramisu', cat: 'Desserts', price: 280, isVeg: true, desc: 'Ladyfinger biscuits soaked in espresso layered with mascarpone cream.' },
      { id: 'f6', name: 'Penne Arrabbiata (Spicy Tomato)', cat: 'Handmade Pasta', price: 320, isVeg: true, desc: 'Al dente penne in fiery San Marzano tomato sauce with garlic and red chili flakes.' },
      { id: 'f7', name: 'Chicken Pesto Penne Pasta', cat: 'Handmade Pasta', price: 420, isVeg: false, desc: 'Grilled chicken breast with fresh basil pesto cream, sundried tomatoes, parmesan.' },
      { id: 'f8', name: 'BBQ Pulled Chicken Burger', cat: 'Burgers & Sides', price: 350, isVeg: false, desc: 'Slow-cooked pulled chicken with smoky BBQ sauce, coleslaw, brioche bun.' },
      { id: 'f9', name: 'Paneer Tikka Stuffed Garlic Bread', cat: 'Starters', price: 280, isVeg: true, desc: 'Tandoori paneer tikka stuffed inside cheesy garlic bread with mint chutney.' },
      { id: 'f10', name: 'Classic Caesar Salad with Croutons', cat: 'Starters', price: 260, isVeg: true, desc: 'Romaine lettuce, parmesan shavings, garlic croutons, house Caesar dressing.' },
      { id: 'f11', name: 'Signature Hazelnut Cold Brew Coffee', cat: 'Beverages', price: 180, isVeg: true, desc: '18-hour cold brewed single origin with hazelnut syrup and oat milk.' },
      { id: 'f12', name: 'Fresh Basil Lemonade / Mojito (Virgin)', cat: 'Beverages', price: 150, isVeg: true, desc: 'Muddled basil, lime, mint, and sparkling soda — refreshing summer drink.' },
      { id: 'f13', name: 'Hot Chocolate Fondant (Lava Cake)', cat: 'Desserts', price: 320, isVeg: true, desc: 'Warm chocolate cake with molten center, served with vanilla bean ice cream.' },
      { id: 'f14', name: 'Bruschetta Trio (Tomato, Olive, Ricotta)', cat: 'Starters', price: 240, isVeg: true, desc: 'Three toasted sourdough slices with diced tomato, kalamata olive, and ricotta toppings.' },
      { id: 'f15', name: 'Mushroom Risotto with Truffle Oil', cat: 'Mains', price: 450, isVeg: true, desc: 'Creamy Arborio rice risotto with wild mushrooms, parmesan, and truffle oil finish.' },
      { id: 'f16', name: 'Grilled Chicken Steak with Mashed Potato', cat: 'Mains', price: 520, isVeg: false, desc: 'Herb marinated chicken breast with garlic mashed potatoes and peppercorn sauce.' }
    ]
  },

  clothing: {
    id: 'clothing',
    name: 'Sutra Designer Ethnic & Couture',
    tagline: 'High-Fashion Handloom & Bridal Wear',
    category: 'retail',
    theme: 'theme-clothing',
    heroImage: 'images/clothing.jpg',
    spanClass: 'bento-span-6',
    logoSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2e103f" stroke-width="2"><path d="M20.38 3.46L16 2a4 4 0 0 0-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>`,
    catalog: [
      { id: 'cl1', name: 'Pure Kanjeevaram Gold Zari Silk Saree', cat: 'Pure Silk Sarees', price: 14500, desc: 'Heavy contrast border in crimson red with pure gold zari weave (Includes blouse).' },
      { id: 'cl2', name: 'Handcrafted Banarasi Katan Silk Jaal Saree', cat: 'Pure Silk Sarees', price: 18000, desc: 'Pure katan silk with intricate floral jaal weaving across saree body.' },
      { id: 'cl3', name: 'Heavy Zardosi Velvet Bridal Lehenga Set', cat: 'Bridal Lehengas', price: 85000, desc: 'Velvet lehenga with dabka and sequin embroidery, double net dupatta.' },
      { id: 'cl4', name: 'Royal Velvet Designer Mens Sherwani Set', cat: 'Menswear Couture', price: 28000, desc: 'Zardosi collared sherwani with silk churidar, safa, and stole.' },
      { id: 'cl5', name: 'Organza Pearl Work Designer Saree', cat: 'Designer Sarees', price: 8500, desc: 'Lightweight organza saree with hand-sewn pearl and sequin border work.' },
      { id: 'cl6', name: 'Chanderi Silk Cotton Printed Saree', cat: 'Cotton & Daily Wear', price: 3200, desc: 'Elegant Chanderi silk-cotton blend with traditional block prints, daily wear.' },
      { id: 'cl7', name: 'Georgette Sequin Cocktail Lehenga', cat: 'Bridal Lehengas', price: 35000, desc: 'Ready-to-wear sequin lehenga for sangeet and cocktail parties.' },
      { id: 'cl8', name: 'Jodhpuri Bandhgala Suit Set', cat: 'Menswear Couture', price: 15000, desc: 'Structured Jodhpuri suit with trouser, pocket square, and matching brooch.' },
      { id: 'cl9', name: 'Ikat Handloom Pochampally Saree', cat: 'Cotton & Daily Wear', price: 4500, desc: 'Telangana Ikat double-weave cotton saree with geometric patterns.' },
      { id: 'cl10', name: 'Embroidered Anarkali Suit Set', cat: 'Salwar & Suits', price: 6500, desc: 'Floor-length Anarkali with thread embroidery, churidar, and net dupatta.' },
      { id: 'cl11', name: 'Patola Silk Double Ikat Saree (Patan)', cat: 'Pure Silk Sarees', price: 45000, desc: 'Rare Patan Patola handwoven double-ikat silk with geometric motifs.' },
      { id: 'cl12', name: 'Lucknowi Chikankari Kurta Set (Women)', cat: 'Salwar & Suits', price: 3800, desc: 'Hand-embroidered Lucknowi chikankari on pure cotton kurta with palazzo.' },
      { id: 'cl13', name: 'Bridal Dupatta (Heavy Zari Border)', cat: 'Bridal Lehengas', price: 12000, desc: 'Net dupatta with heavy scallop zari border and mukaish work for bridal look.' },
      { id: 'cl14', name: 'Cotton Linen Casual Kurta (Men)', cat: 'Menswear Couture', price: 1800, desc: 'Breathable cotton-linen blend kurta for daily wear in pastel shades.' }
    ]
  },

  realestate: {
    id: 'realestate',
    name: 'Green Realestate',
    tagline: 'RERA Approved Smart Luxury Properties',
    category: 'services',
    theme: 'theme-realestate',
    heroImage: 'images/realestate.jpg',
    spanClass: 'bento-span-8',
    logoSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#044e3a" stroke-width="2"><path d="M3 21h18M5 21V7l8-4 8 4v14M9 18h6M9 14h6M9 10h6"/></svg>`,
    catalog: [
      { id: 'r1', name: '2 BHK Smart Luxury Apartment (1050 Sq.Ft)', cat: 'Residential', price: 4850000, desc: 'Vastu compliant, 2 bathrooms, 2 balconies, modular kitchen & covered parking.' },
      { id: 'r2', name: '3 BHK Premium Golf View Residence (1520 Sq.Ft)', cat: 'Residential', price: 7200000, desc: 'Corner apartment with panoramic views, walk-in closet & servant room.' },
      { id: 'r3', name: '4 BHK Sky Villa Penthouse (2400 Sq.Ft)', cat: 'Luxury Penthouses', price: 13500000, desc: 'Duplex penthouse with private terrace plunge pool and wooden deck.' },
      { id: 'r4', name: 'Road-Facing Ground Floor Commercial Showroom (650 Sq.Ft)', cat: 'Commercial', price: 5500000, desc: 'High footfall main road exposure ideal for retail brand or bank ATM.' },
      { id: 'r5', name: '1 BHK Compact Smart Home (620 Sq.Ft)', cat: 'Residential', price: 2850000, desc: 'Ideal for young professionals, smart lock, modular kitchen, gym access.' },
      { id: 'r6', name: '200 Sq.Yd NA Residential Plot', cat: 'Plots & Land', price: 3200000, desc: 'Clear title NA plot with compound wall, ready for construction.' },
      { id: 'r7', name: '3 BHK Row House with Garden (1800 Sq.Ft)', cat: 'Villas & Houses', price: 9500000, desc: 'Independent row house with private garden, parking, and terrace.' },
      { id: 'r8', name: 'Pre-Leased Commercial Office (1200 Sq.Ft)', cat: 'Commercial', price: 8500000, desc: 'Already leased to IT company, generating 7% rental yield, 5-year lock-in.' },
      { id: 'r9', name: '5 BHK Independent Bungalow (3500 Sq.Ft)', cat: 'Villas & Houses', price: 25000000, desc: 'Ultra-luxury villa with swimming pool, home theater, and landscaped garden.' },
      { id: 'r10', name: 'Farm House Land (1 Acre)', cat: 'Plots & Land', price: 4500000, desc: 'Agricultural land near highway, ideal for farmhouse or weekend home project.' }
    ]
  },

  tiffin: {
    id: 'tiffin',
    name: 'Bangre Homemade Tiffin & Catering',
    tagline: 'Fresh Homely Meals Delivered Daily',
    category: 'food',
    theme: 'theme-tiffin',
    heroImage: 'images/tiffin.jpg',
    spanClass: 'bento-span-4',
    logoSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    catalog: [
      { id: 'tf1', name: 'Executive Veg Thali Tiffin (Monthly Subscription)', cat: 'Monthly Plans', price: 3200, desc: '4 Butter Rotis, Special Paneer Sabzi, Dry Veg, Dal Fry, Jeera Rice, Salad & Sweet.' },
      { id: 'tf2', name: 'Mini Student Meal Tiffin (Monthly Subscription)', cat: 'Monthly Plans', price: 2200, desc: '4 Phulka Rotis, Seasonal Veg Sabzi, Dal Tadka, Steamed Rice & Salad.' },
      { id: 'tf3', name: 'Deluxe Special Non-Veg Tiffin (3x/Week Chicken)', cat: 'Monthly Plans', price: 4500, desc: 'Veg thali on weekdays + Home-style Chicken Curry on Wed/Fri/Sun.' },
      { id: 'tf4', name: 'Sunday Royal Feast Box (Single Order)', cat: 'Single Orders', price: 250, desc: 'Veg Biryani, Butter Paneer, Dal Makhani, Gulab Jamun & Mirchi Salan.' },
      { id: 'tf5', name: 'Diet / Jain Tiffin (Monthly Subscription)', cat: 'Monthly Plans', price: 3000, desc: 'No onion, no garlic. Roti, Jain dal, sabzi, rice, and salad daily.' },
      { id: 'tf6', name: 'Breakfast Tiffin Add-on (Monthly)', cat: 'Add-ons', price: 1800, desc: 'Rotating breakfast: Poha, Upma, Paratha, Idli-Sambar, Aloo Puri.' },
      { id: 'tf7', name: 'Party / Event Catering (Per Plate, Min 50)', cat: 'Catering', price: 350, desc: 'Full thali: 2 sabzi, dal, rice, raita, 4 roti, papad, sweet, salad.' },
      { id: 'tf8', name: 'Corporate Lunch Box (Monthly, Office)', cat: 'Monthly Plans', price: 3800, desc: 'Premium corporate thali: Paneer/Chicken rotation, rice, roti, dal, dessert.' },
      { id: 'tf9', name: 'Weekend Special Biryani Box (Sat-Sun)', cat: 'Single Orders', price: 180, desc: 'Hyderabadi veg/chicken dum biryani with raita and mirchi salan.' },
      { id: 'tf10', name: 'Sweet Box (Ladoo/Barfi, 500g)', cat: 'Add-ons', price: 250, desc: 'Homemade Besan Ladoo or Kaju Katli for festivals and occasions.' },
      { id: 'tf11', name: 'Bulk Office Catering (Per Head, Min 100)', cat: 'Catering', price: 280, desc: 'Buffet style service with 3 sabzi, dal, rice, roti, dessert, beverages.' },
      { id: 'tf12', name: 'Trial Tiffin (3-Day Sampler)', cat: 'Single Orders', price: 350, desc: 'Try before you subscribe: 3 consecutive days of our Executive Thali.' }
    ]
  }
};

// Global App State
let currentNicheId = null;
let currentView = 'overview';
let currentCategoryFilter = 'all';
let isOwnerMode = false;

// Initialize Engine
document.addEventListener('DOMContentLoaded', () => {
  renderPortfolioGrid();
  setupEventListeners();
});

// Render Main Portfolio Asymmetric Bento Grid
function renderPortfolioGrid() {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const nicheKeys = Object.keys(NICHES_DATA);
  const filteredKeys = nicheKeys.filter(key => {
    if (currentCategoryFilter === 'all') return true;
    return NICHES_DATA[key].category === currentCategoryFilter;
  });

  const featurePillsMap = {
    salon: ['🌿 Organic Spa Booking', '✂️ Stylist Profiles', '✨ Before/After Slider'],
    clinic: ['🩺 Tele-Consultation', '👨‍⚕️ Doctor Profiles', '📋 Treatment Pipeline'],
    jeweller: ['💎 Live Gold Rate', '🔍 2x2 Image Zoom', '✨ BIS 916 Hallmark'],
    cakeshop: ['🎂 3-Step Cake Builder', '⏱️ Same-Day Delivery', '🧁 Eggless Badges'],
    tuition: ['📚 JEE/NEET Mocks', '📊 Course Comparison', '🏆 Toppers Showcase'],
    gym: ['💪 BMI Progress Meter', '🏋️ Supplement Shop', '📅 Class Schedules'],
    cafe: ['🍕 Veg/Non-Veg Chips', '🍷 Cross-Sell Slider', '⏱️ Prep Time Hints'],
    clothing: ['👗 3-Tier Mega Menu', '🎁 BXGY Promo Bar', '🎥 Video Lookbook'],
    realestate: ['🏢 3D Map Locator', '📊 EMI Calculator', '🛡️ RERA Verified'],
    tiffin: ['🍱 Rotating Thali Plate', '🗺️ Pincode Checker', '🌙 Dark Slate Theme']
  };

  filteredKeys.forEach((key, index) => {
    const niche = NICHES_DATA[key];
    const card = document.createElement('div');
    card.className = `bento-card ${niche.spanClass}`;
    card.setAttribute('data-category', niche.category);
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', String((index % 4) * 100));
    
    const pills = featurePillsMap[key] || ['✨ High-Conversion', '📱 Mobile Ready'];
    const pillsHTML = pills.map(p => `<span class="template-feature-pill">${p}</span>`).join('');

    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${niche.heroImage}" alt="${niche.name}" loading="lazy">
        <div class="card-badge">${niche.category}</div>
        <div class="card-ready-badge">✓ Client Ready</div>
      </div>
      <div class="card-body">
        <div class="template-pills-row">${pillsHTML}</div>
        <h3>${niche.name}</h3>
        <div class="card-tagline">${niche.tagline}</div>
        <p class="card-desc">${niche.catalog.length}+ Services & Products with INR (₹) pricing, search drawer & booking engine.</p>
        <div class="card-footer">
          <button class="btn-launch" onclick="launchNiche('${niche.id}', 'overview')">
            <span>Explore Site</span> →
          </button>
          <button class="btn-catalog-quick" onclick="launchNiche('${niche.id}', 'catalog')">
            <span>Catalog (₹)</span>
          </button>
          <button class="btn-use-template" onclick="openClientAccessModal('${niche.id}')" title="Deploy this template for your business">
            <span>Use Template ↗</span>
          </button>
          ${niche.id === 'tiffin' ? '<a href="bangre tiffin sample.html" target="_blank" class="btn-catalog-quick btn-standalone-html" style="text-decoration:none; background: linear-gradient(135deg, #ea580c, #f97316); color: white; border: none;" onclick="event.stopPropagation()"><span>Standalone HTML ↗</span></a>' : ''}
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  if (window.OrbitexAOS) OrbitexAOS.refresh();
}

// Filter Portfolio Grid by Category
function filterPortfolioCategory(category, btnElement) {
  currentCategoryFilter = category;
  document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderPortfolioGrid();
}

// Global Event Listeners
function setupEventListeners() {
  document.querySelectorAll('.niche-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const nicheId = btn.getAttribute('data-niche');
      if (nicheId === 'home') {
        showHomePortfolio();
      } else {
        launchNiche(nicheId, 'overview');
      }
    });
  });

  const overlay = document.getElementById('orbitexModalOverlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }
}

// Show Home Portfolio
function showHomePortfolio() {
  currentNicheId = null;
  document.getElementById('portfolioHomeView').style.display = 'block';
  document.getElementById('nicheViewContainer').style.display = 'none';

  if (window.OrbitexHellobar) OrbitexHellobar.remove();
  if (window.OrbitexMobileNav) OrbitexMobileNav.remove();

  document.querySelectorAll('.niche-btn').forEach(btn => btn.classList.remove('active'));
  const homeBtn = document.querySelector('.niche-btn[data-niche="home"]');
  if (homeBtn) homeBtn.classList.add('active');

  document.getElementById('viewSubnavContainer').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (window.OrbitexAOS) OrbitexAOS.refresh();
}

// Launch Niche Site
function launchNiche(nicheId, viewMode = 'overview') {
  if (!NICHES_DATA[nicheId]) return;

  currentNicheId = nicheId;
  currentView = viewMode;

  document.querySelectorAll('.niche-btn').forEach(btn => btn.classList.remove('active'));
  const activeNicheBtn = document.querySelector(`.niche-btn[data-niche="${nicheId}"]`);
  if (activeNicheBtn) activeNicheBtn.classList.add('active');

  const subnavContainer = document.getElementById('viewSubnavContainer');
  subnavContainer.style.display = 'flex';
  updateSubnavTabs();

  document.getElementById('portfolioHomeView').style.display = 'none';
  const container = document.getElementById('nicheViewContainer');
  container.style.display = 'block';

  renderNicheView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Set View Mode (Overview or Catalog)
function setNicheView(viewMode) {
  if (!currentNicheId) return;
  currentView = viewMode;
  updateSubnavTabs();
  renderNicheView();
}

function updateSubnavTabs() {
  document.querySelectorAll('.view-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.getAttribute('data-view') === currentView) {
      tab.classList.add('active');
    }
  });
}

// Master Render Dispatcher — delegates to niche-specific modules
function renderNicheView() {
  const container = document.getElementById('nicheViewContainer');
  const niche = NICHES_DATA[currentNicheId];
  if (!niche || !container) return;

  // Each niche-*.js file defines: generate{Name}OverviewHTML(niche) and generate{Name}CatalogHTML(niche)
  const generators = {
    salon:      { overview: generateSalonOverviewHTML,      catalog: generateSalonCatalogHTML },
    clinic:     { overview: generateClinicOverviewHTML,      catalog: generateClinicCatalogHTML },
    jeweller:   { overview: generateJewellerOverviewHTML,    catalog: generateJewellerCatalogHTML },
    cakeshop:   { overview: generateCakeShopOverviewHTML,    catalog: generateCakeShopCatalogHTML },
    tuition:    { overview: generateTuitionOverviewHTML,     catalog: generateTuitionCatalogHTML },
    gym:        { overview: generateGymOverviewHTML,         catalog: generateGymCatalogHTML },
    cafe:       { overview: generateCafeOverviewHTML,        catalog: generateCafeCatalogHTML },
    clothing:   { overview: generateClothingOverviewHTML,    catalog: generateClothingCatalogHTML },
    realestate: { overview: generateRealEstateOverviewHTML,  catalog: generateRealEstateCatalogHTML },
    tiffin:     { overview: generateTiffinOverviewHTML,      catalog: generateTiffinCatalogHTML }
  };

  const gen = generators[currentNicheId];
  if (!gen) return;

  if (currentView === 'overview') {
    container.innerHTML = gen.overview(niche);
  } else {
    container.innerHTML = gen.catalog(niche);
  }

  // Refresh scroll animations
  if (window.OrbitexAOS) OrbitexAOS.refresh();
}

// Catalog filter utility (used by niche catalog pages)
function filterCatalogItems(btnEl, category) {
  // Update active filter button
  const filterContainer = btnEl.parentElement;
  filterContainer.querySelectorAll('.catalog-filter-btn').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');

  // Filter cards
  const cardsContainer = filterContainer.parentElement.querySelector('.catalog-grid, .catalog-container, [data-catalog-grid]');
  if (!cardsContainer) return;

  cardsContainer.querySelectorAll('[data-cat]').forEach(card => {
    if (category === 'All' || card.getAttribute('data-cat') === category) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// Format price utility
function formatPrice(price) {
  if (price === 0) return 'FREE';
  if (price >= 10000000) return '₹' + (price / 10000000).toFixed(2) + ' Cr';
  if (price >= 100000) return '₹' + (price / 100000).toFixed(1) + ' Lakhs';
  return '₹' + price.toLocaleString('en-IN');
}

// Owner mode toggle for tiffin
function toggleOwnerMode() {
  isOwnerMode = !isOwnerMode;
  renderNicheView();
}

// Widget Calculators
function calcGoldPrice() {
  const input = document.getElementById('goldGramInput');
  const result = document.getElementById('goldCalcResult');
  if (!input || !result) return;
  const grams = parseFloat(input.value) || 0;
  const total = (grams * 6850).toLocaleString('en-IN');
  result.innerText = `Estimated Value: ₹${total}`;
}

function calcBMI() {
  const w = parseFloat(document.getElementById('bmiWeight').value) || 0;
  const h = parseFloat(document.getElementById('bmiHeight').value) || 0;
  const res = document.getElementById('bmiResult');
  if (w <= 0 || h <= 0 || !res) return;
  const bmi = (w / ((h / 100) * (h / 100))).toFixed(1);
  let status = 'Normal Weight';
  if (bmi < 18.5) status = 'Underweight';
  else if (bmi > 24.9) status = 'Overweight';
  res.innerText = `Your BMI: ${bmi} (${status})`;
}

function calcEMI() {
  const amountLakhs = parseFloat(document.getElementById('emiAmount').value) || 50;
  document.getElementById('emiAmountVal').innerText = `₹${amountLakhs} Lakhs`;
  const P = amountLakhs * 100000;
  const r = 8.5 / 12 / 100;
  const n = 240;
  const emi = Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  document.getElementById('emiResult').innerText = `Estimated EMI: ₹${emi.toLocaleString('en-IN')} / month`;
}

// Action Modals
function openActionModal(nicheId) {
  const niche = NICHES_DATA[nicheId];
  if (!niche) return;

  const overlay = document.getElementById('orbitexModalOverlay');
  const content = document.getElementById('modalBodyContent');

  content.innerHTML = `
    <h2 style="font-size:22px; margin-bottom:8px; color:#1a1918;">Book / Inquire with ${niche.name}</h2>
    <p style="font-size:13.5px; color:#5c5955; margin-bottom:20px;">Fill details for instant confirmation.</p>
    <form onsubmit="handleFormSubmit(event, '${niche.name}')">
      <div style="margin-bottom:14px;">
        <label style="display:block; font-size:12px; color:#5c5955; margin-bottom:4px; font-weight:700;">YOUR NAME</label>
        <input type="text" required placeholder="Full Name" style="width:100%; padding:10px; border-radius:8px; border:1px solid #1a1918; background:#efece6; color:#1a1918;">
      </div>
      <div style="margin-bottom:14px;">
        <label style="display:block; font-size:12px; color:#5c5955; margin-bottom:4px; font-weight:700;">PHONE NUMBER</label>
        <input type="tel" required placeholder="+91 98765 43210" style="width:100%; padding:10px; border-radius:8px; border:1px solid #1a1918; background:#efece6; color:#1a1918;">
      </div>
      <button type="submit" class="btn-launch" style="width:100%; justify-content:center; padding:12px;">Submit Request</button>
    </form>
  `;

  overlay.classList.add('open');
}

function openItemOrderModal(nicheId, itemName, price) {
  const niche = NICHES_DATA[nicheId];
  if (!niche) return;

  const overlay = document.getElementById('orbitexModalOverlay');
  const content = document.getElementById('modalBodyContent');

  content.innerHTML = `
    <h2 style="font-size:22px; margin-bottom:6px; color:#1a1918;">Select Service: ${itemName}</h2>
    <div style="font-size:20px; font-weight:800; color:#c85a32; margin-bottom:16px;">Price: ₹${price.toLocaleString('en-IN')}</div>
    <form onsubmit="handleFormSubmit(event, '${itemName} (${niche.name})')">
      <div style="margin-bottom:14px;">
        <label style="display:block; font-size:12px; color:#5c5955; margin-bottom:4px; font-weight:700;">YOUR NAME</label>
        <input type="text" required placeholder="Enter name" style="width:100%; padding:10px; border-radius:8px; border:1px solid #1a1918; background:#efece6; color:#1a1918;">
      </div>
      <div style="margin-bottom:14px;">
        <label style="display:block; font-size:12px; color:#5c5955; margin-bottom:4px; font-weight:700;">MOBILE NUMBER</label>
        <input type="tel" required placeholder="+91 XXXXX XXXXX" style="width:100%; padding:10px; border-radius:8px; border:1px solid #1a1918; background:#efece6; color:#1a1918;">
      </div>
      <button type="submit" class="btn-launch" style="width:100%; justify-content:center; padding:12px;">Confirm Selection</button>
    </form>
  `;

  overlay.classList.add('open');
}

// Client Template Access Onboarding Modal
function openClientAccessModal(presetNicheId = '') {
  const overlay = document.getElementById('orbitexModalOverlay');
  const content = document.getElementById('modalBodyContent');

  const nicheOptions = Object.keys(NICHES_DATA).map(key => {
    const n = NICHES_DATA[key];
    const selected = (key === presetNicheId) ? 'selected' : '';
    return `<option value="${n.id}" ${selected}>${n.name} (${n.category.toUpperCase()})</option>`;
  }).join('');

  content.innerHTML = `
    <div style="text-align: center; margin-bottom: 18px;">
      <div style="display:inline-block; font-size: 28px; margin-bottom: 6px;">🚀</div>
      <h2 style="font-size:22px; color:#1a1918; margin-bottom: 4px;">Get Template Access</h2>
      <p style="font-size:13px; color:#5c5955;">Deploy this production-ready template for your business in 24 hours.</p>
    </div>
    <form onsubmit="handleClientAccessSubmit(event)">
      <div style="margin-bottom:12px;">
        <label style="display:block; font-size:11px; color:#5c5955; margin-bottom:4px; font-weight:700; text-transform:uppercase;">Select Template</label>
        <select id="accessTemplateSelect" style="width:100%; padding:10px; border-radius:8px; border:1px solid #1a1918; background:#efece6; color:#1a1918; font-family:inherit;">
          ${nicheOptions}
        </select>
      </div>
      <div style="margin-bottom:12px;">
        <label style="display:block; font-size:11px; color:#5c5955; margin-bottom:4px; font-weight:700; text-transform:uppercase;">Your Business Name</label>
        <input type="text" required placeholder="e.g. Apex Dental Clinic" style="width:100%; padding:10px; border-radius:8px; border:1px solid #1a1918; background:#efece6; color:#1a1918; font-family:inherit;">
      </div>
      <div style="margin-bottom:12px;">
        <label style="display:block; font-size:11px; color:#5c5955; margin-bottom:4px; font-weight:700; text-transform:uppercase;">WhatsApp / Phone Number</label>
        <input type="tel" required placeholder="+91 98765 43210" style="width:100%; padding:10px; border-radius:8px; border:1px solid #1a1918; background:#efece6; color:#1a1918; font-family:inherit;">
      </div>
      <div style="margin-bottom:16px;">
        <label style="display:block; font-size:11px; color:#5c5955; margin-bottom:4px; font-weight:700; text-transform:uppercase;">Desired Domain / Subdomain</label>
        <input type="text" placeholder="e.g. yourbusiness.orbitexapp.tech or yourdomain.com" style="width:100%; padding:10px; border-radius:8px; border:1px solid #1a1918; background:#efece6; color:#1a1918; font-family:inherit;">
      </div>
      <button type="submit" class="btn-launch" style="width:100%; justify-content:center; padding:12px; font-weight:700;">
        <span>Request Client Access →</span>
      </button>
    </form>
  `;

  overlay.classList.add('open');
}

function handleClientAccessSubmit(e) {
  e.preventDefault();
  closeModal();
  if (window.OrbitexToast) {
    OrbitexToast.success('Thank you! Orbitex team will contact you on WhatsApp within 2 hours with template access.');
  } else {
    alert('Thank you! Orbitex team will contact you shortly.');
  }
}

function handleFormSubmit(e, serviceName) {
  e.preventDefault();
  closeModal();
  if (window.OrbitexToast) {
    OrbitexToast.success(`Thank you! Your request for "${serviceName}" has been received successfully.`);
  } else {
    alert(`Thank you! Your request for "${serviceName}" has been received.`);
  }
}

function closeModal() {
  const overlay = document.getElementById('orbitexModalOverlay');
  if (overlay) overlay.classList.remove('open');
}

