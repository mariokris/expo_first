import { router, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export default function User() {
    const {id} = useLocalSearchParams();

    useEffect(() => {
        console.log('ini id : ', id);
    }, []);

   const goToJupiter = () => {
        const destination = id == 1 ? "users/counted" : "users/jupiter";
        console.log('id click : ', id);
        console.log(destination);
        router.push({
            pathname: destination,
        });
    }
    

    return (
        <View className='flex-1 items-center justify-center bg-yellow-100'>
            <TouchableOpacity onPress={goToJupiter}>
                <Text>Navigate to Jupiter {id}</Text>
            </TouchableOpacity>
        </View>
    );
}