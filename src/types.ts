export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
};

type Rating = {
  rate: number;
  count: number;
};

export type Categories = {
  name: string,
  title: string,
  image: string,
  url: string
}