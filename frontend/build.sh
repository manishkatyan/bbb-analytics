#!/bin/bash

rm -rf build/*
rm -rf ../backend/static/*

npm run build
cp -r build/* ../backend/static/
cat <<EOF> ../backend/static/data.json
{
    "analytics": []
}
EOF