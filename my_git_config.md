# 1. 生成密钥对
ssh-keygen -t ed25519 -C "OnTheWay0103@163.com"

# 2. 把公钥配置到 github (多台电脑是不是每台电脑配置一次？)


# 如果修改生成的密钥文件文件名， 需要更新密钥配置文件


# ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKRBiy5JFhcvteiGMetdagh+iFikRQHJwSDfyPBeKHFH  #pub key
Host github-ontheway  #这里github-ontheway 是别名，是有用的，可以用来区分多个不同的账号和仓库等
  HostName github.com
  User git 
  IdentityFile ~/.ssh/id-ed25519-github-ontheway # 更新路径
  IdentitiesOnly yes

# ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIETxGuTwJ7qqX6700cWDr7BxbMBA+4IG3cX/TiVZ9Luu  #pub key
Host github-zhaoq0103  
  HostName github.com
  User git 
  IdentityFile ~/.ssh/id-ed25519-github-zhaoq0103 # 更新路径
  IdentitiesOnly yes




# 测试连通性
ssh -Tv git@github-ontheway   # 这里用的是别名
ssh -Tv git@github-zhaoq0103  # 这里用的是别名


# 改用SSH
# git remote -v  
git remote set-url origin git@github-ontheway:OnTheWay0103/How-to-Make-Money.git
git remote set-url origin git@github-zhaoq0103:OnTheWay0103/xxxx.git

