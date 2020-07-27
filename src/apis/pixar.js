const url = "https://pixabay.com/api/?key=17667018-615c2d07605f2b603c40cd862";

function getPixars() {
  return fetch(`${url}&per_page=5`)
    .then((res) => res.json())
    .then((res) => res.hits);
}

function getPixar(id) {
  return fetch(`${url}&id=${id}`)
    .then((res) => res.json())
    .then((res) => res.hits);
}

export default {
  getPixars,
  getPixar,
};
