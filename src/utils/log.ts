import fs from "fs";

import moment from "moment-timezone";

const logMessage = (message: string) => {
  const now = moment().tz("Australia/Sydney").format("DD/MM/YYYY HH:mm:ss");
  const datedMessage = `${now} => ${message}\n`;
  console.log("LOGGING", message.slice(0, -1)); // slice to remove \n

  try {
    fs.appendFileSync("logs/logs.txt", datedMessage);
  } catch (e) {
    console.error(e);
  }
};

export default logMessage;
