export function getMobileOS() {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) {
    // console.log("andorid");
    return "android";
  } else if (/iPad|iPhone|iPod/i.test(ua)) {
    // console.log("ios");
    return "ios";
  }
  // console.log("other");
  return "other";
}

// Use like this

//   const os = getMobileOS()
//   # console.log(os) => 'Android'
//   # console.log(os) => 'iOS'
//   # console.log(os) => 'Other'
