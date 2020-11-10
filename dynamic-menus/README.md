# dynamic-menus
点击菜单按钮再加载对应的模块，支持主系统的数据共享  
具体功能
- [x] 模块动态加载
- [x] 模块地址使用模块标志，使用代理转发资源
- [x] 状态共享

# Module Federation
通过配置ModuleFederationPlugin来使用该功能  
- name 模块名称  
- filename 模块加载入口文件名  
- exposes 暴露组件信息  
- remotes 远程模块信息  
- shared 共享以来  

# 启动

```
cd dynamic-menus
yarn start
```

```
cd main
yarn 
yarn run build
node serve.js
```

