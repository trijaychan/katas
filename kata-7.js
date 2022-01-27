const checkAir = function (samples, threshold) {
  let percentage = 0;

  for (condition of samples) {
    if (condition === 'dirty')
      percentage++;
  }

  percentage /= samples.length + 1;

  if (percentage > threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};