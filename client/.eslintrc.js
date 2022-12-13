module.exports = {
    extends: [
        'airbnb'
    ],
    parser: '@babel/eslint-parser',
    plugins: [
        'simple-import-sort',
    ],
    settings: {
        react: {
            pragma: 'React',
            version: '18.2.0'
        },
        'import-resolver': {
            node: {
                extentions: ['.js', '.jsx']
            }
        }
    }
}