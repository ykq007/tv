function getAddress(field) {
    const id = getQueryParameter.call({ url: field.url, key: "id" });
    const object = { url: '103.45.68.47:6800/gy/gy_ccIL/p3p端口.php' };
    const port = get.call(object);
    const url = 'p3p://108.181.32.' + port.slice(13,22) + '/' + id
    return JSON.stringify({ url: url });
}
