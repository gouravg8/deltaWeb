function genTicket(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr;
}

function sum(ticket) {
  return ticket.reduce((sum, curr) => sum + curr, 0);
}

export { genTicket, sum };
