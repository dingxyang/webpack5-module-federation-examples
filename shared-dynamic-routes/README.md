# Shared Dynamic Routing Example
动态加载共享路由  
app1是主系统，app2、app3是子模块系统  
app1可以根据配置（从后台查询），去加载对应app2或者app3暴露的模块  
app2（app3）可以去访问app1暴露模块，本例子没有处理app2和app3的互相引用，要使用可以参考app1的处理方式

- `app1` contains the "Home Page" (/) route.
- `app2` contains the "About Page" (/about) "hello Page" (/hello) route.
- `app3` contains the "Test Page" (/test) route.

# Running Demo

Run `yarn start`

- [localhost:3001](http://localhost:3001/)
- [localhost:3002](http://localhost:3002/)
- [localhost:3003](http://localhost:3003/)