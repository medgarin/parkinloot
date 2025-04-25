# Estacionamiento

## 1. Clonar el Repositorio

Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/jeffrey-dahmer/estacionamiento.git
```

## 2. Configuración del Proyecto con Docker

```bash
cd /estacionamiento 
```

```bash
docker compose -f 'docker-compose.yml' up -d --build
```

## 3. Acceder al Proyecto

Abre tu navegador y accede a la url:

[**http://localhost:3000/**](http://localhost:3000/)

## 4. Seeder de Datos

En la interfaz web, verás un botón denominado "Seeder". Haz clic en él para cargar datos de prueba en el sistema.

## 5. Agregar una Matrícula de Vehículo

Puedes agregar una matrícula de vehículo desde la interfaz de usuario. Ten en cuenta lo siguiente:

- Si el vehículo permanece estacionado por **menos de 60 segundos**, el sistema marcará el cobro como **0**, ya que el tiempo de permanencia no es suficiente para generar un cobro.
- Si el vehículo permanece estacionado por **más de 60 segundos**, el cobro se reflejará correctamente.

## 6. Mejoras Pendientes en el Reporte

Actualmente, el reporte generado muestra **todos los usuarios** y sus respectivos detalles de estacionamiento. Esta funcionalidad aún necesita algunas mejoras para optimizar su rendimiento y personalización.
