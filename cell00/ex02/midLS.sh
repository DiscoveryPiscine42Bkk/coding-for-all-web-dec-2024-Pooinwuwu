ls -p | grep -v '^\\.' | tr '\\n' ',' | sed 's/,$/\\n/'
