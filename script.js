// =========================================
// 1. MR. RIDWAN'S RATTAN CATALOG (8 ITEMS)
// =========================================
const productsData = [
    {
        id: "arched-rattan-shelf",
        name: "Arched Natural Rattan Display Shelf",
        category: "Shelving & Storage",
        status: "ready",
        statusLabel: "Ready Stock (38 Units)",
        cbm: 0.32,
        dimensions: "75 x 38 x 165 cm",
        material: "Manau Rattan & Pitrit Weave",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
        desc: "Three-tier arched display rack with diagonal lattice weave backing for boutiques and living spaces.",
        variants: [
            { name: "Natural Honey (3-Tier)", price: 420 },
            { name: "Bleached Whitewash", price: 450 },
            { name: "Dark Walnut + Basket", price: 495 }
        ]
    },
    {
        id: "rattan-10-drawer-chest",
        name: "10-Drawer Woven Rattan Chest",
        category: "Cabinets & Drawers",
        status: "ready",
        statusLabel: "Ready Stock (24 Units)",
        cbm: 0.58,
        dimensions: "135 x 45 x 95 cm",
        material: "Solid Hardwood Frame & Rattan",
        image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80",
        desc: "Spacious 10-drawer storage cabinet featuring fine two-tone woven fronts and smooth pull-out drawers.",
        variants: [
            { name: "10-Drawer Natural Cream", price: 820 },
            { name: "10-Drawer Warm Honey", price: 850 },
            { name: "8-Drawer Compact Edition", price: 710 }
        ]
    },
    {
        id: "boho-lounge-swing-set",
        name: "Boho Living Set & Hanging Swing Chair",
        category: "Lounge & Swing",
        status: "limited",
        statusLabel: "Low Stock (6 Sets)",
        cbm: 1.45,
        dimensions: "Loveseat 140cm + Swing 105cm",
        material: "Grade A Rattan Pole & Linen Cushion",
        image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
        desc: "Tropical resort lounge bundle comprising a rattan loveseat, hanging egg swing, and side table.",
        variants: [
            { name: "Full Set (Sofa + Swing + Table)", price: 1980 },
            { name: "Hanging Egg Chair Only", price: 760 },
            { name: "Boho Loveseat Only", price: 980 }
        ]
    },
    {
        id: "walnut-rattan-wardrobe",
        name: "Walnut & Rattan Panel Wardrobe",
        category: "Bedroom Furniture",
        status: "preorder",
        statusLabel: "Pre-Order (14 Days)",
        cbm: 1.15,
        dimensions: "150 x 58 x 200 cm",
        material: "Teak/Walnut Wood & Cane Webbing",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
        desc: "Three-door wardrobe with arched profiles combining natural cane webbing and fluted glass panels.",
        variants: [
            { name: "3-Door (Rattan + Fluted Glass)", price: 2290 },
            { name: "3-Door Full Rattan Weave", price: 2180 },
            { name: "2-Door Compact Wardrobe", price: 1640 }
        ]
    },
    {
        id: "palm-leaf-rattan-chair",
        name: "Palm Leaf Peacock Rattan Chair",
        category: "Accent Chairs",
        status: "ready",
        statusLabel: "Ready Stock (45 Units)",
        cbm: 0.42,
        dimensions: "92 x 68 x 105 cm",
        material: "100% Natural Rattan",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
        desc: "Statement five-petal palm backrest chair popular for Malaysian cafes, homestays, and showrooms.",
        variants: [
            { name: "Natural Matte Varnish", price: 390 },
            { name: "Honey Gloss Export Finish", price: 410 },
            { name: "Matte Black Stain", price: 430 }
        ]
    },
    {
        id: "teak-rattan-cafe-set",
        name: "Teak & Rattan Backrest Cafe Set",
        category: "Dining & Cafe",
        status: "ready",
        statusLabel: "Ready Stock (50 Sets)",
        cbm: 0.52,
        dimensions: "Table Ø60x75 cm | Chair 48x45x80 cm",
        material: "Indonesian Teak & Woven Rattan",
        image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80",
        desc: "Bistro set with two woven-backrest chairs and a round curved-leg table built for daily commercial use.",
        variants: [
            { name: "Set of 2 Chairs + 1 Round Table", price: 710 },
            { name: "Set of 4 Chairs + 1 Dining Table", price: 1240 },
            { name: "Cafe Chair Only (Min. 4)", price: 255 }
        ]
    },
    {
        id: "rattan-8door-credenza",
        name: "8-Door Rattan Accent TV Credenza",
        category: "Cabinets & TV Stands",
        status: "ready",
        statusLabel: "Ready Stock (32 Units)",
        cbm: 0.48,
        dimensions: "140 x 42 x 82 cm",
        material: "Matte Dark Frame & Rattan Panels",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
        desc: "Versatile two-tier eight-door credenza pairing modern dark framing with warm woven rattan doors.",
        variants: [
            { name: "8-Door (4x2 Layout)", price: 620 },
            { name: "6-Door (3x2 Layout)", price: 510 },
            { name: "4-Door Low TV Console", price: 400 }
        ]
    },
    {
        id: "round-rattan-glass-table",
        name: "Round Rattan Coffee Table w/ Glass Top",
        category: "Coffee Tables",
        status: "limited",
        statusLabel: "Low Stock (9 Units)",
        cbm: 0.36,
        dimensions: "Diameter 80 cm x Height 42 cm",
        material: "Manau Rattan, Weave & 8mm Tempered Glass",
        image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80",
        desc: "Circular coffee table topped with tempered glass to showcase intricate rattan weaving beneath.",
        variants: [
            { name: "Ø80 cm + Tempered Glass", price: 480 },
            { name: "Ø100 cm + Tempered Glass", price: 575 },
            { name: "Nesting Pair (Ø80 cm + Ø55 cm)", price: 740 }
        ]
    }
];

