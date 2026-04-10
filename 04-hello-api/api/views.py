from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def hello(request):
    data = {
        "message": "Hello from Django!",
        "status": "working",
        "version": "1.0"
    }
    return Response(data)

@api_view(['GET'])
def greet(request,name):
    data = {
        "message": f"Hello,{name} !Welcome to my API"
    }
    return Response(data)