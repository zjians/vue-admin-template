# template

> 这是一个极简的 vue 管理后台

# 代码风格 & 规范

建议参考 vue 官方[风格指南](https://cn.vuejs.org/v2/style-guide/) 建议使用[jsdoc](http://shouce.jb51.net/jsdoc/about-namepaths.html)的方式添加函数备注。<br> git 提交规范：希望使用 `<type>: <subject>`的格式提交代码（冒号后需要加一个空格）<br>

##### type 说明:<br>

type 用于说明 commit 的类别，只允许使用下面 7 个标识。 <br> feat：新功能（feature） <br> fix：修补 bug <br> docs：文档（documentation） <br> style： 格式（不影响代码运行的变动） <br> refactor：重构（即不是新增功能，也不是修改 bug 的代码变动） <br> test：增加测试 <br> chore：构建过程或辅助工具的变动 <br> `如果 type 为 feat 和 fix，则该 commit 将肯定出现在 Change log 之中。`

# 安装依赖

npm install

# 启动服务

npm run dev

````

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
````

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查和自动修复
npm run lint:fix
```

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --- | --- | --- | --- |
| IE10, IE11, Edge | last 2 versions | last 2 versions | last 2 versions |
