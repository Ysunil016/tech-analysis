import { OHLC } from '../dto/ohlc';

export function SMA(ohlcs : OHLC[]) : number {
  let candleSize = ohlcs.length;
  if (candleSize == 0) return 0;
  return ohlcs.map((ohlc)=>ohlc.close).reduce((sum, current) => (sum + current))/candleSize;
}