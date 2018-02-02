#Run the RScript : Rscript -default-packages=methods,utils pmsinit.R
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

inputFile <- system.file("extdata/Hoang_MFVF.ind.txt.gz", package="pmsignature")
print(inputFile)
 
G <- readMFVFile(inputFile, numBases = 5, type="independent", trDir=TRUE)
G
