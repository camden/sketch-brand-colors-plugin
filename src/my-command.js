import * as Sketch from 'sketch/dom';

let selection;

// Sketch entrypoint
export default function() {
  if (!setup()) {
    return;
  }

  setSelectionColor('#faaaaa');
}

// what is this for?
function setup() {
  const doc = Sketch.Document.getSelectedDocument();
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

const alert = msg => context.document.showMessage(msg);
