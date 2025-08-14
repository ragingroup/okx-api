import { RestClient } from '../src/index';
import {setGloabAgent,getAgent,setAxiosAgent} from "../src/agent"
import "./loadEnv"

const socket={
  ip:process.env.agentIp ,
  port:process.env.agentPort
}

setGloabAgent(socket)
const okxClient = new RestClient({
  apiKey:process.env.apiKey,
  apiPass:process.env.apiPass,
  apiSecret:process.env.apiSecret

},"prod",{},setAxiosAgent({},socket));

export {okxClient}