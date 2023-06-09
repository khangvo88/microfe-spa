import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@snap-mobile/mf-navbar",
  app: () => System.import("@snap-mobile/mf-navbar"),
  activeWhen: "/",
});

registerApplication({
  name: "@snap-mobile/mf-clients",
  app: () => System.import("@snap-mobile/mf-clients"),
  activeWhen: "/clients",
});

registerApplication({
  name: "@snap-mobile/mf-account-settings",
  app: () => loadWithoutAmd("@snap-mobile/mf-account-settings"),
  activeWhen: "/settings",
});

// registerApplication({
//   name: "@snap-mobile/navbar",
//   app: () => System.import("@snap-mobile/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});

// A lot of angularjs libs are compiled to UMD, and if you don't process them with webpack
// the UMD calls to window.define() can be problematic.
function loadWithoutAmd(name) {
  return Promise.resolve().then(() => {
    let globalDefine = window.define;
    delete window.define;
    return System.import(name).then((module) => {
      window.define = globalDefine;
      return module;
    });
  });
}
