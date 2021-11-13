
git branch -D pre_docker


x-msg://6/qianjianlei@quandashi.com

Git命令

1：git clone http://项目地址

2：git checkout 分支名称

3：git pull

4：git add .

5:  git commit -m “提交代码”

6:  git push

7：git status	 查看本地代码状态

8：git revert sha1值 撤回某次提交

9：git reset --hard sha1值 撤回到某次提交

10：git reset --soft sha1值 合并一次提交

11：git log --stat -1 查看这次合并的内容

12：git cherry-pick sha1值 合并某次提交

13：git cherry-pick origin/要合并的分支  

14：git push	origin factory:dev_gdd_order

创建远程分支，从factory分支拉取

15：git branch -D 本地分支名称  
删除 本地分支

16 git rebase -i HEAD~4 合并多次提交
Git branch 查看当前分支
git push origin --delete test 删除test分支


Git reflog  查看git的所有操作记录
Git reset --hard  
两者组合回复到 任意节点都可以

Git diff head --readme.txt 查看工作区和版本库里面最新版本的区别

Git checkOut --readme.txt 的意思是  把readme.txt文件在工作区的修改全部撤销 这里有两种情况
一种：readme.txt 自修改后还没有放到暂存区  现在 撤销修改就和版本库一模一样
一种病：readme.txt 已经添加到暂存区了，又做了修改，现在撤销修改和版本库一模一样
git checkout -b dev 建立一个新的本地分支dev

git branch (branchname)
创建分支命令

git merge --squash
但是有一种情况是需要你处理的，就是在你的dev的分支里有很多commit记录。而这些commit是无需在release里体现的

列出分支基本命令
git branch


我们也可以使用 git checkout -b (branchname) 命令来创建新分支并立即切换到该分支下，从而在该分支中操作



删除分支命令

git branch -d (branchname)


1.	显示某次提交的元数据和内容变化
 git show [commit]


2.	
暂时将未提交的变化移除
 git stash
稍后再移入
 git stash pop



 git reset HEAD  撤销已经add的命令
