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

4.1	git commit --all -m  说明("这是我第一次提交文件"）(不经过仓储,保存所有修改文件直接进入版本库)
	帮助理解:把保安室的东西放到仓库,这才算保存了,说明是你的记录这东西是什么,
4.2 git status  可以用来查看当前代码有没有被放到仓储中去（代码是否修改保存）	

5.0 git log 查看历史提交的日志
	git log --online 可以看到简洁版的日志  

6.0 git reset --hard Head~0 (0:版本回退到最近一次版本,1:版本回退到上上次 ) 回退版本
	git reset --hard Head [版本号] (版本号通过 git log --oneline查看),通过版本号回退版本(判断依据为最近的注释)
	 
7.0 git reflog 可以看到每一次切换版本的记录:可以看到版本号,***********

8.0 