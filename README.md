
# Django Rest Framework with React.JS
This is a simple full-stack project where the backend is built using Django and the frontend using React. Data is fetched from the backend API to the frontend.

## Tech Stack
- Backend - Django
- Frontend - React

### If you want to test or learn then -
- Clone the Repository
```bash
git clone https://github.com/hasdajustin/django-rest-framework-Test1-.git
```
```bash
cd django-rest-framework-Test1
```

### Install dependencies and run backend server
```bash
cd backend
```
```bash
pip install django
```
```bash
pip install django djangorestframework
```
```bash
pip install django-cors-headers
```
```bash
python manage.py makemigrations
```
```bash
python manage.py migrate
```
```bash
python manage.py createsuperuser
```
```bash
python manage.py runserver
```
### How to Test
1. Go to: http://127.0.0.1:8000/admin/  
   - Login with your admin credentials.

2. Go to: http://127.0.0.1:8000/api/products/  
   - You can see the product data returned as JSON.

### Install dependencies and run frontend (React)
```bash
cd frontend
```
```bash
npm install 
```
```bash
npm start
```

### Prerequisites
- Make sure **Python** and **Node.js** are installed on your machine to run the Django and React applications.

