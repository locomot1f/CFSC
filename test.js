//set methods for Clonable Elements
const methods = {
  onDrop(){
    console.log('is dropped');
  }
};

//set options for Draggable Elements
const options = {
    container: '#stack',
    restrict: '#stack',
    proportions: false,
    each: {
      move: true,
      resize: true
    },
    snap: {
      x: 0,
      y: 0,
      angle: 0
    },
    cursorMove: 'move',
    cursorRotate: 'crosshair',
    cursorResize: 'pointer',
    ...methods,
  };

  //set constructs for draggable elements
const Draggables = subjx('.draggable').drag(options);


Draggables.forEach(item => {
  const controls = item.controls;
  subjx(controls).on('click', () => {
    item.disable();
    Draggables.splice(Draggables.indexOf(item), 1);
  });
});

subjx('.draggable').on('click', e => {
  e.preventDefault();
  e.stopPropagation();
  e.cancelBubble=true;
  if (e.currentTarget.classList.contains('sjx-drag')) return;
  const xDraggable = subjx(e.currentTarget).drag(options)[0];
  Draggables.push(xDraggable);
  // adding event to controls
  const controls = xDraggable.controls;
  subjx(controls).on('click', () => {
    xDraggable.disable();
  });
});

subjx('#stack').on('click', e => {
  console.log('container clicked');
  Draggables.forEach(item => {
    item.disable();
  });
});


//set OnDrop Method for Clones
const onDrop = () => {

  const stack = subjx('#stack')[0],
    div = document.createElement('div');

  div.classList.add('draggable');

  stack.appendChild(div);

  Draggables.push(...subjx(div).drag());
};

subjx('.clone').clone({
  stack: '#stack',
  appendTo: '#stack',
  style: 'clone',
  onDrop
});