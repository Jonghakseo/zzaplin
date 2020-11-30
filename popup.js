let toggleButton = document.getElementById("toggleButton");

try {
  toggleButton.onclick = function (element) {
    let isToggle = element.target.checked;
    chrome.storage.sync.set({ toggle: isToggle }, function () {
      console.log("Value is set to " + isToggle);
    });
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { toggle: isToggle }, () => {});
    });
  };

  chrome.storage.sync.get("toggle", function (result) {
    if (!result) return;
    if (result.toggle) {
      toggleButton.setAttribute("checked", "true");
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { toggle: true }, () => {});
      });
    } else {
      toggleButton.removeAttribute("checked");
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { toggle: false }, () => {});
      });
    }
  });

  chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (var key in changes) {
      var storageChange = changes[key];
      if (key === "toggle") {
        if (storageChange.newValue) {
          toggleButton.setAttribute("checked", "true");
        } else {
          toggleButton.removeAttribute("checked");
        }
      }

      // console.log(
      //   'Storage key "%s" in namespace "%s" changed. ' +
      //     'Old value was "%s", new value is "%s".',
      //   key,
      //   namespace,
      //   storageChange.oldValue,
      //   storageChange.newValue
      // );
    }
    return true;
  });
} catch (e) {
  console.log(e);
}

// const fucn = async () => {
//   const fData = new FormData();
//   fData.append("singer", "신세계");
//   fData.append("songName", "1");
//   fData.append("song_url", "https://www.youtube.com/watch?v=5SLDIgev8zI");
//   fData.append("song_code", "5SLDIgev8zI");
//   try {
//     const res = await fetch("https://unqocn-api.hopto.org/namu/1", {
//       method: "post",
//       headers: new Headers(),
//       body: fData,
//     });
//     console.log(res);
//   } finally {
//   }
// };
//
// setTimeout(()=>{
//   fucn()
// }, 2000)
// // fucn();