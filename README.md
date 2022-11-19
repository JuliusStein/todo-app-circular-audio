# todo-app-circular-audio
A simple to do list web app powered only by HTML, CSS, and vanilla ES5 JavaScript.

## Install http-server
To spin up the application, install http-server using npm *or* Homebrew (no need to do both):

**npm**

```
npm install --global http-server
```

**Homebrew**

```
brew install http-server
```

## Run the server locally
Ensure you are inside the folder ```todo-app-vanilla``` if you are not already. 

Run the following command:

```
http-server
```

You should see the server start, as well as a message saying which IP address is being used. It may look something like:

```
Available on:
  http://127.0.0.1:8080
  http://192.168.0.17:8080
```

Copy and paste either of those addresses into your browser. The default is ```http://127.0.0.1:8080``` or equivalently, ```http://localhost:8080/```. You should now be able to see the To Do list app in your browser!

## Using the App
### Basic Functionality
To add a list item, enter an item (i.e. "Do laundry") into the input field and click the "Add" button *or* press "Enter".

To mark an item as done, click the item.

To undo marking an item as done, just click the item again.

### Extra Functionality
To clear all your list items, click "Clear All".

To clear any checked-off list items, click "Clear Completed".

## Citations
Basic ideas and implementation for creating list items: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo

Triggering an event based on keypress: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp

Clearing all items in a list: https://www.codegrepper.com/code-examples/javascript/javascript+remove+all+li+elements+from+ul

