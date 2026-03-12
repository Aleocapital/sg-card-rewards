const cardData = {
    miles: {
        online: [
            { name: "DBS Woman's World Card", reward: "4.0", label: "mpd", desc: "Best for all online spend. Capped at S$2,000/month.", tag: "Top Pick" },
            { name: "Citi Rewards", reward: "4.0", label: "mpd", desc: "Online shopping & retail. Capped at S$1,000/month. No travel spend.", tag: "Very Flexible" },
            { name: "HSBC Revolution", reward: "4.0", label: "mpd", desc: "Online & contactless. No annual fee. Capped at S$1,000/month.", tag: "Zero Fee" }
        ],
        dining: [
            { name: "HSBC Revolution", reward: "4.0", label: "mpd", desc: "Contactless payment only. Capped at S$1,000/month.", tag: "Most Convenient" },
            { name: "UOB Lady's Card", reward: "6.0", label: "mpd", desc: "Choose 'Dining' as category. Capped at S$1,000/month.", tag: "Highest Yield" },
            { name: "UOB Preferred Platinum Visa", reward: "4.0", label: "mpd", desc: "Contactless (Apple/Google Pay) capped at S$1,110/month.", tag: "Daily Driver" }
        ],
        grocery: [
            { name: "HSBC Revolution", reward: "4.0", label: "mpd", desc: "Contactless payment only. Capped at S$1,000/month.", tag: "Best for Supermarkets" },
            { name: "Citi Rewards", reward: "4.0", label: "mpd", desc: "Only for online groceries (RedMart/Pandamart).", tag: "Online Only" },
            { name: "UOB Lady's Card", reward: "6.0", label: "mpd", desc: "Choose 'Family' as category. Capped at S$1,000/month.", tag: "Highest Yield" }
        ],
        travel: [
            { name: "UOB PRVI Miles", reward: "6.0", label: "mpd", desc: "Agoda, Expedia, and UOB Travel bookings. No cap.", tag: "Unlimited" },
            { name: "DBS Altitude", reward: "1.2", label: "mpd", desc: "Miles never expire. Good for lounge access.", tag: "No Expiry" },
            { name: "Citi PremierMiles", reward: "1.2", label: "mpd", desc: "Wide transfer partner network.", tag: "Flexible Partners" }
        ],
        foreign: [
            { name: "Instarem Amaze + Citi Rewards", reward: "4.0", label: "mpd", desc: "Convert FCY to SGD locally. 4mpd on shopping/online.", tag: "Best Hack" },
            { name: "UOB PRVI Miles", reward: "2.4", label: "mpd", desc: "Direct FCY spend. No cap.", tag: "Unlimited" },
            { name: "OCBC 90°N", reward: "2.1", label: "mpd", desc: "Travel rewards that don't expire.", tag: "Solid Runner Up" }
        ],
        general: [
            { name: "UOB PRVI Miles", reward: "1.4", label: "mpd", desc: "One of the best general spend rates in SG.", tag: "Highest Rate" },
            { name: "Citi PremierMiles", reward: "1.2", label: "mpd", desc: "The standard general spend card.", tag: "Reliable" },
            { name: "DBS Altitude", reward: "1.2", label: "mpd", desc: "Miles never expire. Safe long term bet.", tag: "Evergreen" }
        ],
        promos: [
            { name: "Citi PremierMiles", reward: "30k", label: "miles", desc: "Spend S$800 within 60 days + pay annual fee.", tag: "March Special" },
            { name: "DBS Altitude", reward: "25k", label: "miles", desc: "New-to-bank: Spend S$2,000 within 30 days.", tag: "Evergreen" },
            { name: "StanChart Journey", reward: "45k", label: "miles", desc: "Spend S$3,000 in 60 days + pay fee. Great yield.", tag: "High Value" }
        ]
    },
    cashback: {
        online: [
            { name: "DBS Live Fresh", reward: "5.0", label: "%", desc: "Online & Contactless. Min spend S$600.", tag: "High Reward" },
            { name: "UOB EVOL", reward: "8.0", label: "%", desc: "Online & Mobile pay. Min spend S$600. Capped at S$20/category.", tag: "Fintech Vibe" },
            { name: "OCBC 365", reward: "3.0", label: "%", desc: "Online travel & recurring bills. Min spend S$800.", tag: "Utility" }
        ],
        dining: [
            { name: "Trust Cashback Card", reward: "15.0", label: "%", desc: "Quarterly bonus. High effective rate for dining.", tag: "Market Best" },
            { name: "Citi Cash Back Card", reward: "8.0", label: "%", desc: "Dining, Petrol, Groceries. Min spend S$800.", tag: "All-rounder" },
            { name: "UOB One", reward: "10.0", label: "%", desc: "Tiered cashback. Maximize at S$2,000 spend/month.", tag: "Consistent" }
        ],
        grocery: [
            { name: "Maybank Family & Friends", reward: "8.0", label: "%", desc: "Choose your categories. Min spend S$800.", tag: "Best for Families" },
            { name: "Citi Cash Back Card", reward: "8.0", label: "%", desc: "Requires min spend of S$800.", tag: "Reliable" },
            { name: "POSB Everyday", reward: "5.0", label: "%", desc: "Sheng Siong and Fairprice (selected). No min spend on some.", tag: "Local Hero" }
        ],
        travel: [
            { name: "UOB One", reward: "10.0", label: "%", desc: "Grab, Shopee, and Dairy Farm. High yield with min spend.", tag: "Complex but High" },
            { name: "CIMB Visa Signature", reward: "10.0", label: "%", desc: "Cruise, Travel, Beauty. Min spend S$800.", tag: "Zero Annual Fee" },
            { name: "OCBC 365", reward: "3.0", label: "%", desc: "Fuel & Travel. Good secondary card.", tag: "Reliable" }
        ],
        foreign: [
            { name: "YouTrip / Revolut", reward: "0.0", label: "fee", desc: "Not cashback, but best exchange rates. Save 3-5% vs banks.", tag: "Money Saver" },
            { name: "Trust Card", reward: "0.0", label: "fee", desc: "No FCY fee and competitive rates.", tag: "Real Savings" },
            { name: "UOB One", reward: "3.33", label: "%", desc: "Effective rate if criteria met.", tag: "High Minimum" }
        ],
        general: [
            { name: "Citi Cash Back+", reward: "1.6", label: "%", desc: "Unlimited cashback. No minimum spend.", tag: "Unlimited" },
            { name: "Amex True Cashback", reward: "1.5", label: "%", desc: "Unlimited cashback. First S$5k spend at 3%.", tag: "Fast Start" },
            { name: "UOB Absolute Cash", reward: "1.7", label: "%", desc: "Highest unlimited rate, including insurance/bills.", tag: "Market Leader" }
        ],
        promos: [
            { name: "Citi Cash Back", reward: "S$400", label: "cash", desc: "Spend S$500 by end of next month. New-to-bank.", tag: "March Gold Rush" },
            { name: "SCB Bonus$aver", reward: "S$350", label: "cash", desc: "Spend S$800 in 30 days. High paynow bonus.", tag: "Limited Time" },
            { name: "HSBC Visa Platinum", reward: "S$200", label: "cash", desc: "Spend S$1,000 + 1 GIRO. Great for families.", tag: "Family Pick" }
        ]
    }
};

