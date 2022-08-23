const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
   puppeteer: {
     args: ["--disable-setuid-sandbox"],
   },
});
  client.on("qr", (qr) => {
    //console.log('QR RECEIVED', qr);
    qrcode.generate(qr, { small: true });
  });

  client.on("ready", () => {
    console.log("Client is ready!");
  });
  client.on("message", (message) => {
    console.log(message.body);
  });
  client.on("message", (message) => {
    if (message.body === "!ping") {
      message.reply("pong");
    }
  });

  client.initialize();

//export {sendToWhatsApp};
