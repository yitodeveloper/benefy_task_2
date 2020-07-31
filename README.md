# Mantenedor de Usuario

Aplicación de administración de usuarios realizada con GraphQL y React

Caracteristicas incluidas:
- Estructura del proyecto escalable.
- Lista, Crea y Actualiza usuarios.

# Estructura del proyecto

* client: Proyecto frontend en React.
* server: Proyecto backend en node.

# Intalación y uso
Clona el proyecto e instala las dependencias.

## Servidor
Instala las dependencias

```
    cd server
    yarn install
```

Carga el modelo en tu servidor MySQL

```sql
CREATE DATABASE `userdb`;

CREATE TABLE `userdb`.`user`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NULL,
  `lastname` varchar(50) NULL,
  `mail` varchar(50) NULL,
  PRIMARY KEY (`id`)
);

```
Accede a la configuración del proyecto y ajusta los datos de conexión.

```js
module.exports = {
    // ./server/src/conf/index.js
    MYSQL_HOST: 'localhost',
    MYSQL_USER: 'usuario',
    MYSQL_PASSWORD: 'contraseña',
    MYSQL_DATABASE: 'userdb',
}
```

Corre el proyecto
```
    yarn start
```

## Cliente
Instala las dependencias

```
    cd client
    yarn install
```

Corre el proyecto
```
    yarn start
```
