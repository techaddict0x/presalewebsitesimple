function openLink() {
  const url = "https://lol.gamedevo.live"; // replace with your dapp URL
  const params = {
    url: url
  };
  if (window.ethereum) {
    // Metamask mobile browser
    window.ethereum.send({
      method: "metamask_openUrl",
      params: [url],
    });
  } else {
    // Other mobile browser with Metamask extension installed
    window.open(
      `https://metamask.app.link/dapp/${window.location.hostname}`,
      "_blank"
    );
  }
}