const cardData_static = {
    miles: {
        online: [
            { name: "DBS Woman's World Card", reward: "4.0", label: "mpd", desc: "Best for all online spend. Capped at S$2,000/month.", tag: "Top Pick" },
            { name: "Citi Rewards", reward: "4.0", label: "mpd", desc: "Online shopping & retail. Capped at S$1,000/month. No travel spend.", tag: "Very Flexible" },
            { name: "HSBC Revolution", reward: "4.0", label: "mpd", desc: "Online & contactless. No annual fee. Capped at S$1,000/month.", tag: "Zero Fee" }
        ],
        dining: [
            { name: "DBS yuu Card", reward: "10.0", label: "mpd", desc: "18% rebate or 10 mpd at yuu merchants. Min spend S$600.", tag: "Highest Yield" },
            { name: "HSBC Revolution", reward: "4.0", label: "mpd", desc: "Contactless payment only. Capped at S$1,000/month.", tag: "Most Convenient" },
            { name: "UOB Lady's Card", reward: "6.0", label: "mpd", desc: "Choose 'Dining' as category. Capped at S$1,000/month.", tag: "Highest Yield" }
        ],
        grocery: [
            { name: "DBS yuu Card", reward: "10.0", label: "mpd", desc: "10 mpd at Cold Storage/Giant/Guardian. Min spend S$600.", tag: "Miles King" },
            { name: "HSBC Revolution", reward: "4.0", label: "mpd", desc: "Contactless payment only. Capped at S$1,000/month.", tag: "Best for Supermarkets" },
            { name: "Citi Rewards", reward: "4.0", label: "mpd", desc: "Only for online groceries (RedMart/Pandamart).", tag: "Online Only" }
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
            { name: "DBS yuu Card", reward: "18.0", label: "%", desc: "Highest rebate for BreadTalk/Foodpanda/Toast Box. Min spend S$600.", tag: "Market Best" },
            { name: "Trust Cashback Card", reward: "15.0", label: "%", desc: "Quarterly bonus. High effective rate for dining.", tag: "Market Best" },
            { name: "Citi Cash Back Card", reward: "8.0", label: "%", desc: "Dining, Petrol, Groceries. Min spend S$800.", tag: "All-rounder" }
        ],
        grocery: [
            { name: "DBS yuu Card", reward: "18.0", label: "%", desc: "18% rebate at Cold Storage/Giant/Guardian. Min spend S$600.", tag: "High Yield" },
            { name: "Maybank Family & Friends", reward: "8.0", label: "%", desc: "Choose your categories. Min spend S$800.", tag: "Best for Families" },
            { name: "Citi Cash Back Card", reward: "8.0", label: "%", desc: "Requires min spend of S$800.", tag: "Reliable" }
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

const mccData_static = [
    { merchant: "Shopee", mcc: "5311", category: "Online Dept Store", card: "Citi Rewards / DBS WWMC", rate: "4.0 mpd" },
    { merchant: "Lazada", mcc: "5311", category: "Online Dept Store", card: "Citi Rewards / DBS WWMC", rate: "4.0 mpd" },
    { merchant: "Amazon SG", mcc: "5311", category: "Online Dept Store", card: "Citi Rewards / DBS WWMC", rate: "4.0 mpd" },
    { merchant: "GrabFood", mcc: "5812", category: "Dining/Delivery", card: "HSBC Revolution / UOB Lady's", rate: "4.0 - 6.0 mpd" },
    { merchant: "GrabRides", mcc: "4121", category: "Transport", card: "UOB Lady's / Amex KF", rate: "3.1 - 6.0 mpd" },
    { merchant: "FairPrice / NTUC", mcc: "5411", category: "Grocery", card: "UOB One / Trust / Maybank F&F", rate: "Up to 15% cashback" },
    { merchant: "Cold Storage", mcc: "5411", category: "Grocery", card: "DBS yuu Card", rate: "Up to 18% rebate" },
    { merchant: "Giant", mcc: "5411", category: "Grocery", card: "DBS yuu Card", rate: "Up to 18% rebate" },
    { merchant: "7-Eleven (Standalone)", mcc: "5499", category: "Convenience Store", card: "DBS yuu Card", rate: "Up to 18% rebate" },
    { merchant: "Starbucks", mcc: "5814", category: "Fast Food", card: "UOB Lady's / HSBC Rev", rate: "4.0 - 6.0 mpd" },
    { merchant: "McDonald's", mcc: "5814", category: "Fast Food", card: "UOB Lady's / HSBC Rev", rate: "4.0 - 6.0 mpd" },
    { merchant: "Insurance (Prudential/AIA)", mcc: "6300", category: "Insurance", card: "UOB Absolute / CardUp", rate: "1.7% / 1.4 mpd", warning: "Blacklisted by 99% of cards" },
    { merchant: "Utilities (SP Group)", mcc: "4900", category: "Utilities", card: "UOB One / OCBC 365", rate: "3.33% - 6.0%", warning: "Excluded by most miles cards" },
    { merchant: "Grab/Revolut Top-ups", mcc: "6540", category: "Stored Value", card: "None", rate: "0.0", warning: "Total exclusion on almost all SG cards" }
];

const comparisonData_static = [
    { name: "DBS Woman's World Card", type: "Miles", bonus: "4 mpd online", base: "0.4 mpd", cap: "S$2,000/mo", lounge: "None", fee: "S$196.20 (Waivable)", bestFor: "Online everything" },
    { name: "Citi Rewards", type: "Miles", bonus: "4 mpd online/retail", base: "0.4 mpd", cap: "S$1,000/mo", lounge: "None", fee: "S$196.20 (Waivable)", bestFor: "Shopping & Amaze hack" },
    { name: "HSBC Revolution", type: "Miles", bonus: "4 mpd online/contactless", base: "None", cap: "S$1,000/mo", lounge: "None", fee: "Permanent Waiver", bestFor: "Dining & Groceries" },
    { name: "DBS yuu Card", type: "Miles/Cashback", bonus: "10 mpd / 18%", base: "0.14 mpd / 0.25%", cap: "S$150/mo rebate", lounge: "None", fee: "S$196.20 (Waivable)", bestFor: "yuu Merchants" }
];

let currentType = 'miles';
let currentCategory = 'online';

function renderCards() {
    const container = document.getElementById('results-container');
    if (!container) return;
    const data = cardData[currentType][currentCategory] || [];
    
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
            (item.merchant && item.merchant.toLowerCase().includes(query)) || 
            (item.category && item.category.toLowerCase().includes(query))
        );

        if (matches.length > 0) {
            resultsContainer.innerHTML = matches.map(item => `
                <div class="mcc-result-item ${item.warning ? 'exclusion' : ''}">
                    <div class="mcc-merchant-info">
                        <h4>${item.merchant || 'Unknown Merchant'} <span class="mcc-code-tag">MCC ${item.mcc || 'N/A'}</span></h4>
                        <span class="mcc-category">${item.category || ''}</span>
                        ${item.warning ? `<div class="mcc-warning">⚠️ ${item.warning}</div>` : ''}
                    </div>
                    <div class="mcc-card-rec">
                        <small style="color: var(--text-muted); display: block; font-size: 0.7rem; margin-bottom: 2px;">Recommended Card:</small>
                        <span class="mcc-card-name">${item.card || 'Check bank terms'}</span>
                        <span class="mcc-reward-rate">${item.rate || ''}</span>
                    </div>
                </div>
            `).join('');
        } else {
            resultsContainer.innerHTML = '<div class="mcc-placeholder">No merchants found. Try another name!</div>';
        }
    });
}

