import random
import string
from django.db import models

# Create your models here


def generat_unique_key():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase))
        if Room.objects.filter(code=code).count() == 0:
            break
    return code


class Room(models.Model):
    code = models.CharField(max_length=8, default=0 , unique=True)
    host = models.CharField(max_length=50, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)

