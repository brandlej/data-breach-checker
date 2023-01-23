const API_PREFIX = "/";

const getParser = (contentType) => {
  switch (contentType) {
    case null:
    case "text/plain":
      return "text";
    default:
      return "json";
  }
};

const parse = (response) => {
  if (response.status === 204) {
    return response;
  }

  const contentType = response.headers.get("Content-Type");

  const parser = getParser(contentType);

  if (response.ok) {
    return response[parser]();
  }

  return response[parser]().then((body) => {
    const message =
      typeof body === "object" ? body.message || body.title || body : body;

    throw new Error(message || response.statusText);
  });
};

const request = (path, opts = {}) =>
  fetch(path, {
    ...opts,
    headers: {
      ...(opts.headers ? opts.headers : {}),
    },
  });

export const getBreaches = ({ email }) =>
  request(`http://localhost:3001/breaches?email=${email}`).then(parse);
