const splitter = (text) => {
    text = text.split('')
    let newtext = []
    text.forEach((letter) => newtext.push(letter))
    return newtext
}

export default splitter;