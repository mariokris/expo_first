import { Tabs } from "expo-router";

const TabsLayout = () => {
    return <Tabs>
        <Tabs.Screen name="index" options={{
            headerTitle: 'Homepage',
            title: 'Home',
        }}/>
        <Tabs.Screen name="users" options={{
            headerShown: false,
        }}/>
    </Tabs>
};

export default TabsLayout;