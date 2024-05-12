#!/bin/bash

NODE_MODULES=/project/node_modules

if [ ! -d ${NODE_MODULES} ] || [ -z "$(ls ${NODE_MODULES} | grep nuxt)" ]; then
  npm install
fi

npm run dev
