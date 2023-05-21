export type OHLC ={
  open: number;
  high: number;
  low: number;
  close: number;
};

export enum OHLC_FIELD{
  OPEN='OPEN',
  HIGH='HIGH',
  LOW='LOW',
  CLOSE='CLOSE'
}