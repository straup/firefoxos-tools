#!/bin/sh

PYTHON=`which python`

WHOAMI=`$PYTHON -c 'import os, sys; print os.path.realpath(sys.argv[1])' $0`
BIN=`dirname $WHOAMI`
ROOT=`dirname $BIN`

APPS=${ROOT}/apps
BOILERPLATE=${APPS}/boilerplate

APP_PATH=`$PYTHON -c 'import os, sys; print os.path.realpath(sys.argv[1])' $1`
APP_NAME=`basename $APP_PATH`

echo "copy ${BOILERPLATE} to ${APP_PATH}"
