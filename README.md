# 🤖 React GPT
Create a chat GPT like chat UX on top of any REST API.

React GPT is a "batteries included" approach to quickly add a chat GPT like UX to your app.
It uses xprompt LLM to automatically translate natual language queries into REST API calls and execute them.

## Demo 

<iframe width="1392" height="585" src="https://www.youtube.com/embed/l75jiHb5mCo" title="xPrompt Intro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Docs

Available at: https://xprompt.ai/

## Installation

Using npm:

```
npm install @xprompt.ai/react-gpt
```
Using yarn:

```
yarn add @xprompt.ai/react-gpt
```

Using pnpm:

```
pnpm add @xprompt.ai/react-gpt
```


### Props

Prop | Description | Default
---- | ----------- | -------
`bgColor` | Background color of the chat component | #e4e4e4
`userColor` | User chat message background color | #e4e4e4
`userTextColor` | User chat message text color | #000000
`botColor` | Bot chat message background color | #dbdbdb
`botTextColor` | Bot chat message text color | #000000
`inputTextColor` | New chat message input control's text color | #C9C9C9
`inputBgColor` | New chat message input control's background color | #222222
`config*` | See below for details | 


#### config Prop

Identifies the target backend app and provides the authentication data for the backend app.
Authentication data is used to execute the REST API calls against the target app.
Please create an app specification on www.xprompt.ai and use the name provided in the app spec as the appName below.

```
{
  "appId": "", <- this UUID identifies the backend app. Create an app spec on www.xprompt.ai
  "authData": { <- authentication data for the backend app —- used for executing the translated REST API calls 
    "location": "query", <- where to include the auth. Options are query | header
    "auth": { <- auth object
      
    }
  }
}
```
