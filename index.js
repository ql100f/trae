/**
 * Trae AI 项目入口文件
 */

// 导入应用类
const App = require('./src/app');

/**
 * 主函数 - 应用入口点
 */
function main() {
  try {
    // 创建应用实例
    const app = new App();
    
    // 初始化并启动应用
    app.init().start();
    
    console.log('Trae AI 项目已成功启动');
  } catch (error) {
    console.error('启动应用时发生错误:', error.message);
    process.exit(1);
  }
}

// 执行主函数
main();