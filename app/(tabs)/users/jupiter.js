import { router } from 'expo-router';
import { TouchableOpacity, View, Text } from 'react-native';

export default function User() {
   const goToJupiter = () => {
        router.replace('../pages/counted');
    };

    return (
        <View className='flex-1 items-center justify-center bg-yellow-100'>
            <TouchableOpacity>
                <Text>Welome to Jupiter</Text>
            </TouchableOpacity>
        </View
    );
}