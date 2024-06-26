#!/bin/bash


#同步github /Users/zhaoq0103/DEV/Personal/How-to-Make-Money/daily_log/update_my_github.sh
# 这个脚本由 cron 上午9点，下午6点 定期执行 MAC OS
# crontab -e -l -r 
# man crontab 
# 0 9,18 * * * ~/DEV/Personal/How-to-Make-Money/daily_log/update_my_github.sh


#更新github， 把更新推上去

pushd ~/DEV/Personal/How-to-Make-Money 
	git pull \
	&& git add -A \
	&& git ci -m "auto commit update file" \
	&& git push
popd 

pushd ~
	log_file="github_update_log"

	if [ ! -f "$log_file" ]; then
	    touch "$log_file"
	    echo "File created: $log_file"
	else
	    echo "pushd ~/DEV/Personal/How-to-Make-Money && git pull . time:""$(date)"  >> "$log_file"
	    echo "log written to $log_file"
	fi
popd 




