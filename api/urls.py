from django.urls import path
from .views import YoutubeListAPIView, YoutubeRetrieveAPIView, YoutubeSearchAPIView

urlpatterns = [
    path('youtube/', YoutubeListAPIView.as_view()), # api/youtube/?region2=Andong, api/youtube/?region1=경기
    path('youtube/<str:video_id>', YoutubeRetrieveAPIView.as_view()),
    path('youtube/search/', YoutubeSearchAPIView.as_view()), # api/youtube/search/?search=서울
]