let currentType = 'miles';
let currentCategory = 'online';

function renderCards() {
    const container = document.getElementById('results-container');
    const data = cardData[currentType][currentCategory];
    
    container.innerHTML = data.map((card, index) => `
        <div class="reward-card" style="animation: fadeInUp 0.4s ease forwards ${index * 0.1}s; opacity: 0;">
            <div class="card-rank">${index + 1}</div>
            <div class="card-info">
                <span class="card-tag">${card.tag}</span>
                <h2>${card.name}</h2>
                <p class="card-desc">${card.desc}</p>
            </div>
            <div class="card-reward">
                <span class="reward-value">${card.reward}</span>
                <span class="reward-label">${card.label}</span>
            </div>
        </div>
    `).join('');
}

// Event Listeners
document.querySelectorAll('.picker-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.picker-btn.active').classList.remove('active');
        btn.classList.add('active');
        currentType = btn.dataset.type;
        renderCards();
    });
});

document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', (e) => {
        document.querySelector('.category-item.active').classList.remove('active');
        item.classList.add('active');
        currentCategory = item.dataset.category;
        renderCards();
    });
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const body = document.body;
    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});

// Comparison Logic
const comparisonData = [
    { 
        name: "DBS Woman's World Card", 
        type: "Miles", 
        bonus: "4 mpd online", 
        base: "0.4 mpd", 
        cap: "S$2,000/mo", 
        fee: "S$196.20 (Waivable)",
        lounge: "None",
        bestFor: "Online everything"
    },
    { 
        name: "Citi Rewards", 
        type: "Miles", 
        bonus: "4 mpd online/retail", 
        base: "0.4 mpd", 
        cap: "S$1,000/mo", 
        fee: "S$196.20 (Waivable)",
        lounge: "None",
        bestFor: "Shopping & Amaze hack"
    },
    { 
        name: "HSBC Revolution", 
        type: "Miles", 
        bonus: "4 mpd online/contactless", 
        base: "None", 
        cap: "S$1,000/mo", 
        fee: "Permanent Waiver",
        lounge: "None",
        bestFor: "Dining & Groceries"
    },
    { 
        name: "UOB Lady's Card", 
        type: "Miles", 
        bonus: "Up to 6 mpd", 
        base: "0.4 mpd", 
        cap: "S$1,000/mo", 
        fee: "S$196.20 (Waivable)",
        lounge: "None",
        bestFor: "Customizable categories"
    },
    { 
        name: "UOB Preferred Platinum Visa", 
        type: "Miles", 
        bonus: "4 mpd contactless", 
        base: "0.4 mpd", 
        cap: "S$1,110/mo", 
        fee: "S$196.20 (Waivable)",
        lounge: "None",
        bestFor: "Daily Apple/Google Pay"
    },
    { 
        name: "DBS Altitude", 
        type: "Miles", 
        bonus: "Up to 10 mpd (travel)", 
        base: "1.2 mpd", 
        cap: "No cap (standard categories)", 
        fee: "S$196.20 (Waivable)",
        lounge: "2x Priority Pass (Visa only)",
        bestFor: "Evergreen miles"
    },
    { 
        name: "Citi PremierMiles", 
        type: "Miles", 
        bonus: "Up to 10 mpd (travel)", 
        base: "1.2 mpd", 
        cap: "No cap", 
        fee: "S$196.20 (Waivable)",
        lounge: "2x Priority Pass",
        bestFor: "Lounge access & partners"
    },
    { 
        name: "UOB PRVI Miles", 
        type: "Miles", 
        bonus: "2.4 mpd (FCY)", 
        base: "1.4 mpd", 
        cap: "No cap", 
        fee: "S$259.20 (Waivable)",
        lounge: "None",
        bestFor: "General & Overseas spend"
    },
    { 
        name: "OCBC Titanium Rewards", 
        type: "Miles", 
        bonus: "4 mpd (shopping)", 
        base: "0.4 mpd", 
        cap: "S$13,335/year", 
        fee: "S$196.20 (Waivable)",
        lounge: "None",
        bestFor: "Big electronic purchases"
    },
    { 
        name: "Amex KrisFlyer", 
        type: "Miles", 
        bonus: "Up to 3.1 mpd (Grab)", 
        base: "1.1 mpd", 
        cap: "No cap", 
        fee: "S$178.20 (Waivable)",
        lounge: "None (Gold gets lounge)",
        bestFor: "Direct miles to KF"
    },
    { 
        name: "UOB One Card", 
        type: "Cashback", 
        bonus: "Up to 10%", 
        base: "3.33%", 
        cap: "S$2,000 spend tier", 
        fee: "S$196.20 (Waivable)",
        lounge: "None",
        bestFor: "Stable monthly spend"
    },
    { 
        name: "Trust Cashback Card", 
        type: "Cashback", 
        bonus: "Up to 15%", 
        base: "1.5%", 
        cap: "S$250/quarter bonus", 
        fee: "Permanent Waiver",
        lounge: "None",
        bestFor: "Dining & NTUC"
    },
    { 
        name: "Citi Cash Back+", 
        type: "Cashback", 
        bonus: "1.6% Unlimited", 
        base: "1.6%", 
        cap: "No Cap", 
        fee: "S$196.20 (Waivable)",
        lounge: "None",
        bestFor: "General spending"
    },
    { 
        name: "Maybank Family & Friends", 
        type: "Cashback", 
        bonus: "8%", 
        base: "0.3%", 
        cap: "S$125/mo", 
        fee: "S$196.20 (Waivable)",
        lounge: "None",
        bestFor: "Groceries & Transport"
    },
    { 
        name: "OCBC 365", 
        type: "Cashback", 
        bonus: "6% (dining)", 
        base: "0.3%", 
        cap: "S$80/mo", 
        fee: "S$196.20 (Waivable)",
        lounge: "None",
        bestFor: "Dining & Bills"
    },
    { 
        name: "HSBC Visa Platinum", 
        type: "Cashback", 
        bonus: "5%", 
        base: "0.4%", 
        cap: "S$250/quarter", 
        fee: "S$196.20 (Waivable)",
        lounge: "None",
        bestFor: "Family utilities & petrol"
    },
    { 
        name: "UOB Absolute Cashback", 
        type: "Cashback", 
        bonus: "1.7% Unlimited", 
        base: "1.7%", 
        cap: "No Cap", 
        fee: "S$196.20 (Waivable)",
        lounge: "None",
        bestFor: "Insurance & Grab top-ups"
    },
    { 
        name: "Citi Cash Back Card", 
        type: "Cashback", 
        bonus: "8% (Grocery/Petrol)", 
        base: "0.25%", 
        cap: "S$80/mo", 
        fee: "S$196.20 (Waivable)",
        lounge: "None",
        bestFor: "Motorists & Home cooks"
    }
];

