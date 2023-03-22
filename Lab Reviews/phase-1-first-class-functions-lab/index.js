// Code your solution in this file!

const returnFirstTwoDrivers = ( drivers ) => {
    // return [ drivers[ 0 ], drivers[ 1 ] ]
    // return drivers.slice( 0, 2 )
    let first2Drivers = []
    for ( let n = 0; n < 2; n ++ ) {
        // first2Drivers.push( drivers[n] )
        first2Drivers = [...first2Drivers , drivers[n] ]
    }
    return first2Drivers
    // return [...drivers].splice( 0, 2 )
}

const returnLastTwoDrivers = drivers => drivers.slice( -2 )

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

const createFareMultiplier = integer => {
    return ( fare ) => fare * integer
}

const fareDoubler = fare => createFareMultiplier( 2 )( fare )

const fareTripler = fare => createFareMultiplier( 3 )( fare )

const selectDifferentDrivers = ( drivers, someFunction ) => someFunction( drivers )