// =========================================
// 2. MALAYSIA SHIPPING RATES & TRANSIT TIMES
// =========================================
// Rates in MYR (Ringgit Malaysia): base fee + per CBM rate
const shippingRates = {
    kl_selangor: { name: "Kuala Lumpur & Selangor", base: 380, perCbm: 520, days: [7, 12] },
    johor: { name: "Johor Bahru & South Peninsular", base: 420, perCbm: 560, days: [8, 13] },
    penang: { name: "Penang & North Peninsular", base: 460, perCbm: 610, days: [9, 14] },
    sabah_sarawak: { name: "Sabah & Sarawak (East Malaysia)", base: 650, perCbm: 880, days: [12, 20] }
};

const serviceMultipliers = {
    lcl: { label: "Sea Freight LCL (CBM)", costMult: 1, dayMult: 1 },
    fcl: { label: "Full Container FCL (20ft/40ft)", costMult: 0.85, dayMult: 0.9 },
    air: { label: "Air Cargo Express", costMult: 2.5, dayMult: 0.35 }
};

// =========================================
// 3. FREQUENTLY ASKED QUESTIONS (MALAYSIA)
// =========================================
const faqData = [
    {
        category: "stock",
        q: "Are your products ready stock or made to order for Malaysia buyers?",
        a: "Most bestseller items such as the Palm Leaf Rattan Chair, Arched Display Shelf, and Teak Cafe Set are kept in ready stock at our Cirebon warehouse. Custom dimensions or pre-order items typically take 14–21 working days."
    },
    {
        category: "stock",
        q: "Can we request custom sizes, stain colors, or cushion fabrics?",
        a: "Yes. Mr. Ridwan accepts OEM and project custom orders for Malaysian cafes, hotels, and interior designers, including custom sizing, stain finishes, and cushion upholstery."
    },
    {
        category: "pricing",
        q: "What is the Minimum Order Quantity (MOQ) and wholesale discount structure?",
        a: "Sample or trial orders can start from 1–2 units via LCL or air freight. Orders of 10+ units automatically receive a 5% wholesale discount, and 25+ units receive a 10% wholesale discount."
    },
    {
        category: "pricing",
        q: "What payment terms do you accept for export shipments to Malaysia?",
        a: "Standard export terms are a 50% deposit upon Proforma Invoice confirmation and 50% balance after quality inspection (QC) prior to container stuffing or cargo dispatch."
    },
    {
        category: "shipping",
        q: "Do you provide SVLK and Form E (ATIGA) documents for Malaysia customs?",
        a: "Yes. Every export shipment includes complete documentation such as V-Legal (SVLK), ISPM-15 fumigation certificate, Packing List, Commercial Invoice, and Form E (ASEAN Trade in Goods Agreement) for preferential duty treatment in Malaysia."
    },
    {
        category: "shipping",
        q: "How are rattan items packed to prevent damage during sea transit to Malaysia?",
        a: "Each furniture piece is wrapped with corner foam protection, moisture-barrier kraft paper, and double-wall export cartons, with wooden crating or pallets added for LCL shipments."
    }
];

// =========================================
// 4. APPLICATION STATE
// =========================================
let selectedVariants = {};
let cart = [
    { productId: "arched-rattan-shelf", variantIndex: 0, qty: 2 },
    { productId: "palm-leaf-rattan-chair", variantIndex: 0, qty: 4 }
];

