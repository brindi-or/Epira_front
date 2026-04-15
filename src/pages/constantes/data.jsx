

export const URL = "http://localhost:8000/";



const isLocal =  URL.includes("localhost"); // Vérifie si l'URL contient "127.0.0.1"

export const FileUrl = isLocal ? URL : `${URL}public/`;
