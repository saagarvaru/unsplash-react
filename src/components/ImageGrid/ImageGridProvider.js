
export const getImages = (page, perPage) => {
    fetch('https://api.unsplash.com/photos?client_id=4b916f6772b1a8323eccf772e9c0c8ed4cf786e0dcef49283571085761daaf58&page=' + page + '&per_page=' + perPage)
    .then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
    })
}
