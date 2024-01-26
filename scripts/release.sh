cd packages/apps/build

echo 'scan.melodot.io' > CNAME

git init

git add -A

git commit -m 'deploy'

git push -f git@github.com:ZeroDAO/scan master:gh-pages

cd -