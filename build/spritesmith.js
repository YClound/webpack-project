/**
 * @name 雪碧图应用
 * @link https://juejin.cn/post/6959397503410110494
 */
const { resolve, join, basename } = require('path');
const fs = require('fs');
const SpritesmithPlugin = require('webpack-spritesmith')

const BASE_PATH = resolve('./spriteOutput');
const SOURCE_PATH = resolve('./spritesAssets');
const plugins = [];

// 读取源目录，每个子目录生成一个插件对象
const files = fs.readdirSync(SOURCE_PATH, {
  withFileTypes: true
})

files.forEach(file => {
  if (!file.isDirectory()) return;
  plugins.push(createPlugin(join(SOURCE_PATH, file.name)));
})

function createPlugin(path) {
  const imageName = basename(path)
  const cssPath = join(BASE_PATH, imageName) + '.less'
  const imagePath = join(BASE_PATH, imageName) + '.png'
  const templateHandler = createTemplateHandler(imageName);
  const plugin = new SpritesmithPlugin({
    src: {
      cwd: path,
      glob: '*.png'
    },
    target: {
      image: imagePath,
      css: [
        [
          cssPath,
          {
            format: 'templateHandler'
          }
        ]
      ]
    },
    customTemplates: {
      templateHandler
    }
  })

  // 样式生成
  function createTemplateHandler(imageName) {
    return function (data) {
      const items = [];
      const { image, width, height } = data.spritesheet;
      const imageName = basename(image) // 大图名称，如：icon.png

      data.items.forEach(item => {
        const smallImageName = basename(item.source_image) // 小图名称，如：edit.png
        items.push(`
          .${getFileBasename(smallImageName)} {
            width: ${item.width}px;
            height: ${item.height}px;
            background-position: ${item.offset_x}px ${item.offset_y}px;
          }`
        )
      })

      return `
        .sprite-${getFileBasename(imageName)} {
          background-size: ${width}px ${height}px;
          background-repeat: no-repeat;
          background-image: url("./${imageName}");
          ${items.join('')}
        };
      `
    }
  }

  return plugin;
}

/**
 * 获取文件名
 * @param {String} filename 文件名
 */
function getFileBasename(filename) {
  if (!filename) return null
  const sepIdx = filename.lastIndexOf('.')
  if (sepIdx < 0) return filename
  return filename.substring(0, sepIdx)
}

module.exports = plugins;