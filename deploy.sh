#!/bin/sh
npm run build
git push origin  `git subtree split --prefix dist master`:gh-pages --force