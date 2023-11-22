process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const readName = process.stdin.read();

  if (readName) {
    process.stdout.write(`Your name is: ${readName}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
