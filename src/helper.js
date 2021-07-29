const myMethod = () => {
    console.log('this is a  node.Js');
}

const myMethod2 = function () {
    console.log('12345');
}
const PORT = 5000;
const fname = 'Dilip';
const sname = 'Mali';
const addr = 'nmh'
module.exports = {
    P: PORT,
    'fn': fname,
    "add": addr,
    sn: sname,
    mf: myMethod2,
    myMethod,
    myMethod2,
    myMethod3: () => {
        console.log('method3');
    },
    myMethod4:function() {
        console.log('method4.....');
    }
};