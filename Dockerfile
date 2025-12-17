FROM denoland/deno AS build
WORKDIR /app
COPY package*.json ./
COPY deno.lock ./
RUN deno install
COPY . .
RUN deno task build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
