from django.conf.urls import url

from api.views import main

from api.views import RoomView

urlpatterns = [
    url('home', RoomView.as_view())
]