function solution(str, ending) {
    let count = str.length - ending.length;
    let res = str.slice(count, str.length)
    if (res == ending) {
      return true
    } else {
      return false
    }
  }