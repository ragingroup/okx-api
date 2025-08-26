import { okxClient as client } from "./init"

/**
 * This is a simple script wrapped in a immediately invoked function expression, designed to make public API calls without credentials
 */
(async () => {
  try {
    const results = await client.getTickers({
      instType: 'SWAP',
      uly: 'WLFI-USDT'
    });

    console.log(results)

    const allBalances = await client.getBalances();
    console.log(JSON.stringify(allBalances, null, 2))


    return;
  } catch (e) {
    console.error('request failed: ', e);
  }
})();
