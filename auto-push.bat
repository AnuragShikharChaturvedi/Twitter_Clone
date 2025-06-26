@echo off
echo Watching for file changes to auto-push...

:: This requires chokidar-cli installed globally
chokidar "**/*.ts" "**/*.tsx" "**/*.js" "**/*.css" -i ".git/**" -c "git add . && git commit -m \"auto-push: %date% %time%\" && git push"
