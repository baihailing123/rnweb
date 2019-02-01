module.exports = {
  presets: ["module:metro-react-native-babel-preset","@babel/preset-env"],
  plugins: ["@babel/plugin-transform-runtime",["transform-class-properties"]]
}