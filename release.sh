# create tar file for macos
cp release/getfilesize-cli-macos homebrew/getfilesize
tar -czf homebrew/getfilesize.tar.gz homebrew/getfilesize
shasum -a 256 homebrew/getfilesize.tar.gz