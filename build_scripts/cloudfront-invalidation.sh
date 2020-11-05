#!/bin/sh

echo "executing cloudfront invalidation"
aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id $1 --paths "/*"