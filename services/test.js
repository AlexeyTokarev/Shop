function a (){
    return {
    b: () =>  {
        console.log('b');
    },
    c: () =>  {
        console.log('c');
    }
    }
}

function d() {
    return a().b();
    // res.b();
    // console.log(res)
}

d();