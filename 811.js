// 811. Subdomain Visit Count


/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
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