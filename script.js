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

// Initial Render
renderCards();

// Animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