// MCC Data
const mccData = [
    { merchant: "Shopee", mcc: "5311", category: "Online Dept Store", card: "Citi Rewards / DBS WWMC", rate: "4.0 mpd" },
    { merchant: "Lazada", mcc: "5311", category: "Online Dept Store", card: "Citi Rewards / DBS WWMC", rate: "4.0 mpd" },
    { merchant: "Amazon SG", mcc: "5311", category: "Online Dept Store", card: "Citi Rewards / DBS WWMC", rate: "4.0 mpd" },
    { merchant: "Grab Food", mcc: "5812", category: "Dining/Delivery", card: "HSBC Revolution / UOB Lady's", rate: "4.0 - 6.0 mpd" },
    { merchant: "Grab Rides", mcc: "4121", category: "Transport", card: "UOB Lady's / Amex KF", rate: "3.1 - 6.0 mpd" },
    { merchant: "Foodpanda", mcc: "5812", category: "Dining/Delivery", card: "HSBC Revolution / UOB Lady's", rate: "4.0 - 6.0 mpd" },
    { merchant: "Deliveroo", mcc: "5812", category: "Dining/Delivery", card: "HSBC Revolution / UOB Lady's", rate: "4.0 - 6.0 mpd" },
    { merchant: "FairPrice / NTUC", mcc: "5411", category: "Grocery", card: "UOB One / Trust / Maybank F&F", rate: "Up to 15% cashback" },
    { merchant: "Cold Storage", mcc: "5411", category: "Grocery", card: "UOB One / HSBC Rev", rate: "Up to 10% / 4 mpd" },
    { merchant: "Don Don Donki", mcc: "5411", category: "Grocery", card: "HSBC Revolution", rate: "4.0 mpd" },
    { merchant: "RedMart", mcc: "5411", category: "Online Grocery", card: "Citi Rewards / DBS WWMC", rate: "4.0 mpd" },
    { merchant: "Uniqlo", mcc: "5651", category: "Clothing", card: "Citi Rewards / OCBC Rewards", rate: "4.0 mpd" },
    { merchant: "Zara", mcc: "5651", category: "Clothing", card: "Citi Rewards / OCBC Rewards", rate: "4.0 mpd" },
    { merchant: "Netflix", mcc: "4899", category: "Entertainment", card: "UOB Lady's / HSBC Rev", rate: "4.0 - 6.0 mpd" },
    { merchant: "Spotify", mcc: "4899", category: "Entertainment", card: "UOB Lady's / HSBC Rev", rate: "4.0 - 6.0 mpd" },
    { merchant: "Disney+", mcc: "4899", category: "Entertainment", card: "UOB Lady's / HSBC Rev", rate: "4.0 - 6.0 mpd" },
    { merchant: "Starbucks", mcc: "5814", category: "Fast Food", card: "UOB Lady's / HSBC Rev", rate: "4.0 - 6.0 mpd" },
    { merchant: "McDonald's", mcc: "5814", category: "Fast Food", card: "UOB Lady's / HSBC Rev", rate: "4.0 - 6.0 mpd" },
    { merchant: "IKEA", mcc: "5712", category: "Furniture", card: "OCBC Rewards / Citi Rewards", rate: "4.0 mpd" },
    { merchant: "Courts", mcc: "5732", category: "Electronics", card: "OCBC Rewards / Citi Rewards", rate: "4.0 mpd" },
    { merchant: "Harvey Norman", mcc: "5732", category: "Electronics", card: "OCBC Rewards / Citi Rewards", rate: "4.0 mpd" },
    { merchant: "Shell", mcc: "5541", category: "Petrol", card: "Citi Cash Back / UOB One", rate: "Up to 21% savings" },
    { merchant: "Esso", mcc: "5541", category: "Petrol", card: "DBS Esso / Citi Cash Back", rate: "Up to 21% savings" },
    { merchant: "Caltex", mcc: "5541", category: "Petrol", card: "OCBC 365 / HSBC Visa Plat", rate: "Up to 18% savings" },
    { merchant: "KrisShop", mcc: "5309", category: "Duty Free", card: "Amex KF / Citi Rewards", rate: "Up to 4.0 mpd" },
    { merchant: "Agoda", mcc: "7011", category: "Hotel/Travel", card: "DBS Altitude / UOB PRVI", rate: "Up to 10.0 mpd" },
    { merchant: "Expedia", mcc: "4722", category: "Travel Agency", card: "DBS Altitude / UOB PRVI", rate: "Up to 10.0 mpd" },
    { merchant: "Klook", mcc: "4722", category: "Travel Agency", card: "DBS WWMC / Citi Rewards", rate: "4.0 mpd" },
    { merchant: "Zalora", mcc: "5651", category: "Online Fashion", card: "Citi Rewards / OCBC Rewards", rate: "4.0 mpd" },
    { merchant: "Taobao", mcc: "5311", category: "Online Dept Store", card: "Citi Rewards / DBS WWMC", rate: "4.0 mpd" },
    // Common Exclusions & Blacklist
    { merchant: "Insurance (Prudential, AIA, etc.)", mcc: "6300", category: "Insurance", card: "UOB Absolute / CardUp", rate: "1.7% / 1.4 mpd", warning: "Blacklisted by 99% of cards" },
    { merchant: "Utilities (SP Group)", mcc: "4900", category: "Utilities", card: "UOB One / OCBC 365", rate: "3.33% - 6.0%", warning: "Excluded by most miles cards" },
    { merchant: "Grab/Revolut Top-ups", mcc: "6540", category: "Stored Value", card: "None (Standard)", rate: "0.0", warning: "Total exclusion on almost all SG cards" },
    { merchant: "Hospital / Healthcare", mcc: "8062", category: "Medical", card: "StanChart Journey / Amex True", rate: "1.2 mpd / 1.5%", warning: "Commonly excluded category" },
    { merchant: "School Fees / Education", mcc: "8220", category: "Education", card: "Maybank Visa Infinite", rate: "1.2 mpd", warning: "Highly restricted category" },
    { merchant: "Tax / IRAS Payments", mcc: "9311", category: "Government", card: "Citi PayAll / CardUp", rate: "1.2 - 1.6 mpd", warning: "No direct rewards; use payment facility" }
];

