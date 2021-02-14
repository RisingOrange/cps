#!/bin/sh
npm run build
git add -A
git commit -m "Deploy"
git push origin  `git subtree split --prefix dist master`:gh-pages --force