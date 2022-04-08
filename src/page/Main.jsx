import '../assets/css/App.css';
import {Layout} from "../layout/Layout";
import {Header} from "../layout/Header";
import {TodoContainer} from "../components/TodoContainer";
import {todoStorage} from "../lib/TodoStorage";

export const Main = () => {

    return (
        <Layout>
            <Header/>
            <TodoContainer todoStorage={todoStorage}/>
        </Layout>
    );
}
