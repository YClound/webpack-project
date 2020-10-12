/**
 * 装饰器
 * 装饰方法本质上还是使用 Object.defineProperty()来实现的
 * @see https://mp.weixin.qq.com/s/0aXxEYhDx0fI5-1BAo4ZLw
 * @license 20201011
 * */

function before(target: any, key: any, descriptor: { value?: any; }) {
  const fn = descriptor.value;
  return {
    ...descriptor,
    value() {
      console.log('before')
      return fn.apply(this, arguments);
    }
  }
}

function after(target: any, key: any, descriptor: { value?: any; }) {
  const fn = descriptor.value;
  return {
    ...descriptor,
    value() {
      let result = fn.apply(this, arguments);
      console.log('after');
      return result;
    }
  }
}

class TestDecorate {
  @after
  @before
  func() {
    console.log('func')
  }
}

const testDecorate = new TestDecorate();
testDecorate.func();


Function.prototype.before = function(fn: { apply: (arg0: any, arg1: IArguments) => void; }) {
  var _this = this;
  return function() {
    // @ts-ignore
    fn.apply(this, arguments);
    // @ts-ignore
    return _this.apply(this, arguments);
  }
}

Function.prototype.after = function(fn: { apply: (arg0: any, arg1: IArguments) => void; }) {
  var _this = this;
  return function() {
    // @ts-ignore
    var r  = _this.apply(this, arguments);
    // @ts-ignore
    fn.apply(this, arguments);
    return r;
  }
}

var func_1 = function() {
  console.log('2');
}

func_1 = func_1.before(function() {
  console.log('1')
}).after(function() {
  console.log('3')
})

func_1();