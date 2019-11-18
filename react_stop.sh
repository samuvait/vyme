#!/bin/bash

sudo fuser -k 3000/tcp

rm -rf /home/ec2-user/code/vyme

mkdir -p /home/ec2-user/code/vyme
