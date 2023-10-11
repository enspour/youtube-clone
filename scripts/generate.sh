#!/bin/bash

echo "Data generation...";

SCRIPT_DIR=$(dirname $0)

mkdir -p $SCRIPT_DIR/../data

node "$SCRIPT_DIR/generate/index.js" \
    --dirname=$SCRIPT_DIR/../data;

echo "Successful data generation.";
