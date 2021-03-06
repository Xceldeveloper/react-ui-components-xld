const postcss = require('rollup-plugin-postcss');
// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
module.exports = {
    // This function will run for each entry/format/env combination
    rollup(config, options) {
        options.TsdxOptions = {
            minify: true,
        };

        config.plugins.push(
            postcss({
                extensions: ['.css']
            }),
        )
        return config; // always return a config.
    },
};