from .models import Places, Youtube
from rest_framework import serializers

class YoutubesSerializer(serializers.ModelSerializer):      
    class Meta:
        model = Youtube
        fields = ['videoid', 'thumbnail', 'region', 'region1', 'region2', 'channelname', 'title', 'youtime', 'views']

class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Places
        fields = ['idx', 'pname', 'px', 'py']

class YoutubeSerializer(serializers.ModelSerializer):
    places = PlaceSerializer(many=True, read_only=True)

    class Meta:
        model = Youtube
        fields = ['videoid', 'channelname', 'title', 'youtime', 'views', 'places']