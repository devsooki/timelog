export const fomattedTime = (time:number) => {
  // TODO: hour도 만들지, 그냥 minute로 갈지 고민
  const minute = String(Math.floor(time / 60)).padStart(2, '0');
  const second = String(Math.floor(time % 60)).padStart(2, '0');

  const fomatted = `${minute} : ${second}`

  return fomatted
}