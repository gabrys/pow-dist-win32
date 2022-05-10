#!/usr/bin/env node

const child_process = require('child_process');
const fs = require('fs');
const path = require('path');


function main() {
  const script_dir = path.dirname(fs.realpathSync(process.argv[1]));
  const package_dir = path.dirname(script_dir);
  const pow_args = process.argv.slice(2);

  const cmd = path.join(package_dir, 'pow-runner.dist', 'pow-runner.exe');

  cp = child_process.spawnSync(cmd, pow_args, {stdio: 'inherit'});
  if (cp.error) {
    return 127;
  }
  return cp.status;
}


process.exit(main());
