'use strict'

module.exports = class cacheManager {
    //construct 는 promise 객체 반환 불가능.
    constructor(){
        this.config = []
    }

    addConfig (obj ={}) {
        this.config.push(obj)
    }
    getConfig() {
        return this.config
    }
}