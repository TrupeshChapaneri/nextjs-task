const apiURL = "https://reqres.in/api";

function client(endpoint, { data } = {}) {
  const headers = {};
  if (data) {
    headers["content-type"] = "application/json";
  }

  const config = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      ...headers,
    },
  };

  return fetch(`${apiURL}/${endpoint}`, config).then(async (response) => {
    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }
    return Promise.reject(responseData);
  });
}

export { client };
