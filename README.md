# webpack5-module-federation-examples
# Module Federation Examples
[https://github.com/module-federation/module-federation-examples](https://github.com/module-federation/module-federation-examples)



# Examples
run `yarn` at the repo root. 
You can then run `yarn && yarn start` from any of the non-proprietary examples.

Base Example
- [x] [Basic Host-Remote](./basic-host-remote/README.md) &mdash; App 1 consumes remote components from App2.
- [x] [Bi-Directional Hosts](./bi-directional/README.md) &mdash; App1 consumes App2 components; App2 consumes App1 components.
- [x] [Dynamic System Host](./dynamic-system-host/README.md) &mdash; Swap between remotes at runtime.
- [x] [Share Context Provider](./shared-context/README.md) &mdash; App1 and App2 with shared Context Provider.
- [x] [Shared Routes](./shared-routes2) &mdash; Compose federated routes for a seamless user experience.

My Example
- [x] [Share-Dynamic-Routes](./shared-dynamic-routes/README.md) &mdash; Shared Dynamic Routes.
- [x] [Dynamic-Menus](./dynamic-menus/README.md) &mdash; 点击菜单，动态加载远程模块（使用系统标志作转发，而非写死的资源访问地址）

```
yarn 
cd basic-remotes-component
yarn start
```
## open  
http://localhost:3001/  
http://localhost:3002/   