const midi = require('midi');

const input = new midi.input();
const output = new midi.output();

input.on('message', (time, message) => console.log("MIDI MESSAGE", message));

input.ignoreTypes(false, true, true); // enable SysEx

input.openVirtualPort('Circuit');
output.openVirtualPort('Circuit');

function endlessLoop() {
  process.nextTick(endlessLoop);
}
