install: # установка зависимостей
	npm ci 

game: # запуск игры
	node index.js

lint: # Запуск линтера
	npx eslint .

lint-fix: # Запуск исправлений линтером
	npx eslint --fix .