'use strict'

const { resourceLimits } = require("worker_threads");

const dummyFetch = () => {
    return new Promise((resolve, resject) => {
        setTimeout(() => {
            console.log("5secs after resolves")
            resolve([1,2,3]);
        }, 5000);
    })
}

async function logFetch() {
    const res = await dummyFetch();
    return res;
}

const result = logFetch();

async function print_result() {
    await result;
    console.log(result);
}


print_result()