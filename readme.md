# Health Insurance in America

Live site: [osterman.io/health-insurance-map/](http://osterman.io/health-insurance-map/)
This is a tool for visualizing US Census 2011–15 American Community Survey (ACS) estimates of health insurance coverage across the country.

## Some details

I'm using D3 for the charts and mapbox for the maps. Otherwise, it is framework-less Javascript making use of a state object for keeping track of the state of the application and a contributed PubSub module for passing info across components.

`setState(<name>,<state>)` sets the state and, if it is different from previous state, the PubSub module will announce it so that the methods subscribed to that state change can do their things.

`setSubs([[<stateChange>, <methodToSubscribe>], … ])` sets up the subscriptions.

In previous projects with mapbox I've found that adding a source sometimes doesn't take effect quickly enough to immediately support adding a layer based on it. Similarly, adding a layer sometimes doesn't take effect quickly enough for you to immediately interact with it. You can work around this by listening for the maps `render` event and checking on `render` if the source or layer exists before continuing.

It's tedious to do this check  every time, so I've created some methods for abstracting away from that a little. `mbAddSourceAndLayer`, for instance, resolves a Promise when the source takes hold; the layer is added on that resolution. The method itself returns a Promise, so the you can chain subsequent actions onto that resolution and be sure that nothing is requested of that layer before it is ready.

## Build environment

The built files for the live site are in the root; source files are in \_dev/. That way I can push to master and have the site load from the root path.

**Set up**
`npm install --save-dev` to install the node modules specified in package.json

**Dev**
`grunt watch` to lint html and javascript and to convert scss to css (in the \_dev/ folder)

**Build**
`grunt build` to copy files to root, transpile the es6 javascript and concatenate it with vendor js, postprocess the css, and modify index.html as necessary.