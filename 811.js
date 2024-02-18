// 811. Subdomain Visit Count


/**
 * @param {string[]} cpdomains
 * @return {string[]}
*/


const subdomainVisits = function(cpdomains) {
    const visitsMap = {};

    for (const domain of cpdomains) {
        const [count, fullDomain] = domain.split(' ');
        const subdomains = extractSubdomains(fullDomain);

        for (const sub of subdomains) {
            visitsMap[sub] = (visitsMap[sub] || 0) + Number(count);
        }
    }

    const result = [];
    for (const subdomain in visitsMap) {
        result.push(`${visitsMap[subdomain]} ${subdomain}`);
    }

    return result;
};

function extractSubdomains(domain) {
    const parts = domain.split(".");
    const subdomains = [];

    for (let i = 0; i < parts.length; i++) {
        subdomains.push(parts.slice(i).join("."));
    }

    return subdomains;
}

/*
var subdomainVisits = function(cpdomains) {

    let freq = {};
    let res = [];

    for(let i=0; i<cpdomains.length; i++) {
        
        
        let count = 0;
        let seperatorIdx = cpdomains[i].indexOf(' ')
        count = Number(cpdomains[i].slice(0,seperatorIdx))
        domain = cpdomains[i].slice(seperatorIdx+1)
        
        let subdomains = domain.split('.')
    
        let currentDomain = '';
        for (let j = subdomains.length - 1; j >= 0; j--) {
            currentDomain = subdomains[j] + (j < subdomains.length - 1 ? '.' : '') + currentDomain;
            freq[currentDomain] = freq[currentDomain] ? freq[currentDomain] + count : count;
        }
    }

    for (let subdomain in freq) {
        res.push(freq[subdomain] + ' ' + subdomain);
    }

    return res

}

*/