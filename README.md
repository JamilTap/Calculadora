# 🧮 Calculadora Web

Una calculadora web desarrollada con HTML, CSS y JavaScript puro. Incluye historial de operaciones y pruebas automatizadas usando **Jest** y **Mocha**.

---

## 🚀 Demo
> 📂 Repositorio: https://github.com/Jamiltap/calculadora

---

## 📸 Capturas de pantalla
🖥️ Interfaz de la calculadora
<p float="left"> <img src="https://github.com/user-attachments/assets/bba3e4b2-5bc2-491d-96b2-e4678b4da90d" width="400"/> <img src="https://github.com/user-attachments/assets/588dfb74-5e9f-4901-a2f3-d1dfa25e4e1e" width="400"/> </p>
✅ Pruebas automatizadas (Jest y Mocha)
<p float="left"> <img src="https://github.com/user-attachments/assets/3206d7a0-0690-4002-9b2a-e44813665d16" width="400"/> <img src="https://github.com/user-attachments/assets/64d9df0b-2635-43ad-b999-578702056688" width="400"/> </p>
---

## ⚙️ Funcionalidades

- ✅ Operaciones básicas: suma, resta, multiplicación, división, porcentaje
- ✅ Agrupación con paréntesis
- ✅ Historial de operaciones
- ✅ Interfaz responsive
- ✅ Pruebas automatizadas unitarias

---

## 🛠️ Tecnologías usadas

- HTML5
- CSS3
- JavaScript (vanilla)
- Jest (testing)
- Mocha (testing alternativa)

---

## 📦 Instalación

1. Clona el repositorio:


git clone https://github.com/Jamiltap/calculadora.git

cd calculadora

2. Abre `index2.html` en tu navegador.

## Cómo ejecutar pruebas
3.Instala las dependencias (si hay):
```bash
npm install
npm test
```
## 🧪 Ejecutar Pruebas Jest
4. Cambiar el una parte del codigo del Package.json,el "test" a jest
   
```bash
  "type": "module",
  "scripts": {
    "test": "jest"
  },
 
```
NOTA: debe marcarles unos 15 errores en ambos frameworks, eso son errores provocados por el desarrollador para comprobar el funcionamiento de ambos framewor
---
5. Debes borrar el archivo app.test.js o guardarlo en una nota rapida, ese es el codigo para el test mocha,si no se hace el framework jest va a intentar evaluar el codigo Mocha dando un error.
```bash
npx jest
```
##  Ejecutar Pruebas Mocha
6. Cambiar el una parte del codigo del Package.json,el "test" a Mocha
   
 ```bash
  "type": "module",
  "scripts": {
    "test": "Mocha"
  },
```
Debes borrar ahora o guardar el archivo "appp.test.js y el calculadora.test.js", esos son los codigos para el test jest,si no se hace el framework mocha va a intentar evaluar el codigo jest dando un error.
```bash
npx mocha
```
## 📁 Estructura del proyecto
```bash
📦 calculadora/
├── src/
│   ├── index.html --Index base sin funciones vista previa
│   ├── index2.html
│   ├── styles.css
│   └── app.js
├── test/
│   ├── app.test.js --Codigo para pruebas Jest
│   ├── appp.test.js --Codigo para pruebas Mocha
│   ├── calculadora.test.js --Codigo para pruebas Jest si esta funcionando correctamente la calculadora
│   └── Otros.etc
├── ....
├── package.json
├── jest.config.js
└── README.md
```
## 🧑‍💻 Autor
```bash
💼 GitHub: Jamiltap
```
## 📄 Licencia
Este proyecto está bajo la licencia MIT. Libre para uso y modificación.

