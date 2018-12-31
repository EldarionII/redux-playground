const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const options = {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
    host: 'localhost'
};
const port = 5001;

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);

server.listen(port, 'localhost', () => {
    console.log(`dev server listening on port ${port}`);
});