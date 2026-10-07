# Píldora Formativa: Introducción a Docker 🐳

Este repositorio contiene el código práctico desarrollado para la píldora formativa sobre contenedorización. El objetivo es demostrar cómo aislar una aplicación web básica en un entorno portable utilizando Docker.

## 🛠️ Tecnologías Utilizadas
* **Backend:** Node.js v24 & Express
* **Contenedor:** Docker (Imagen base: Node 18 Alpine)

## 💻 Ejecución del Proyecto

### 1. Clonar el repositorio
```bash
git clone <URL_DE_TU_REPOSITORIO>
cd pildora-docker
```

### 2. Construir la Imagen de Docker
Este comando lee las instrucciones del "Dockerfile" para empaquetar la aplicación:
```bash
docker build -t mi-app-docker .
```

### 3. Desplegar el Contenedor
Arranca el contenedor en segundo plano (`-d`) y mapea el puerto local `8080` al puerto interno `3000`:
```bash
docker run -d -p 8080:3000 mi-app-docker
```

Accede a la aplicación desde tu navegador en: `http://localhost:8080`

## 📚 Recursos Oficiales
* [Documentación de Docker](https://docker.com)
* [Buenas Prácticas para Dockerfiles](https://docker.comdevelop/develop-images/dockerfile_best-practices/)
