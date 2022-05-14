function camelize(str) {
    return str.split('-')
        .map((word, i) => i ? (word = word.split(''), word.shift().toUpperCase() + word.join('')) : word)
        .join('')
}
camelize('background-color') == 'backgroundColor';
camelize('list-style-image') == 'listStyleImage';
camelize('-webkit-transition') == 'WebkitTransition';