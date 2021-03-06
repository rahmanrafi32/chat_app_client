import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </ApolloProvider>
    </React.StrictMode>
);
