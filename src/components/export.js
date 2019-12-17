const fs = require('fs')

fs.readdir("./", function (err, files) {
    files.map(file => {
        const name = file.substring(0, file.length-3)
        console.log(`export ${name} from './components/${name}'`)
    })
})