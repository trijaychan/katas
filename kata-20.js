const blocksAway = function(directions) {
  let position = {
    east: 0,
    north: 0
  };

  let faces = ['left', 'up', 'right', 'down'];
  let facing = '';
  let index;
  
  for (direction of directions) {
    if (typeof direction === 'string') {
      if (facing === '') {
        if (direction === 'left') {
          facing = 'up';
        } else {
          facing = 'right';
        }
      } else {
        if (direction === 'left') {
          index = faces.indexOf(facing) - 1;
        } else {
          index = faces.indexOf(facing) + 1;
        }

        if (index >= faces.length) {
          index = 0;
        }

        facing = faces[index];
      }
    } else {
      if (facing === 'left') {
        position.east -= direction;
      } else if (facing === 'right') {
        position.east += direction;
      } else if (facing === 'down') {
        position.north -= direction;
      } else if (facing === 'up') {
        position.north += direction;
      }
    }
  }

  return position;
};