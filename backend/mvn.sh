#!/bin/bash

com1=`docker ps -a | grep -o "test1.0"`
if [ $com1 == "test1.0" ]
then
	docker rm -f test1.0
fi

if [ ! -d "/root/Desktop/test3" ]
then
	git clone $1 /root/Desktop/test3
else
	rm -rf /root/Desktop/test3
	git clone $1 /root/Desktop/test3
fi


touch /root/Desktop/test3/f_log.txt
docker run -itd --name test1.0 -v /root/Desktop/test3:/test -w /test always2kspiner/minor_mvn:latest 
docker exec test1.0 mvn clean -l log.txt
cat /root/Desktop/test3/log.txt > /root/Desktop/test3/f_log.txt
docker exec test1.0 mvn compile -l log.txt
cat /root/Desktop/test3/log.txt >> /root/Desktop/test3/f_log.txt
docker exec test1.0 mvn test-compile -l log.txt
cat /root/Desktop/test3/log.txt >> /root/Desktop/test3/f_log.txt
docker exec test1.0 mvn test -l log.txt
cat /root/Desktop/test3/log.txt >> /root/Desktop/test3/f_log.txt
docker exec test1.0 mvn package -l log.txt
cat /root/Desktop/test3/log.txt >> /root/Desktop/test3/f_log.txt
docker stop test1.0
docker rm -f test1.0

com=`find /root/Desktop/test3/target/ -name "*.jar" | grep -o ".jar"`
if [ $com == ".jar" ]
then
	echo "jar Created"
fi