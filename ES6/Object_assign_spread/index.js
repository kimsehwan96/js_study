'use strict'

const obj = {
    title : 'node.js'
}

const newObj = {
    name: 'sehwan'
}

//두 객체를 어떻게 하나로 합칠까?

//Object.assign
//Object.assign(target:{}, source1: {}, source2: {} ...}
const ret = Object.assign({}, obj, newObj);

console.log(ret); //{ title: 'node.js', name: 'sehwan' }

const spreadRet = {
    ...obj,
    ...newObj
}

console.log(spreadRet);//{ title: 'node.js', name: 'sehwan' }

const arr = [1, 2, 3]
const newArr = [4, 5, 6]

const arrRet = [...arr,
                ...newArr
]

console.log(arrRet); //[ 1, 2, 3, 4, 5, 6 ]
