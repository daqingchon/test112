//git bash here（安装git后，右键可看到）  常用命令
//-----------------------------1.0初始化
1.0 git init  把这个目录变成Git可以管理的仓库
	提示:Initialized empty Git repository in D:/Mystudy/.git/
	创建成功,告诉你是一个空的仓库（empty Git repository）可以发现当前目录下多了一个.git的目录
	
2.0 git config --global user.name Username("daqingchon")	 配置使用者的用户名
	git config --global user.email @e-mail("daqingchon@sina.com"） 配置使用者的邮箱
	帮助理解: 自报家门 
	//---------------------------2.0 提交文件
3.0 git add File(./index.html) 把修改的文件放入仓储 ,
	git add ./  把所有修改的文件放入仓储
	帮助理解:叫保安开门,把你的东西放到大门口
	
4.0 git commit -m  说明("这是我第一次提交文件"） 把仓储文件放入版本库

4.1	git commit --all -m  说明("这是我第一次提交文件"）(不经过仓储,保存所有修改文件直接进入版本库)
	帮助理解:把保安室的东西放到仓库,这才算保存了,说明是你的记录这东西是什么,
4.2 git status  可以用来查看当前代码有没有被放到仓储中去（代码是否修改保存）	

//---------------------------------3.0版本回退
5.0 git log 查看历史提交的日志
	git log --online 可以看到简洁版的日志  

6.0 git reset --hard Head~0 (0:版本回退到最近一次版本,1:版本回退到上上次 ) 回退版本
	git reset --hard Head [版本号] (版本号通过 git log --oneline查看),通过版本号回退版本(判断依据为最近的注释)
	 
7.0 git reflog 可以看到每一次切换版本的记录:可以看到版本号,(回前)***********

//----------------------------------4.0分支
8.0 git branch dev[分支名称] 创建一个分支 (默认主分支为master),
	帮助理解:未完成功能,先保存分支里.不希望被主线看到使用,(分支的内容,主分支看不到 ,分支可看到主线内容)
    git branch 查询当前分支
	git checkout dev[分支名称] 切换指定分支,
	
 
9.0 git merge dev[分支名] 把当前分支(git branch查询)与指定分支"dev"合并(主分支 可查看到 ) ,合并分支
	注意:合并时如果有冲突(master和dev 同时修改) ,需要手动去处理 ,处理后还需要再提交一次.

10. git branch -d dev[分支名] 不能自己删除自己, 删除分支

//----------------------提交Github托管
11. git push https://github.com/daqingchon/test112.git master 将代码提交到GitHub托管
	git push [地址] master
GitHub不是git ,只是同一个网站
 
只不过这个网站提供了允许别人通过git上传代码的功能
#### 提交代码代github (当作git服务器来用)

https://github.com/daqingchon/test112.git 在github中创建的存储库

12. git pull https://github.com/daqingchon/test112.git master  从github拿到git
	git pull [地址] master 会把远程分支的数据得到 :(注意本地:要初始一个仓储!!)
	
	git clone https://github.com/daqingchon/test112.git 会得到远程仓储相同的数据 ，如果多次执行会覆盖本地内容
	
13.	###流行框架 
	ssh方式上传代码 
	-公钥 私钥 ,两者之间是有关联的.
	生成公钥,和私钥
		+ ssh-keygen
			ssh -keygen -t rsa -C "daqingchon@sin.com" 可以得到公私钥 ,上传git项目不需要账号密码(公私钥在本地用户文件夹下找到.ssh)
			git push git@github.com:daqingchon/test119.git master,
			git push [公钥]    
			
14.先pull本地解决与服务器的冲突( " test" wq退出)  后push ,上传到github  			


15.对代码进行"本窗口"（其他窗口另设置)优化,
15.1 git remote add origin https://github.com/daqingchon/test112.git
     帮助理解:相当于 声明了 origin 变量为 :https://github.com/daqingchon/test112.git
	 git push origin -u master 创建文件后(添加到版本库),再执行这一步 ,就可以把代码精简为  git  push/pull
	 
	 
	 接下来测试
	 
	
	 