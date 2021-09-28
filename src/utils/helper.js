export const getInitials = (name) => {
    if (!name) {
        return '';
    }
    const nameList = name.split(' ');
    let initials = '';
    nameList.map((word) => {
        initials += word.charAt(0);
    })
    return initials;
}