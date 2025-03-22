function generateWeekDay(){
    const weekDay = new Date().toLocaleDateString('pt-BR', {
        weekday: 'long'
    });

    const date = new Date().toLocaleDateString('pt-BR', {});
    const hour = new Date().toLocaleTimeString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric'
    });

    const dateComplete = `${weekDay} ${date} às ${hour}`;

    return dateComplete;
}

export default generateWeekDay;