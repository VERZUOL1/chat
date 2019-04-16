# Socket.io based chat

Latest application version is running and available on<br> https://socket-io-cht.herokuapp.com/

This is Socket.io based chat application. It contains 2 pages: Chat and Settings.
There is a connection status indicator on top of the page.
Chat page displays sent messages on the right and received messages on the left.<br>
Each message contains Author name, time and text (image, link, video);
Message input component allow to add emoji to text and send message by pressing Enter or Ctrl+Enter depending on Settings.
If user is on Settings page and there are new messages coming, Chat tab will blink and display unread messages counter.

#### Application features:
##### General
* Emoji picker
* Display images in chat by pasting a link
* Display Youtube video in chat by pasting a link
* Unread messages count
* Connection status
##### Setting
* Ability to change username
* Light and dark themes supported
* 12 and 24 hours time format
* Send messages by Enter or Ctrl + Enter keys
* English and Russian interface languages
* Reset to defaults option
* Settings are persisted in localStorage and restored on page refresh

## Available Scripts

In the project directory, you can run:

### `npm run start:dev:app`

Install all dependencies both for front and back ends and runs application in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run start:dev`

Runs the front-end app in the development mode.<br>

### `npm run server`

Runs the back-end app in the development mode.<br>

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>

### `npm run start`

Install dependencies for backend and start the application.
Heroku service uses `npm start` command to run deployed application by default
so I used it to run application in production

