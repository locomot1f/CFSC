//set options for Draggable Elements
const options = {
    container: '#stack',
    restrict: '#stack',
    proportions: true,
    each: {
      move: true,
      resize: true
    },
    snap: {
      x: 40,
      y: 40,
      angle: 0
    },
    cursorMove: 'move',
    cursorRotate: 'crosshair',
    cursorResize: 'pointer'
  };
//set constructs for draggable elements
const Draggables = subjx('.testing').drag(options);