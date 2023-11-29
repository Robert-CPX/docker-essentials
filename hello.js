import fs, { read } from "fs";

const USERNAME = process.env.USERNAME;
const DOG_NAME = process.env.DOG_NAME;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const readData = async () => {
  while (true) {
    console.log(
      "Hello I am",
      USERNAME,
      ", and my dog's called ",
      DOG_NAME,
      "!"
    );
    await sleep(1000);
  }
};

readData();
