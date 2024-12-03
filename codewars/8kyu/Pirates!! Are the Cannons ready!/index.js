function cannonsReady(gunners) {
    let res = 0;
    let count = 0;
    for (const key in gunners) {
        if (gunners.hasOwnProperty(key)) {
            if (gunners[key] == 'aye') {
                res += 1;
                count += 1;
            } else {
                res -= 1;
                count += 1;
            }
        }

    }
    if (count == res) {
        return 'Fire!';

    } else {
        return 'Shiver me timbers!';
    }
}

let a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'};
let b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

cannonsReady(a)//, 'Fire!');
cannonsReady(b)//, 'Shiver me timbers!');