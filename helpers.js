export function formatNumber(num) {
  return parseInt(num).toLocaleString();
}

export function formatSalary(salary) {
  return "$" + formatNumber(salary);
}

export function formatArea(area) {
  return formatNumber(area) + " sq mi";
}

export function formatPolitical(political) {
  return political.charAt(0).toUpperCase() + political.slice(1);
}
