import path from 'path';
import webpack from 'webpack';
import {tsLoader} from '../loaders';
import {htmlWebpackPlugin} from '../plugins';

export const commonConfig: webpack.Configuration = {
    entry: path.resolve(__dirname, '../../src/index.tsx'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../../dist'),
        clean: true,
    },
    module: {
        rules: [
            tsLoader,
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        htmlWebpackPlugin,
    ]
}
