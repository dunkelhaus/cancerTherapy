import subprocess

#Define command and arguments
command = 'Rscript'

args = ['--default-packages=methods,utils', 'pmsinit.R']

cmd = [command] + args

result = subprocess.check_output(cmd, universal_newlines=True)

print(result)
