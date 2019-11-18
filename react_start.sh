#!/bin/bash

cd /home/ec2-user/code/vyme/vyme

serve -s build -l 3000 </dev/null &>/dev/null &
