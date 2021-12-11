export const formatRating = (rating) => {
    if (rating.toString().length === 1){
        return rating.toString()+ ".0";
    } else {
        return rating;
    }
}

export const formatDate = (string) => {
    let options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

export const convertTime = (time) => { 
    var hours = Math.floor(time / 60);  
    var minutes = time % 60;
    return `${hours}h ${minutes}m`;         
};

