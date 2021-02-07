'use strict'

const cacheManager = require('./cache');

class sessionManager extends cacheManager { //cacheManager를 상속받음

}

const SessionManager = new sessionManager();

SessionManager.addConfig({
    token: 'random'
});

console.log(SessionManager.getConfig()); //[ { token: 'random' } ]
