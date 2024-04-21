function getAddress(field) {
    const id = getQueryParameter.call({ url: field.url, key: "id" });
    const object = { url: 'https://drive.google.com/uc?export=download&id=1vZfSRZNs9ovimYYWx2k86nVLlsHwxdx0' };
    const port = get.call(object);
    const url = 'p3p://108.181.32.' + port.slice(13,22) + '/' + id
    return JSON.stringify({ url: url });
}