// Where to Spend - Merchant Search
function initWhereToSpend() {
    const searchInput = document.getElementById('merchant-search');
    const suggestions = document.getElementById('merchant-suggestions');
    const resultContainer = document.getElementById('merchant-result');
    const merchantName = document.getElementById('merchant-name');
    const merchantMcc = document.getElementById('merchant-mcc');
    const merchantCards = document.getElementById('merchant-cards');
    
    if (!searchInput) return;

    // Popular merchant quick search chips
    document.querySelectorAll('.merchant-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const merchant = chip.dataset.merchant;
            searchInput.value = merchant;
            performMerchantSearch(merchant);
            suggestions.classList.remove('active');
        });
    });

    // Live search
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length < 2) {
            suggestions.classList.remove('active');
            resultContainer.classList.add('hidden');
            return;
        }

        // Find matching merchants
        const matches = mccData.filter(item => 
            item.merchant && item.merchant.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
            suggestions.innerHTML = matches.slice(0, 8).map(item => `
                <div class="suggestion-item" data-merchant="${item.merchant}">
                    <strong>${item.merchant}</strong> — ${item.category || 'General'}
                </div>
            `).join('');
            suggestions.classList.add('active');

            // Click on suggestion
            suggestions.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', () => {
                    searchInput.value = item.dataset.merchant;
                    performMerchantSearch(item.dataset.merchant);
                    suggestions.classList.remove('active');
                });
            });
        } else {
            suggestions.innerHTML = '<div class="suggestion-item">No merchants found</div>';
            suggestions.classList.add('active');
        }
    });

    function performMerchantSearch(merchantNameQuery) {
        const matches = mccData.filter(item => 
            item.merchant && item.merchant.toLowerCase() === merchantNameQuery.toLowerCase()
        );

        if (matches.length > 0) {
            const item = matches[0];
            merchantName.textContent = item.merchant;
            merchantMcc.textContent = `MCC: ${item.mcc || 'N/A'}`;
            
            // Build card recommendations
            let cardsHtml = '';
            if (item.card) {
                const rateText = item.rate ? `<span class="card-reward">${item.rate}</span>` : '';
                cardsHtml += `
                    <div class="merchant-card-item">
                        <span class="card-name">${item.card}</span>
                        ${rateText}
                    </div>
                `;
            }
            if (item.altCard) {
                const altRateText = item.altRate ? `<span class="card-reward">${item.altRate}</span>` : '';
                cardsHtml += `
                    <div class="merchant-card-item">
                        <span class="card-name">${item.altCard}</span>
                        ${altRateText}
                    </div>
                `;
            }
            
            // Add generic category recommendations
            const categoryCards = getCardsForCategory(item.category);
            if (categoryCards && categoryCards.length > 0) {
                categoryCards.slice(0, 2).forEach(card => {
                    if (!cardsHtml.includes(card.name)) {
                        cardsHtml += `
                            <div class="merchant-card-item">
                                <span class="card-name">${card.name}</span>
                                <span class="card-reward">${card.reward}</span>
                            </div>
                        `;
                    }
                });
            }

            merchantCards.innerHTML = cardsHtml || '<p>Check bank terms for best rate</p>';
            resultContainer.classList.remove('hidden');
        } else {
            // No direct match - suggest category
            merchantName.textContent = merchantNameQuery;
            merchantMcc.textContent = 'MCC: Unknown';
            merchantCards.innerHTML = '<p>No specific data. Use a general rewards card for this merchant.</p>';
            resultContainer.classList.remove('hidden');
        }
    }

    // Click outside to close suggestions
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
            suggestions.classList.remove('active');
        }
    });
}

