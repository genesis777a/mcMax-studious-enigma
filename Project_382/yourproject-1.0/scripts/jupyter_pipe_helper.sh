#!/usr/bin/env bash
# Usage: scripts/jupyter_pipe_helper.sh /path/to/pipe
# Exports JUPYTER_PIPE and sets a writable TMPDIR for pip builds.

set -euo pipefail

if [ "$#" -ge 1 ]; then
  PIPEPATH="$1"
elif [ -f ".env" ]; then
  # shellcheck disable=SC1091
  source .env
  PIPEPATH="${JUPYTER_PIPE:-}"
else
  echo "Usage: $0 /path/to/pipe" >&2
  exit 2
fi

if [ -z "$PIPEPATH" ]; then
  echo "No JUPYTER_PIPE provided or found in .env" >&2
  exit 2
fi

export JUPYTER_PIPE="$PIPEPATH"
export TMPDIR="$(pwd)/.tmpbuild"
mkdir -p "$TMPDIR"
chmod a+w "$TMPDIR"

echo "Exported JUPYTER_PIPE=$JUPYTER_PIPE"
echo "Using TMPDIR=$TMPDIR"

echo "You can now run: pip install -e \".[test]\""