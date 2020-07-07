import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import './WorkDetail_view.css';

function WorkDetailView(props) {
    const {altura} = props;
    const {id} = useParams();
    const [dataWork, setDataWork] = useState({});
    
    const getWork = async id => {
        const result = await fetch(`/api/curriculum/v1/data/trabajos/${id}`);
        const work = await result.json();
        setDataWork(work);
    }
    
    useEffect(() => {
        let work = sessionStorage.getItem('works');
        work = JSON.parse(work)        
        if (work != null && work.length > 0) {
            let currentWork = work.find(wk => wk.id === parseInt(id));
            setDataWork(currentWork);
        }else {
            getWork(id)
        }
    }, [id])

    return !dataWork ? 'cargando' : (
        <motion.section className="workDetailSection" initial="init" animate="enter" exit="exit">
            <div className="container" style={{minHeight: altura}}>
                <h1 className="title">{dataWork.nombre}</h1>
                <div className="contentWrap">
                    <div className="infoSide">
                        <div className="info">
                            <p>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab libero, quod, atque reiciendis architecto iusto ipsam fugiat voluptates soluta harum voluptatem sequi, natus aspernatur nihil quam similique sit. Debitis, placeat.</span>
                                <span>Dolore soluta possimus perferendis placeat quisquam praesentium cupiditate corrupti, blanditiis quia eos qui eius dolorum unde maiores porro nesciunt, vero iusto ab quasi? Sequi reprehenderit praesentium, animi ex at omnis?</span>
                                <span>Dolorem odio perspiciatis cupiditate aspernatur. Nisi vero provident porro? Itaque illo voluptatibus sed quibusdam ad perferendis quo nesciunt odit necessitatibus ea. Distinctio obcaecati quidem dolorem voluptatem dolor voluptate ipsum aliquam.</span>
                                <span>Recusandae, fugit, minima eum nisi laborum asperiores ad suscipit iure natus deserunt velit hic itaque debitis vel! Molestias officia dolorem deleniti est! Ex molestias ducimus, officia laborum repudiandae distinctio quam!</span>
                                <span>Voluptatem iusto dignissimos voluptas ut dicta doloremque, accusamus ipsam deserunt tempore. Ab ipsam officia eos voluptatem facere quae sit nemo at vitae saepe et, laborum cupiditate! Ad facere officia libero?</span>
                                <span>Quod dolorum aliquid similique nobis error modi dignissimos pariatur aliquam alias sunt sit expedita inventore adipisci, dolore ut voluptas dolores deleniti, laborum harum consequatur voluptate. Reprehenderit, nulla. Explicabo, nemo quidem?</span>
                                <span>Excepturi delectus ipsam dolorum possimus ut, sunt odit iste dicta accusamus laborum? Fugiat officiis corrupti obcaecati, quasi tempora dolor, adipisci rem minima libero architecto nemo ad sequi accusamus? Ullam, accusantium!</span>
                                <span>Perferendis suscipit expedita, perspiciatis ea, delectus ipsum deserunt consequatur beatae a culpa nobis quam nemo illum itaque sit similique, fugiat est. Odit, est ex eum dignissimos eius ducimus voluptates sapiente!</span>
                                <span>Aspernatur neque, reprehenderit vitae repellendus unde soluta, magnam fugit perferendis asperiores dicta odit deleniti sed a nemo! Amet suscipit ut qui inventore saepe, distinctio sed consequatur! Nihil necessitatibus itaque cum.</span>
                                <span>Officia quaerat veniam repellat temporibus architecto ipsa corporis quidem nesciunt odio provident! Amet quod sint magnam cupiditate mollitia deleniti, est, aspernatur quo animi, eum neque quos. Ex repudiandae repellendus atque.</span>
                            </p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="speaker"></div>
                        <div className="screen">
                            <img src={require('../../../resources/img/xd.png')} alt="" className="s"/>
                        </div>
                        <div className="home"></div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
  
export default  WorkDetailView;