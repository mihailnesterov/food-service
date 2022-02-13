import React, {FC} from 'react';
import AppRouter from '../../components/AppRouter';
import Footer from '../../components/footer';
import Head from '../../components/head';

const MainLayout: FC = () => {

	return(
        <div className="wrapper">
            <Head />
            <main className="main">
                <AppRouter />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;

