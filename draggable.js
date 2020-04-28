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

//set constructs for LeaderLine (arrows)
var startElement = document.getElementById('arrowStart')
var endElement = document.getElementById('arrowEnd')

var line = new LeaderLine(startElement, LeaderLine.pointAnchor(endElement,{x: 15, y: 5}),{
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