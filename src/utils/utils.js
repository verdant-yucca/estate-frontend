

export const gap = (n) => {
  let res = "" + n;
  return res.replace(/\d{0,3}(?=(\d{3})+$)/g, "$& ") ;
}

