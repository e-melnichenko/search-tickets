import path from 'path';
import webpack from 'webpack';

export const devConfig: webpack.Configuration & { devServer: unknown } = {
    mode: 'development',
    devServer: {
        port: 8080,
        static: path.resolve(__dirname, '../../dist'),
        hot: true,
        // open: true,
    },
}
