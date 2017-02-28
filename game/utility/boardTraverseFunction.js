export const boardTraverseFunction = (set,forward)=>(entity)=>{
    const index = set.indexOf(entity.toString());
    if (index==-1) {
        throw new Error(`Tried to find an invalid element ${entity} in set ${set}`);
    }

    if (forward) {
        if (index === set.length - 1) {
            return undefined;
        } else {
            return set[index + 1];
        }
    } else {
        if (index === 0) {
            return undefined;
        } else {
            return set[index - 1];
        }
    }
};