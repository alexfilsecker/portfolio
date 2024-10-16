import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log("aldjñlasdjfñlasjdfñlasdfj");
  res.status(200).json({ messaje: "hoooola" });
};

export default handler;