function initComparison() {
    const s1 = document.getElementById('card-select-1');
    const s2 = document.getElementById('card-select-2');
    
    if (!s1 || !s2) return;

    // Clear existing options
    s1.innerHTML = '<option value="">Select First Card</option>';
    s2.innerHTML = '<option value="">Select Second Card</option>';

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
            annualCash = monthlySpend * 0.06 * 12;
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

function initTabs() {
    const featureItems = document.querySelectorAll('.feature-item');
    const tabContents = document.querySelectorAll('.tab-content');

    featureItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.dataset.tab;
            featureItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === target) {
                    content.classList.add('active');
                }
            });
            window.scrollTo({ top: document.querySelector('.optimizer-section').offsetTop - 20, behavior: 'smooth' });
        });
    });
}

function initTravelCalc() {
    const spendInput = document.getElementById('travel-spend');
    if (!spendInput) return;
    const updateTravel = () => {
        const spend = parseFloat(spendInput.value) || 0;
        document.getElementById('amaze-miles').textContent = `${(spend * 4).toLocaleString()} Miles`;
        document.getElementById('amaze-fee').textContent = `S$${(spend * 0.018).toFixed(2)}`;
        document.getElementById('direct-miles').textContent = `${(spend * 2.4).toLocaleString()} Miles`;
        document.getElementById('direct-fee').textContent = `S$${(spend * 0.0325).toFixed(2)}`;
        document.getElementById('wallet-fee').textContent = `S$${(spend * 0.005).toFixed(2)}`;
    };
    spendInput.addEventListener('input', updateTravel);
    updateTravel();
}

function parseCSV(text) {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
        const values = line.split(',');
        const obj = {};
        headers.forEach((header, i) => {
            obj[header.trim()] = values[i] ? values[i].trim() : '';
        });
        return obj;
    });
}

async function loadDataFromCSV() {
    try {
        // Load Cards Data
        const cardResponse = await fetch('cards.csv');
        const cardCsvText = await cardResponse.text();
        const cardRawData = parseCSV(cardCsvText);
        
        const newCardData = { miles: {}, cashback: {} };
        const newComparisonData = [];

        cardRawData.forEach(row => {
            const type = row.Type;
            const cat = row.Category;
            
            if (type === 'miles' || type === 'cashback') {
                if (!newCardData[type][cat]) newCardData[type][cat] = [];
                newCardData[type][cat].push({
                    name: row.Name,
                    reward: row.Reward,
                    label: row.Unit,
                    desc: row.Desc,
                    tag: row.Tag
                });
            }

            if (!newComparisonData.find(c => c.name === row.Name) && row.Annual_Fee) {
                newComparisonData.push({
                    name: row.Name,
                    type: type.charAt(0).toUpperCase() + type.slice(1),
                    bonus: row.Reward + ' ' + row.Unit,
                    base: "See details",
                    cap: row.Monthly_Cap,
                    lounge: row.Lounge_Access,
                    fee: row.Annual_Fee,
                    bestFor: row.Best_For
                });
            }
        });

        // Load MCC Data
        const mccResponse = await fetch('mcc.csv');
        const mccCsvText = await mccResponse.text();
        const mccRawData = parseCSV(mccCsvText);
        const newMccData = mccRawData.map(row => ({
            merchant: row.Merchant,
            mcc: row.MCC,
            category: row.Category,
            card: row.Recommended_Card,
            rate: row.Rate,
            warning: row.Warning
        }));

        window.cardData = newCardData;
        window.mccData = newMccData;
        window.comparisonData = newComparisonData;

    } catch (error) {
        console.warn("CSV load failed, using static fallback:", error);
        window.cardData = cardData_static;
        window.mccData = mccData_static;
        window.comparisonData = comparisonData_static;
    }

    renderCards();
    initComparison();
    initMCCLookup();
    initWhereToSpend();
    initCalculator();
    initTabs();
    initTravelCalc();
}

window.cardData = {};
window.mccData = [];
window.comparisonData = [];

document.addEventListener('DOMContentLoaded', () => {
    loadDataFromCSV();
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

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
