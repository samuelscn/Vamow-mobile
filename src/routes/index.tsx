import React, { useContext } from 'react';

import PublicRoutes from '../routes/PublicStack';
import PrivateRoutes from '../routes/PrivateStack';
import AuthContext from '../contexts/auth';

// import AppRoutes from '../routes/app.routes';

const Routes: React.FC = () => {
    const { signed } = useContext(AuthContext);
    return signed ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;