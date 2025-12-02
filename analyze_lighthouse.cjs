const fs = require('fs');

const files = [
    'Lighthouse-incognito-alexanderlapygin.com-20251202T223314.json',
    'Lighthouse-optimization-incognito-alexanderlapygin.com-20251202T223314.json'
];

files.forEach(file => {
    try {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        const performance = data.categories.performance.score * 100;
        const fcp = data.audits['first-contentful-paint'].displayValue;
        const lcp = data.audits['largest-contentful-paint'].displayValue;
        const tbt = data.audits['total-blocking-time'].displayValue;
        const cls = data.audits['cumulative-layout-shift'].displayValue;
        const speedIndex = data.audits['speed-index'].displayValue;

        console.log(`File: ${file}`);
        console.log(`Performance Score: ${performance}`);
        console.log(`FCP: ${fcp}`);
        console.log(`LCP: ${lcp}`);
        console.log(`TBT: ${tbt}`);
        console.log(`CLS: ${cls}`);
        console.log(`Speed Index: ${speedIndex}`);
        console.log('-----------------------------------');
    } catch (e) {
        console.error(`Error reading ${file}:`, e.message);
    }
});
