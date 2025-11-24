6Ldu-RYsAAAAAHqTKi7LLqkErOJzC-XGu87yJjwy
<head>
  <script src="https://www.google.com/recaptcha/enterprise.js?render=6Ldu-RYsAAAAAHqTKi7LLqkErOJzC-XGu87yJjwy"></script>
  <!-- Your code -->
</head>
<script>
  function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute('6Ldu-RYsAAAAAHqTKi7LLqkErOJzC-XGu87yJjwy', {action: 'LOGIN'});
    });
  }
</script>
{
  "event": {
    "token": "TOKEN",
    "expectedAction": "USER_ACTION",
    "siteKey": "6Ldu-RYsAAAAAHqTKi7LLqkErOJzC-XGu87yJjwy",
  }
}

