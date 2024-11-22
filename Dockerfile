FROM node:20.13.0-alpine
ARG WEB_APP
ENV COMMIT_HASH=${WEB_APP}
RUN echo "Commit hash: ${COMMIT_HASH}"
WORKDIR /app
RUN echo ${COMMIT_HASH} > /app/commit.txt
RUN echo "node version " && node -v
COPY package.json yarn.lock ./
# todo: only copy de dist folder build
COPY . .
RUN yarn install --frozen-lockfile
# todo: build the application into the pipeline
RUN yarn build
EXPOSE 3000
CMD ["node", "app-shell/server.mjs"]