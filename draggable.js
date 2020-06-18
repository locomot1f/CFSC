//set options for Draggable Elements
const options = {
    container: '#draggable-box',
    restrict: '#draggable-box',
    proportions: true,
    each: {
      move: true,
      resize: true
    },
    snap: {
      x: 5,
      y: 5,
      angle: 0
    },
    cursorMove: 'move',
    cursorRotate: 'crosshair',
    cursorResize: 'pointer',
  };
//set constructs for draggable elements
const Draggables = subjx('#draggable').drag(options);
   
Draggables.forEach(item => {
    const controls = item.controls;
    subjx(controls).on('dblclick', () => {
      item.disable();
      Draggables.splice(Draggables.indexOf(item), 1);
    });
  });
  
  subjx('#draggable').on('dblclick', e => {
    if (e.currentTarget.classList.contains('sjx-drag')) return;
    const xDraggable = subjx(e.currentTarget).drag(options)[0];
    Draggables.push(xDraggable);
    // adding event to controls
    const controls = xDraggable.controls;
    subjx(controls).on('dblclick', () => {
      xDraggable.disable();
    });
  });


//set clones for elements
const onDrop = (e, el, clone) => {

  const stack = subjx('#draggable-box')[0],
    offset = stack.getBoundingClientRect(),
    div = document.createElement('div');
    img = document.getElementById('selector-box').getElementsByTagName('img');
    
  div.style.top = `${e.clientY - offset.top}px`;
  div.style.left = `${e.clientX - offset.left}px`;

  div.id = 'draggable';
  
  console.log(img);
  console.log(div.innerHTML);

  
  stack.appendChild(div);
  
  Draggables.push(...subjx(div).drag());
};

subjx('.clone').clone({
  stack: '#draggable-box',
  appendTo: '#draggable',
  onDrop
});


//set constructs for LeaderLine (arrows)
var startElement = document.getElementById('arrowStart')
var endElement = document.getElementById('arrowEnd')

var line = new LeaderLine(startElement, LeaderLine.pointAnchor(endElement,{x: '50%', y: '50%'}),{
    dash: {animation: false},
    path: 'fluid',
    startPlug: 'behind',
    color: 'hsl(215, 65%, 28%)',
});

//function to create draggable arrow
window.addEventListener('load',function(){

    new PlainDraggable(startElement,{
        onMove: function(){
            line.position();
        }
    });
    new PlainDraggable(endElement,{
        onMove: function(){
            line.position();
        }
    });
})