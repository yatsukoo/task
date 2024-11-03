import { Link } from "react-router-dom";
import React from 'react';
import { useTheme } from './ThemeContext';
import "./../styles/Navbar.css";
import "../styles/Biology.css"
function Biology() {
    const { isDarkTheme, toggleTheme } = useTheme();
    return(
        <div className={`container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <div class="row-2">
                <div class="col-6">
                   <Link to ="/"><button className="biology">Биология</button></Link>     
                </div>
                <div class="col-6">
                    <Link to = "/modeling"><button className="Model">3D обучение</button></Link>
                </div>
            </div>
            <div class="col-12">
                <div className="image-block1"></div>
                 <div className="block1">
                        <div>
                            <div className="block-title1">3D формат обучения</div>
                            <div className="block-descrip">Изучайте биологию<br/>в удобном и интерактивном формате</div>
                        </div> 
                 </div>
            </div>
            <div class="col-12">
                 <div className="block2">
                        <div>
                            <div className="block-title">Форма размножения организмов</div>
                        </div> 
                        <div className="image-block2"></div>
                 </div>
            </div>
            <div class="col-12">
                 <div className="block3">
                        <div>
                            <div className="block-title">Фотосинтез: все, что надо о нем знать</div>
                        </div> 
                        <div className="image-block3"></div>
                 </div>
            </div>
            <div class="col-12">
                 <div className="block4">
                        <div>
                            <div className="block-title">Химический состав 
                            клетки</div>
                        </div> 
                        <div className="image-block4"></div>
                 </div>
            </div>
            <div class="col-12">
                 <div className="block5">
                        <div>
                            <div className="block-title">Биосинтез белка</div>
                        </div> 
                        <div className="image-block5"></div>
                 </div>
            </div>
            <div class="col-12">
                 <div className="block6">
                        <div>
                            <div className="block-title">Генетика пола</div>
                        </div> 
                        <div className="image-block6">
                            <div className="image-X"></div>
                            <div className="image-Y"></div>
                        </div>
                 </div>
            </div>
            <div class="col-12">
                 <div className="block7">
                        <div>
                            <div className="block-title">ГЕНЕТИКА. ЗАКОНЫ Г. МЕНДЕЛЯ</div>
                        </div> 
                        <div className="image-block7"></div>
                 </div>
            </div>
            <div class="col-12">
                 <div className="block8">
                        <div>
                            <div className="block-title">Изменчивость
                            организмов</div>
                        </div> 
                        <div className="image-block8"></div>
                 </div>
            </div>
            <div class="col-12">
                 <div className="block9">
                        <div>
                            <div className="block-title">Органоидные клетки</div>
                        </div> 
                        <div className="image-block9"></div>
                 </div>
            </div>
            <div class="col-12">
                 <div className="block10">
                        <div>
                            <div className="block-title">Органоидные клетки</div>
                        </div> 
                        <div className="image-block10"></div>
                 </div>
            </div>
            <div class="col-12">
                 <div className="block11">
                        <div>
                            <div className="block-title">Эволюционное древо</div>
                        </div> 
                 </div>
            </div>
            <div class="col-12">
                 <div className="block12">
                        <div>
                            <div className="block-title">Многообразие
                            животных</div>
                        </div> 
                 </div>
            </div>
            <div class="col-12">
                 <div className="block13">
                        <div>
                            <div className="block-title">Царство “Животные”
                            класс млекопитающие</div>
                        </div> 
                 </div>
            </div>
            <div class="col-12">
                 <div className="block14">
                        <div>
                            <div className="block-title">Царства живой природы</div>
                        </div> 
                 </div>
            </div>
            <div class="col-12">
                 <div className="block15">
                        <div>
                            <div className="block-title">Покрытосеменные
                            растения</div>
                        </div> 
                 </div>
            </div>
            <div class="col-12">
                 <div className="block16">
                        <div>
                            <div className="block-title">Царство растений</div>
                        </div> 
                 </div>
            </div>
            <div class="col-12">
                 <div className="block17">
                        <div>
                            <div className="block-title">Уровни организации
                            живой природы</div>
                        </div> 
                 </div>
            </div>
            <div class="col-12">
                 <div className="block18">
                        <div>
                            <div className="block-title-last">Происхождение культурных растений и домашних животных</div>
                        </div> 
                 </div>
            </div>
            <div class="col-12">
                 <div className="footer">
                 </div>
            </div>
        </div>
           
    );
}
export default Biology;