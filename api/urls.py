from django.urls import path
from .views import YoutubeListAPIView, YoutubeRetrieveAPIView

urlpatterns = [
    path('youtube/', YoutubeListAPIView.as_view()), # /api?region=seoul
    path('youtube/<str:video_id>', YoutubeRetrieveAPIView.as_view())
]