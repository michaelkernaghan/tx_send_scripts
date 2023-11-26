# Directory containing .js files
dir="/home/mike/alchemy-tutorial/txs"

# Iterate over each .js file in the directory
for file in $dir/*.js
do
  # Run the .js file with Node.js
  node "$file"
  sleep 60
done
