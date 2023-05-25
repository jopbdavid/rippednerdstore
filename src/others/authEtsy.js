const authorizeUser = () => {
  const authUrl = `https://www.etsy.com/oauth/connect?response_type=code&redirect_uri=${redirect_uri}&client_id=${process.env.REACT_APP_ETSY_KEYSTRING}&scope=listings_w"`;
  window.location.href = authUrl;
};
const handleAuthorizationRedirect = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const authorizationCode = urlParams.get("code");
  if (authorizationCode) {
    const tokenEndpoint = "https://api.etsy.com/v3/public/oauth/token";
    const tokenParams = new URLSearchParams({
      grant_type: "authorization_code",
      client_id: process.env.REACT_APP_ETSY_KEYSTRING,
      client_secret: process.env.REACT_APP_ETSY_SHARED_SECRET,
      redirect_uri: redirect_uri,
      code: authorizationCode,
    });
    fetch(tokenEndpoint, {
      method: "POST",
      body: tokenParams,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const accessToken = data.access_token;

        console.log("Access Token:", accessToken);
      })
      .catch((error) => {
        console.error(
          "Error exchanging authorization code for access token:",
          error
        );
      });
  }
};
