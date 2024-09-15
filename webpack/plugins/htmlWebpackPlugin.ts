import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../../src/index.html')
})