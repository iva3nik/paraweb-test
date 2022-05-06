const checkStatusResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

export const getListCards = () => {
  return fetch("https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(checkStatusResponse);
};