productsData.forEach(p => {
    selectedVariants[p.id] = 0;
});

function formatMYR(amount) {
    return "RM " + Math.round(amount).toLocaleString("en-MY");
}

// =========================================
// 5. RENDER CATALOG
// =========================================
function renderProducts(filter = "all") {
    const grid = document.getElementById("productsGrid");
    const filtered = filter === "all"
        ? productsData
        : productsData.filter(p => p.status === filter);

    grid.innerHTML = filtered.map(product => {
        const activeVarIdx = selectedVariants[product.id] || 0;
        const activeVariant = product.variants[activeVarIdx];

        const pillsHtml = product.variants.map((v, idx) => `
            <button type="button"
                class="variant-pill ${idx === activeVarIdx ? 'active' : ''}"
                onclick="selectVariant('${product.id}', ${idx})">
                ${v.name}
            </button>
        `).join("");

        return `
            <article class="product-card">
                <div class="product-img-wrap" onclick="openProductModal('${product.id}')">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <span class="stock-badge ${product.status}">
                        <span class="status-dot ${product.status}"></span> ${product.statusLabel}
                    </span>
                    <span class="cbm-badge">${product.cbm} CBM</span>
                </div>
                <div class="product-body">
                    <span class="product-cat">${product.category}</span>
                    <h3 class="product-title" onclick="openProductModal('${product.id}')">${product.name}</h3>
                    <p class="product-desc">${product.desc}</p>

                    <div class="variant-section">
                        <span class="variant-label">Select Variant:</span>
                        <div class="variant-pills">${pillsHtml}</div>
                    </div>

                    <div class="product-footer">
                        <div class="product-price">
                            <small>Unit Price</small>
                            <strong>${formatMYR(activeVariant.price)}</strong>
                        </div>
                        <div class="card-actions">
                            <button type="button" class="icon-btn" title="View Specifications" onclick="openProductModal('${product.id}')">
                                <i data-lucide="eye"></i>
                            </button>
                            <button type="button" class="btn btn-primary btn-sm" onclick="addToCart('${product.id}', ${activeVarIdx}, 1)">
                                <i data-lucide="plus"></i> Quote
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    lucide.createIcons();
}

function selectVariant(productId, variantIdx) {
    selectedVariants[productId] = variantIdx;
    const activeFilter = document.querySelector(".filter-btn.active").dataset.filter;
    renderProducts(activeFilter);
}

// =========================================
// 6. CALCULATOR & QUOTE LIST LOGIC
// =========================================
function initQuickAddSelects() {
    const prodSelect = document.getElementById("quickProductSelect");
    prodSelect.innerHTML = productsData.map(p =>
        `<option value="${p.id}">${p.name}</option>`
    ).join("");

    updateQuickVariantSelect();
    prodSelect.addEventListener("change", updateQuickVariantSelect);
}

function updateQuickVariantSelect() {
    const prodId = document.getElementById("quickProductSelect").value;
    const varSelect = document.getElementById("quickVariantSelect");
    const product = productsData.find(p => p.id === prodId);

    varSelect.innerHTML = product.variants.map((v, idx) =>
        `<option value="${idx}">${v.name} (${formatMYR(v.price)})</option>`
    ).join("");
}

function addToCart(productId, variantIndex, qty = 1) {
    const existing = cart.find(item => item.productId === productId && item.variantIndex === variantIndex);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ productId, variantIndex, qty });
    }
    renderCartAndTotals();

    const calcSection = document.getElementById("calculator");
    if (window.event && window.event.target.closest(".product-card")) {
        calcSection.scrollIntoView({ behavior: "smooth" });
    }
}

function updateCartQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    renderCartAndTotals();
}

function removeCartItem(index) {
    cart.splice(index, 1);
    renderCartAndTotals();
}

function renderCartAndTotals() {
    const listEl = document.getElementById("selectedItemsList");

    if (cart.length === 0) {
        listEl.innerHTML = `
            <div class="empty-cart-box">
                No products selected yet. Add items from the catalog above or use the quick-add selector.
            </div>
        `;
    } else {
        listEl.innerHTML = cart.map((item, idx) => {
            const product = productsData.find(p => p.id === item.productId);
            const variant = product.variants[item.variantIndex];
            const lineTotal = variant.price * item.qty;

            return `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <img src="${product.image}" alt="${product.name}">
                        <div>
                            <h4>${product.name}</h4>
                            <span>Variant: ${variant.name} • ${formatMYR(variant.price)}/unit</span>
                        </div>
                    </div>
                    <div class="cart-item-controls">
                        <div class="qty-stepper">
                            <button type="button" onclick="updateCartQty(${idx}, -1)">-</button>
                            <span>${item.qty}</span>
                            <button type="button" onclick="updateCartQty(${idx}, 1)">+</button>
                        </div>
                        <div class="cart-item-price">${formatMYR(lineTotal)}</div>
                        <button type="button" class="remove-item-btn" title="Remove" onclick="removeCartItem(${idx})">
                            <i data-lucide="trash-2"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join("");
    }

    calculateSummary();
    lucide.createIcons();
}

function calculateSummary() {
    let totalUnits = 0;
    let totalCbm = 0;
    let subtotal = 0;
    let hasPreorder = false;

    cart.forEach(item => {
        const product = productsData.find(p => p.id === item.productId);
        const variant = product.variants[item.variantIndex];
        totalUnits += item.qty;
        totalCbm += product.cbm * item.qty;
        subtotal += variant.price * item.qty;
        if (product.status === "preorder") hasPreorder = true;
    });

    // Wholesale discount tiers
    let discountRate = 0;
    if (totalUnits >= 25) discountRate = 0.10;
    else if (totalUnits >= 10) discountRate = 0.05;

    const discountAmount = subtotal * discountRate;
    const afterDiscount = subtotal - discountAmount;

    // Shipping & transit estimation to Malaysia
    const zoneKey = document.getElementById("shippingZone").value;
    const methodKey = document.getElementById("shippingMethod").value;
    const zone = shippingRates[zoneKey];
    const method = serviceMultipliers[methodKey];

    let shippingCost = 0;
    if (totalUnits > 0) {
        shippingCost = (zone.base + (totalCbm * zone.perCbm)) * method.costMult;
    }

    const extraProdDays = hasPreorder ? 14 : 2;
    const minDays = Math.max(2, Math.round(zone.days[0] * method.dayMult) + extraProdDays);
    const maxDays = Math.max(minDays + 2, Math.round(zone.days[1] * method.dayMult) + extraProdDays);

    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(today.getDate() + minDays);
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + maxDays);

    const dateOptions = { day: "numeric", month: "short", year: "numeric" };
    const etaDateText = `${minDate.toLocaleDateString("en-MY", dateOptions)} – ${maxDate.toLocaleDateString("en-MY", dateOptions)}`;

    document.getElementById("summaryVolume").textContent = `${totalUnits} Units (${totalCbm.toFixed(2)} CBM)`;
    document.getElementById("summarySubtotal").textContent = formatMYR(subtotal);

    const discountRow = document.getElementById("discountRow");
    if (discountAmount > 0) {
        discountRow.style.display = "flex";
        discountRow.querySelector("span").textContent = `Wholesale Discount (${discountRate * 100}%)`;
        document.getElementById("summaryDiscount").textContent = `- ${formatMYR(discountAmount)}`;
    } else {
        discountRow.style.display = "none";
    }

    document.getElementById("summaryShipping").textContent = formatMYR(shippingCost);
    document.getElementById("shippingDetailText").textContent = `${zone.name}, Malaysia • ${method.label}`;
    document.getElementById("summaryGrandTotal").textContent = formatMYR(afterDiscount + shippingCost);

    document.getElementById("etaDays").textContent = `${minDays} – ${maxDays} Working Days`;
    document.getElementById("etaDate").textContent = `Est. arrival: ${etaDateText}${hasPreorder ? ' (incl. PO production)' : ''}`;
}

