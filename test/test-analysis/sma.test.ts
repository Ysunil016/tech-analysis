import { OHLC, OHLC_FIELD } from '../../src/dto/ohlc';
import { SMA } from '../../src/tech-analysis';

describe('SMA', ()=>{
  let testOHLC : OHLC[] = [
    {
      open: 1,
      high: 2,
      low: 3,
      close: 4,
    }, {
      open: 2,
      high: 3,
      low: 4,
      close: 5,
    }, {
      open: 3,
      high: 4,
      low: 5,
      close: 6,
    }, {
      open: 4,
      high: 5,
      low: 6,
      close: 7,
    },
  ];

  it('DEFAULT', ()=>{
    let actual = SMA(testOHLC);
    expect(actual).toBe(5.5);
  });

  it('OPEN', ()=>{
    let actual = SMA(testOHLC, OHLC_FIELD.OPEN);
    expect(actual).toBe(2.5);
  });

  it('HIGH', ()=>{
    let actual = SMA(testOHLC, OHLC_FIELD.HIGH);
    expect(actual).toBe(3.5);
  });

  it('LOW', ()=>{
    let actual = SMA(testOHLC, OHLC_FIELD.LOW);
    expect(actual).toBe(4.5);
  });

  it('CLOSE', ()=>{
    let actual = SMA(testOHLC, OHLC_FIELD.CLOSE);
    expect(actual).toBe(5.5);
  });

  it('ZERO CANDLES', ()=>{
    let actual = SMA([]);
    expect(actual).toBe(0);
  });


});