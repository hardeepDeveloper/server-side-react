module.exports = {
    // Tell webpack to run babel file on every file it runs through
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets : ['react','stage-0',['env',{targets: {browsers: ['last 2 versions']}}]]
                }
            }
        ]
    },
}