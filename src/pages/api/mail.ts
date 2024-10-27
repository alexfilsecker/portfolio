import { NextApiRequest, NextApiResponse } from "next";
import Mailjet from "node-mailjet";

const MAILJET_API_KEY = process.env.MAILJET_API_KEY;
if (MAILJET_API_KEY === undefined) {
  throw new Error("API KEY UNDEFINED");
}
const MAILJET_SECRET_KEY = process.env.MAILJET_SECRET_KEY;
if (MAILJET_SECRET_KEY === undefined) {
  throw new Error("API SECRET UNDEFINED");
}

const SENDER_EMAIL = "me@alexfilsecker.com";

const mailjet = Mailjet.apiConnect(MAILJET_API_KEY, MAILJET_SECRET_KEY);

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
        Headers: { "Reply-To": "alexfilsecker@gmail.com" },
      },
    ],
  });

  res.status(response.response.status).json(response.body);
};

export default mailHandler;
