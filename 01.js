//git bash here（安装git后，右键可看到）  常用命令

1.0 git init  把这个目录变成Git可以管理的仓库
	提示:Initialized empty Git repository in D:/Mystudy/.git/
	创建成功,告诉你是一个空的仓库（empty Git repository）可以发现当前目录下多了一个.git的目录
	
2.0 git config --global user.name Username("daqingchon")	 配置使用者的用户名
	git config --global user.email @e-mail("daqingchon@sina.com"） 配置使用者的邮箱
	帮助理解: 自报家门 
	
3.0 git add File(./index.html) 把修改的文件放入仓储 ,
	git add ./  把所有修改的文件放入仓储
	帮助理解:叫保安开门,把你的东西放到大门口
	
4.0 git commit -m  说明("这是我第一次提交文件"） 把仓储文件放入版本库
	git commit --all -m  说明("这是我第一次提交文件"） 把所有仓储文件放入版本库
	帮助理解:把保安室的东西放到仓库,这才算保存了,说明是你的记录这东西是什么,
4.1 git status  可以用来查看当前代码有没有被放到仓储中去（代码是否修改保存）	

5.0 git log 查看历史提交的日志
	git log --online 可以看到简洁版的日志  
	
	