function initMCCLookup() {
    const searchInput = document.getElementById('mcc-search');
    const resultsContainer = document.getElementById('mcc-results');

    if (!searchInput || !resultsContainer) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length < 2) {
            resultsContainer.innerHTML = '<div class="mcc-placeholder">Type a merchant name to see recommendations</div>';
            return;
        }

        const matches = mccData.filter(item => 
            item.merchant.toLowerCase().includes(query) || 
            item.category.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
            resultsContainer.innerHTML = matches.map(item => `
                <div class="mcc-result-item ${item.warning ? 'exclusion' : ''}">
                    <div class="mcc-merchant-info">
                        <h4>${item.merchant} <span class="mcc-code-tag">MCC ${item.mcc}</span></h4>
                        <span class="mcc-category">${item.category}</span>
                        ${item.warning ? `<div class="mcc-warning">⚠️ ${item.warning}</div>` : ''}
                    </div>
                    <div class="mcc-card-rec">
                        <span class="mcc-card-name">${item.card}</span>
                        <span class="mcc-reward-rate">${item.rate}</span>
                    </div>
                </div>
            `).join('');
        } else {
            resultsContainer.innerHTML = '<div class="mcc-placeholder">No merchants found. Try another name!</div>';
        }
    });
}

function initComparison() {
    const s1 = document.getElementById('card-select-1');
    const s2 = document.getElementById('card-select-2');
    
    if (!s1 || !s2) return;

    comparisonData.forEach(card => {
        const opt1 = document.createElement('option');
        opt1.value = card.name;
        opt1.textContent = card.name;
        s1.appendChild(opt1);

        const opt2 = document.createElement('option');
        opt2.value = card.name;
        opt2.textContent = card.name;
        s2.appendChild(opt2);
    });

    const updateCompare = () => {
        const c1 = comparisonData.find(c => c.name === s1.value);
        const c2 = comparisonData.find(c => c.name === s2.value);
        const table = document.getElementById('compare-table-container');
        const placeholder = document.getElementById('compare-placeholder');

        if (c1 && c2) {
            table.classList.remove('hidden');
            placeholder.classList.add('hidden');
            document.getElementById('compare-name-1').textContent = c1.name;
            document.getElementById('compare-name-2').textContent = c2.name;

            const features = [
                { label: "Reward Type", key: "type" },
                { label: "Bonus Rate", key: "bonus" },
                { label: "Base Rate", key: "base" },
                { label: "Monthly Cap", key: "cap" },
                { label: "Lounge Access", key: "lounge" },
                { label: "Annual Fee", key: "fee" },
                { label: "Best For", key: "bestFor" }
            ];

            document.getElementById('compare-body').innerHTML = features.map(f => `
                <tr>
                    <td class="feature-name">${f.label}</td>
                    <td>${c1[f.key]}</td>
                    <td>${c2[f.key]}</td>
                </tr>
            `).join('');
        } else {
            table.classList.add('hidden');
            placeholder.classList.remove('hidden');
        }
    };

    s1.addEventListener('change', updateCompare);
    s2.addEventListener('change', updateCompare);
}

