// eslint-disable-next-line import/no-extraneous-dependencies
const blacklist = require('metro-config/src/defaults/blacklist')
const path = require('path')

const cwd = path.resolve(__dirname)

const noHoistDependencies = [
  'react-native',
  'react'
]

function getPackages() {
  return [path.resolve(cwd, '../..')]
}

const packages = getPackages()
const watchFolders = [path.resolve(cwd, '../..', 'node_modules')].concat(
  packages
)

function getBlacklist() {
  const rootPath = path.resolve(cwd, '../..')
  const directories = [rootPath].concat(packages)
  const blacklistPaths = noHoistDependencies
    .map(dependency =>
      directories.map(dir => `${dir}/node_modules/${dependency}/.*`)
    )
    .reduce((acc, value) => {
      return [...acc, ...value]
    })

  console.log('TCL: getBlacklist -> blacklistPaths', blacklistPaths)

  console.log(
    blacklistPaths.map(dir => new RegExp(dir.replace(/\//g, path.sep)))
  )

  return blacklist(
    blacklistPaths.map(dir => new RegExp(dir.replace(/\//g, path.sep)))
  )
}

function getExtraNodeModules() {
  return noHoistDependencies.reduce((obj, dep) => {
    // eslint-disable-next-line no-param-reassign
    obj[dep] = path.resolve(cwd, `./node_modules/${dep}`)
    return obj
  }, {})
}

const blacklistRE = getBlacklist()
const extraNodeModules = getExtraNodeModules()

console.log('TCL: blacklistRE', blacklistRE)
console.log('TCL: watchFolders', watchFolders)
console.log('TCL: extraNodeModules', extraNodeModules)

module.exports = {
  resolver: {
    blacklistRE,
    extraNodeModules
  },

  watchFolders,

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true
      }
    })
  }
}