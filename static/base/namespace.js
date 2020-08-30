var output = {
    _count: 0,
    fn1: function () {
        console.log('fn1 namespace');
    }
}

console.log('output._count', output._count); // 0

output._count = 10;

console.log('output._count2', output._count) // 10