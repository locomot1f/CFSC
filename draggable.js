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