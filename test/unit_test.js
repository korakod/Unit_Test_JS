const asert = require('chai').assert;
const app = require('../app')

describe('Validate required' , function () {

    it('Validate required send  \"\"  return false' , function () { 
        asert.equal( app.validate_required("") , false );
    })

    it('Validate required send  \"xxx\"  return true' , function () { 
        asert.equal( app.validate_required("xxx") , true );
    })
 
})

describe('Fn plus' , function () {
    it('fn plus must be return interger' , function () { 
        asert.isNumber( app.plus(1,2))
    }) 

    it('fn plus 5 , 5 retrun 10' , function () { 
        asert.equal( app.plus(5,5) , 10)
    }) 
})