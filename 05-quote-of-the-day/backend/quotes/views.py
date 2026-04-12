import random
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Quote
from .serializers import QuoteSerializer


@api_view(['GET'])
def random_quote(request):
    quotes = Quote.objects.all()
    quote = random.choice(list(quotes))
    serializer = QuoteSerializer(quote)
    return Response(serializer.data)