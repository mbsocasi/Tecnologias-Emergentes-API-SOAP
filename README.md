# API SOAP con Node.js y Docker

Este proyecto es una aplicación Node.js que consume una API SOAP para realizar operaciones matemáticas básicas (suma, resta, multiplicación y división). La aplicación está preparada para ejecutarse en un contenedor Docker.

---

## **Tabla de Contenidos**

- [Prerrequisitos](#prerrequisitos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
  - [Ejecutar Localmente](#ejecutar-localmente)
  - [Ejecutar con Docker](#ejecutar-con-docker)
- [Uso](#uso)
  - [Endpoints Disponibles](#endpoints-disponibles)
  - [Ejemplos de Solicitudes con cURL](#ejemplos-de-solicitudes-con-curl)
  - [Probar la API con Postman](#probar-la-api-con-postman)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Dependencias](#dependencias)
- [Notas](#notas)

---

## **Prerrequisitos**

- **Node.js** (versión 16.x o superior)
- **npm** (normalmente incluido con Node.js)
- **Docker** (opcional, si deseas ejecutar la aplicación en un contenedor)
- **Postman** (opcional, para probar la API)

---

## **Instalación**

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/mbsocasi/Tecnologias-Emergentes-API-SOAP.git
   cd api-soap

2. **Instalar las Dependencias**

   ```bash
   npm install

## **Ejecución**

Ejecutar Localmente
Inicia la aplicación con:
--

**Instalar las Dependencias**

   ```bash
   npm start
   ```

## Ejecutar con Docker

1. **Construir la Imagen de Docker**

   ```bash
   docker build -t api-soap-node .

2. **Ejecutar el Contenedor**

   ```bash
   docker run -p 3000:3000 api-soap-node

La aplicación estará accesible en http://localhost:3000.

# **USO**

# Probar la API con Postman

## 1. Configurar Postman
1. Abre Postman y crea una nueva Solicitud HTTP.
2. Configura la solicitud como tipo `POST`.
3. Ingresa la URL del endpoint, por ejemplo, para sumar.

    ```bash
    http://localhost:3000/sumar

## 2. Configurar el Cuerpo de la Solicitud
1. Haz clic en la pestaña **Body**.
2. Selecciona la opción **raw**.
3. En el selector de tipo, elige **JSON**.
4. Ingresa el cuerpo de la solicitud como JSON. 
- **Ejemplo para sumar:**
    ```json
    {
    "intA": 10,
    "intB": 5
    }
    ```

## 3. Enviar la Solicitud
1. Haz clic en el botón **Send**.
2. Verás una respuesta similar a esta en la sección de respuesta de Postman:

    ```json
    {
    "resultado": 15
    }
    ```

## 4. Probar Otros Endpoints
Repite los pasos anteriores para los demás endpoints, cambiando la URL y el cuerpo según corresponda:

### Restar:
- **URL:** `http://localhost:3000/restar`
- **Cuerpo:**
    ```json
    {
    "intA": 20,
    "intB": 10
    }
    ```

### Multiplicar:

- **URL:** `http://localhost:3000/multiplicar`
- **Cuerpo:**
    ```json
    {
    "intA": 12,
    "intB": 8
    }
    ```

### Dividir:
- **URL:** `http://localhost:3000/dividir`
- **Cuerpo:**
    ```json
    {
    "intA": 50,
    "intB": 5
    }
    ```

## Errores Comunes
- **Si no ingresas ambos números (`intA` o `intB`)**, la respuesta será:

    ```json
    {
    "error": "Por favor, ingrese ambos valores (intA e intB)."
    }
    ```

- **Si `intB` es 0 en una división**, la respuesta será:

    ```json
    {
    "error": "No se puede dividir entre 0."
    }
    ```

# Estructura del Proyecto

- **`app.js`**: Archivo principal de la aplicación que contiene la lógica de las rutas y las operaciones con la API SOAP.
- **`package.json`**: Archivo que define las dependencias y scripts del proyecto.
- **`Dockerfile`**: Archivo que define cómo construir la imagen Docker de la aplicación.

## Dependencias

- **`express`**: Framework web para Node.js utilizado para crear la API REST.
- **`soap`**: Cliente SOAP para Node.js que permite interactuar con servicios SOAP.

## Notas

- **Servicio SOAP**: La aplicación consume la API SOAP proporcionada por [www.dneonline.com](http://www.dneonline.com).
- **Acceso a Internet**: Es necesario tener acceso a Internet para que la aplicación pueda comunicarse con el servicio SOAP externo.
- **Variables de Entorno**: Puedes configurar variables de entorno para cambiar la URL del servicio SOAP o el puerto de la aplicación si es necesario.
- **Mejoras**: Considera agregar pruebas unitarias y manejo de errores más robusto para mejorar la calidad de la aplicación.
