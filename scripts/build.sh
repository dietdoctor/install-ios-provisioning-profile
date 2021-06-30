#!/bin/bash

ncc build lib/task.js  --license LICENSE -o dist/task
ncc build lib/post_task.js  --license LICENSE -o dist/post-task