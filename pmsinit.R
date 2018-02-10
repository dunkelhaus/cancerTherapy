#Run the RScript : Rscript --default-packages=methods,utils pmsinit.R
#Packages needed for installing pmsignature


#local({r <- getOption(“repos”)
#r[“CRAN”] <- “https://cran.cnr.berkeley.edu”
#options(repos=r)
#})
#source(“http://bioconductor.org/biocLite.R”)
#biocLite(c(“GenomicRanges”, “BSgenome.Hsapiens.UCSC.hg19"))
#install.packages(“devtools”)
#install.packages(“ggplot2")
#install.packages(“Rcpp”)
library(devtools)
#devtools::install_github(“friend1ws/pmsignature”)
library(stats)
library(pmsignature)
G <- readMFVFile("/Users/kravisankaran/code/cs193a/cnnCancerTherapy/wrappers/mfvmod.tab", numBases = 3, type="independent", trDir=TRUE)


#Get command line argument and store it in nums
myArgs <- commandArgs(trailingOnly = TRUE)
nums = as.numeric(myArgs)

if(nums == 7) {
	Param7 <- getPMSignature(G, K = 7)
	print(Param7)
}
if(nums == 13) {
	Param13 <- getPMSignature(G, K = 13)
	print(Param13)
}
if(nums == 23) {
	Param23 <- getPMSignature(G, K = 23)
	print(Param23)
}
