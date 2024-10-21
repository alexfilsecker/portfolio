import { NextApiRequest, NextApiResponse } from "next";
import Mailjet from "node-mailjet";

const API_KEY = process.env.API_KEY;
if (API_KEY === undefined) {
  throw new Error("API KEY UNDEFINED");
}
const API_SECRET = process.env.API_SECRET;
if (API_SECRET === undefined) {
  throw new Error("API SECRET UNDEFINED");
}

const SENDER_EMAIL = "me@alexfilsecker.com";

const mailjet = Mailjet.apiConnect(API_KEY, API_SECRET);

const mailHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: SENDER_EMAIL,
          Name: "MI PORTAFOLIO",
        },
        To: [
          {
            Email: "alexfilsecker@gmail.com",
            Name: "YO",
          },
        ],
        Subject: "TE ESCRIBIEROOOOOON",
        TextPart: `${req.body.email}<${req.body.name} ${req.body.lastName}> Te ha enviado el mensaje: ${req.body.message}`,
      },
      {
        From: {
          Email: SENDER_EMAIL,
          Name: "Alexander Filsecker",
        },
        To: [
          {
            Email: req.body.email,
            Name: `${req.body.name} ${req.body.lastName}`,
          },
        ],
        Subject: "Messaje sent to Alexander Filsecker",
        TextPart: `You have sent me the following message:\n\n${req.body.message}\n\nExpect to be talking soon :)`,
      },
    ],
  });

  res.status(response.response.status).json(response.body);
};

export default mailHandler;
