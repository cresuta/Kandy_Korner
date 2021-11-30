let locations = [];

export const useLocations = () => {
    return locations.slice()
}

export const getLocations = () => {
    return fetch('')
    .then(res => res.json())
    .then(data => locations = data)
}