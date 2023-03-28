
# build environment
FROM node:latest as build
ENV NODE_OPTIONS="--max-old-space-size=8000"
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# production environment
FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]