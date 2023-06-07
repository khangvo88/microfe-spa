## Microfrontend Demo Structures

| **Packages**        | **Framework** | Port | **Description**                                                                                                                                                      |
|---------------------|---------------|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| root-config         | SystemJS      | 9000 | Home. In-browser module                                                                                                                                              |
| shared-dependencies | JS            |      | contains an [import map](https://github.com/WICG/import-maps/) that controls the shared libraries between all microfrontends. It is self hosting shared dependencies |
| styleguide          | JS/CSS        | 8082 | contains global/organization styles                                                                                                                                  |
| account-settings    | Angular       | 8080 |                                                                                                                                                                      |
| clients             | Vue 3         | 8500 |                                                                                                                                                                      |
| navbar              | React         | 8081 |
| importmap           | JS            | 3030 | Fake importmap for local development                                                                                                                                 |

** Note importmap is for demo purpose only. In a real production, all dist folder should have CI/CD to deploy (upload dist with hash-number folder to CDN)
and update importmap.json asynchronously.

## Getting Started
- Please use NodeJS 16

```sh
yarn
yarn serve
```
- Go to http://localhost:9000, the page should load normally.

## Development
- There is two way 2 working with micro-frontend. The recommended way is to use integrated mode, which 
  - Everything is running via cloud.
  - We only alter the "import-map" to point to our local. First Console in browser and run `localStorage.setItem('devtools', true);`
  - You would see A yellowish rectangle appear at the bottom right of your screen. Click on it. 
  - Find the name our your application, e.g. `@snap-mobile/navbar` and click on it. If it is not present, click on Add New Module. 
  - Change it into `http://localhost:8500/js/app.js`. and save it. For detail info. 

Or you can go to 
```
  <% if (isLocal) { %>
  <script type="systemjs-importmap">
    {
      "imports": {
        "@snap-mobile/root-config": "//localhost:9000/snap-mobile-root-config.js"
      }
    }
  </script>
  <% } %>
```
and add your application there.

```
  <% if (isLocal) { %>
  <script type="systemjs-importmap">
    {
      "imports": {
        "@snap-mobile/root-config": "//localhost:9000/snap-mobile-root-config.js",
        "@snap-mobile/mf-navbar": "//localhost:8081/snap-mobile-mf-navbar.js"
      }
    }
  </script>
  <% } %>
```

- Another way is standalone mode, which we run the project we are working on with `-env standalone` flag. 
  - This flag will run project like normal Single Page App.

- Edit file in `packages/navbar/src/primary-nav/-rpimary-nav.component.js` and save
- Check localhost:9000, the navbar should be updated automatically.