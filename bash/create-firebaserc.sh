################## Generate file ###################
rm -rf .firebaserc 
read -p 'Your firebase project name: ' firebase_project_name 
echo "{
  "projects": {
    "default": "$firebase_project_name "
  }
}" >> .firebaserc