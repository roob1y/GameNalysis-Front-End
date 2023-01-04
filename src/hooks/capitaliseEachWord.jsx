export const capitaliseEachWord = (str) => {
    const words = str.replaceAll("-", " ").split(" ");
    const capitalisedWords = words.map(word => word[0].toUpperCase() + word.slice(1))
    return capitalisedWords.join(" ")
};