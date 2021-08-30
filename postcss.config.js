module.exports = {
    plugins: [
        [
        'postcss-preset-env',
        {
            // CSS Grid 활성화 [false, 'autoplace', 'no-autoplace']
            autoprefixer: { grid: 'autoplace' },
        },
        ],
    ],
}