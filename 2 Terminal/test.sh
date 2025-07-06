# echo is used to print like console.log 
# make sure you don't add extra space it will give error. 

# printing number and their sum 
num1=5 #Creating variables
num2=6
echo $((num1+num2))
echo end

# Printing string 
name=sujal
echo $name

# Mutliple line printing 
echo -e "prashant \n sujal \nsanjeev"
echo -e "$num1 $num2\n$name"

# -e is used for enable interpretation of escape characters
# Without -e, \n will just be printed as it is. But with -e, special characters 


# ----------------------------------------------------------------------------------------------------------------------------------

# pwd is used to print current directory
# whoami is used to print userName or owner 

# touch is used to create file
# touch index.css 

# creating mutliptle file single line 
# touch index.js index.css index.html

# rm to remove file 
# rm index.html index.css

#rmdir to remove empty directory 
# rmdir sujal

# rm -r to remove directory 
# rm -r sujal 

# mkdir is used to create directory/folder 
# mkdir section1 

# cp is used to copy files or folder
# cp index.js sujal

# mv to move files or folders 
# mv index.js sujal   "sujal is folder"



# loop in bash 

# create 100 js files using loop 
for i in {1..100}; do touch "app$i.js"; done

# delete 100 js files using loop in bash 
# for i in {1..100}; do rm "app$i.js"; done

