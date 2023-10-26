export function getMobileOS() {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) {
    return "Android";
  } else if (/iPad|iPhone|iPod/.test(ua)) {
    return "iOS";
  }
  return "Other";
}

// Use like this

//   const os = getMobileOS()
//   # console.log(os) => 'Android'
//   # console.log(os) => 'iOS'
//   # console.log(os) => 'Other'
