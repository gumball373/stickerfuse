//useful info https://stackoverflow.com/questions/6840326/how-can-i-create-and-style-a-div-using-javascript

//create several rotations and xy(z?) values spread out over th page size, build and find out

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function createStickerbomb(items, params, sources) {

    var stickerbomb = document.getElementById('stickerbomb');

    let temp = document.body;
    let source = "";
    let x = "";
    let y = "";
    let z = "";

        for(let i =0; i < items; i++) {
            //create child per item, w/ random values taken into account
            temp = document.createElement('img');

            //choose from sources
            source = sources[getRandom(0, items)];
            temp.setAttribute('src', source);

            //create random z index, 0-itemAmount
            z = getRandom(0,items);
            console.log("Z-index: " + z);
            temp.setAttribute('z-index', z);

            //random xy skew values, 0-0.5 multiplied by the 0-100 slider on the generate page, translateX and translateY
            x = getRandom(0,0.5);
            console.log("X skew: " + x);
            temp.setAttribute('tranform', 'translateX(' + x + ')');

            y = getRandom(0,0.5);
            console.log("Y skew: " + y);
            temp.setAttribute('tranform', 'translateY(' + y + ')');

            //random rotation, 0-359deg, transform rotate(value)
            rot = getRandom(0,360);
            console.log("Rotation" + rot);
            temp.setAttribute('tranform', 'rotation(' + rot + ')');

            //chaos mode?? makes all values more chaotic and have larger implications
            
            //place in grid-view, generated depending on size, T&E for best solution
            stickerbomb.appendChild(temp);
        }
}