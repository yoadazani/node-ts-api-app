FROM node:18-alpine

LABEL authors="user"

ENTRYPOINT ["top", "-b"]