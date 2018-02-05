# running 'python2.7 pmsinit.py' will produce three .txt files
#	out7.txt holds signature 7
#	out13.txt holds signature 13
#	out23.txt holds signature 23

import subprocess

#Define command and arguments
command = 'Rscript'

#Specify signature 7
args = ['--default-packages=methods,utils', 'pmsinit.R', '7']
cmd = [command] + args
result = subprocess.check_output(cmd, universal_newlines=True)
print(result)
file7 = open("out7.txt", "w+")
file7.write(result)
file7.close()

#Specify signature 13
args = ['--default-packages=methods,utils', 'pmsinit.R', '13']
cmd = [command] + args
result = subprocess.check_output(cmd, universal_newlines=True)
print(result)
file7 = open("out13.txt", "w+")
file7.write(result)
file7.close()

#Specify signature 23
args = ['--default-packages=methods,utils', 'pmsinit.R', '23']
cmd = [command] + args
result = subprocess.check_output(cmd, universal_newlines=True)
print(result)
file7 = open("out23.txt", "w+")
file7.write(result)
file7.close()