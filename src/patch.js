module.exports = function patchIcal(source, timezone) {
  return source
    .split("BEGIN:VEVENT")
    .join(`${timezone}BEGIN:VEVENT`)
    .replace(/DTSTAMP:([\dT]+)Z/, (_, $1) => `DTSTAMP:${$1}`)
    .replace(/CREATED:([\dT]+)Z/, (_, $1) => `CREATED:${$1}`)
    .replace(/DTSTART:([\dT]+)Z/, (_, $1) => `DTSTART:${$1}`)
    .replace(/DTEND:([\dT]+)Z/, (_, $1) => `DTEND:${$1}`)
    .replace(/\$/, "\r");
};
