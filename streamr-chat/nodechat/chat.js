// @author: Frenzoid
// ---------------------------------------------------------------------
// This is a chat application that uses the Streamr MQTT broker

// --- Imports
// Import the MQTT library
import mqtt from "mqtt";

// Import the readline library to read user input from the console
import { createInterface } from "readline";
const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// --- Constants
// API Key to connect to the MQTT broker
const APIKEY = "MzJhYTM4NTY5ZWQ4NGU0Yzk3Y2E5ZWYzNjc2OGMxNzA";

// Topic to subscribe to, use the same as this one!!.
const TOPIC = "0x7030f4D0dC092449E4868c8DDc9bc00a14C9f561/streamr_chat";

// --- Main
// Connect to the MQTT Streamr broker
// The connection string syntax is as follows: protocol://username:password@address:port
// With Streamr nodes you can use whatever username you want as long as API key is the right one.
const client = mqtt.connect(`mqtt://robert:${APIKEY}@localhost:1883`);

// Username of the user
let username = "";

// --- Event handlers
// When the client connects to the MQTT broker...
client.on("connect", () => {
  // Subscribe to the topic
  console.log("Connected to MQTT broker");
  client.subscribe(TOPIC);

  // Ask the user for their username
  readline.question("Enter your username: ", (name) => {
    username = name;

    // Start a loop to read user input and send it to the topic
    readInput();
  });
});

// When the client receives a message from the topic...
client.on("message", (topic, payload) => {
  // The payload ( message received from the topic ) will be a JSON string, so we need to parse it to an object, and then get the message object from it.
  const { message } = JSON.parse(payload);

  // The message object contains the sender, text and date of the message.
  const { sender, text, date } = message;

  // Print the message to the console
  console.log(date, ":", sender, "says:", text);
});

// --- Functions
// Function to send a message to the topic
function sendMessage(text) {
  let message = {
    sender: username,
    text,
    date: new Date().toLocaleString(),
  };

  // We need to stringify the message object when sending it to the topic, since MQTT ONLY works with Strings and / or Data Buffers.
  client.publish(TOPIC, JSON.stringify({ message }));
}

// Loop to read user input and send it to the topic
function readInput() {
  readline.question("", (message) => {
    sendMessage(message);
    readInput();
  });
}
