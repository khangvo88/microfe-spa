## Microfrontend Demo Structures

| **Packages**        | **Framework** | Port | **Description**                                                                                                                                                      |
|---------------------|---------------|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| root-config         | SystemJS      | 9000 | Home. In-browser module                                                                                                                                              |
| shared-dependencies | JS            |      | contains an [import map](https://github.com/WICG/import-maps/) that controls the shared libraries between all microfrontends. It is self hosting shared dependencies |
| styleguide          | JS/CSS        | 8082 | contains global/organization styles                                                                                                                                  |
| account-settings    | Angular       | 8080 |                                                                                                                                                                      |
| clients             | Vue 2         | 8500 |                                                                                                                                                                      |
| navbar              | React         | 8081 |
| importmap           | JS            | 3030 | Fake importmap for local development                                                                                                                                 |


## Getting Started

```sh
yarn bootstrap
yarn serve
```