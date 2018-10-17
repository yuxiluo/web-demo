#### 什么是GitHub?
[GitHub](https://github.com/ "GitHub") 是一个面向开源及私有软件项目的托管平台。

#### DOS 基础命令
mkdir (name)				# 创建文件夹  
cd (name)					# 切换到某个地方  
mkdir book && cd book       # 创建 book 文件夹，并进入book文件夹
dir 						# 查看目录中有哪些文件  

#### 如何将本地文件上传至GitHub
一、安装Git客户端 [Git客户端下载](http://git-scm.com/download/)  

二、绑定用户  
因为Git是分布式版本控制系统, 所以需要填写用户名和邮箱作为一个标识. 用户和邮箱为你GitHub注册的帐号和邮箱.  
打开git工具输入一下命令进行绑定:  
**绑定用户名**  
git config --global user.name "yuxi0530@aliyun.com"
**绑定邮箱**  
git config --global user.email "yuxi0530@aliyun.com"  

三、为GitHub账户设置SSH key  
> ssh key是机密传输, git使用rsa, rsa要解决的一个核心问题是, 如何使用一堆特定的数字, 使其中一个数字可以用来加密, 而另外一个数字可以用来解密.  
> 这两个数字就是你在使用git和github的时候所遇到的public key公钥及private key私钥。  
> 其中, 公钥是用来加密的数字, 也就是为什么你在本机生成了公钥之后, 要上传到github的原因. 从github发回来的, 用那公钥加密过的数据, 可以用本地的私钥来还原.  
> 如果你的key丢失了, 不管是公钥还是私钥, 就不能用了. 解决方法是重新再生成一次, 然后在github里再设置一次.  

**生成SSH key**  
ssh-keygen -t rsa -C "yuxi0530@aliyun.com"  
- a. 是路径确认, 直接回车  
- b. 直接回车, 不使用密码进行登录, 用密码太麻烦  
- c. 直接回车  

生成成功后, 去对应的目录C:\User\specter\.ssh里(specter为电脑用户名)  
id_rsa.pub, 是SSH key公钥. 拷贝内容去github网站中配置ssh key  

四、上传本地文件到GitHub  
**从GitHub上克隆项目到本地**
> git clone 项目地址

**帮助命令**  
> git --help  

**把这个目录变成Git可以管理的仓库** 
> git init  

**添加全部文件**  
> git add .    

**添加单个文件**
> git add README.md            

**把文件提交到仓库, "必须写注释说明"**
> git commit -m "注释"   		 

**关联远程仓库**
> git remote add origin 仓库地址 

**更新到github项目上去**
> git push -u origin master

**将远程仓库里的项目拉下来**
git pull origin master      

**删除暂存区或分支上的文件, 工作区保留**
git rm -r --cacaed target    










