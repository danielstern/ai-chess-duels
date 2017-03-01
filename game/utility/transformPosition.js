import {
    Direction,
} from '../constants';

import {
    getGreaterRank,
    getLesserRank,
    getGreaterFile,
    getLesserFile,
} from './'

export const transformPosition = ({rank,file})=>(direction)=>{
    let newRank = rank;
    let newFile = file;

    if (direction.includes(Direction.UP)){
        newRank = getGreaterRank(newRank);
    }

    if (direction.includes(Direction.DOWN)){
        newRank = getLesserRank(newRank);
    }

    if (direction.includes(Direction.LEFT)){
        newFile = getLesserFile(newFile);
    }

    if (direction.includes(Direction.RIGHT)){
        newFile = getGreaterFile(newFile);
    }

    return {rank:newRank,file:newFile};
}