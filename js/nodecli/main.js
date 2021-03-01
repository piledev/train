const program = require('commander');
const fs = require('fs');
const md2html = require('./md2html');

// GFMオプションを定義する
program.option('--gfm', 'GFMを有効にする');
program.parse(process.argv);

// ファイルパスをprogram.args配列から取り出す
const filePath = program.args[0];

// gfm: false をデフォルトオプションとする
// もしも program.opts() にgfm オプションがあれば true で上書きされる
const cliOptions = {
  gfm: false,
  ...program.opts(),
};

fs.readFile(filePath, { encoding: 'utf8' }, (err, file) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
    return;
  }

  const html = md2html(file, cliOptions);
  console.log(html);
});
