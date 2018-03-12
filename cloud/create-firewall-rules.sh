gcloud compute firewall-rules create default-allow-http-8080 \
	--allow tcp:8080 \
	--source-ranges 0.0.0.0/0 \
	--target-tags http-server \
	--description "Allow port 8080 access to http-server" 

