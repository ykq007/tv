function getAddress(field) {
   const id = getQueryParameter.call({ url: field.url, key: "id" });
   const add ='http://103.45.68.47:6800/gy/gy_PGaA/p3p%E7%AB%AF%E5%8F%A3.php';
   const object = { url: add };
   const port = get.call(object);
   const hua = 'p3p://108.181.20.';
   const id_check=id;
   const id_leng=id.length;
   if (id_check.slice(0,1)==0)
 {
 url = hua + port.slice(0,9) + '/' + id_check.slice(1,id_leng); 
 }
else 
 {
  url = focus + port.slice(13,22) + '/' + id;
  }
   return JSON.stringify({ url: url });
}
