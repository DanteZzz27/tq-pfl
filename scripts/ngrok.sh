#!/usr/bin/env bash
set -euo pipefail

REQUESTED_PORT="${1:-3000}"

port_is_up() {
  curl -sf -o /dev/null --max-time 1 "http://127.0.0.1:$1" 2>/dev/null
}

get_running_dev_port() {
  node -e "
    const fs = require('fs');
    const path = '.next/dev/lock';
    try {
      const info = JSON.parse(fs.readFileSync(path, 'utf8'));
      if (info?.port && info?.pid) {
        try {
          process.kill(info.pid, 0);
          console.log(info.port);
        } catch {}
      }
    } catch {}
  " 2>/dev/null || true
}

RUNNING_PORT="$(get_running_dev_port)"

if [ -n "$RUNNING_PORT" ]; then
  if [ "$REQUESTED_PORT" != "$RUNNING_PORT" ]; then
    echo "Next.js is already running on port ${RUNNING_PORT} (ignoring ${REQUESTED_PORT})."
  else
    echo "Next.js is already running on port ${RUNNING_PORT}."
  fi
  echo "Starting ngrok tunnel..."
  exec npx ngrok http "$RUNNING_PORT"
fi

if port_is_up "$REQUESTED_PORT"; then
  echo "Something is already serving port ${REQUESTED_PORT}. Starting ngrok only..."
  exec npx ngrok http "$REQUESTED_PORT"
fi

echo "Starting Next.js on port ${REQUESTED_PORT} and ngrok tunnel..."
echo "Press Ctrl+C to stop both."

exec npx concurrently \
  --kill-others \
  --names "dev,ngrok" \
  --prefix-colors "blue,magenta" \
  "npm run dev -- -p ${REQUESTED_PORT}" \
  "npx wait-on http://127.0.0.1:${REQUESTED_PORT} && npx ngrok http ${REQUESTED_PORT}"
