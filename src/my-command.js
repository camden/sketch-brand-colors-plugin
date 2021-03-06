import * as Sketch from 'sketch/dom';

let selection;

// Sketch entrypoint: checks that setup returns true, then passes in the color to the set selection color function
export default function() {
  if (!setup()) {
    return;
  }

  setSelectionColor('#faaaaa');
}

// This makes sure the document is there, and logs it so you can run 'yarn logs' in the terminal
function setup() {
  const doc = Sketch.Document.getSelectedDocument();
  log("testing yarn");
  log(doc);
  if (!doc) {
    return false;
  }

  // From plugin "super shapes"

  // var Panel = NSPanel.alloc().init();
  // Panel.setTitleVisibility(NSWindowTitleHidden);
  // Panel.setTitlebarAppearsTransparent(true);
  // Panel.standardWindowButton(NSWindowCloseButton).setHidden(false);
  // Panel.standardWindowButton(NSWindowMiniaturizeButton).setHidden(true);
  // Panel.standardWindowButton(NSWindowZoomButton).setHidden(true);
  // Panel.setWorksWhenModal(true);
  // NSApp.runModalForWindow(Panel);

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

// what is this for?
const alert = msg => context.document.showMessage(msg);
