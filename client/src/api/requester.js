export default async function requester(method, url, data, accessToken) {
  const options = {
    method,
    headers: {},
    };

  if (method != "GET") {
    options.method = method;
  }

  if (accessToken) {
    options.headers["X-Authorization"] = accessToken;
  }

  if (data != undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);
  const result = await response.json();

  return result;
}

export const get = requester.bind(null, "GET");
export const post = requester.bind(null, "POST");
export const put = requester.bind(null, "PUT");
export const del = requester.bind(null, "DELETE");