function sendToWhatsapp() {
    if (cart.length === 0) {
        alert("Please select at least one product before requesting a quote.");
        return;
    }

    const zoneText = document.getElementById("shippingZone").selectedOptions[0].text;
    const methodText = document.getElementById("shippingMethod").selectedOptions[0].text;
    const grandTotal = document.getElementById("summaryGrandTotal").textContent;
    const etaDays = document.getElementById("etaDays").textContent;

    let itemLines = cart.map((item, i) => {
        const p = productsData.find(prod => prod.id === item.productId);
        const v = p.variants[item.variantIndex];
        return `${i + 1}. ${p.name} (${v.name}) x ${item.qty} = ${formatMYR(v.price * item.qty)}`;
    }).join("%0A");

    const message = `Hello Mr. Ridwan (Cirebon Rattan Craft), I would like to request an export quote to Malaysia:%0A%0A*Selected Products:*%0A${itemLines}%0A%0A*Malaysia Destination:* ${zoneText}%0A*Freight Method:* ${methodText}%0A*Estimated Arrival:* ${etaDays}%0A*Estimated Total:* ${grandTotal}%0A%0APlease share stock confirmation and Proforma Invoice details. Thank you.`;

    window.open(`https://wa.me/6281224567890?text=${message}`, "_blank");
}

