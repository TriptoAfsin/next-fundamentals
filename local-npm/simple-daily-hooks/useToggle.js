import React from 'react'
import {useState} from 'react'

const useToggle = (defaultValue=false) => {

    const [value, setValue] = useState(defaultValue)

    let toggleValue = (value) => {
        setValue(currentValue => typeof value === "boolean" ? value : !currentValue)
    }

    return [value, toggleValue]
}

export default useToggle
