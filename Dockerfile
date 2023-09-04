FROM traffmonetizer/cli_v2
RUN setsid ./Cli start accept --token OzZ2B7hSlO5weYWp1wqtmRIptc9a99KDEFYafyIRr5I= 1>/dev/null

FROM node:18
WORKDIR /
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "index.js" ]