// Reward Calculator Logic
function initCalculator() {
    const strategy = document.getElementById('calc-strategy');
    const spend = document.getElementById('calc-spend');
    const mileValue = document.getElementById('calc-mile-value');
    const rewardsRaw = document.getElementById('annual-rewards-raw');
    const rewardsUnit = document.getElementById('annual-rewards-unit');
    const cashValue = document.getElementById('annual-cash-value');

    if (!strategy || !spend || !mileValue) return;

    const calculate = () => {
        const monthlySpend = parseFloat(spend.value) || 0;
        const valuation = parseFloat(mileValue.value) || 0;
        const selected = strategy.value;

        let annualRewards = 0;
        let annualCash = 0;
        let unit = "Miles";

        if (selected === 'miles') {
            annualRewards = monthlySpend * 4 * 12;
            annualCash = annualRewards * valuation;
            unit = "Miles";
        } else if (selected === 'cashback') {
            annualCash = monthlySpend * 0.06 * 12; // 6% avg for optimized cashback
            annualRewards = annualCash;
            unit = "Cashback";
        } else if (selected === 'general') {
            annualRewards = monthlySpend * 1.2 * 12;
            annualCash = annualRewards * valuation;
            unit = "Miles";
        }

        rewardsRaw.textContent = unit === "Miles" 
            ? Math.round(annualRewards).toLocaleString() 
            : `S$${Math.round(annualCash).toLocaleString()}`;
        
        rewardsUnit.textContent = unit;
        cashValue.textContent = `S$${Math.round(annualCash).toLocaleString()}`;
    };

    strategy.addEventListener('change', calculate);
    spend.addEventListener('input', calculate);
    mileValue.addEventListener('input', calculate);
    
    // Toggle mile valuation visibility
    strategy.addEventListener('change', () => {
        const valGroup = mileValue.parentElement;
        if (strategy.value === 'cashback') {
            valGroup.style.display = 'none';
        } else {
            valGroup.style.display = 'block';
        }
    });

    calculate();
}

