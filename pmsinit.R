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
G <- readMFVFile("/Users/kravisankaran/code/cs193a/cnnCancerTherapy/wrappers/mfv.tab", numBases = 5, type="independent", trDir=TRUE)
G
Param <- getPMSignature(G, K = 3)