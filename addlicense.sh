#!/bin/bash
# Uses the 'addlicense' tool:
# https://github.com/google/addlicense

cd ..

# Website
addlicense -v -f scripts/license-artistic.txt website-new/src/components 
addlicense -v -f scripts/license-artistic.txt website-new/src/app/src
addlicense -v -f scripts/license-artistic.txt website-new/src/js
addlicense -v -f scripts/license-artistic.txt website-new/src/scss
addlicense -v -f scripts/license-artistic.txt website-new/src/make