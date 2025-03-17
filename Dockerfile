# Build Nuxt app
FROM node:22 AS build-env
WORKDIR /app
COPY . ./
RUN npm install && npm run build

# Build runtime image
FROM node:22
WORKDIR /app
COPY --from=build-env /app .
CMD ["node", ".output/server/index.mjs"]