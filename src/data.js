const data = [
  {
    id: crypto.randomUUID(),
    cover: 'image-1.jpg',
    title: 'Wonder of Life',
    description:
      'It is an amazing movie to life related event where we always going to be done',
    genre: 'Comedy/Drama',
    rating: 5,
    price: 140,
  },
  {
    id: crypto.randomUUID(),
    cover: 'image-2.jpg',
    title: 'Beauty of Life',
    description:
      'It is an amazing movie to life related event where we always going to be done',
    genre: 'Comedy/Horro',
    rating: 3,
    price: 160,
  },
  {
    id: crypto.randomUUID(),
    cover: 'image-3.jpg',
    title: 'Horror comes in life',
    description:
      'It is an amazing movie to life related event where we always going to be done',
    genre: 'Comedy/Horror',
    rating: 4,
    price: 120,
  },
  {
    id: crypto.randomUUID(),
    cover: 'image-4.jpg',
    title: 'Horror comes in life',
    description:
      'It is an amazing movie to life related event where we always going to be done',
    genre: 'Comedy/Love/Classic',
    rating: 4,
    price: 50,
  },
  {
    id: crypto.randomUUID(),
    cover: 'image-5.jpg',
    title: 'Gretings comes in life',
    description:
      'It is an amazing movie to life related event where we always going to be done',
    genre: 'Comedy/Drama/Love',
    rating: 2,
    price: 20,
  },
  {
    id: crypto.randomUUID(),
    cover: 'image-6.jpg',
    title: 'Race of life and which comes in',
    description:
      'It is an amazing movie to life related event where we always going to be done',
    genre: 'Comedy/Horror',
    rating: 5,
    price: 160,
  },
];

const getMovies = () => {
  return data;
};
export { getMovies };