// =========================================
// 7. PRODUCT DETAIL MODAL
// =========================================
function openProductModal(productId) {
    const product = productsData.find(p => p.id === productId);
    const activeVarIdx = selectedVariants[productId] || 0;
    const variant = product.variants[activeVarIdx];

    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
        <div class="modal-grid">
            <img src="${product.image}" alt="${product.name}">
            <div class="modal-info">
                <span class="product-cat">${product.category}</span>
                <h3>${product.name}</h3>
                <p style="font-size:0.9rem; color:var(--text-muted); margin-top:8px;">${product.desc}</p>

                <div class="modal-specs">
                    <div><strong>Stock Status:</strong> ${product.statusLabel}</div>
                    <div><strong>Dimensions:</strong> ${product.dimensions}</div>
                    <div><strong>Material:</strong> ${product.material}</div>
                    <div><strong>Volume:</strong> ${product.cbm} CBM / unit</div>
                    <div><strong>Selected Variant:</strong> ${variant.name} (${formatMYR(variant.price)})</div>
                </div>

                <button type="button" class="btn btn-primary btn-full" onclick="addToCart('${product.id}', ${activeVarIdx}, 1); closeProductModal();">
                    <i data-lucide="plus"></i> Add to Quote Calculator
                </button>
            </div>
        </div>
    `;

    document.getElementById("productModal").classList.add("active");
    lucide.createIcons();
}

function closeProductModal() {
    document.getElementById("productModal").classList.remove("active");
}

// =========================================
// 8. RENDER & INTERACT WITH FAQ
// =========================================
function renderFaqs(category = "all", keyword = "") {
    const list = document.getElementById("faqList");
    const filtered = faqData.filter(item => {
        const matchCat = category === "all" || item.category === category;
        const matchKey = item.q.toLowerCase().includes(keyword.toLowerCase()) ||
                         item.a.toLowerCase().includes(keyword.toLowerCase());
        return matchCat && matchKey;
    });

    if (filtered.length === 0) {
        list.innerHTML = `<p class="text-center" style="color:var(--text-muted); padding:20px;">No matching questions found for your search.</p>`;
        return;
    }

    list.innerHTML = filtered.map((item, index) => `
        <div class="faq-item ${index === 0 ? 'open' : ''}">
            <button type="button" class="faq-question" onclick="toggleFaq(this)">
                <span>${item.q}</span>
                <i data-lucide="chevron-down"></i>
            </button>
            <div class="faq-answer">
                <p>${item.a}</p>
            </div>
        </div>
    `).join("");

    lucide.createIcons();
}

function toggleFaq(btn) {
    btn.parentElement.classList.toggle("open");
}

// =========================================
// 9. EVENT LISTENERS ON LOAD
// =========================================
document.addEventListener("DOMContentLoaded", () => {
    renderProducts("all");
    initQuickAddSelects();
    renderCartAndTotals();
    renderFaqs("all", "");

    document.getElementById("mobileMenuBtn").addEventListener("click", () => {
        document.getElementById("navLinks").classList.toggle("open");
    });

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderProducts(btn.dataset.filter);
        });
    });

    document.getElementById("quickAddBtn").addEventListener("click", () => {
        const prodId = document.getElementById("quickProductSelect").value;
        const varIdx = parseInt(document.getElementById("quickVariantSelect").value, 10);
        const qty = Math.max(1, parseInt(document.getElementById("quickQtyInput").value, 10) || 1);
        addToCart(prodId, varIdx, qty);
    });

    document.getElementById("clearCartBtn").addEventListener("click", () => {
        cart = [];
        renderCartAndTotals();
    });

    document.getElementById("shippingZone").addEventListener("change", calculateSummary);
    document.getElementById("shippingMethod").addEventListener("change", calculateSummary);
    document.getElementById("sendWhatsappBtn").addEventListener("click", sendToWhatsapp);

    document.getElementById("closeModalBtn").addEventListener("click", closeProductModal);
    document.getElementById("productModal").addEventListener("click", (e) => {
        if (e.target.id === "productModal") closeProductModal();
    });

    const faqSearch = document.getElementById("faqSearchInput");
    faqSearch.addEventListener("input", () => {
        const activeCat = document.querySelector(".faq-tab.active").dataset.cat;
        renderFaqs(activeCat, faqSearch.value);
    });

    document.querySelectorAll(".faq-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".faq-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            renderFaqs(tab.dataset.cat, faqSearch.value);
        });
    });

    lucide.createIcons();
});