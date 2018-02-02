#Packages needed for installing pmsignature
local({r <- getOption("repos")
r["CRAN"] <- "https://cran.cnr.berkeley.edu" 
options(repos=r)
})
source("http://bioconductor.org/biocLite.R")
biocLite(c("GenomicRanges", "BSgenome.Hsapiens.UCSC.hg19"))
install.packages("devtools")
install.packages("ggplot2")
install.packages("Rcpp")
library(devtools)
devtools::install_github("friend1ws/pmsignature")
library(pmsignature)
inputFile <- system.file("extdata/Hoang_MFVF.IND.txt", package="pmsignature")
print(inputFile)
 
#G <- readMFVFile("/Users/kravisankaran/code/cs193a/cnnCancerTherapy/wrappers/mfv.txt", numBases = 3, type="independent", trDir=TRUE)

