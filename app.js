module.exports.hello= function () {
    return 'hello mocha & chai'
}
module.exports.x = function () {
    return 'XX'
}

module.exports.validate_required= function ( val ) {

    if(val){
        return true;
    }else {
        return false;
    }
}

module.exports.plus= function ( val1 ,val2  ) {

     return val1 + val2 + val2
}

function add(params) {
    console.log("Fn Add" ,params)
}

let objFn = {
    condition : add
}
function d(d){
    console.log(d instanceof Function) 
}


function v1(params) {
    params.condition('xxxxx')
}

d(d)
// v1(objFn)




function test(ojb , log) {
    
    
    // console.log('ojb: ', ojb);
    // console.log('log is function: ', isFunction(log) );
    let logFn = console.log;
    if(isFunction(log)){
        logFn = log
    }


    logFn( "hello log " , ojb);

    // log('hhhhhhhhh')
    
}

// test( {xx:1} , add);


function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

// test('xxxx' , (xxxx) => {
//    console.log('callback',xxxx);

// } );


