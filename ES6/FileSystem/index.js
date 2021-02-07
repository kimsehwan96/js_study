'use strict'

const fs = require('fs')
const { promisify } = require('util')

const read = promisify(fs.readFile) //이렇게 promisify 인자로 함수를 넣어주면 프라미스 처럼 동작한다는데 ? 덜덜..
const write = promisify(fs.writeFile)

const writeAndRead = async (data = '') => {
    try {
        await write('test_async.txt', data)
        return await read('test_async.txt');  // 이렇게 resolve 받은 값을 그냥 리턴해도 된다.
    } catch (err) {
        console.error(err);
    }

}

const res = writeAndRead('Hello ! this is async function with promisfy !!');
res.then((data) =>{
    console.log(data); // <Buffer 48 65 6c 6c 6f 20 21 20 74 68 69 73 20 69 73 20 61 73 79 6e 63 20 66 75 6e 63 74 69 6f 6e 20 77 69 74 68 20 70 72 6f 6d 69 73 66 79 20 21 21>

})