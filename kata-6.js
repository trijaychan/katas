const whereCanIPark = function (spots, vehicle) {
  let parkingType = ['R', 'S', 'M'];

  if (vehicle === 'regular') {
    parkingType.splice(1, 2);
  } else if (vehicle === 'small') {
    parkingType.splice(2, 1);
  }

  for (let i = 0; i < spots.length; i++) {
    for (let j = 0; j < spots[i].length; j++) {
      if (parkingType.includes(spots[i][j])) {
        return [j, i];
      }
    }
  }

  return false;
};