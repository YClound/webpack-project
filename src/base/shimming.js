// shimming - 预置依赖
// import _ from 'lodash';

// 部分引入
import join from 'lodash/join';

// tree shaking
import { cube, square } from '@/utils/tree-shaking';

function component() {
  const element = document.createElement('div');

  // 全部引入lodash
  // element.innerHTML = _.join(['Hello', 'webpack'], '');
  // element.innerHTML = _join(['Hello', 'webpack'], ' ');

  //`5 square is equal to ${square(5)}`
  element.innerHTML = join(['Hello', 'webpack', `5 cubed is equal to ${cube(5)}`], ' ');

  window.alert('Hmmm, this probably isn\'t a great idea...')

  return element;
}

document.body.appendChild(component());