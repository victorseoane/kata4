const add = require('../lib/adding.js')

describe('add function ',()=>{
    it('works for simple case',()=>{
        const result = add(8)(-2)(3)
        console.log(result.value)
    })
})