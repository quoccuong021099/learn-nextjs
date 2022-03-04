// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cookies from 'cookies';
import httpProxy from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from 'next';

// type Data = {
//   name: string
// }

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return new Promise((resolve, reject) => {
    // convert cookies to header authorazation
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get('accessToken');
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }

    //  don't send cookies to API server
    req.headers.cookie = '';
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    });
    proxy.once('proxyRes', () => resolve(true));
  });
}
