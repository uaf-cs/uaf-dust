#!/bin/sh

rm -rf ~/public_html/uafdust/*
cp -R backend/* ~/public_html
cp -R frontend/dust-app/* ~/public_html/uafdust
chmod 664 ~/public_html/uafdust/db/*
chmod 755 ~/public_html/uafdust/db

