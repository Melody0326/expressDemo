# expressDemo
这是一个基于node平台下的express框架的demo，是依托于pm2作为启动控制的，利用jade的模板引擎来实现，还在学习中，还望交流指正，蟹蟹。

## 运行
首次运行
```
使用pm2 start config/pm2/mabingbing.json启动
```

## 结构
```
build -- 静态资源地址
    www
        static
config -- 项目配置文件
    env
    pm2
        mabingbing.json -- 使用pm2启动应用的简单配置
logs -- 日志生成目录
public -- 静态资源目录
server -- 服务相关
run.js -- 启动文件
app.js
package.json --- 服务依赖配置
```

### app.js
引入init模块，并建立服务。

### init.js
创建express实例;
设置jade模版引擎;
设置静态资源地址build;
创建中间件，如果访问index后，执行test模块;
最后返回app实例。

### server/index.js
使用express路由，
访问index或者访问/getname 后对请求进行处理，并渲染jade模版引擎。

### public/view/index.jade
title与name作为需要注入的数据变量





