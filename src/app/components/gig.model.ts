export interface Gig {

  date: string; // ISO: "2026-03-14"
  city: string;
  venue: string;

  doors: string;
  start: string;

  price: number;

  acts?: string[];

  flyerImg: string;

}
