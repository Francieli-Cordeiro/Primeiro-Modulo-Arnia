
const timestamp = (new Date()).getTime()
const publicKey = '0f28c62c0a5adec83e44bf897533c2d5'
const privateKey = '0542ac625fea5cb9fe87cfa23c38da21a99cf807'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)
{publicKey}&ts=