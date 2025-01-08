module.exports = function patchIcal(source, timezone) {
  return source
    .split("BEGIN:VEVENT")
    .join(`${timezone}BEGIN:VEVENT`);
};
