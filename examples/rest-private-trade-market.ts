import { OrderRequest, RestClient } from '../src/index';
import {okxClient as client} from "./init"

/** Get available balance for an asset */
async function getAssetBalance(
  client: RestClient,
  coin: string,
): Promise<number | null> {
  const allBalances = await client.getBalance();
  const usdtBalanceResult = allBalances[0].details.find(
    (bal) => bal.ccy === coin,
  );

  const usdtBalance = Number(usdtBalanceResult?.availBal);
  if (!usdtBalanceResult || !usdtBalance || isNaN(usdtBalance)) {
    return null;
  }

  return usdtBalance;
}

/**
 * This is a simple REST API demo script wrapped in a immediately invoked function expression. The logic below will immediately execute if you run this script.
 *
 * It is designed to:
 * - check for any available USDT balance
 * - immediately use half the balance to buy bitcoin (in spot)
 * - check the available BTC balance
 * - immediately sell all available BTC back to USDT
 */
(async () => {
  try {
    const usdtBalance = await getAssetBalance(client, 'USDT');
    if (!usdtBalance) {
      console.error('No USDT to trade');
      return;
    }

    console.log(`USDT available: ${usdtBalance}`);

    const symbol = 'BTC-USDT';
    const percentBalanceToUse = 50;

    const quantity = usdtBalance * (percentBalanceToUse / 100);
    const buyOrder: OrderRequest = {
      instId: symbol,
      ordType: 'market',
      side: 'buy',
      sz: String(quantity),
      tdMode: 'cash',
      tgtCcy: 'base_ccy',
    };

    console.log('submitting buy order:', buyOrder);
    const buyResult = await client.submitOrder(buyOrder);

    console.log('buy order result: ', buyResult, '\n\n');

    const btcBalance = await getAssetBalance(client, 'BTC');
    if (!btcBalance) {
      console.error('No BTC to trade');
      return;
    }

    console.log(`BTC available: ${btcBalance}`);
    const sellOrder: OrderRequest = {
      instId: symbol,
      ordType: 'market',
      side: 'sell',
      sz: String(btcBalance),
      tdMode: 'cash',
      tgtCcy: 'base_ccy',
    };

    console.log('submitting sell order:', sellOrder);
    const sellResult = await client.submitOrder(sellOrder);

    console.log('sell order result: ', sellResult, '\n\n');
    const usdtBalanceFinal = await getAssetBalance(client, 'USDT');

    console.log('final balance: ', usdtBalanceFinal);
  } catch (e) {
    console.error('request failed: ', e);
  }
})();
