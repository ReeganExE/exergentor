'use strict';

const spawn = require('child_process').spawn;


function calculate(code) {
  return new Promise((ok, no) => {
    const octave = spawn('octave', ['-q', '--eval', code]);
    var result = '',
      error = '';

    octave.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
      result += data.toString();
    });

    octave.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
      error += data;
    });

    octave.on('close', (code) => {
      console.log(`Ocatve process exited with code ${code}`);
      if (code === 0) {
        ok(result);
      } else {
        no(new Error(error));
      }
    }).on('error', (error) => {
      no(error);
    });
  });
}

module.exports = {
  cal: calculate
};
