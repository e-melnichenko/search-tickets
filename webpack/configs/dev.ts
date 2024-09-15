import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server'; // for devServer type

export const devConfig: webpack.Configuration = {
    mode: 'development',
    devServer: {
        port: 8080,
        static: path.resolve(__dirname, '../../dist'),
        hot: true,
        // open: true,
    },
}
