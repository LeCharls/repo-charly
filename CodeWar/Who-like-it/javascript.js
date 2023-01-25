function likes(names) {
    let notification = ""
    if (names.length > 1){
        for (i = 0; i < names.length; i++){
            if (names.length === 2){
                notification += `${names[i]} and ${names[i + 1]} like this`
            }
            if (names.length === 3) {
                notification += `${names[i]}, ${names[i+1]} and ${names[i+2]} like this`   
            }
            if (names.length >= 4){
                notification += `${names[i]}, ${names[i+1]} and ${names.length - 2} others like this` 
            }

        return notification
        }
    }
    else if (names.length == 1) {
        return `${names[0]} likes this`
    }
    else if (names.length == 0) {
        return "no one likes this"
    }
}
dos = ['Jacob', 'Alex']
tres = ['Max', 'John', 'Mark']
cuatro = ['Alex', 'Jacob', 'Mark', 'Max']
console.log(likes(cuatro))

