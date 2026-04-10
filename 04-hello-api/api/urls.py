from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello, name='hello'),
    path('greet/<str:name>/',views.greet,name='greet'),
    path('status/',views.get_status,name="status"),
    path('add/<int:a>/<int:b>',views.add,name="add")
]