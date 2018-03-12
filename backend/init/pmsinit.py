# running 'python2.7 pmsinit.py' will produce three .txt files
# Please update the paths to your own before executing the script.
#	out7.txt holds signature 7
#	out13.txt holds signature 13
#	out23.txt holds signature 23

import subprocess

def initialize():
	#Define command and arguments
	command = 'Rscript'

	#Specify signature 7
	args = ['--default-packages=methods,utils', '../init/pmsinit.R', '7']
	cmd = [command] + args
	result = subprocess.check_output(cmd, universal_newlines=True)
	print(result)
	file7 = open("/home/valeria/ECS193/cnnCancerTherapy/out/out7.txt", "w+")
	file7.write(result)
	file7.close()

	#Specify signature 13
	#args = ['--default-packages=methods,utils', '../init/pmsinit.R', '13']
	#cmd = [command] + args
	#result = subprocess.check_output(cmd, universal_newlines=True)
	#print(result)
	#file13 = open("/home/valeria/ECS193/cnnCancerTherapy/out/Test13.txt", "w+")
	#file13.write(result)
	#file13.close()

	#Specify signature 23
	#args = ['--default-packages=methods,utils', '../init/pmsinit.R', '23']
	#cmd = [command] + args
	#result = subprocess.check_output(cmd, universal_newlines=True)
	#print(result)
	#file23 = open("/home/valeria/ECS193/cnnCancerTherapy/out/Test23.txt", "w+")
	#file23.write(result)
	#file23.close()

initialize()