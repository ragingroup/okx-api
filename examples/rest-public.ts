import { RestClient } from '../src/index';
import {setGloabAgent,getAgent,setAxiosAgent} from "../src/agent"

// or
// import { RestClient } from 'okx-api';
const socket={
  ip:"127.0.0.1",
  port:15236
}
setGloabAgent(socket)
const client = new RestClient(null,"demo",{},setAxiosAgent({},socket));

/**
 * This is a simple script wrapped in a immediately invoked function expression, designed to make public API calls without credentials
 */
(async () => {
  try {
    const results = await client.getInstruments({ instType: 'SPOT' });

    console.log(
      'result: ',
      results.filter((row) => row.baseCcy === 'SUI'),
    );

    return;
  } catch (e) {
    console.error('request failed: ', e);
  }
})();
