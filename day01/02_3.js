//console.log(process.argv);
function add(a,b){
    console.log(a + b);
}
var a = process.argv[2];
var b = process.argv[3];
add(Number(a),Number(b));