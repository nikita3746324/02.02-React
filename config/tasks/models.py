from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=255)
    complited = models.BooleanField(default=False)
    create_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title
