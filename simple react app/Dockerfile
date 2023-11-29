# @Author: Robert-CPX - 2023
# -------------------------------------
# From the official Node image.
FROM node:alpine3.17

WORKDIR /usr/src/app

# Copy built react app into workdir.
COPY "./dist" "./"

# We can run commands before running our app using the RUN instruction, in this case we are installing globally the "serve" package.
RUN npm i -g serve

# We will host our React app using the 'serve' package. The 'serve' command includes an argument '-s' that enables users to designate the path to the files to be served.
CMD ["serve", "-s", "./"]