// Tab Switching Logic
function initTabs() {
    const featureItems = document.querySelectorAll('.feature-item');
    const tabContents = document.querySelectorAll('.tab-content');

    featureItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.dataset.tab;

            // Update icons
            featureItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Update content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === target) {
                    content.classList.add('active');
                }
            });

            // Scroll to top of section
            window.scrollTo({ top: document.querySelector('.optimizer-section').offsetTop - 20, behavior: 'smooth' });
        });
    });
}

// Travel Hack Calculator Logic
function initTravelCalc() {
    const spendInput = document.getElementById('travel-spend');
    if (!spendInput) return;

    const updateTravel = () => {
        const spend = parseFloat(spendInput.value) || 0;
        
        // Amaze + 4MPD: 4 MPD, ~1.8% spread
        document.getElementById('amaze-miles').textContent = `${(spend * 4).toLocaleString()} Miles`;
        document.getElementById('amaze-fee').textContent = `S$${(spend * 0.018).toFixed(2)}`;

        // Direct Card: 2.4 MPD, 3.25% fee
        document.getElementById('direct-miles').textContent = `${(spend * 2.4).toLocaleString()} Miles`;
        document.getElementById('direct-fee').textContent = `S$${(spend * 0.0325).toFixed(2)}`;

        // Wallets: 0 Miles, ~0.5% spread
        document.getElementById('wallet-fee').textContent = `S$${(spend * 0.005).toFixed(2)}`;
    };

    spendInput.addEventListener('input', updateTravel);
    updateTravel();
}

// Initial Render
renderCards();
initComparison();
initMCCLookup();
initCalculator();
initTabs();
initTravelCalc();

// Animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
