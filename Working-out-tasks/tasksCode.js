const myObj = {
    name1: 'Alvin',
    comments: 13452353,
    tutchto_to: 'tut chto to'
}

const userProfile = ({name1, comments, tutchto_to }) => {
    if (!comments) {
        return `${name1} сказал ${tutchto_to} коментариев нет`
    } return `User ${name1} оставил ${comments}`
}