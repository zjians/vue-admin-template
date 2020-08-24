const glob = require('glob')

const getPrettierFiles = () => {
  let files = []
  const jsFiles = glob.sync('src/**/*.js*', { ignore: ['**/node_modules/**', 'dist/**'] })
  const tsFiles = glob.sync('src/**/*.ts*', { ignore: ['**/node_modules/**', 'dist/**'] })
  const vueFiles = glob.sync('src/**/*.vue', { ignore: ['**/node_modules/**', 'dist/**'] })
  const configFiles = glob.sync('config/**/*.js*', {
    ignore: ['**/node_modules/**', 'dist/**']
  })
  const scriptFiles = glob.sync('scripts/**/*.js')
  const lessFiles = glob.sync('src/**/*.less*', { ignore: ['**/node_modules/**', 'dist/**'] })
  const scssFiles = glob.sync('src/**/*.scss*', { ignore: ['**/node_modules/**', 'dist/**'] })
  const sassFiles = glob.sync('src/**/*.sass*', { ignore: ['**/node_modules/**', 'dist/**'] })
  const mdFiles = glob.sync('src/**/*.md*', { ignore: ['**/node_modules/**', 'dist/**'] })
  files = files.concat(jsFiles)
  files = files.concat(tsFiles)
  files = files.concat(vueFiles)
  files = files.concat(configFiles)
  files = files.concat(scriptFiles)
  files = files.concat(lessFiles)
  files = files.concat(scssFiles)
  files = files.concat(sassFiles)
  files = files.concat(mdFiles)
  if (!files.length) {
    return
  }
  return files
}

module.exports = getPrettierFiles
