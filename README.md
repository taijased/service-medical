# Клиника

## Установка окружения Vue-ClI
```
npm install -g @vue/cli
# ИЛИ
yarn global add @vue/cli
```
## Установка пакетов
```
npm install
# ИЛИ
yarn install
```

### Запустить на локальном сервере
```
npm run serve
# ИЛИ
yarn run serve
```

### Скомпилировать проект
```
yarn run build
```

### Сборка завершена. Каталог dist готовый вариант.



# Работа с API

## Базовый URL в корне проекта в файле .env VUE_APP_API_URL="{BASE_URL}"

```
VUE_APP_API_URL=http://92.255.195.45:44001/
```

## Регистрация {BASE_URL}/authorize


### Тело POST запроса

```
{
  "login": "floss",
  "pass": "floss",
  "last_name": "Frederik",
  "first_name": "Losse",
  "second_name": "George"
}
```

### Ответ
```
{
   "success": success,
    "message": message

}
```
success - успешность авторизации
message - какая-то сопроводительная информация

## АВТОРИЗАЦИЯ {BASE_URL}/authorize

### Тело POST запроса 

```
{
  "login": "floss",
  "pass": "floss"
}
```

### Ответ
```
{
    "success":  success,
    "message":  message,
    "token":    token
}
```
success - успешность авторизации
message - какая-то сопроводительная информация
token - при успешной авторизации присылает token, с помощью которой происходит дальнейшее общение с сервисом

## Запрос пациентов {BASE_URL}/patient

### GET запрос 

header "auth_token":{token}
token -  токен, который получил на этапе авторизации

```
    headers: {
        auth_token: token
    }
```
### Ответ
```
[
  {
    "id": 1,
    "number": "123",
    "last_name": "Капитан",
    "first_name": "Джек",
    "second_name": "Воробей",
    "birth_date": "1995-10-15 00:00:00",
    "gender": 1,
    "receipt_date": "2019-04-02 12:25:01",
    "diagnosis": "",
    "comments": "",
    "discharge_date": null
  }
]
```
success - статус запроса
message - какая-то сопроводительная информация


## Создать пациента {BASE_URL}/patient

### POST запрос 

header "auth_token":{token}
token -  токен, который получил на этапе авторизации

```
    headers: {
        auth_token: token
    }
```

```
{
  "last_name": "Капитан",
  "first_name": "Джек",
  "second_name": "Воробей",
  "birth_date": "1995-10-15",/*в формате YYYY-MM-DD*/
  "gender": True,
  "diagnosis": "",
  "comments": ""
}
```

### Ответ
```
{
    "login": "floss",
    "pass": "floss",
    "last_name": "Капитан",
    "first_name": "Джек",
    "second_name": "Воробей"
}

```


## Обновить данные пациента {BASE_URL}/patient/{patient_id}

### PUT запрос 

header "auth_token":{token}
token -  токен, который получил на этапе авторизации
patient_id - id пациента


```
    headers: {
        auth_token: token
    }
```

```
{
    "last_name": "Капитан",
    "first_name": "Джек",
    "second_name": "Воробей",
    "birth_date": "1995-10-15",/*в формате YYYY-MM-DD*/
    "gender": True,
    "diagnosis": "",
    "comments": ""
}
```

### Ответ
```
{
    "success":      success,/*успешность создания*/
    "message":      message/*сопровождающее сообщение*/

}
```


## Выписать пациента {BASE_URL}/patient/{patient_id}

### DELETE запрос 

header "auth_token":{token}
token -  токен, который получил на этапе авторизации
patient_id - id пациента


```
    headers: {
        auth_token: token
    }
```

### Ответ
```
{
    "success":      success,/*успешность создания*/
    "message":      message/*сопровождающее сообщение*/

}
```


### Ссылки на используемые ресурсы
*[Vue CLI](https://cli.vuejs.org/) 🛠️ Standard Tooling for Vue.js Development
*[ElementUI](https://element.eleme.io/#/en-US) Element, a Vue 2.0 based component library for developers, designers and product managers
