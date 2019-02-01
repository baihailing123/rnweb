import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// 启动 App 组件
AppRegistry.runApplication(appName, {
  // 启动时传给 App 组件的属性
  initialProps: {},
  // 渲染 App 的 DOM 容器
  rootTag: document.getElementById('react-root')
});