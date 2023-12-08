# Google-Firebase
Paso 1: Configuración de Firebase
Crea un proyecto en Firebase:

Ve a Firebase Console y haz clic en "Agregar proyecto".
Configura Firebase en tu proyecto:

Después de crear el proyecto, selecciona "Configuración del proyecto" en el menú del proyecto.
Haz clic en "Agregar aplicación" y sigue los pasos para agregar una aplicación web a tu proyecto.
Copia la configuración de Firebase (apiKey, authDomain, projectId, etc.) en el objeto firebaseConfig en tu archivo App.js.
Paso 2: Instalación de dependencias
Instala las dependencias:
Abre tu terminal y navega al directorio de tu aplicación.

Ejecuta el siguiente comando para instalar las dependencias necesarias:
npm install firebase
Paso 3: Configuración de Firebase en tu aplicación
Importa y utiliza Firebase en tu aplicación:
En el archivo App.js, asegúrate de tener las siguientes importaciones al comienzo del archivo:

También, asegúrate de haber inicializado Firebase en tu aplicación con la configuración adecuada:
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_DOMINIO.firebaseapp.com",
  projectId: "TU_PROYECTO_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

const firebaseApp = initializeApp(firebaseConfig);
"Debes cambiar esta configuracion"
Paso 4: Ejecución de la aplicación
Inicia tu aplicación:

En la terminal, ejecuta el siguiente comando para iniciar tu aplicación React:
npm start
Esto iniciará tu aplicación en el navegador y se abrirá automáticamente en http://localhost:3000/.
Prueba las diferentes funcionalidades
