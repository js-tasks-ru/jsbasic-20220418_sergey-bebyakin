function checkSpam(str) {
  let lower = str.toLowerCase();
  return lower.includes('1xbet') || lower.includes('xxx');
}
checkSpam('1XbeT now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');