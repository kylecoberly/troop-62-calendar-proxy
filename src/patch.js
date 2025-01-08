function fetchIcal() {
}

function patchIcal(source, timezone) {
  const splits = source.split("BEGIN:VEVENT");
  return splits.join(`${timezone}BEGIN:VEVENT`);
}

module.exports = {
  fetchIcal,
  patchIcal,
};
