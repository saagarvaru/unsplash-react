
/*
  Fetches images from unsplash API

  parameters:
    page - page number
    perPage - no. of images per page
    callback - callback function to return data
*/


export const getImages = (page, perPage, callback) => {
    fetch('https://api.unsplash.com/photos?client_id=4b916f6772b1a8323eccf772e9c0c8ed4cf786e0dcef49283571085761daaf58&page=' + page + '&per_page=' + perPage)
    .then((response) => {
      return response.json();
    }).then((data) => {
      callback(data);
    })
}
