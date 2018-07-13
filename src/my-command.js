import * as Sketch from 'sketch/dom';

let selection;

// Sketch entrypoint
export default function(context) {
  if (!setup(context)) {
    return;
  }

  setSelectionColor('#ffaaaa');
}

// what is this for?
const setup = context => {
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
};

const setSelectionColor = color => {
  selection.forEach(layer => {
    layer.style.fills = [
      {
        fill: Sketch.Style.FillType.Color,
        color: color,
      },
    ];
  });
};

const alert = msg => context.document.showMessage(msg);
