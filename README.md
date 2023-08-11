# 🤖 @xprompt.ai/react-gpt

⚡ Embed a GPT-powered chat UX into your product in no time

💰 Building, fine-tuning, and hosting LLMs is expensive. Instead, focus on your product and drop in a chat UX.

💥 Use ready-made features like multi-turn conversations, question answering, and task execution via your API.

🧐 xPrompt React GPT is a drop-in chat UX for your app. It provides a fine-tuned LLM, drop-in UI component, chat server, task execution engine, and an admin panel. Your users can execute tasks through natural-language-to-API capability and ask questions. Setting up is simple. Just upload your API’s open API specification and provide a few examples using the admin panel.

## Docs

Available at: <https://www.xprompt.ai/>


## Demo 

[![xPrompt Intro](https://xprompt.ai/img/demo-video-sc.png
)](https://youtu.be/YGM3illCQaM "xPrompt Intro")



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
