# Todo-app 

This is a **To-Do application** using:

- **Django** (Backend with Django REST Framework)
- **React** (Frontend  for API requests)

## Create & Activate a Virtual Environment
```
python -m venv venv
source venv/bin/activate  # On macOS/Linux
venv\Scripts\activate     # On Windows
```
## Install requirements

```
pip install -r requirements.txt
```
## Database

```
Set the database from settings.py
```

## To migrate the database open terminal in project directory and type
```
python manage.py makemigrations
python manage.py migrate
```
## Run the server
```
python manage.py runserver
```
---
## Frontend (React)
Navigate to the frontend directory:
```
cd fronend/reactplan
```
Install dependencies:
```
npm install
```
Start the React development server:
```
npm start
```

Now, your backend should be running at
http://127.0.0.1:8000/ 
and your frontend at
http://localhost:3000/. 

<div align="center">
    <h3>========Thank You=========</h3>
</div>
