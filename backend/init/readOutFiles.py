file = open("../out/out23.txt", "r") # Change path and file name accordingly!
i = 0
trial = []
iteration = []
timeInSeconds = []
convergence = []
loglikelihood = []
sampleList = []
signatureNum = []
isBackGround = []

for line in file:

    i = i + 1

    if i == 11:
        break

    fields = line.split(";")
    trial.append(fields[0])
    iteration.append(fields[1])
    timeInSeconds.append(fields[2])
    convergence.append(fields[3])
    loglikelihood.append(fields[4])


# NOTE: Index[0] of all these lists belong to the 0 trial.. Index[1] belongs to first trial, etc
#print(trial)
#print(iteration)
#print(timeInSeconds)
#print(convergence)
#print(loglikelihood)

i = 0
lines = []

for line in file:
    for word in line.split():
        if word == "Slot" and i == 0:
            i = 1
            continue

        if word == "Slot" and i == 1:
            sampleList = lines[2:] # sampleList now stored
            i = i + 1
            #print sampleList
            break

        lines.append(word)

    if i == 2:
        lines[:] = []
        break

    else:
        continue

i = 0

for line in file:
    for word in line.split():
        if word == "Slot":
            i = 1
            signatureNum = lines[1:] #signatureNum stored here
            print signatureNum
            break

        lines.append(word)

    if i == 1:
        lines[:] = []
        break

i = 0

for line in file:
    for word in line.split():
        if word == "Slot":
            i = 1
            isBackGround = lines[1:] #isBackGround stored here
            #print isBackGround
            break

        lines.append(word)

    if i == 1:
        lines[:] = []
        break

i = 0
