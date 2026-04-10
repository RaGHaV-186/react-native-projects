from rest_framework.decorators import api_view
from rest_framework.response import Response

import django
from datetime import datetime

@api_view(['GET'])
def hello(request):
    
    lang = request.query_params.get('lang', 'en')

    
    if lang == 'es':
        msg = "¡Hola desde Django!"
    elif lang == 'hi':
        msg = "Django से नमस्ते!"
    else:
        msg = "Hello from Django!"

    # 3. Return the response
    data = {
        "message": msg,
        "status": "working",
        "language_detected": lang
    }
    return Response(data)
 

@api_view(['GET'])
def greet(request,name):
    data = {
        "message": f"Hello,{name} !Welcome to my API"
    }
    return Response(data)

@api_view(['GET'])
def get_status(request):
    data = {
        "api":"online",
        "django-version": django.VERSION,
        "timestamp": datetime.now().isoformat()
    }
    return Response(data)

@api_view(['GET'])
def add(request, a, b):
    result = int(a) + int(b)
    data = {
        "result": result
    }
    return Response(data)

