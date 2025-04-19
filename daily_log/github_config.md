



用在了zhaoq0103上面
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAILhWKHLhR4sbTqHL0MLb3P7/pjvqDqyzXaxD9M1OSeZ6 OnTheWay0103@163.com
ssh-keygen -t ed25519 -C "OnTheWay0103@163.com"

OnTheWay:
ssh-keygen -t ed25519 -C "zhaoq0103@163.com"
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIMFEt2sgLyOYiBBdvxJ6AwxeNlkUzZOknyuzz2WjxHu4 



# 启动 SSH 代理
eval "$(ssh-agent -s)"

# 将私钥添加到代理
ssh-add ~/.ssh/id_ed25519
ssh-add ~/.ssh/id_ed25519_ontheway

# ~/.ssh/config  配置文件
echo '## config file
Host zhaoq0103.github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519

Host ontheway.github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_ontheway

' > ~/.ssh/config




ssh -Tv git@zhaoq0103.github.com
ssh -Tv git@ontheway.github.com



git remote set-url origin git@zhaoq0103.github.com:OnTheWay0103/xxxxx.git
git remote set-url origin git@ontheway.github.com:OnTheWay0103/How-to-Make-Money.git



# 全局设置（默认）
git config --global user.name "Your Name"
git config --global user.email "personal@example.com"

# 在单独的仓库区设置
git config --local user.name "Work Name"
git config --local user.email "work@example.com"
