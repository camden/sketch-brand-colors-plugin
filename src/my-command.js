import * as Sketch from 'sketch/dom';

let selection;

// Sketch entrypoint
export default function() {
  if (!setup()) {
    return;
  }

  setSelectionColor('#ffaaaa');
}

// what is this for?
function setup() {
  const doc = Sketch.Document.getSelectedDocument();
  if (!doc) {
    return false;
  }

  selection = doc.selectedLayers;
  if (!selection || selection.length == 0) {
    alert('Select a layer!');
    return false;
  }

  return true;
}

// newish syntax "arrow function"
function setSelectionColor(color) {
  selection.forEach(layer => {
    layer.style.fills = [
      {
        fill: Sketch.Style.FillType.Color,
        color: color,
      },
    ];
  });
}

const alert = msg => context.document.showMessage(msg);
