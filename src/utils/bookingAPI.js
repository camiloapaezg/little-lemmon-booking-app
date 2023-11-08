const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export function fetchAPI(date) {
  let result = [];
  let dt = new Date(date);
  let seed = dt.getDate();

  let random = seededRandom(seed);
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
}

export function submitAPI(formData) {
  var result = true;
  result = result && formData.date;
  result = result && formData.time;
  result = result && formData.occasion;
  result = result && formData.guestsCount >= 2 && formData.guestsCount <= 10;
  result = result && formData.firstName;
  result = result && formData.lastName;
  result = result && formData.email;
  result = result && formData.confirmEmail === formData.email;

  return result;
}
