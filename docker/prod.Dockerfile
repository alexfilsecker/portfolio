FROM node:22.9 AS builder

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:22.9

WORKDIR /app

COPY --from=builder /app/.next .next
COPY --from=builder /app/logs .
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/public public
