export function getMobileOS() {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) {
    // console.log("andorid");
    return "Android";
  } else if (/iPad|iPhone|iPod|Safari/i.test(ua)) {
    // console.log("ios");
    return "iOS";
  }
  // console.log("other");
  return "Other";
}

// Use like this

//   const os = getMobileOS()
//   # console.log(os) => 'Android'
//   # console.log(os) => 'iOS'
//   # console.log(os) => 'Other'
