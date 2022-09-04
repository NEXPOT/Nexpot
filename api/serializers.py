from .models import Places, Score, Youtube
from rest_framework import serializers

class YoutubesSerializer(serializers.ModelSerializer):      
    class Meta:
        model = Youtube
        fields = ['videoid', 'thumbnail', 'region', 'region1', 'region2', 'channelname', 'title', 'youtime', 'views']

class ScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Score
        fields = ['lenreview', 'service', 'atmosphere', 'cost', 'visit', 'taste']

class PlaceSerializer(serializers.ModelSerializer):
    score = ScoreSerializer(many=True, read_only=True)
    
    class Meta:
        model = Places
        fields = ['idx', 'pname', 'px', 'py', 'score']
        
class YoutubeSerializer(serializers.ModelSerializer):
    places = PlaceSerializer(many=True, read_only=True)

    class Meta:
        model = Youtube
        fields = ['videoid', 'channelname', 'title', 'youtime', 'views', 'places']
