# Быки и коровы (консольная версия)

Суть игры: ваш соперник, будь то компьютер или друг, загадывает 4-значное число, состоящее из неповторяющихся цифр. Ваша задача — угадать его за ограниченное число ходов. В качестве подсказок выступают “коровы” (цифра угадана, но её позиция — нет) и “быки” (когда совпадает и цифра и её позиция). То есть если загадано число “1234”, а вы называете “6531”, то результатом будет 1 корова (цифра “1”) и 1 бык (цифра “3”) .

## Начало

- Загрузите репозиторий себе локально на устройство:

```console
  git clone git@github.com:ilrosch/bulls-and-cows-console.git
```

- Выполните установку необходимых модулей:

```console
  make install
```

- Запустите игру и наслаждайтесь:

```console
  make game
```

## Пример запуска игры

[![asciicast](https://asciinema.org/a/658178.svg)](https://asciinema.org/a/658178)
