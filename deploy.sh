#!/bin/sh
npm run build
git commit -a -m "Deploy"
git push origin  `git subtree split --prefix dist master`:gh-pages --force