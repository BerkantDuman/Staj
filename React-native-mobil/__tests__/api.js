
class Data{
    static all(){
        return fetch('http://192.168.1.64:3000/people')
        .then((response)=> {
            return response.json();
        });
    }
}
export default Data;