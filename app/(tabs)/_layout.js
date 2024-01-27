import { Tabs } from "expo-router";

const TabsLayout = () => {
    return <Tabs>
        <Tabs.Screen name="index" options={{
            headerTitle: 'Homepage',
            title: 'Home',
        }}/>
        <Tabs.Screen name="users/[id]" options={{
            headerTitle: 'User Page',
            title: 'User',
        }}/>
    </Tabs>
};

export default TabsLayout;