const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PUBLIC_DIR = path.resolve(__dirname, "public");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = [
    {
        mode: "development",
        entry: SRC_DIR + "/js/index.js",
        output: {
            path: PUBLIC_DIR,
            filename: "js/bundle.js",
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: "css-loader",
                        },
                        {
                            loader: "postcss-loader",
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                implementation: require("sass"),
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "img",
                            },
                        },
                    ],
                },
                {
                    test: /\.(woff|woff2|ttf|otf|eot)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "fonts",
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "css/bundle.css",
            }),
        ],
    },
];
