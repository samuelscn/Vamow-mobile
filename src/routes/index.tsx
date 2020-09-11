import React, { useContext } from 'react';
import { View, ActivityIndicator } from "react-native";

import PublicRoutes from '../routes/PublicStack';
import PrivateRoutes from '../routes/PrivateStack';
import AuthContext from '../contexts/auth';

// import AppRoutes from '../routes/app.routes';

const Routes: React.FC = () => {
    const { signed, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#666" />
            </View>
        );
    }

    return signed ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;