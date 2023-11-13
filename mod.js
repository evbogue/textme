export const textEv = async (msg) => {
  fetch('https://ntfy.sh/texteverett', {
    method: 'POST',
    body: msg,
    headers: {'Priority': 'max'}
  })
}
