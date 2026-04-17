

export const URL = "http://localhost:8000/";



const isLocal =  URL.includes("localhost"); // Vérifie si l'URL contient "127.0.0.1"

export const FileUrl = isLocal ? URL : `${URL}public/`;

export const WsKey = isLocal ? "ma_cldf8908" : "prod_$2y$12$BIv9P3.R4VARgaYU5N1/2uwei8LqM2zPXBbixEFt4LyaM76gY46pu";