'use strict'

const dns = require('dns');

dns.lookup('google.com', (err, address, family) => {
    console.log(`address : ${address}, ${family}`)
})


dns.resolve4('archive.org', (err, addresses) => {
    if (err) throw err

    const res = JSON.stringify(addresses);
    console.log(res);

    addresses.forEach((item) =>{
        dns.reverse(item, (err, hostname) => {
            if (err) throw err

            console.log(`revers for ${item}; ${JSON.stringify(hostname)}`)
        })
    })
})