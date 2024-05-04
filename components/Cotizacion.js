import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null
    return(
        <Text>El precio de la Cripto es: {resultado.PRICE}</Text>
    )
}

export default Cotizacion