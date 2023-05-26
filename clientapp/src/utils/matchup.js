const setStatus = (statusCode) => {
    switch (statusCode) {
        case -1:
            return { color: "#00B0F0", text: "Not started" }
        case 0:
            return { color: "#FF0000", text: "Running" }
        case 1:
            return { color: "#999999", text: "Finished" }
        default:
            alert("Ошибка при получение статуса матча")
    }
}

export const matchupUtils = {
    setStatus,
}