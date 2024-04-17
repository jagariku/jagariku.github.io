export interface HeroCard {
  battlegrounds: { hero: boolean };
  id: number;
  slug: string;
  name: string;
  image: string;
  armor: number;
  text?: string;
}

export interface HeroDetail {
  parentId: number;
  text: string;
}

export interface HeroWithDetail extends HeroCard {
  detail: HeroDetail;
}

export interface MinionCard {
  battlegrounds: { hero: boolean };
  id: number;
  slug: string;
  name: string;
  image: string;
  armor: number;
  text: string;
}
