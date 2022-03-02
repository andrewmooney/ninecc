const showFactory = (image, slug, title) => {
  return {
    image,
    slug,
    title,
  };
};

const filterShows = (shows) => {
  return shows
    .filter((show) => show.drm === true && show.episodeCount > 0)
    .map((show) => showFactory(show.image.showImage, show.slug, show.title));
};

module.exports = filterShows;
