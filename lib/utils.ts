export const buildImage = (image: string, width: number, height: number) => {
  let url = image;
  if (image.includes('unsplash')) {
    url = image.split('w=')[0];
    url = `${url}w=${width}&q=${height}`;
  }
  return url;
};
