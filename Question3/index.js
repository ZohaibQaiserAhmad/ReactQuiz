var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'data.txt');


//use a callback function to read file
function readFile(callback) {
    //read file (basic node file read)
    fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
        if (!err) {

            values_seperated = data.split("\n");

            for (var j = 0; j < values_seperated.length; j++) {
                values_seperated[j] = values_seperated[j].split(",");
            }


            /*
            * get column 3 out of the structure (represents values and what we need to sum)
            */
            let value = values_seperated.map(c => c[2]);

            //create sum that will total the values needed
            let sum = 0;

            //shift so that first item(header) is removed
            value.shift();

            //itterate through and get numbers in proper format
            for (var i = 0; i < value.length; i++) {
                //ease of access for array
                let item = value[i];
                //check if its undefined
                if (item === undefined) {
                    value[i] = 0;
                    //use regex to replace non number values and then parse to get proper value
                } else {
                    value[i] = parseFloat(item.replace('/[^0-9]/g', ''));
                    sum += value[i];
                }
            }

            callback(null, sum);



        } else {
            callback(err);
        }
    });

}


readFile(function (err, sum) {
    console.log(sum);
})