function likes(names) {
    notification = ""
    if (names.length > 1 && names.length < 3){
        if (i + 1 !== names.length){
            for (i = 0; i < names.length; i++);
            notification += `${i}, `;
        }
        else{
            notification += `and ${i} `;
        }

    return `${notification} like this`

    }
    else if (names.length === 1) {
        return `${names[0]} likes this`
    }
    else if (names.length > 3){
        if (i <= 3){
            for (i = 0; i < names.length; i++);
            notification += `${i}, `;
        }
        return `${notification} and ${names.length - 3}`
        }

    else if (names.length === 0) {
        return "no one likes this"
    }
}
