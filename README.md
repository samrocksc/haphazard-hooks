# haphazard-hooks
GitHooks with Hapi
---

The goal of haphazard hooks is to implement a hapi server that can be opened up via nginx and set up with Basic Auth to be able to set up GitHooks quickly using [child_process](https://nodejs.org/api/child_process.html) to be able to quickly receive githooks specifically from GitHub and deploy them to your apps quickly and easily!

## Creating a GitHook
---

The primary thing to understand is that GitHooks are primarily just webhooks from anything really, you can use TravisCI, Github, whatever.  The ultimate understanding point is the following:

**REPO API RECEIVES PUSH, DEPLOYS WEBHOOK->REPO ON SERVER RECEIVES WEBHOOK IN HAPI->HAPI EXECUTES A GITHOOK->GITHOOK EXECUTES A COMMAND OF EXECUTION**

## Files Needed
---

(obviously opinionated)
As with any API we are going to be creating a Route, Handler, and if any handler reuses code, then a lib to create a repeatable method.

In this case the following file structure ensures:

1. `index.js` -> Primary Hapi file, starts the server, you node this.
2. `server/routes/index.js`
3. `server/routes/githooks.js`
4. `server/handlers/githooks.js`
5. `server/lib/master.js`
6. `server/lib/develop.js`

## For sake of Brevity I will explain GitHub Githooks
---

When GitHub actually receives a push is when it actually will deploy it's webhook.  This webhook will send a json package with a `POST` to your server.  The information in the `payload.ref` is what we're actually looking for on this.  `payload.ref` will tell us if it is relevant to our githook to run our post-update.

In Git all of the standard GitHooks are stored in `.git/hooks`.  This is a great place to find out information about it.
