<!DOCTYPE html>
<html>
<head>
    <title>Test Email</title>
</head>
<body>
    <p>Bonjour, je m'appelle <strong>{{ $data['fullName'] }}</strong>  et je représente la société <strong>{{ $data['societyName'] }}</strong> 
    je vous contacte pour voir avec vous la possibilité de collaborer sur un projet de <b> {{ $data['projectName'] }}</b>
     vous pouvez me contacter sur <b>{{ $data['email'] }}</b> ou <b>{{ $data['number'] }}</b>  </p>
</body>
</html>
