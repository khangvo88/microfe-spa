## Microfrontend Demo Structures

| **Packages**        | **Framework** | **Description**                                                                                                               |
|---------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------|
| root-config         | SystemJS      | Home. In-browser module                                                                                                       |
| shared-dependencies | JS            | contains an [import map](https://github.com/WICG/import-maps/) that controls the shared libraries between all microfrontends. |
| styleguide          | JS/CSS        | contains global/organization styles                                                                                           |
| account-settings    | Angular       |                                                                                                                               |
| clients             | Vue 2         |                                                                                                                               |
| navbar              | React         |       


## Getting Started

```sh
yarn bootstrap
yarn serve
```