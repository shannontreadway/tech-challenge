export const BASE_URL = "https://api.mwi.dev";

export function fetchData(url) {
    return fetch(`${BASE_URL}${url}`).then((res) => res.json());
}
