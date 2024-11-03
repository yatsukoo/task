import "../styles/Modeling.css"
import { Link } from "react-router-dom";
import { useTheme } from './ThemeContext';
function Model() {
    const { isDarkTheme, toggleTheme } = useTheme();
    return(
        <div className={`container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
           <div class="row-2">
                <div class="col-6">
                    <Link to ="/"><button className="biology-page">Биология</button></Link>     
                </div>
                <div class="col-6">
                     <Link to = "/modeling"><button className="Model-page">3D обучение</button></Link>
                </div>
            </div>
            <div class="col-12">
                 <div className="image-block-main"></div>
                 <div className="main-block">
                        <div>
                            <div className="main-block-title">3D Анатомия</div>
                            <div className="block-descrip">Изучайте биологию<br/>в удобном и интерактивном формате</div>
                        </div>   
                 </div>
            </div>
            <div class="container2">
                <div className="background-blue"></div>
                <div>
                    <div className="block-list">
                    <div className="titile-block-list">3D Клетки</div>
                    <div className="block-list-image"></div>
                </div>
                </div>
                <div className="block-list2">
                    <div className="titile-block-list2">3D однодольные,<br/> 
                    двудольные растения</div>
                    <div className="block-list-image2"></div>
                </div>
                <div className="block-list3">
                    <div className="titile-block-list3">3D ДНК И <br/>
                    ХРОМОСОМЫ</div>
                    <div className="block-list-image3"></div>
                </div>
                <div className="block-list4">
                    <div className="titile-block-list3">3D КЛЕТКИ<br/>
                    КРОВИ</div>
                    <div className="block-list-image4"></div>
                </div>
                <div className="block-list5">
                    <div className="titile-block-list3">3D ФОТОСИНТЕЗ</div>
                    <div className="block-list-image5"></div>
                </div>
            </div>
        </div>
    );
}
export default Model;  