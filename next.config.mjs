/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv|mov)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
            name: '[name].[ext]',
          },
        },
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  