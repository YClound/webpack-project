const webapck = {
  a: '22222222'
};
const b = webapck.a
console.log(b);

[1, 2, 3].map((n) => n + 1);


// shimming - 预置依赖
// import _ from 'lodash';
// import join from 'lodash/join';
function component() {
  const element = document.createElement('div');

  // element.innerHTML = _.join(['Hello', 'webpack'], '');
  element.innerHTML = _join(['Hello', 'webpack'], ' ');

  window.alert('Hmmm, this probably isn\'t a great idea...')

  return element;
}

document.body.appendChild(component());