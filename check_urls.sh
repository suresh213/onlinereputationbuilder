#!/bin/bash
grep -o 'https://images.unsplash.com/photo-[^?]*' app/blog/data.ts | sort | uniq > urls.txt
while read url; do
  status=$(curl -o /dev/null -s -w "%{http_code}" "${url}?auto=format&fit=crop&w=800&q=80")
  echo "$status $url"
done < urls.txt
