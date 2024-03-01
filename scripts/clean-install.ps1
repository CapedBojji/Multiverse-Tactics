
# Delete node_modules if it exists
if (Test-Path -Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
}

# Delete package-lock.json if it exists
if (Test-Path -Path "package-lock.json") {
    Remove-Item -Force "package-lock.json"
}

# Install npm packages
npm install --no-package-lock