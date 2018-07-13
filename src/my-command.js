import * as Sketch from 'sketch/dom';

let selection;

export default function(context) {
  const doc = Sketch.Document.getSelectedDocument();
  if (!doc) {
    return;
  }

  console.log('Doc: ', doc);
  selection = doc.selectedLayers;
  if (!selection || selection.length == 0) {
    alert('Select a layer!');
    return;
  }

  selection.forEach(layer => {
    layer.style.fills = [
      {
        fill: Sketch.Style.FillType.Color,
        color: '#fff000',
      },
    ];
  });
}

const alert = msg => context.document.showMessage(msg);
