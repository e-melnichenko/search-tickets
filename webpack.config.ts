import {commonConfig, devConfig, prodConfig} from './webpack/configs';
import merge from 'webpack-merge';

export default (env, args) => {
    switch(args.mode) {
        case 'development':
            return merge(commonConfig, devConfig);
        case 'production':
            return merge(commonConfig, prodConfig);
        default:
            throw new Error('No matching configuration was found!');
    }
}
