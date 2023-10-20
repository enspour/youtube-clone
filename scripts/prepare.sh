#!/bin/bash

echo "Preparing Before Development...";

SCRIPT_DIR=$(dirname $0)

# ------- Data Generation -------- 
echo "Data Generation...";

DATA_DIR=$SCRIPT_DIR/../data;
GENERATED_DATA_DIR=$DATA_DIR/generated;

mkdir -p $GENERATED_DATA_DIR;

node "$DATA_DIR/generate" --dirname=$GENERATED_DATA_DIR;

echo "Successful Data Generation.";

echo "Successful Preparing Before Development.";