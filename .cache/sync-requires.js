const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/user1/Desktop/real-state-gatsby/.cache/dev-404-page.js"))),
  "component---src-components-page-template-js": hot(preferDefault(require("/Users/user1/Desktop/real-state-gatsby/src/components/page-template.js"))),
  "component---src-components-property-template-js": hot(preferDefault(require("/Users/user1/Desktop/real-state-gatsby/src/components/property-template.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/user1/Desktop/real-state-gatsby/src/pages/index.js")))
}

