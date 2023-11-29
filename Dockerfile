# @Author: Robert-CPX - 2023
# -------------------------------------
# From the official Node image.
FROM node:alpine3.17

# Creates the app directory ( directory inside the container where the app will be stored ).
# And sets it as the working directory ( current directoy ).
WORKDIR /usr/src/app

# Copy source code to working directory, in Linux "./" means the current directory.
# So we are copying "hello.js" from our local folder to the container's working directory.
COPY "./" "./"

ENV USERNAME="robert"
ENV DOG_NAME="lisa"

# Commands and arguments needed to run the app :D
CMD ["node", "hello.js"]