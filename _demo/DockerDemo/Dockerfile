# 使用 node创建镜像，版本为16，-alpine3.11表示使用alpine3.11版本的linux
FROM node:16-alpine3.11

# 设置工作目录 COPY 指令有两个参数，第一个参数是要复制的文件或目录的路径，第二个参数是目标路径
COPY index.js /app/main.js

# 使用 CMD 指令运行程序，后面的参数会传递给 node 命令
CMD ["node", "/app/main.js"]