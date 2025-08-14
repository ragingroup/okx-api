import https from 'node:https';
import http from 'node:http';
import { SocksProxyAgent } from 'socks-proxy-agent';
import  { AxiosInstance } from 'axios';
import { HttpProxyAgent } from 'http-proxy-agent';
import { HttpsProxyAgent } from 'https-proxy-agent';

type SocksAgent = InstanceType<typeof SocksProxyAgent>;
type Agent= InstanceType<typeof SocksProxyAgent> |  InstanceType<typeof HttpProxyAgent> |  InstanceType<typeof HttpsProxyAgent>;
interface AgentSocket {
  ip?: string;
  port: number|string;
}

const getAgent = (agentSocket: AgentSocket,protocol:'http'|'https'|'socks'="http"): Agent => {
  let { ip, port } = { ip: '127.0.0.1', ...agentSocket };
  switch(protocol){
    case "http":
       return new HttpProxyAgent(`http://${ip}:${port}`); 
    break;
     case "https":
       return new HttpsProxyAgent(`http://${ip}:${port}`); 
    break;
     case "socks":
       return new SocksProxyAgent(`socks://${ip}:${port}`); 
    break;
  }

};

const setGloabAgent = (agentSocket: AgentSocket) => {

  http.globalAgent =  getAgent(agentSocket,"http");
  https.globalAgent =  getAgent(agentSocket,"https");;
};
// @ts-ignore
const setAxiosAgent = (
  axiosRequestConfig: any ,
  agentSocket: AgentSocket
) => {
 
  return { ...(axiosRequestConfig || {}), httpAgent: getAgent(agentSocket,"http"), httpsAgent: getAgent(agentSocket,"https") };
};

export { setGloabAgent, setAxiosAgent, getAgent };
