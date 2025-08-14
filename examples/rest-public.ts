import {okxClient as client} from "./init"

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
