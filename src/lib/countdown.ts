/** Calendar months and remaining time, always calculated in event timezone (UTC+3). */
export function getCountdown(now: number, target: number): number[] {
  if (now >= target) return [0, 0, 0, 0, 0];
  const shifted = new Date(now + 3 * 3600000);
  const addMonths = (months: number) => {
    const d = new Date(shifted);
    const day = d.getUTCDate();
    d.setUTCDate(1);
    d.setUTCMonth(d.getUTCMonth() + months);
    const lastDay = new Date(
      Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0),
    ).getUTCDate();
    d.setUTCDate(Math.min(day, lastDay));
    return d.getTime() - 3 * 3600000;
  };
  let months = 0;
  while (addMonths(months + 1) <= target) months++;
  const seconds = Math.max(0, Math.floor((target - addMonths(months)) / 1000));
  return [
    months,
    Math.floor(seconds / 86400),
    Math.floor((seconds % 86400) / 3600),
    Math.floor((seconds % 3600) / 60),
    seconds % 60,
  ];
}
