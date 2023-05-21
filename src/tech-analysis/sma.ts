import { OHLC, OHLC_FIELD } from '../dto/ohlc';

export function SMA(ohlcs : OHLC[], averageType? : OHLC_FIELD) : number {
  let candleSize = ohlcs.length;
  if (candleSize == 0) return 0;
  let totalCandleSum = getTotalSum(ohlcs, averageType);
  return totalCandleSum / candleSize;
}

const getTotalSum = (ohlcs : OHLC[], averageType? : OHLC_FIELD)=>{
  if (!averageType) averageType = OHLC_FIELD.CLOSE;
  switch (averageType) {
    case OHLC_FIELD.OPEN:
      return ohlcs.map((ohlc)=>ohlc.open).reduce((sum, current) => (sum + current));
    case OHLC_FIELD.HIGH:
      return ohlcs.map((ohlc)=>ohlc.high).reduce((sum, current) => (sum + current));
    case OHLC_FIELD.LOW:
      return ohlcs.map((ohlc)=>ohlc.low).reduce((sum, current) => (sum + current));
    case OHLC_FIELD.CLOSE:
      return ohlcs.map((ohlc)=>ohlc.close).reduce((sum, current) => (sum + current));
  }
};