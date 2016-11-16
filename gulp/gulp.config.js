module.exports = {
    build_dir: './build',
    app_files: {
        js: ['./src/**/*.js'],
        tpl_src: ['./build/vendor/**/*.js',
            './build/app/**/*.module.js',
            './build/app/**/*.js',
            '!./build/app/**/*.spec.js',
            './build/assets/css/**/*.css'
        ]
    }
}