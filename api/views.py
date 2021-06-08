from rest_framework import generics
from django.http import HttpResponse
from rest_framework.views import ApiView
from rest_framework.response import Response

from .models import Room
from .serializers import RoomSerializer, CreateRoomSerializer

# Create your views here.


def main(request):
    return HttpResponse("hi")


class RoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class CreateRoomView(ApiView):
    queryset = Room.objects.all()
    serializer_class = CreateRoomSerializer

    def post(self):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            guest_can_pause = serializer.data.guest_can_pause
            votes_to_skip = serializer.data.votes_to_skip
            host = self.request.session.session_key