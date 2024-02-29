sudo chown vscode:vscode node_modules
curl -fsSL https://moonrepo.dev/install/proto.sh | bash -s -- --yes
. ~/.bashrc
proto use
npm install
