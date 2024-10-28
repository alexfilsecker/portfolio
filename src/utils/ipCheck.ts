import axios from "axios";

type IpInfoResponseData = {
  ip: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
  postal: string;
  timezone: string;
};

const ipCheck = async (ipAddress: string): Promise<string> => {
  const ipInfoToken = process.env.IP_INFO_TOKEN;
  if (ipInfoToken === undefined) {
    return "IP_INFO_TOKEN is undefined!!!";
  }

  const { data } = await axios.get<IpInfoResponseData>(
    `https://ipinfo.io/${ipAddress}/json`,
    {
      params: {
        token: ipInfoToken,
      },
    }
  );
  const { ip, city, country } = data;
  const message = `ip: "${ip}" - city: "${city}" - country: "${country}"`;
  return message;
};

export default ipCheck;
